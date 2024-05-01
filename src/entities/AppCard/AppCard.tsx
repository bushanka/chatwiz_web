import { useTranslation } from 'react-i18next';
import { Typography } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';

interface AppCardProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    active?: boolean;
    text: string;
}

export const AppCard = (props: AppCardProps) => {
    const { Svg, active, text } = props;
    const { t } = useTranslation();

    return (
        <Card jump variant={active ? 'greenLight' : 'greyOne'} style={{ width: '300px' }}>
            <VStack gap="16" style={{ padding: '24px 24px 0 24px' }}>
                <HStack gap="16">
                    <Icon height={50} width={50} Svg={Svg}/>
                    <Typography title={text} bold/>
                </HStack>
                <Typography text={active ? t('Поддерживаем') : t('Скоро')} variant={active ? 'green' : 'gray'} />
            </VStack>
        </Card>
    );
};
