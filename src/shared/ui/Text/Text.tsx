import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'main' | 'gray' | 'second' | 'red' | 'white' | 'black' | 'green';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l' | 'xl' | 'max';

interface TextProps {
    className?: string;
    title?: string | number;
    text?: string | number;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    wrap?: boolean;
    ellipsis?: boolean;
    style?: CSSProperties;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
    xl: cls.size_xl,
    max: cls.size_max,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h4',
    m: 'h3',
    l: 'h2',
    xl: 'h1',
    max: 'h1',
};

export const Typography = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        wrap,
        ellipsis,
        style,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[align], sizeClass];

    return (
        <div
            style={style}
            className={classNames(
                cls.Text,
                {
                    [cls.bold]: bold,
                    [cls.wrap]: wrap,
                },
                additionalClasses,
            )}
        >
            {title && (
                <HeaderTag
                    className={classNames(cls.title, { [cls.ellipsis]: ellipsis })}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={classNames(cls.text, { [cls.ellipsis]: ellipsis })}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
