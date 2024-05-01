import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '../Input';
import { Icon } from '../Icon';
import CrossIcon from '@/shared/assets/icons/Cross.svg';
import SearchIcon from '@/shared/assets/icons/Search.svg';
import { InputHTMLAttributes } from 'react';
import { Button } from '../Button';

import cls from './SearchField.module.scss';
import { LoaderInput } from '../LoaderInput';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

interface SearchFieldProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    loading?: boolean;
    validationText?: string;
    onChange?: (value: string) => void;
    onClear?: () => void;
}

export const SearchField = (props: SearchFieldProps) => {
    const {
        className,
        value,
        label,
        validationText,
        onChange,
        onClear,
        loading,
        ...otherProps
    } = props;

    return (
        <Input
            className={classNames([className])}
            addonLeft={(
                <Icon Svg={SearchIcon} height={24} width={24} className={cls.icon} />
            )}
            addonRight={(
                <Button variant="clear" onClick={onClear}>
                    {loading ? <LoaderInput /> : <Icon Svg={CrossIcon} height={12} className={cls.icon} />}
                </Button>
            )}
            value={value}
            label={label}
            validationText={validationText}
            onChange={onChange}
            {...otherProps}
        />
    );
};
