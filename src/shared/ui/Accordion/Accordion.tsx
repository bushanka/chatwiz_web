import { ReactNode, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Icon } from '../Icon/Icon';
import ChevronDown from '@/shared/assets/icons/ArrowDown.svg';
import { Button } from '../Button/Button';

import cls from './Accordion.module.scss';

interface AccordionProps {
    className?: string;
    list: {
        summary: ReactNode;
        details: ReactNode;
    }[];
}

export const Accordion = (props: AccordionProps) => {
    const { className, list } = props;
    const [activeRow, setActiveRow] = useState<number | null>(null);

    const handleClick = (value: number) => {
        if (value === activeRow) {
            setActiveRow(null);
        } else {
            setActiveRow(value);
        }
    };

    useEffect(() => setActiveRow(null), []);

    return (
        <div className={classNames(cls.Accordion, {}, [className])}>
            {list.map(({ summary, details }, index) => (
                <div className={cls.row} key={index}>
                    <Button
                        variant="clear"
                        fullWidth
                        onClick={() => handleClick(index)}
                    >
                        <HStack justify="between" gap="16" max>
                            {summary}
                            <Icon
                                Svg={ChevronDown}
                                className={
                                    classNames(
                                        cls.icon,
                                        {
                                            [cls.isActive]: index === activeRow,
                                        },
                                    )
                                }
                            />
                        </HStack>
                    </Button>
                    {index === activeRow && (
                        <HStack max className={classNames(cls.details)}>
                            {details}
                        </HStack>
                    )}
                </div>
            ))}
        </div>
    );
};
