import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Typography } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

import './HorizontalCarousel.scss';
import cls from './HorizontalCarousel.module.scss';

interface HorizontalCarouselProps {
    className?: string
}

export const HorizontalCarousel = (props: HorizontalCarouselProps) => {
    const { t } = useTranslation();

    const CONTENT = [
        {
            text: t('Chatwiz превзошел мои ожидания! Загрузил свою статью и был удивлен точностью ответов на мои вопросы. Очень круто!'),
            person: t('@Сергей Н.'),
        },
        {
            text: t('Выражаю искреннюю благодарность chatwiz за поддержку и вклад в мой учебный процесс. Потенциал использования безграничен!'),
            person: t('@Виктор С.'),
        },
        {
            text: t('Среди всех исследовательских приложений в области ИИ, которые я изучал, chatwiz лидирует в простоте, качестве и скорости!'),
            person: t('@Илья Б.'),
        },
        {
            text: t('Был впечатлен полученным ответом после загрузки файла pdf. Быстро получил грамотно организованный список важной информации. Очень помогло!'),
            person: t('@Константин П.'),
        },
        {
            text: t('Уверена, это существенно повлияет на мою учебу в этом семестре. Chatwiz поднял процесс обучения на новый уровень!'),
            person: t('@Мария Т.'),
        },
        {
            text: t('Получаю очень детальные и точные краткие содержания в этом приложении. Качественно отличается от других инструментов, что я использовал. Мне нравится!'),
            person: t('@Светлана В.'),
        }
    ];

    return (
        <div className={classNames(cls.carousel)}>
            <div className="items-wrap">
                <div className="items marquee reverce">
                    {CONTENT.map((element, index) => (
                        <div className="item" key={index}>
                            <Card style={{ width: '285px' }} padding='24'>
                                <VStack max gap="16">
                                    <Typography text={element.text} />
                                    <Typography text={element.person} variant="gray" bold />
                                </VStack>
                            </Card>
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="items marquee reverce">
                    {CONTENT.map((element, index) => (
                        <div className="item" key={index}>
                            <Card style={{ width: '285px' }} padding='24'>
                                <VStack max gap="16">
                                    <Typography text={element.text} />
                                    <Typography text={element.person} variant="gray" bold />
                                </VStack>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
