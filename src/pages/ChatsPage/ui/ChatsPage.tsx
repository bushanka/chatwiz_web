import { HStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';

const ChatsPage = () => {
    const { t } = useTranslation('');

    return (
        <HStack max justify="center">
            {t('У вас нет доступа к этой странице')}
        </HStack>
    );
};

export default ChatsPage;
