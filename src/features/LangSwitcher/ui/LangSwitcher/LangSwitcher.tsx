import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import Lang from '@/shared/assets/icons/Lang.svg';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        console.log(1111111)
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={toggle} variant="clear">
            <Icon Svg={Lang} />
            {/* {t(short ? 'Короткий язык' : 'Язык')} */}
        </Button>
    );
});
