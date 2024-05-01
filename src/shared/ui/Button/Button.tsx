import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'clearActive' | 'clearGreen' | 'clearGrey';
export type ButtonColor = 'green' | 'greenLight' | 'grey' | 'black' | 'red';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    square?: boolean;
    circle?: boolean;
    jump?: boolean;
    disabled?: boolean;
    bold?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    fullHeight?: boolean;
    nowrap?: boolean;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'filled',
            square,
            circle,
            disabled,
            fullWidth,
            size = 'm',
            color = 'green',
            bold,
            jump,
            fullHeight,
            nowrap,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.bold]: bold,
            [cls.jump]: jump,
            [cls.square]: square,
            [cls.circle]: circle,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.fullHeight]: fullHeight,
            [cls.nowrap]: nowrap,
        };

        return (
            <button
                type="button"
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[size],
                    cls[color],
                ])}
                disabled={disabled}
                {...otherProps}
                ref={ref}
            >
                {typeof children === 'string' ? (
                    <HStack max justify='center'>{children}</HStack>
                ) : children}
            </button>
        );
    },
);
