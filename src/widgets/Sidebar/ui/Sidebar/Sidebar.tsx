import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { HStack, VStack } from '@/shared/ui/Stack';
import Logo from '@/shared/assets/icons/Logo.svg';
import Upload from '@/shared/assets/icons/Upload.svg';
import SmsSingle from '@/shared/assets/icons/SmsSingle.svg';
import Edit from '@/shared/assets/icons/EditNew.svg';
import Suport from '@/shared/assets/icons/Suport.svg';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import Cart from '@/shared/assets/icons/Cart.svg';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/shared/ui/Progress/Progress';
import { useAllChatsQuery } from '@/entities/Chats';

import cls from './Sidebar.module.scss';
import { useGetUserInfoQuery } from '@/entities/User/api/userApi';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const { data: chats, isLoading: chatsLoading } = useAllChatsQuery();
    const { data: userInfo, isLoading: userInfoLoading } = useGetUserInfoQuery();

    const onToggle = () => {
        console.log(collapsed);
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <VStack max gap="16" align='center'>
                <Button
                    variant="clear"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    circle
                >
                    <Icon Svg={ArrowDown} height={20} width={20} />
                </Button>
                <Button
                    variant="clear"
                    onClick={() => navigate(RoutePath.HOME())}
                >
                    <HStack>
                        <Icon Svg={Logo} className={cls.iconLogo} />
                        {!collapsed && (<Typography text={t('chatwiz')} variant="green" bold size='l' />)}
                    </HStack>
                </Button>
                <Button
                    color='green'
                    style={{ height: '40px' }}
                    fullWidth
                    bold
                    onClick={() => navigate(RoutePath.HOME())}
                >
                    <HStack max gap="8" justify="center">
                        <Icon Svg={Upload} className={cls.upload} />
                        {!collapsed && t('Новый чат')}
                    </HStack>
                </Button>
                <VStack gap="8" max>
                    {!collapsed && (<Typography text={t('Чаты')} />)}
                    <div className={cls.list}>
                        {chats?.map(({ chat_id, chat_name }) => (
                            <HStack gap="2" max key={chat_id}>
                                <Button
                                    variant="clearGrey"
                                    fullWidth={!collapsed}
                                    onClick={() => navigate(RoutePath.HOME_ID(`${chat_id}`))}
                                >
                                    <HStack gap="8" max>
                                        <Icon Svg={SmsSingle} className={cls.smsSingle} />
                                        {!collapsed && <Typography text={chat_name} />}
                                    </HStack>
                                </Button>
                                <Button
                                    fullHeight
                                    variant="clearGreen"
                                    onClick={() => navigate(RoutePath.HOME_EDIT(`${chat_id}`))}
                                >
                                    <Icon Svg={Edit} className={cls.editIcon} />
                                </Button>
                            </HStack>
                        ))}
                    </div>
                </VStack>
            </VStack>
            {!collapsed && (
                <VStack max align='center' gap="16">
                    <Button
                        circle
                        color='black'
                        onClick={() => navigate(RoutePath.UPGRADE_PLAN())}
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
                        <Button fullHeight variant="clearGrey" onClick={() => navigate(RoutePath.SUPPORT())}>
                            <Icon Svg={Suport} height={20} width={20} />
                        </Button>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </HStack>
                </VStack>
            )}
        </aside>
    );
});
