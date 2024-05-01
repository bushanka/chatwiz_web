import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { useEffect } from 'react';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
    );
}

const root = createRoot(container);

const RootRouter = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    )
}

const router = createBrowserRouter([
    { path: "*", Component: RootRouter },
]);

root.render(
    <RouterProvider router={router} />,
);

export { Theme } from '@/shared/const/theme';
