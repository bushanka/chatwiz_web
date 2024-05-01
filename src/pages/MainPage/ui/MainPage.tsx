import { HorizontalCarousel } from '@/entities/HorizontalCarousel';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CoverLaptop from '@/shared/assets/img/cover-laptop.webp';
import banking from '@/shared/assets/img/Финансы.webp';
import business from '@/shared/assets/img/Бизнес.webp';
import commerce from '@/shared/assets/img/Ecommerce.webp';
import education from '@/shared/assets/img/Образование.webp';
import healthcare from '@/shared/assets/img/Здоровье.webp';
import resources from '@/shared/assets/img/HR.webp';
import insurance from '@/shared/assets/img/insurance.webp';
import tourism from '@/shared/assets/img/Туризм.webp';
import graph from '@/shared/assets/img/graph-section.webp';
import YouTube from '@/shared/assets/icons/YouTube.svg';
import Jira from '@/shared/assets/icons/Jira.svg';
import Mp3 from '@/shared/assets/icons/Mp3.svg';
import Webpage from '@/shared/assets/icons/Webpage.svg';
import PDF_file from '@/shared/assets/icons/PDF_file.svg';
import ChatGPT from '@/shared/assets/icons/chatgpt.svg';
import Images from '@/shared/assets/icons/pictures.svg';
import Logo from '@/shared/assets/icons/Logo.svg';
import Wikipedia from '@/shared/assets/icons/Wikipedia.svg';
import Github from '@/shared/assets/icons/Github.svg';
import Google from '@/shared/assets/icons/Google.svg';
import Slack from '@/shared/assets/icons/Slack.svg';
import Discord from '@/shared/assets/icons/Discord.svg';
import Caltech from '@/shared/assets/icons/Caltech.svg';
import Cambridge from '@/shared/assets/icons/Cambridge.svg';
import Harvard from '@/shared/assets/icons/Harvard.svg';
import Insta from '@/shared/assets/icons/Insta.svg';
import Meta from '@/shared/assets/icons/Meta.svg';
import Oxford from '@/shared/assets/icons/Oxford.svg';
import robotIcon from '@/shared/assets/img/robotIcon.webp';
import editIcon from '@/shared/assets/img/editIcon.webp';
import smsIcon from '@/shared/assets/img/smsIcon.webp';
import interaction from '@/shared/assets/img/interaction.webp';
import marker from '@/shared/assets/img/marker.webp';
import memorycard from '@/shared/assets/img/memory-card.webp';
import language from '@/shared/assets/img/language.webp';
import chatgpt from '@/shared/assets/img/chatgpt.webp';
import headIcon from '@/shared/assets/img/headIcon.webp';
import { AppCard } from '@/entities/AppCard/AppCard';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { isBrowser } from 'react-device-detect';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [activeButton, setActiveButton] = useState('Образование');
    const navigate = useNavigate();

    useEffect(() => {
        if (theme === "app_dark_theme") toggleTheme()
    }, [])

    return (
        <VStack align='center' gap="64" max>
            <VStack align='center' gap="64" max className={cls.MainPage}>
                <HStack max gap="16" justify='center' className={cls.changeFlex}>
                    <VStack gap="16">
                        <Typography
                            size='l'
                            bold
                            align='center'
                            title={t('Мгновенно разбирайтесь в любых данных с помощью искусственного интеллекта')}
                            wrap
                        />
                        {/*<Typography
                            size='l'
                            text={t('Независимо от того, занимаетесь ли вы учебой, исследованиями или просто изучаете новые темы, наш инструмент разработан для того, чтобы помочь вам быстро и легко найти и понять необходимую информацию.')}
                            wrap
                            align='left'
                        />*/}
                        {isBrowser && 
                        <HStack max justify="center">
                            <Button
                                color='green'
                                circle
                                size="l"
                                jump
                                onClick={() => navigate(RoutePath.REGISTER())}
                            >
                                {t('Попробовать')}
                            </Button>
                        </HStack>}
                    </VStack>
                    <img src={CoverLaptop} className={cls.smallImg} />
                    {!(isBrowser) && 
                    <HStack max justify="center">
                        <Button
                            color='green'
                            circle
                            size="l"
                            jump
                            onClick={() => navigate(RoutePath.REGISTER())}
                        >
                            {t('Попробовать')}
                        </Button>
                    </HStack>}
                </HStack>
                <VStack gap="32" max align='center'>
                    <Typography
                        size='xl'
                        bold
                        title={t('Как работать с chatwiz?')}
                        align='center'
                        wrap
                    />
                    <VStack gap="16" max className={cls.changeFlex}>
                        <HStack gap="16">
                            <Typography
                                size='max'
                                bold
                                variant="green"
                                title={t('1')}
                                align='center'
                                wrap
                            />
                            <VStack gap="2">
                                <Typography
                                    text={t('Загрузите ваш файл или ссылку.')}
                                    size='l'
                                    wrap
                                    bold
                                    align='left'
                                />
                                <Typography
                                    size='m'
                                    text={t('Просто загрузите файл или ссылку, с которым хотите пообщаться. Chatwiz поддерживает множество форматов: от учебников и исследовательских работ до деловых контрактов и отчетов. Вы также можете воспользоваться ChatGPT без привязки к конкретному файлу.')}
                                    wrap
                                    align='left'
                                />
                            </VStack>
                        </HStack>
                        <HStack gap="16">
                            <Typography
                                size='max'
                                bold
                                variant="green"
                                title={t('2')}
                                align='center'
                                wrap
                            />
                            <VStack gap="2">
                                <Typography
                                    text={t('Задавайте вопросы.')}
                                    size='l'
                                    wrap
                                    bold
                                    align='left'
                                />
                                <Typography
                                    size='m'
                                    text={t('Введите ваши вопросы в удобном интерфейсе чата с вашими данными. Внутри чата сохраняется контекст предыдущих сообщений, а также предлагается возможность получить краткое содержание документа.')}
                                    wrap
                                    align='left'
                                />
                            </VStack>
                        </HStack>
                        <HStack gap="16">
                            <Typography
                                size='max'
                                bold
                                variant="green"
                                title={t('3')}
                                align='center'
                                wrap
                            />
                            <VStack gap="2">
                                <Typography
                                    text={t('Получайте моментальные ответы.')}
                                    size='l'
                                    wrap
                                    bold
                                    align='left'
                                />
                                <Typography
                                    size='m'
                                    text={t('Chatwiz предоставит мгновенные ответы, подкрепленные информацией в вашем файле. Передовые технологии на базе ИИ гарантируют, что ответы будут точными и актуальными. Более того, ИИ подскажет вам точное место внутри вашего файла, откуда был взят ответ на ваш вопрос.')}
                                    wrap
                                    align='left'
                                />
                            </VStack>
                        </HStack>
                    </VStack>
                </VStack>
                <VStack gap="32" max align='center'>
                    <Typography
                                size='xl'
                                bold
                                title={t('Поприветствуйте новую эру эффективности и продуктивности')}
                                align='center'
                                wrap
                    />
                    <HStack gap="24" justify='between' className={cls.changeFlex}>
                        <Card jump padding='24' variant='greyOne' className={cls.card}>
                            <VStack gap="16" align='start'>
                                <HStack gap="16">
                                    <img src={headIcon} height={50} />
                                    <Typography size="l" bold text={t('Работает на базе ИИ')} ellipsis />
                                </HStack>
                                <Typography text={t('Благодаря сложным методам поиска chatwiz генерирует точные результаты поиска, гарантируя, что пользователи смогут легко и быстро найти нужную им информацию. Это особенно полезно при поиске в длинных документах или попытке найти конкретные детали.')} />
                            </VStack>
                        </Card>
                        <Card jump padding='24' variant='greyOne' className={cls.card}>
                            <VStack gap="16" align='start'>
                                <HStack gap="16">
                                    <img src={language} height={50} />
                                    <Typography size="l" bold text={t('Обработка естественного языка')} ellipsis />
                                </HStack>
                                <Typography text={t('Наша платформа использует алгоритмы, основанные на NLP, позволяя пользователям задавать вопросы на естественном языке, точно так же, как они задавали бы их другому человеку. Система распознает тонкости языка, контекста и намерений, предоставляя быстрые и точные ответы.')} />
                            </VStack>
                        </Card>
                    </HStack>
                    <HStack gap="24" justify='between' className={cls.changeFlex}>
                        <Card jump padding='24' variant='greyOne' className={cls.card}>
                            <VStack gap="16" align='start'>
                                <HStack gap="16">
                                    <img src={interaction} height={50} />
                                    <Typography size="l" bold text={t('Интерактивность')} ellipsis />
                                </HStack>
                                <Typography text={t('Chatwiz обеспечивает двустороннюю связь с вашим источником вместо простого извлечения текста. Вы можете задавать вопросы, получать ответы и даже следить за этими ответами. Это похоже на разговор с автором контента.')} />
                            </VStack>
                        </Card>
                        <Card jump padding='24' variant='greyOne' className={cls.card}>
                            <VStack gap="16" align='start'>
                                <HStack gap="16">
                                    <img src={memorycard} height={50} />
                                    <Typography size="l" bold text={t('Запоминание контекста')} ellipsis />
                                </HStack>
                                <Typography text={t('Вам не нужно повторять одно и тоже, ведь ИИ запоминает ваши предыдущие сообщения и выдает ответы учитывая их контекст.')} />
                            </VStack>
                        </Card>
                    </HStack>
                    <HStack gap="24" justify='between' className={cls.changeFlex}>
                        <Card jump padding='24' variant='greyOne' className={cls.card}>
                            <VStack gap="16" align='start'>
                                <HStack gap="16">
                                    <img src={marker} height={50} />
                                    <Typography size="l" bold text={t('Выделение источника в файле')} ellipsis />
                                </HStack>
                                <Typography text={t('Каждый ответ подкреплен источниками, извлеченными из загруженного документа, чтобы вам было наглядно видно, откуда был взят текст для ответа.')} />
                            </VStack>
                        </Card>
                        <Card jump padding='24' variant='greyOne' className={cls.card}>
                            <VStack gap="16" align='start'>
                                <HStack gap="16">
                                    <img src={chatgpt} height={50} />
                                    <Typography size="l" bold text={t('ChatGPT')} ellipsis />
                                </HStack>
                                <Typography text={t('Вы можете также воспользоваться обычным чатом с ChatGPT, не загружая своих файлов и получать общие ответы.')} />
                            </VStack>
                        </Card>
                    </HStack>
                </VStack>
                <Typography
                    size='xl'
                    bold
                    align="center"
                    title={t('Трансформация всех отраслей промышленности с использованием возможностей искусственного интеллекта')}
                    wrap
                />
                <VStack max gap="16" align='center'>
                    <Card variant='greyOne' border="round" max>
                        <HStack gap="16" max justify='center' className={cls.changeFlex}>
                            <Button
                                variant={activeButton === 'Образование' ? 'filled' : 'clearActive'}
                                onClick={() => setActiveButton('Образование')}
                                circle
                                fullHeight
                            >
                                {t('Образование')}
                            </Button>
                            <Button
                                variant={activeButton === 'HR' ? 'filled' : 'clearActive'}
                                onClick={() => setActiveButton('HR')}
                                circle
                                fullHeight
                            >
                                {t('HR')}
                            </Button>
                            <Button
                                variant={activeButton === 'Бизнес' ? 'filled' : 'clearActive'}
                                onClick={() => setActiveButton('Бизнес')}
                                circle
                                fullHeight
                            >
                                {t('Бизнес')}
                            </Button>
                            <Button
                                variant={activeButton === 'Коммерция' ? 'filled' : 'clearActive'}
                                onClick={() => setActiveButton('Коммерция')}
                                circle
                                fullHeight
                            >
                                {t('Коммерция')}
                            </Button>
                            <Button
                                variant={activeButton === 'Финансы' ? 'filled' : 'clearActive'}
                                onClick={() => setActiveButton('Финансы')}
                                circle
                                fullHeight
                            >
                                {t('Финансы')}
                            </Button>
                            <Button
                                variant={activeButton === 'Здоровье' ? 'filled' : 'clearActive'}
                                onClick={() => setActiveButton('Здоровье')}
                                circle
                                fullHeight
                            >
                                {t('Здоровье')}
                            </Button>
                            <Button
                                variant={activeButton === 'Туризм' ? 'filled' : 'clearActive'}
                                onClick={() => setActiveButton('Туризм')}
                                circle
                                fullHeight
                            >
                                {t('Туризм')}
                            </Button>
                        </HStack>
                    </Card>
                    {activeButton === 'Образование' && <img className={cls.largeImg} src={education} />}
                    {activeButton === 'HR' && <img className={cls.largeImg} src={resources} />}
                    {activeButton === 'Бизнес' && <img className={cls.largeImg} src={business} />}
                    {activeButton === 'Коммерция' && <img className={cls.largeImg} src={commerce} />}
                    {activeButton === 'Финансы' && <img className={cls.largeImg} src={banking} />}
                    {activeButton === 'Здоровье' && <img className={cls.largeImg} src={healthcare} />}
                    {activeButton === 'Туризм' && <img className={cls.largeImg} src={tourism} />}
                </VStack>
                {/* <Card variant="black" padding="54">
                    <HStack gap="16" align='start' className={cls.changeFlex}>
                        <VStack gap="16">
                            <Card variant='greyOne'>
                                <Typography
                                    text={t('ИСТОЧНИК: JUNIPER RESEARCH')}
                                />
                            </Card>
                            <Typography
                                size='xl'
                                bold
                                variant="white"
                                title={t('$11 миллиардов в год')}
                                wrap
                            />
                            <Typography
                                variant="white"
                                size='m'
                                text={t('Внедрение чат-ботов в сфере розничной торговли, банковского дела и здравоохранения позволит снизить затраты бизнеса на 11 миллиардов долларов в год.')}
                                wrap
                            />
                            <Button
                                color='green'
                                circle
                                jump
                                onClick={() => {}}
                            >
                                {t('Узнать больше')}
                            </Button>
                        </VStack>
                        <img height={300} width={300} src={graph} />
                    </HStack>
                </Card> */}
                <Typography
                    size='xl'
                    bold
                    align="center"
                    title={t('Поддерживаемые форматы и сторонние сервисы:')}
                    wrap
                />
                <VStack gap="16">
                    <HStack gap="16" className={cls.changeFlex}>
                        <AppCard
                            Svg={YouTube}
                            active
                            text={t('YouTube')}
                        />
                        <AppCard
                            Svg={Webpage}
                            active
                            text={t('Webpage')}
                        />
                        <AppCard
                            Svg={PDF_file}
                            active
                            text={t('PDF')}
                        />
                    </HStack>
                    <HStack gap="16" className={cls.changeFlex}>
                        <AppCard
                            Svg={ChatGPT}
                            active
                            text={t('ChatGPT')}
                        />
                        <AppCard
                            Svg={Mp3}
                            text={t('MP3')}
                        />
                        <AppCard
                            Svg={Images}
                            text={t('Images')}
                        />
                    </HStack>
                    <HStack gap="16" className={cls.changeFlex}>
                        <AppCard
                            Svg={Jira}
                            text={t('Jira')}
                        />
                        <AppCard
                            Svg={Github}
                            text={t('Github')}
                        />
                        <AppCard
                            Svg={Google}
                            text={t('Google')}
                        />
                    </HStack>
                </VStack>
                {/*<VStack max align='end'>
                    <Typography
                        size='l'
                        align="right"
                        text={t('Особенности')}
                        wrap
                    />
                    <Typography
                        size='xl'
                        align="right"
                        title={t('Создайте чат-бота, работающего на базе искусственного интеллекта и обученного с использованием ваших данных')}
                        bold
                        wrap
                    />
                </VStack>*/}
                {/*<HStack max gap="32" justify='center' className={cls.changeFlex}>
                    <Card jump padding='24' variant='greyOne' width='100%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Целевые результаты поиска')} />
                            <Typography text={t('Благодаря сложным методам поиска платформа генерирует точные результаты поиска, гарантируя, что пользователи смогут легко и быстро найти нужную им информацию. Это особенно полезно при поиске в длинных документах или попытке найти конкретные детали.')} />
                        </VStack>
                    </Card>
                    <Card jump padding='24' variant='greyOne' width='100%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Обработка естественного языка')} />
                            <Typography text={t('Наша платформа использует алгоритмы, основанные на NLP, позволяя пользователям задавать вопросы на естественном языке, точно так же, как они задавали бы их другому человеку. Система распознает тонкости языка, контекста и намерений, предоставляя быстрые и точные ответы.')} />
                        </VStack>
                    </Card>
                </HStack>
                <HStack max gap="32" justify='center' className={cls.changeFlex}>
                    <Card jump padding='24' variant='greyOne' width='100%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Синтаксический анализ документа')} />
                            <Typography text={t('Наша платформа использует искусственный интеллект для интеллектуальной обработки любого загруженного документа, извлечения важной информации и понимания контекста, что облегчает пользователям поиск и задавание вопросов.')} />
                        </VStack>
                    </Card>
                    <Card jump padding='24' variant='greyOne' width='100%'>
                        <VStack gap="16">
                            <Typography size="l" bold text={t('Multi-Format Compatibility')} />
                            <Typography text={t('Our platform provides comprehensive support for various file formats, including PDFs, Word documents, and images, enabling users to upload any document or image and receive relevant information based on the content.')} />
                        </VStack>
                    </Card>
                </HStack>*/}
            </VStack>
            {isBrowser && <HorizontalCarousel />}
            {/* <VStack align='center' gap="64" max className={classNames(cls.MainPage, cls.changeFlex)} style={{ paddingBottom: '2rem' }}>
                <VStack max gap="16" align='center'>
                    <Typography
                        size='xl'
                        bold
                        align="center"
                        title={t('Пользуются доверием исследователей, академических кругов и ведущих отраслей промышленности')}
                        wrap
                    />
                    <Typography
                        size='l'
                        align="center"
                        text={t('Новаторы и студенты из ведущих университетов и организаций мира используют chatwiz')}
                        wrap
                    />
                    <HStack gap="32" className={cls.changeFlex}>
                        <Icon height={70} width={120} Svg={Caltech} />
                        <Icon height={70} width={150} Svg={Cambridge} />
                        <Icon height={70} width={150} Svg={Harvard} />
                        <Icon height={70} width={150} Svg={Insta} />
                        <Icon height={70} width={120} Svg={Meta} />
                        <Icon height={70} width={150} Svg={Oxford} />
                    </HStack>
                </VStack>
            </VStack> */}
        </VStack>
    );
};

export default MainPage;
