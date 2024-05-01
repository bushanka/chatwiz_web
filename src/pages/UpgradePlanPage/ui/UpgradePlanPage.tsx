import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/shared/ui/Icon';
import { Toggle } from '@/shared/ui/Toggle/Toggle';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import Arrow from '@/shared/assets/icons/Arrow.svg';
import Ok from '@/shared/assets/icons/Ok.svg';
import OkFill from '@/shared/assets/icons/OkFill.svg';
import { useCreatepayMutation, useSubscriptionPlansQuery } from '../api/upgradePlanApi';
import { redirectToWebsite } from '@/shared/lib/redirectToWebsite/redirectToWebsite';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';

import cls from './UpgradePlanPage.module.scss';

const UpgradePlanPage = () => {
    const { t } = useTranslation('');
    const [state, setState] = useState(true);

    const { data: subscriptionPlans, isLoading: subscriptionPlansLoading } = useSubscriptionPlansQuery();
    const [createpay, createpayResult] = useCreatepayMutation();

    const BASE = [
        `Максимальное количество контекста ${subscriptionPlans?.[0]?.max_context_amount || 0}`,
        `Максимальный размер контекста ${subscriptionPlans?.[0]?.max_context_size || 0}`,
        `Максимальная длина вопроса ${subscriptionPlans?.[0]?.max_question_length || 0}`,
        `Максимальное количество точек действия ${subscriptionPlans?.[0]?.max_action_points || 0}`,
        'История чата',
        'Отрегулируйте модель/температуру',
        'Ранний доступ к бета-функциям',
        'Инструмент обобщения',
    ];

    const PRO = [
        `Максимальное количество контекста ${subscriptionPlans?.[1]?.max_context_amount || 0}`,
        `Максимальный размер контекста ${subscriptionPlans?.[1]?.max_context_size || 0}`,
        `Максимальная длина вопроса ${subscriptionPlans?.[1]?.max_question_length || 0}`,
        `Максимальное количество точек действия ${subscriptionPlans?.[1]?.max_action_points || 0}`,
        'История чата',
        'Отрегулируйте модель/температуру',
        'Ранний доступ к бета-функциям',
        'Инструмент обобщения',
    ];

    useEffect(() => {
        if(createpayResult.isSuccess && createpayResult.data.confirmation_token) {
            redirectToWebsite(createpayResult.data.confirmation_token)
        }
    }, [createpayResult])

    useNotification({
        isLoading: {
            active: createpayResult.isLoading,
        },
    });

    return (
        <VStack max align="center" gap="24">
            <Typography
                size='l'
                bold
                text={t('Найдите подходящий для вас план')}
                align='center'
                wrap
            />
            {/* <HStack max justify='center' align='end' gap="16">
                <Typography
                    text={t('Ежемесяно')}
                    align='center'
                    wrap
                />
                <Toggle checked={state} className={cls.toggle} onChange={() => setState((prev) => !prev)} />
                <VStack>
                    <HStack className={cls.editHStack}>
                        <Icon Svg={Arrow} className={cls.icon} />
                        <Card variant='green' className={cls.cardEdit}>
                            <Typography
                                text={t('Экономия до 10%')}
                                variant="white"
                                size='s'
                            />
                        </Card>
                    </HStack>
                    <Typography
                        text={t('Ежегодно')}
                        align='center'
                        wrap
                    />
                </VStack>
            </HStack> */}
            <HStack max gap="24" justify='center' className={cls.changeFlex}>
                <Card className={cls.card} variant="green" padding="32" fullHeight>
                    <VStack max gap="16" align='center'>
                        <VStack max gap="8" align='center'>
                            <HStack gap="4">
                                <Typography
                                    size='l'
                                    bold
                                    variant='white'
                                    title={state ? subscriptionPlans?.[0]?.price : '100'}
                                    align='center'
                                />
                                <Typography
                                    text={t('/ в месяц')}
                                    align='center'
                                    variant='white'
                                />
                            </HStack>
                            <Typography
                                size='l'
                                bold
                                text={t(subscriptionPlans?.[0]?.name || 'Персональный')}
                                variant='white'
                                align='center'
                            />
                            <Typography
                                text={t('Все основы работы с документами')}
                                align='center'
                                variant='white'
                            />
                        </VStack>
                        <VStack max gap="8" align='start'>
                            {BASE.map((text) => (
                                <HStack gap="8">
                                    <Icon Svg={OkFill} />
                                    <Typography
                                        variant='white'
                                        text={t(text)}
                                        align='left'
                                    />
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>
                    <Button
                        color='grey'
                        fullWidth
                        disabled={!subscriptionPlans?.[0]?.id}
                        onClick={() => createpay(subscriptionPlans?.[0]!.id!)}
                    >
                        <Typography
                            variant='main'
                            text={t('Выберете базовый')}
                        />
                    </Button>
                </Card>
                <Card className={cls.card} variant="outline" padding="32" fullHeight>
                    <VStack max gap="16" align='center'>
                        <VStack max gap="8" align='center'>
                            <HStack gap="4">
                                <Typography
                                    size='l'
                                    bold
                                    title={state ? subscriptionPlans?.[1]?.price : '200'}
                                    align='center'
                                />
                                <Typography
                                    text={t('/ в месяц')}
                                    align='center'
                                />
                            </HStack>
                            <Typography
                                size='l'
                                bold
                                text={t(subscriptionPlans?.[1]?.name || 'PRO')}
                                align='center'
                            />
                            <Typography
                                text={t('Массивный анализ документов с круглосуточной поддержкой.')}
                                align='center'
                            />
                        </VStack>
                        <VStack max gap="8" align='start'>
                            {PRO.map((text) => (
                                <HStack gap="8">
                                    <Icon Svg={Ok} />
                                    <Typography
                                        text={t(text)}
                                        align='left'
                                    />
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>
                    <Button
                        color='green'
                        fullWidth
                        disabled={!subscriptionPlans?.[1]?.id}
                        onClick={() => createpay(subscriptionPlans?.[1]!.id!)}
                    >
                        {t('Выберете PRO')}
                    </Button>
                </Card>
            </HStack>
        </VStack>
    );
};

export default UpgradePlanPage;
