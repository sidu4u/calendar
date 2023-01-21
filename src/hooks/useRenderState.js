
import { useMemo } from 'react';

const generateDays = (dayCount) => {
    let counter = 1;
    const result = [];

    while (counter <= dayCount) {
        const week = []
        for (let i = 0; i < 7 && counter<=dayCount; i++) {
            week.push(counter);
            counter++;
        }

        result.push(week);
    }

    return result;
}

export const useRenderState = (dayCount) => {

    return useMemo(() => generateDays(dayCount), [dayCount]);
};


