import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme();
    }, [dispatch, toggleTheme]);

    return (
        <Button
            variant="clearGrey"
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
            fullHeight
        >
            <Icon
                Svg={ThemeIcon}
                width={20}
                height={20}
            />
        </Button>
    );
});
