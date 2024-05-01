import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounter';
import { useCounterActions } from '../model/slice/counterSlice';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { decrement, increment, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1>{counterValue}</h1>
            <HStack gap="16">
                <Button onClick={handleAddFive}>
                    {t('add5')}
                </Button>
                <Button onClick={handleInc}>
                    {t('increment')}
                </Button>
                <Button onClick={handleDec}>
                    {t('decrement')}
                </Button>
            </HStack>
        </div>
    );
};
