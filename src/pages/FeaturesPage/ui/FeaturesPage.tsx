import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import media from '@/shared/assets/img/media-analysis.webp';
import crawling from '@/shared/assets/img/page-crawling.webp';
import embeded from '@/shared/assets/img/embeded-chatbot.webp';
import analyze from '@/shared/assets/img/analyze-complex-docs.webp';
import chat from '@/shared/assets/img/chat-with-any-file-type.webp';
import scan from '@/shared/assets/img/scan-documents.webp';
import summarize from '@/shared/assets/img/summarize.webp';
import extract from '@/shared/assets/img/extract-data.webp';
import stop from '@/shared/assets/img/stop-wasting-time.webp';
import speech from '@/shared/assets/img/chat-with-speech-recognition.webp';
import questions from '@/shared/assets/img/suggested-questions.webp';
import multiple from '@/shared/assets/img/chat-with-multiple-sources.webp';
import chat2 from '@/shared/assets/img/chat-with-friends.webp';
import share from '@/shared/assets/img/share-chat.webp';

import cls from './FeaturesPage.module.scss';

const FeaturesPage = () => {
    const { t } = useTranslation('');

    return (
        <VStack align='center' gap="64" className={cls.FeaturesPage}>
            <VStack gap="24" max align='center' style={{ maxWidth: '800px' }}>
                <Typography
                    size='xl'
                    bold
                    title={t('Демонстрация возможностей нового уровня chatwiz')}
                    align='center'
                    wrap
                />
            </VStack>
            <Card variant="black" padding="54">
                <HStack gap="64" align='start' className={cls.changeFlex}>
                    <VStack gap="16">
                        <Card variant='greyTwo'>
                            <Typography
                                text={t('ВЫДЕЛЕННАЯ ФУНКЦИЯ CHATWIZ')}
                            />
                        </Card>
                        <Typography
                            size='xl'
                            bold
                            variant="white"
                            title={t('Медиа-анализ')}
                            wrap
                        />
                        <Typography
                            variant="white"
                            size='m'
                            text={t('chatwiz может анализировать изображения, аудио- или видеоконтент для извлечения ценной информации, обнаружения объектов или закономерностей, идентификации эмоций или настроений или предоставления метаданных о медиафайлах.')}
                            wrap
                        />
                    </VStack>
                    <img className={cls.smallImgMedia} src={media} />
                </HStack>
            </Card>
            <Card variant="greyOne" padding="54">
                <HStack gap="64" align='start' className={cls.changeFlex}>
                    <VStack gap="16">
                        <Card variant='greyTwo'>
                            <Typography
                                text={t('ВЫДЕЛЕННАЯ ФУНКЦИЯ CHATWIZ')}
                            />
                        </Card>
                        <Typography
                            size='xl'
                            bold
                            title={t('Обход страницы')}
                            wrap
                        />
                        <Typography
                            size='m'
                            text={t('Chatwiz переходит по ссылкам, извлекает контент и собирает данные с веб-сайтов для создания всеобъемлющих индексов и сбора конкретной информации.')}
                            wrap
                        />
                    </VStack>
                    <img className={cls.smallImgMedia} src={crawling} />
                </HStack>
            </Card>
            <Typography
                size='xl'
                bold
                title={t('Популярные функции')}
                align='center'
                wrap
            />
            <HStack max justify="between" gap="16" className={cls.changeFlex}>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('ИНТЕГРАЦИЯ ЧАТ-БОТА')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Встраивайте чат-ботов на свой сайт')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={embeded} />
                    </HStack>
                </Card>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('РАСШИРЕННЫЙ АНАЛИЗ PDF-файлов')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Анализируйте сложные статьи за считанные секунды')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={analyze} />
                    </HStack>
                </Card>
            </HStack>
            <HStack max justify="between" gap="16" className={cls.changeFlex}>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('ПОДДЕРЖКА НЕСКОЛЬКИХ ТИПОВ ФАЙЛОВ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Общайтесь с файлами любого типа')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={chat} />
                    </HStack>
                </Card>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('СКАНИРОВАНИЕ В ЧАТ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Сканируйте документы и мгновенно начинайте общаться')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={scan} />
                    </HStack>
                </Card>
            </HStack>
            <Typography
                size='xl'
                bold
                title={t('Преимущества PRO - плана')}
                align='center'
                wrap
                ellipsis
            />
            <HStack max justify="between" gap="16" className={cls.changeFlex}>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('ИНСТРУМЕНТ ОБЩЕНИЯ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Обобщить сложные статьи')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={summarize} />
                    </HStack>
                </Card>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('АНАЛИЗ МАССОВЫХ ФАЙЛОВ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Извлечение данных из массивных файлов')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={extract} />
                    </HStack>
                </Card>
            </HStack>
            <Typography
                size='xl'
                bold
                title={t('Экономьте время и деньги')}
                align='center'
                wrap
            />
            <HStack max justify="between" gap="16" className={cls.changeFlex}>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('РАСШИРЕННЫЙ ПОИСК')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Хватит тратить время на бесконечные поиски')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={stop} />
                    </HStack>
                </Card>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('ГОЛОСОВОЙ ОБЩ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Общайтесь со своими файлами без ввода текста')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={speech} />
                    </HStack>
                </Card>
            </HStack>
            <HStack max justify="between" gap="16" className={cls.changeFlex}>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('ПРЕДЛАГАЕМЫЕ ВОПРОСЫ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Воспользуйтесь нашими рекомендациями и задайте вопрос за секунду')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={questions} />
                    </HStack>
                </Card>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('МНОГОИСТОЧНЫЙ ЧАТ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Общайтесь с несколькими источниками одновременно')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={multiple} />
                    </HStack>
                </Card>
            </HStack>
            <Typography
                size='xl'
                bold
                title={t('Поделитесь своим потрясающим опытом')}
                align='center'
                wrap
            />
            <HStack max justify="between" gap="16" className={cls.changeFlex}>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('ГРУППОВОЙ ЧАТ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Начните общаться с друзьями и файлами')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={chat2} />
                    </HStack>
                </Card>
                <Card variant="greyOne" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyTwo'>
                                <Typography
                                    text={t('ПОДЕЛИТЬСЯ ВАРИАНТОМ')}
                                />
                            </Card>
                            <Typography
                                bold
                                size='l'
                                text={t('Делитесь чатами с друзьями')}
                                wrap
                            />
                        </VStack>
                        <img className={cls.smallImgMedia250} src={share} />
                    </HStack>
                </Card>
            </HStack>
        </VStack>
    );
};

export default FeaturesPage;
