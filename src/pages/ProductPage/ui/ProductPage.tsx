import { HStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';

const ProductPage = () => {
    const { t } = useTranslation('');

    return (
        <HStack max justify="center">
            {t('У вас нет доступа к этой странице')}
        </HStack>
    );
};

export default ProductPage;
