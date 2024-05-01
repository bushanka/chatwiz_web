import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData, userActions } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import Logo from '@/shared/assets/icons/Logo.svg';
import Folder from '@/shared/assets/icons/Folder.svg';
import Sms from '@/shared/assets/icons/Sms.svg';
import Menu from '@/shared/assets/icons/Menu.svg';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { LangSwitcher } from '@/features/LangSwitcher';
import { SearchOnSite } from '@/features/SearchOnSite';
import { Dropdown } from '@/shared/ui/Dropdown';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Suport from '@/shared/assets/icons/Suport.svg';
import Cart from '@/shared/assets/icons/Cart.svg';
import Upload from '@/shared/assets/icons/Upload.svg';
import { Drawer } from '@/shared/ui/Drawer';
import Settings from '@/shared/assets/icons/Settings.svg';
import { Progress } from '@/shared/ui/Progress/Progress';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

import cls from './Navbar.module.scss';
import { useGetUserInfoQuery } from '@/entities/User/api/userApi';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPerson, setIsOpenPerson] = useState(false);

    const { data: userInfo, isLoading: userInfoLoading } = useGetUserInfoQuery();

    const handleLogout = () => {
        dispatch(userActions.logout());
    }

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpenDrawerPerson = useCallback(() => {
        setIsOpenPerson(true);
    }, []);

    const onCloseDrawerPerson = useCallback(() => {
        setIsOpenPerson(false);
    }, []);

    const MenuList = (
        <>
            <Button
                variant="clearActive"
                onClick={() => {
                    navigate(RoutePath.MAIN());
                    onCloseDrawer();
                }}
            >
                {t('Продукт')}
            </Button>
            <Button
                variant="clearActive"
                onClick={() => {
                    navigate(RoutePath.PRODUCT());
                    onCloseDrawer();
                }}
            >
                {t('Бизнес')}
            </Button>
            {/* <Button
                variant="clearActive"
                onClick={() => {
                    navigate(RoutePath.FEATURES());
                    onCloseDrawer();
                }}
            >
                {t('Особенности')}
            </Button> */}
            {/* <Button
                variant="clearActive"
                onClick={() => {
                    navigate(RoutePath.BLOG());
                    onCloseDrawer();
                }}
            >
                {t('Новости')}
            </Button> */}
            {/* <Button
                variant="clearActive"
                onClick={() => {
                    navigate(RoutePath.ABOUT());
                    onCloseDrawer();
                }}
            >
                {t('О нас')}
            </Button> */}
            <Button
                variant="clearActive"
                onClick={() => {
                    navigate(RoutePath.PRICING());
                    onCloseDrawer();
                }}
            >
                {t('Цены')}
            </Button>
        </>
    )

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                {isBrowser && (
                    <HStack justify={isBrowser ? 'between' : 'end'} max gap="16">
                        <SearchOnSite />
                        <HStack gap="16">
                            <Button
                                color="grey"
                                onClick={() => navigate(RoutePath.CHATS())}
                            >
                                <HStack gap="8">
                                    <Icon Svg={Sms} className={cls.iconSms} />
                                    <Typography text={t('Все чаты')} />
                                </HStack>
                            </Button>
                            <Button
                                color="grey"
                                onClick={() => navigate(RoutePath.FILES())}
                            >
                                <HStack gap="8">
                                    <Icon Svg={Folder} className={cls.iconBtn} />
                                    <Typography text={t('Библиотека')} />
                                </HStack>
                            </Button>
                            <Dropdown
                                gap
                                trigger={(
                                    <div className={cls.circle}>
                                        <Icon Svg={Settings} className={cls.circleSettings} />
                                        {/* <Typography title="A" variant="white" bold /> */}
                                    </div>
                                )}
                                items={[
                                    {
                                        content: t('Настройки'),
                                        onClick: () => navigate(RoutePath.SETTINGS()),
                                    },
                                    {
                                        content: t('Выйти'),
                                        onClick: handleLogout,
                                    }
                                ]}
                                direction="bottom left"
                            />
                        </HStack>
                    </HStack>
                )}
                {isMobile && (
                    <>
                    <HStack max justify='between'>
                        <Button
                            variant="clear"
                            onClick={() => navigate(RoutePath.HOME())}
                        >
                            <HStack>
                                <Icon Svg={Logo} className={cls.iconLogo} />
                                <Typography text={t('chatwiz')} variant="green" bold size='l' />
                            </HStack>
                        </Button>
                        <Button onClick={onOpenDrawerPerson} variant="clear" className={cls.trigger}>
                            <Icon Svg={Menu} height={25} width={25} />
                        </Button>
                    </HStack>
                    <Drawer isOpen={isOpenPerson} onClose={onCloseDrawerPerson}>
                        <VStack max gap="8" align='center'>
                            <Button
                                color='green'
                                fullWidth
                                bold
                                onClick={() => {
                                    navigate(RoutePath.HOME());
                                    onCloseDrawerPerson();
                                }}
                            >
                                <HStack max gap="8" justify="center">
                                    <Icon Svg={Upload} className={cls.upload} />
                                    {t('Новый чат')}
                                </HStack>
                            </Button>
                            <Button
                                color="grey"
                                fullWidth
                                style={{ marginTop: '1rem' }}
                                onClick={() => {
                                    navigate(RoutePath.CHATS());
                                    onCloseDrawerPerson();
                                }}
                            >
                                <HStack gap="8" max justify='center'>
                                    <Icon Svg={Sms} className={cls.iconSms} />
                                    <Typography text={t('Все чаты')} />
                                </HStack>
                            </Button>
                            <Button
                                color="grey"
                                fullWidth
                                onClick={() => {
                                    navigate(RoutePath.FILES());
                                    onCloseDrawerPerson();
                                }}
                            >
                                <HStack gap="8" max justify='center'>
                                    <Icon Svg={Folder} className={cls.iconBtn} />
                                    <Typography text={t('Библиотека')} />
                                </HStack>
                            </Button>
                            <Button
                                color="grey"
                                fullWidth
                                onClick={() => {
                                    navigate(RoutePath.SETTINGS());
                                    onCloseDrawerPerson();
                                }}
                            >
                                <HStack max justify='center'>
                                    <Typography text={t('Настройки')} />
                                </HStack>
                            </Button>
                            <Button
                                color="grey"
                                fullWidth
                                onClick={() => {
                                    handleLogout();
                                    onCloseDrawerPerson();
                                }}
                            >
                                <HStack max justify='center'>
                                    <Typography text={t('Выйти')} />
                                </HStack>
                            </Button>
                            <Button
                                circle
                                color='black'
                                fullWidth
                                style={{ marginTop: '3rem' }}
                                onClick={() => {
                                    navigate(RoutePath.UPGRADE_PLAN());
                                    onCloseDrawerPerson();
                                }}

                            >
                                <HStack gap="8">
                                    <Icon Svg={Cart} height={20} width={20} />
                                    {t('Обновить план')}
                                </HStack>
                            </Button>
                            <VStack gap="8" max align='center'>
                                <HStack gap="24">
                                    <Typography text={`${t('Кредиты')}:`} />
                                    <Typography
                                        text={`${userInfo?.action_points_used} / ${userInfo?.max_action_points}`}
                                        bold
                                    />
                                </HStack>
                                <Progress percent={Math.round(((userInfo?.action_points_used || 0) / (userInfo?.max_action_points || 0)) * 100)} />
                            </VStack>
                            <HStack>
                                <Button
                                    fullHeight
                                    variant="clearGrey"
                                    onClick={() => {
                                        navigate(RoutePath.SUPPORT())
                                        onCloseDrawerPerson();
                                    }}
                                >
                                    <Icon Svg={Suport} height={20} width={20} />
                                </Button>
                                <ThemeSwitcher />
                                <LangSwitcher className={cls.lang} />
                            </HStack>
                        </VStack>
                    </Drawer>
                    </>
                )}
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack justify='between' max gap="16">
                <HStack gap="16">
                    <Button
                        variant="clear"
                        onClick={() => navigate(RoutePath.MAIN())}
                    >
                        <Icon Svg={Logo} className={cls.iconLogo} />
                        <Typography text={t('chatwiz')} variant="green" bold size='l' />
                    </Button>
                    <LangSwitcher short />
                </HStack>
                <BrowserView>
                    <HStack max justify="end">
                        {MenuList}
                        <HStack gap="8">
                            <Button
                                color='grey'
                                circle
                                jump
                                onClick={() => navigate(RoutePath.LOGIN())}
                            >
                                {t('Войти')}
                            </Button>
                            <Button
                                color='green'
                                circle
                                jump
                                onClick={() => navigate(RoutePath.REGISTER())}
                            >
                                {t('Зарегистрироваться')}
                            </Button>
                        </HStack>
                    </HStack>
                </BrowserView>
                <MobileView>
                    <Button onClick={onOpenDrawer} variant="clear" className={cls.trigger}>
                        <Icon Svg={Menu} height={25} width={25} />
                    </Button>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <VStack max gap="8">
                            {MenuList}
                            <Button
                                color='grey'
                                circle
                                jump
                                onClick={() => {
                                    navigate(RoutePath.LOGIN());
                                    onCloseDrawer();
                                }}
                            >
                                {t('Войти')}
                            </Button>
                            <Button
                                color='green'
                                circle
                                jump
                                onClick={() => {
                                    navigate(RoutePath.REGISTER());
                                    onCloseDrawer();
                                }}
                            >
                                {t('Зарегистрироваться')}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>
            </HStack>
        </header>
    );
});
