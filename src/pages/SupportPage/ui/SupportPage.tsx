import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSupportMutation } from '../api/supportApi';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';

const SupportPage = () => {
    const { t } = useTranslation('');
    const [state, setState] = useState('');

    const [support, supportResult] = useSupportMutation();

    useEffect(() => {
        if (supportResult.isSuccess) {
            setState('');
        }
    }, [supportResult])

    useNotification({
        isSuccess: {
            active: supportResult.isSuccess,
        },
        isError: {
            active: supportResult.isError,
        },
    });

    return (
        <VStack max gap="32" style={{ padding: '0 3rem' }}>
            <Card
                padding="24"
                variant="outlineLight"
                header={(
                    <Typography text={t('Отправить отзыв')} bold />
                )}
                max
            >
                <VStack gap="24" max>
                    <Input
                        value={state}
                        onChange={(value) => {setState(value)}}
                        label={t('Ваш отзыв')}
                        placeholder={t('Поделитесь своими мыслями и педложениями здесь...')}
                    />
                    <HStack max justify='end'>
                        <Button onClick={() => support(state)}>{t('Отправить')}</Button>
                    </HStack>
                </VStack>
            </Card>
        </VStack>
    );
};

export default SupportPage;
