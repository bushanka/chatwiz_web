import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import team from '@/shared/assets/img/photo/team-image.webp';
import Primoz from '@/shared/assets/img/photo/team-Primoz.webp';
import OkFill from '@/shared/assets/icons/OkFill.svg';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AboutPage.module.scss';

const LEFT = [
    'Интеграция чат-ботов – встраивайте чат-ботов на свой сайт',
    'Поддержка нескольких типов файлов — общайтесь с файлами любого типа.',
    'Сканирование в чат: сканируйте документы и мгновенно начинайте общаться',
    'Групповой чат — начните общаться с друзьями и файлами одновременно',
    'Чат с несколькими источниками — общайтесь с несколькими источниками одновременно.',
    'chatwiz может анализировать изображения, аудио или видеоконтент, чтобы извлекать ценную информацию, обнаруживать объекты или закономерности, идентифицировать эмоции или настроения или предоставлять метаданные о медиафайлах.'
];

const AboutPage = () => {
    const { t } = useTranslation('');
    const navigate = useNavigate();

    return (
        <VStack align='center' gap="64" max>
            <VStack align='center' gap="64" className={cls.AboutPage}>
                <HStack max align='end' gap="64" className={classNames(cls.changeFlex, cls.team)}>
                    <VStack gap="16" style={{ paddingBottom: '1rem' }}>
                        <Typography
                            size='l'
                            variant="gray"
                            text={t('О НАС')}
                            align='left'
                            wrap
                        />
                        <Typography
                            size='xl'
                            bold
                            text={t('Производительность упрощена для всех.')}
                            align='left'
                            wrap
                        />
                        <Typography
                            text={t('В chatwiz мы совершаем революцию в производительности и эффективности. В мире, где время имеет решающее значение, мы верим в упрощение ваших задач и предоставление вам возможности достичь большего.')}
                            align='left'
                            wrap
                        />
                        <Typography
                            text={t('В сегодняшней быстро меняющейся среде студенты, исследователи и предприятия сталкиваются с многочисленными проблемами, когда дело доходит до оптимизации исследовательских процессов. Вот тут-то и приходит на помощь Chatwiz. Наша команда разработала мощный инструмент, который позволяет вам общаться с файлами любого типа и даже взаимодействовать с веб-сайтами и медиа, такими как видео на YouTube.')}
                            align='left'
                            wrap
                        />
                    </VStack>
                    <img src={team} className={cls.smallImg} />
                </HStack>
                <VStack max align='center' gap="16">
                    <Typography
                        size='xl'
                        bold
                        title={t('Наша команда')}
                        align='center'
                        wrap
                    />
                    <Typography
                        text={t('chatwiz начался как хобби-проект нашего генерального директора Приможа Цигоя на выходных в Любляне, Словения, с целью сделать общение с данными проще, чем когда-либо. Нашей целью с самого начала было переосмыслить способ взаимодействия научных кругов, делового мира и всех остальных с данными, создав простое и удобное в использовании приложение, подходящее для всех.')}
                        align='center'
                        wrap
                    />
                </VStack>
            </VStack>
            <div className={cls.photoWrapper}>
                <HStack className={classNames(cls.photoInner, cls.AboutPage, cls.changeFlex)} max justify='between'gap="8">
                    <VStack max align='center' gap="8">
                        <img src={Primoz} width={250} />
                        <Typography
                            size='l'
                            bold
                            title={t('Разработчик')}
                            align='center'
                            wrap
                        />
                        <Typography
                            text={t('Заслуга')}
                            align='center'
                            wrap
                        />
                    </VStack>
                    <VStack max align='center' gap="8">
                        <img src={Primoz} width={250} />
                        <Typography
                            size='l'
                            bold
                            title={t('Разработчик')}
                            align='center'
                            wrap
                        />
                        <Typography
                            text={t('Заслуга')}
                            align='center'
                            wrap
                        />
                    </VStack>
                    <VStack max align='center' gap="8">
                        <img src={Primoz} width={250} />
                        <Typography
                            size='l'
                            bold
                            title={t('Разработчик')}
                            align='center'
                            wrap
                        />
                        <Typography
                            text={t('Заслуга')}
                            align='center'
                            wrap
                        />
                    </VStack>
                    <VStack max align='center' gap="8">
                        <img src={Primoz} width={250} />
                        <Typography
                            size='l'
                            bold
                            title={t('Разработчик')}
                            align='center'
                            wrap
                        />
                        <Typography
                            text={t('Заслуга')}
                            align='center'
                            wrap
                        />
                    </VStack>
                </HStack>
            </div>
            <VStack align='center' gap="64" className={cls.AboutPage}>
                <VStack gap="8" max align='center'>
                    <Typography
                        size='l'
                        variant="gray"
                        text={t('chatwiz сообщество')}
                        align='center'
                        wrap
                    />
                    <Typography
                        size='xl'
                        bold
                        text={t('Чат из коробки')}
                        align='center'
                        wrap
                    />
                    <Typography
                        text={t('Теперь наши Pandas есть в более чем 30 странах мира, использующих chatwiz, и имея более чем пользователей менее чем за 3 недели и более 2100 запросов менее чем за 3 недели, мы являемся одним из самых быстрорастущих инструментов искусственного интеллекта в Европе. Наша удобная платформа для общения позволяет вам общаться с любыми файлами, медиафайлами, веб-сайтами и даже сканировать документ и мгновенно начинать с ним общение.')}
                        align='center'
                        wrap
                    />
                </VStack>
                <VStack gap="32" max>
                    <HStack max justify='between' gap="16" className={cls.changeFlex}>
                        <VStack max align='center' gap="8">
                            <Typography
                                size='xl'
                                bold
                                title={t('700+')}
                                align='center'
                                wrap
                            />
                            <Typography
                                text={t('Пользователи менее чем за 3 недели')}
                                align='center'
                                wrap
                            />
                        </VStack>
                        <VStack max align='center' gap="8">
                            <Typography
                                size='xl'
                                bold
                                title={t('2100+')}
                                align='center'
                                wrap
                            />
                            <Typography
                                text={t('Активные запросы менее чем за 3 недели')}
                                align='center'
                                wrap
                            />
                        </VStack>
                        <VStack max align='center' gap="8">
                            <Typography
                                size='xl'
                                bold
                                title={t('30+')}
                                align='center'
                                wrap
                            />
                            <Typography
                                text={t('Страны с активными пользователями')}
                                align='center'
                                wrap
                            />
                        </VStack>
                    </HStack>
                    <HStack max justify="between" gap="16" className={cls.changeFlex}>
                        <VStack max align='center' gap="8">
                            <Typography
                                size='xl'
                                bold
                                title={t('10+')}
                                align='center'
                                wrap
                            />
                            <Typography
                                text={t('Поддерживаемые источники')}
                                align='center'
                                wrap
                            />
                        </VStack>
                        <VStack max align='center' gap="8">
                            <Typography
                                size='xl'
                                bold
                                title={t('10+')}
                                align='center'
                                wrap
                            />
                            <Typography
                                text={t('Члены команды')}
                                align='center'
                                wrap
                            />
                        </VStack>
                    </HStack>
                </VStack>
                <VStack gap="8" max align='start'>
                    <Typography
                        size='l'
                        variant="gray"
                        text={t('Наша мисия')}
                        align='left'
                        wrap
                    />
                    <Typography
                        size='xl'
                        bold
                        text={t('Что мы делаем для вас')}
                        align='left'
                        wrap
                    />
                    <VStack max gap="16">
                        {LEFT.map((text) => (
                            <HStack gap="8">
                                <Icon Svg={OkFill} />
                                <Typography
                                    text={t(text)}
                                    align='left'
                                    wrap
                                />
                            </HStack>
                        ))}
                    </VStack>
                </VStack>
                <HStack max>
                    <Button
                        size='l'
                        color='green'
                        onClick={() => navigate(RoutePath.REGISTER())}
                        circle
                    >
                        {t('Начни уже сегодня')}
                    </Button>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default AboutPage;
