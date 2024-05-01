import { classNames } from '@/shared/lib/classNames/classNames';
import './LoaderInput.scss';

interface LoaderInputProps {
    className?: string;
}

export const LoaderInput = ({ className }: LoaderInputProps) => (
    <div className={classNames('lds-ring', {}, [className])}><div></div><div></div><div></div><div></div></div>
);
