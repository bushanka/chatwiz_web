import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import pdf from '@/shared/assets/icons/pdf-icon.svg';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import { Icon } from '@/shared/ui/Icon';
import { Dropdown } from '@/shared/ui/Dropdown';
import { Modal } from '@/shared/ui/Modal';
import { InputDrop } from '@/shared/ui/InputDrop/InputDrop';
import { useChatQuery, useDeleteChatMutation, useRenameChatMutation } from '@/entities/Chats';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';
import { RoutePath } from '@/shared/const/router';

const HomeEditPage = () => {
    const { t } = useTranslation('');
    const { id } = useParams<{ id: string }>();
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const { data: chat, isLoading: chatLoading } = useChatQuery(+id!, {
        skip: !id,
    });
    const [state, setState] = useState('');

    const [renameChat, renameChatResult] = useRenameChatMutation();
    const [deleteChat, deleteChatResult] = useDeleteChatMutation();

    useEffect(() => {
        if (chat?.chat_name) setState(chat?.chat_name)
    }, [chat])

    useEffect(() => {
        if (deleteChatResult.isSuccess) {
            navigate(RoutePath.HOME())
        }
    }, [deleteChatResult])

    useNotification({
        isSuccess: {
            active: deleteChatResult.isSuccess,
        },
        isError: {
            active: deleteChatResult.isError,
            text: t('Ошибка удаления чата'),
        },
    });

    useNotification({
        isSuccess: {
            active: renameChatResult.isSuccess,
        },
        isError: {
            active: renameChatResult.isError,
            text: t('Ошибка изменения чата'),
        },
    });

    return (
        <VStack max gap="32" style={{ padding: '0 3rem' }}>
            <Typography text={t('Обзор чата')} size='l' bold align='left' />
            <VStack max align="center" gap="32">
                <Card
                    padding="24"
                    variant="outlineLight"
                    header={(
                        <Typography text={t('Редактировать чат')} bold />
                    )}
                    max
                >
                    <Input
                        value={state}
                        onChange={(value) => {setState(value)}}
                        label={t('Имя')}
                        validationText={t('Макс 50 символов')}
                    />
                    <HStack max justify='end'>
                        <Button
                            disabled={!state || !id || state === chat?.chat_name}
                            onClick={() => {
                                renameChat({
                                    id: +id!,
                                    name: state,
                                })
                            }}
                        >
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                </Card>
                <Card
                    padding="24"
                    variant="outlineLight"
                    header={(
                        <HStack max justify='between'>
                            <Typography text={t('Библиотека чата')} bold />
                            <Button onClick={() => setOpenModal(true)}>{t('Добавить')}</Button>
                        </HStack>
                    )}
                    max
                >
                    <VStack gap="8">
                        {['as', 'as'].map((file) => (
                            <Card
                                padding="16"
                                variant="outlineLight"
                                max
                            >
                                <HStack max justify='between'>
                                    <HStack gap="32">
                                        <Icon Svg={pdf} height={70} width={40} />
                                        <VStack>
                                            <Typography text={t('Образец имя.pdf')} bold />
                                            <Typography text={t('Загружено 10 часов назад 185,02 КБ')} size="s" variant="gray" />
                                        </VStack>
                                    </HStack>
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
                                                content: t('Скачать'),
                                                onClick: () => {},
                                            },
                                            {
                                                content: t('Предпросмотр'),
                                                onClick: () => {},
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
                <Card
                    padding="24"
                    variant="outlineLight"
                    header={(
                        <Typography text={t('Удалить чат')} bold />
                    )}
                    max
                >
                    <VStack gap="16" max>
                        <Typography text={t('Внимание: вы собираетесь удалить этот чат. Это действие не может быть отменено. Обратите внимание на следующие последствия:')} bold variant="red" />
                        <VStack max style={{ paddingLeft: '1rem' }}>
                            <Typography text={t('1. Все сообщения, связанные с этим чатом, будут удалены без возможности восстановления.')} />
                            <Typography text={t('2. Все файлы, загруженные в этот чат, будут удалены без возможности восстановления.')} />
                            <Typography text={t('3. Любые настройки и предпочтения, связанные с этим чатом, будут потеряны.')} />
                            <Typography text={t('4. Если этим чатом поделятся другие люди, они потеряют к нему доступ.')} />
                        </VStack>
                        <HStack max justify='end'>
                            <Button color="red" onClick={() => {deleteChat(+id!)}}>{t('Удалить')}</Button>
                        </HStack>
                    </VStack>
                </Card>
            </VStack>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} lazy>
                <InputDrop />
            </Modal>
        </VStack>
    );
};

export default HomeEditPage;
