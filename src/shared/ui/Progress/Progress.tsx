import { classNames } from '@/shared/lib/classNames/classNames';
import { useMemo } from 'react';

import cls from './Progress.module.scss';

interface ProgressProps {
    className?: string;
    percent: number;
}

export const Progress = (props: ProgressProps) => {
    const { className, percent } = props;
    const percentResult = useMemo(() => {
        if (percent < 0) {
            return 0
        }
        if (percent > 100) {
            return 100
        }
        return percent;
    }, [percent])

    return (
        <div className={classNames(cls.Progress, {}, [className])}>
            <div className={cls.innerBlock} style={{ width: `${percentResult}%` }}></div>
        </div>
    );
};
