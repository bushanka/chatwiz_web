import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequireNotAuthProps {
    children: JSX.Element;
    notAuthOnly?: boolean;
}

export function RequireNotAuth({ children, notAuthOnly }: RequireNotAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();


    if (auth && notAuthOnly) {
        return (
            <Navigate to={RoutePath.HOME()} state={{ from: location }} replace />
        );
    }

    return children;
}
