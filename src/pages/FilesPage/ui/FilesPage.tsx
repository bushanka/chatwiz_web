import { Card } from '@/shared/ui/Card';
import { Dropdown } from '@/shared/ui/Dropdown';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import pdf from '@/shared/assets/icons/pdf-icon.svg';
import Plus from '@/shared/assets/icons/Plus.svg';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import {
    useAllContextsQuery,
    useClearContextMutation,
    useDownloadContextMutation,
    useUploadContextMutation,
} from '../api/filesApi';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';
import { redirectToWebsite } from '@/shared/lib/redirectToWebsite/redirectToWebsite';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import cls from './FilesPage.module.scss';
import { InputDrop } from '@/shared/ui/InputDrop/InputDrop';

const FilesPage = () => {
    const { t } = useTranslation('');
    const [files, setFiles] = useState<FileList>();
    const [openModal, setOpenModal] = useState(false);

    const { data: contexts, isLoading: contextsLoading } = useAllContextsQuery();
    const [delContext, delContextResult] = useClearContextMutation();
    const [uploadContext, uploadContextResult] = useUploadContextMutation();
    const [downloadContext, downloadContextResult] = useDownloadContextMutation();

    const handleCloseModal = () => {
        setOpenModal(false);
        setFiles(undefined);
    };

    useEffect(() => {
        if (files?.[0]) {
            const formData = new FormData();
            formData.append('file', files[0]);

            uploadContext(formData).then(() => {
                handleCloseModal();
            })
        }
    }, [files])

    useNotification({
        isSuccess: {
            active: uploadContextResult.isSuccess,
        },
        isLoading: {
            active: uploadContextResult.isLoading,
        },
        isError: {
            active: uploadContextResult.isError,
        },
    });

    useNotification({
        isSuccess: {
            active: delContextResult.isSuccess,
        },
        isError: {
            active: delContextResult.isError,
        },
    });

    return (
        <VStack max gap="8" style={{ padding: '0 3rem' }}>
            <HStack gap="16">
                <Typography text={t('Библиотека')} size='l' bold align='left' />
                <Button
                    fullHeight
                    variant="clearGrey"
                    onClick={() => setOpenModal(true)}
                >
                    <HStack gap="8">
                        <Icon Svg={Plus} height={24} width={24} />
                        <Typography text={t('Загрузить документ')} bold />
                    </HStack>
                </Button>
            </HStack>
            <Card
                padding="24"
                variant="outlineLight"
                max
            >
                <VStack gap="8">
                    {contexts?.map((context) => (
                        <Card
                            padding="16"
                            variant="outlineLight"
                            max
                        >
                            <HStack max justify='between' className={cls.changeFlex}>
                                <HStack gap="32">
                                    <Icon Svg={pdf} height={70} width={40} />
                                    <VStack>
                                        <Typography text={context.name} bold />
                                        <Typography text={`Загружено ${context.creation_date}`} size="s" variant="gray" />
                                    </VStack>
                                </HStack>
                                <Dropdown
                                    className={cls.Dropdown}
                                    trigger={(
                                        <Card variant="greyOne" padding="8" max>
                                            <HStack gap="8" max justify='center'>
                                                <Typography text={t('Действия')} />
                                                <Icon Svg={ArrowDown} height={8} />
                                            </HStack>
                                        </Card>
                                    )}
                                    items={[
                                        {
                                            content: t('Скачать'),
                                            onClick: () => downloadContext(context.name),
                                        },
                                        {
                                            content: t('Предпросмотр'),
                                            onClick: () => redirectToWebsite(context.path),
                                        },
                                        {
                                            content: t('Удалить'),
                                            onClick: () => delContext(context.id),
                                        }
                                    ]}
                                    direction="bottom left"
                                />
                            </HStack>
                        </Card>
                    ))}
                </VStack>
            </Card>
            <Modal isOpen={openModal} onClose={handleCloseModal} lazy>
                <VStack gap="8" max>
                    <InputDrop
                        onChange={(files) => {
                            setFiles(files)
                        }}
                        isLoading={uploadContextResult.isLoading}
                    />
                </VStack>
            </Modal>
        </VStack>
    );
};

export default FilesPage;
