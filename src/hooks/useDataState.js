import { useRef } from "react";

const generateMockData = () => {
    const event = {
        id: '1',
        title: 'mockEvent',
        startTime: new Date().toDateString(),
        endTime: new Date().toDateString(),
        description: 'temp'
    }

    const eventMap = new Map();

    eventMap.set(event.id, event);

    const dayMap = new Map();

    dayMap.set('1', { eventIds: [event.id], rowNumber: 0, columnNumber: 0 });

    return { eventMap, dayMap };

}


export const useDataState = () => {
    const eventsMapRef = useRef(generateMockData().eventMap);
    const dayMapRef = useRef(generateMockData().dayMap);
    return {
        eventsMap: eventsMapRef.current,
        dayMap: dayMapRef.current
    };
}