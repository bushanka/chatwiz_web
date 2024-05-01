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
import { useRegisterMutation } from '../api/registerPageApi';
import { useNotification } from '@/shared/lib/hooks/useNotification/useNotification';

import cls from './RegisterPage.module.scss';

const RegisterPage = () => {
    const { t } = useTranslation('');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const [register, registerResult] = useRegisterMutation();

    useEffect(() => {
        if (registerResult.isSuccess) {
            setEmail('')
            setName('')
            setSurname('')
            setPassword('')
            setVisible(false)
        }
    }, [])

    useNotification({
        isSuccess: {
            active: registerResult.isSuccess,
            text: t('Успешная регистрации'),
        },
        isError: {
            active: registerResult.isError,
            text: t('Ошибка регистрации'),
        },
    });

    return (
        <HStack max justify="center">
            <Card padding="32" className={cls.card}>
                <VStack max align='center' gap="16">
                    <Typography
                        size='l'
                        bold
                        title={t('Регистрация')}
                        align='center'
                    />
                    <HStack gap="4">
                        <Typography
                            text={t('Уже есть учетная запись?')}
                            align='center'
                        />
                        <Button variant='clear' onClick={() => navigate(RoutePath.LOGIN())}>
                            <Typography
                                bold
                                variant="green"
                                text={t('Войти')}
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
                        value={name}
                        onChange={(e) => setName(e)}
                        label={t('Имя')}
                    />
                    <Input
                        value={surname}
                        onChange={(e) => setSurname(e)}
                        label={t('Фамилия')}
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
                        disabled={!email || !name || !surname || !password}
                        onClick={() => register({
                            email,
                            name,
                            surname,
                            password,
                        })}
                    >
                        {t('Зарегистрироваться')}
                    </Button>
                </VStack>
            </Card>
        </HStack>
    );
};

export default RegisterPage;
