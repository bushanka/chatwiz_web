import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';
import { Sidebar } from '@/widgets/Sidebar';
import { VStack } from '@/shared/ui/Stack';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';
import { RequireNotAuth } from './RequireNotAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {

        const element = (
            <>
                {route.withSidebar && <Sidebar />}
                <VStack max>
                    <Navbar />
                        <div className="content-page">
                            <Suspense fallback={<PageLoader />}>
                                {route.element}
                            </Suspense>
                            {route.withFooter && <Footer />}
                        </div>
                </VStack>
            </>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        <RequireNotAuth notAuthOnly={route.notAuthOnly}>{element}</RequireNotAuth>
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
