import { MutableRefObject, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import type {
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit/dist';

interface UseNotificationProps {
    isLoading?: { active?: boolean, text?: string };
    isSuccess?: { active?: boolean, text?: string };
    isError?: {
        active?: boolean,
        text?: string,
        error?: FetchBaseQueryError | SerializedError | undefined
    };
}

export const useNotification = ({
    isLoading,
    isSuccess,
    isError,
}: UseNotificationProps) => {
    const loadingName = useRef() as MutableRefObject<any>;
    const { t } = useTranslation();

    useEffect(() => {
        if (isLoading?.active) {
            loadingName.current = toast.loading(isLoading.text || t('Loading...'));
        }
        if (!isLoading?.active && loadingName.current) {
            toast.dismiss(loadingName.current);
        }

        if (isSuccess?.active) {
            toast.success(isSuccess.text || t('Success'));
        }
        if (isError?.active) {
            let error: string | undefined;

            if (isError.error && 'data' in isError.error) {
                error = (isError.error as { data?: { detail?: string } })?.data?.detail;
            }
            toast.error(error || isError.text || t('Error'));
        }

        return () => {
            toast.dismiss(loadingName.current);
            loadingName.current = null;
        };
    }, [
        isError?.active,
        isError?.text,
        isLoading?.active,
        isLoading?.text,
        isSuccess?.active,
        isSuccess?.text,
        isError?.error,
        t,
    ]);
};
