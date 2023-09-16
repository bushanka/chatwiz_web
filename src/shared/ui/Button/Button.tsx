import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'clearActive';
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
    children?: ReactNode;
    fullWidth?: boolean;
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
            jump,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.jump]: jump,
            [cls.square]: square,
            [cls.circle]: circle,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
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
                {children}
            </button>
        );
    },
);
