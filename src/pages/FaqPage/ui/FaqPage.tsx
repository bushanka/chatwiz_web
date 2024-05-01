import { Accordion } from '@/shared/ui/Accordion';
import { VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

const FaqPage = () => {
    const { t } = useTranslation('');
    const LIST = [
        {
            summary: (
                <Typography
                    text={t('1. Как начать использовать chatwiz?')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('Вам нужно всего лишь зарегистрировать учетную запись, нажав на кнопку «зарегистрироваться» и указав свой адрес электронной почты. После этого вы сможете воспользоваться пробной версией функционала chatwiz.')}
                        variant="second"
                    />
                </VStack>
            ),
        },
        {
            summary: (
                <Typography
                    text={t('2. Как chatwiz понимает контекст моих вопросов? ')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('Chatwiz использует передовые алгоритмы искусственного интеллекта, которые понимают и анализируют содержимое вашего источника. ИИ улавливает контекст, что позволяет ему предоставлять точные и актуальные ответы на ваши запросы. ')}
                        variant="second"
                    />
                </VStack>
            ),
        },
        {
            summary: (
                <Typography
                    text={t('3. Могу ли я попросить chatwiz предоставить общее описание содержимого моего источника? ')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('Абсолютно, chatwiz может предоставить краткое содержание вашего источника (текстового файла, веб-страниц, youtube-видео и т.д.). Просто запросите в чате краткое описание, и chatwiz создаст краткий обзор на основе информации, содержащейся в документе.')}
                        variant="second"
                    />
                </VStack>
            ),
        },
        {
            summary: (
                <Typography
                    text={t('4. Могу ли я взаимодействовать с сhatwiz на языках, отличных от русского и английского? ')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('Да, вы можете задать вопрос и загрузить ваш источник на любом языке и chatwiz будет понимать его контекст.')}
                        variant="second"
                    />
                </VStack>
            ),
        },
        {
            summary: (
                <Typography
                    text={t('5. Обязательно ли загружать файл, чтобы взаимодействовать с чатом?')}
                    bold
                    variant="main"
                />
            ),
            details: (
                <VStack gap="8" align="start">
                    <Typography
                        text={t('Нет, вы можете начать общение с chatwiz без загрузки файла и взаимодействовать с ним как с чат-ботом')}
                        variant="second"
                    />
                </VStack>
            ),
        },
    ]

    return (
        <VStack align='center' gap="64" max style={{ maxWidth: '1100px', padding: '0 10px' }}>
            <VStack gap="8" max align='center'>
                <Typography
                    size='xl'
                    align='center'
                    bold
                    title={t('FAQ')}
                    wrap
                />
                <Typography
                    size='l'
                    text={t('Найдите ответы на все вопросы в нашем разделе часто задаваемых вопросов.')}
                    wrap
                    align='center'
                />
            </VStack>
            <Accordion list={LIST} />
        </VStack>
    );
};

export default FaqPage;
