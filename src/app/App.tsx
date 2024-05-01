import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';
import { Toaster } from 'react-hot-toast';

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        if (!inited) {
            dispatch(userActions.initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <PageLoader />
        );
    }

    return (
        <div id="app" className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <div className="page">
                    <AppRouter />
                </div>
            </Suspense>
            <Toaster position="bottom-right" />
        </div>
    );
});

export default withTheme(App);
