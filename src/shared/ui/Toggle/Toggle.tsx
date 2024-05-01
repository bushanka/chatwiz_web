import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

import cls from './Toggle.module.scss';

interface ToggleProps {
    className?: string;
    onChange: () => void;
    checked?: boolean;
}

export const Toggle = (props: ToggleProps) => {
    const {
        className,
        onChange,
        checked,
        ...otherProps
    } = props;

    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onChange();
    };

    return (
        <Button variant="clear" onClick={handleChange} className={classNames([className])}>
            <div className={classNames(cls.Toggle)}>
                <label className={cls.Switch}>
                    <input {...otherProps} type="checkbox" checked={checked} onChange={() => {}} />
                    <span className={cls.Slider} />
                </label>
            </div>
        </Button>
    );
};
