import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import pandachat from '@/shared/assets/img/pandachat-icon-circle-white.png';
import thumbnail from '@/shared/assets/img/thumbnail.jpeg';

const BlogPage = () => {
    const { t } = useTranslation('');

    return (
        <VStack align='center' gap="64" style={{ width: '1100px' }}>
            <VStack max gap="16">
                <Typography
                    size='xl'
                    bold
                    title={t('Краткое описание Chatwiz: общайтесь напрямую с любым сайтом в вашем браузере')}
                    align='left'
                    wrap
                />
                <HStack gap="8">
                    <img src={pandachat} width={40} height={40} />
                    <VStack justify='center'>
                        <Typography
                            bold
                            text={t('От chatwiz')}
                        />
                        <Typography
                            variant="gray"
                            text={t('04.07.2023')}
                        />
                    </VStack>
                </HStack>
                <img src={thumbnail} width={800} style={{ borderRadius: '10px' }} />
                <Typography
                    bold
                    text={t('В век информации, в котором мы живем, скорость имеет решающее значение.')}
                />
                <Typography
                    text={t('Признавая это, Chatwiz Brief предоставляет быстрый и эффективный способ сбора важной информации из статей без необходимости читать их целиком. Вместо того, чтобы часами погружаться в многословные статьи, теперь вы можете получить ключевые моменты и сразу же участвовать в содержательных дискуссиях. Это похоже на то, что у вас под рукой есть личное резюме и руководство по обсуждению.')}
                />
            </VStack>
        </VStack>
    );
};

export default BlogPage;
