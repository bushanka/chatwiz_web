import { Card } from '@/shared/ui/Card';
import { Dropdown } from '@/shared/ui/Dropdown';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import { RoutePath } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';
import { useAllChatsQuery } from '@/entities/Chats';

import cls from './ChatsPage.module.scss';

const ChatsPage = () => {
    const { t } = useTranslation('');
    const navigate = useNavigate();

    const { data: chats, isLoading: chatsLoading } = useAllChatsQuery();

    return (
        <VStack max gap="8" style={{ padding: '0 3rem' }}>
            <Typography text={t('Библиотека')} size='l' bold align='left' />
            <Card
                padding="24"
                variant="outlineLight"
                max
            >
                <VStack gap="8">
                    {chats?.map(({ chat_id, chat_name, creation_date }) => (
                        <Card
                            padding="16"
                            variant="outlineLight"
                            max
                            key={chat_id}
                        >
                            <HStack max justify='between' gap="8">
                                <VStack>
                                    <Typography text={chat_name} bold />
                                    <Typography text={creation_date} size="s" variant="gray" />
                                </VStack>
                                <Dropdown
                                    trigger={(
                                        <Card variant="greyOne" padding="8">
                                            <HStack gap="8">
                                                <Typography text={t('Действия')} />
                                                <Icon Svg={ArrowDown} height={8} />
                                            </HStack>
                                        </Card>
                                    )}
                                    items={[
                                        {
                                            content: t('Открыть'),
                                            onClick: () => navigate(RoutePath.HOME_ID(`${chat_id}`)),
                                        },
                                        {
                                            content: t('Редактировать'),
                                            onClick: () => navigate(RoutePath.HOME_EDIT(`${chat_id}`)),
                                        },
                                        {
                                            content: t('Удалить'),
                                            onClick: () => {},
                                        }
                                    ]}
                                    direction="bottom left"
                                />
                            </HStack>
                        </Card>
                    ))}
                </VStack>
            </Card>
        </VStack>
    );
};

export default ChatsPage;
