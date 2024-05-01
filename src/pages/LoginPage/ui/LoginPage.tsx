import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Eye from '@/shared/assets/icons/Eye.svg';
import EyeClosed from '@/shared/assets/icons/EyeClosed.svg';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { useLoginMutation } from '../api/loginPageApi';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';


import cls from './LoginPage.module.scss';

const LoginPage = () => {
    const { t } = useTranslation('');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const [loginGo, loginRes] = useLoginMutation();

    const handleLogin = () => {
        const formData = new FormData();
        formData.append('password', password);
        formData.append('username', email);
        loginGo({ body: formData })
    }

    useEffect(() => {
        if (loginRes.isSuccess) {
            setEmail('')
            setPassword('')
            setVisible(false)
        }
    }, [])

    useNotification({
        isError: {
            active: loginRes.isError,
            error: loginRes.error,
            text: t('Ошибка входа'),
        },
    });

    return (
        <HStack max justify="center">
            <Card padding="32" className={cls.card}>
                <VStack max align='center' gap="16">
                    <Typography
                        size='l'
                        bold
                        title={t('Войти')}
                        align='center'
                    />
                    <HStack gap="4">
                        <Typography
                            text={t('У вас нет учетной записи?')}
                            align='center'
                        />
                        <Button variant='clear' onClick={() => navigate(RoutePath.REGISTER())}>
                            <Typography
                                bold
                                variant="green"
                                text={t('Зарегистрируйтесь')}
                                align='center'
                            />
                        </Button>
                    </HStack>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e)}
                        label={t('Ваш адрес электронной почты')}
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e)}
                        label={t('Пароль')}
                        type={visible ? 'text' : 'password'}
                        addonRight={(
                            <Button variant="clear" onClick={() => setVisible((prev) => !prev)}>
                                <Icon Svg={visible ? Eye : EyeClosed} className={cls.icon} />
                            </Button>
                        )}
                    />
                    <Button
                        fullWidth
                        style={{ marginTop: '2rem' }}
                        onClick={handleLogin}
                        disabled={!email || !password}
                    >
                        {t('Войти')}
                    </Button>
                </VStack>
            </Card>
        </HStack>
    );
};

export default LoginPage;
