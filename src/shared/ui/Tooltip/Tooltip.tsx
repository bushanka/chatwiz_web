import { ReactNode, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Tooltip.module.scss';

interface TooltipProps {
    className?: string;
    children: ReactNode;
    text: string;
    direction?: DropdownDirection;
}

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export const Tooltip = (props: TooltipProps) => {
    const {
        className,
        children,
        text,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const toggleMenu = () => {
        buttonRef?.current?.click();
    };

    return (
        <Popover>
            {({ open }) => (
                <div
                    onMouseEnter={toggleMenu}
                    onMouseLeave={toggleMenu}
                    className={cls.wrapper}
                >
                    <Popover.Button ref={buttonRef} className={classNames(cls.trigger, {}, [className])}>
                        {children}
                    </Popover.Button>

                    <Transition
                        show={open}
                    >
                        <Popover.Panel className={classNames(cls.text, {}, menuClasses)}>
                            {text}
                        </Popover.Panel>
                    </Transition>
                </div>
            )}
        </Popover>
    );
};
