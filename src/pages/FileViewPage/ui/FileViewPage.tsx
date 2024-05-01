import { HStack, VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import File from '@/shared/assets/icons/File.svg';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { useParams } from 'react-router-dom';

import cls from './FileViewPage.module.scss';

const FileViewPage = () => {
    const { t } = useTranslation('');
    const { id } = useParams<{ id: string }>();

    return (
        <VStack max fullHeight gap="8">
            <HStack max justify="between" className={cls.header}>
                <HStack gap="8">
                    <Icon Svg={File} height={20} width={20} />
                    <Typography text={id} size="l" bold />
                </HStack>
                <HStack gap="16">
                    <Button
                        color="greenLight"
                        onClick={() => {}}
                    >
                        {t('Скачать')}
                    </Button>
                </HStack>
            </HStack>
            <HStack max fullHeight>
                <div className={cls.pdfViewer}>
                    {t('Здесь будет файл')}
                </div>
            </HStack>
        </VStack>
    );
};

export default FileViewPage;
