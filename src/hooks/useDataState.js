import { useRef, useCallback } from "react";

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


export const useDataState = (modalState) => {
    const eventsMapRef = useRef(generateMockData().eventMap);
    const dayMapRef = useRef(generateMockData().dayMap);


    const updateDayEvents = () => {
        return Array.from(dayMapRef.current.entries()).map(([date, { eventIds, rowNumber, columnNumber }]) => ({
            rowNumber,
            columnNumber,
            date,
            eventTitles: eventIds.map(eventId => ({ title: eventsMapRef.current.get(eventId).title, eventId }))
        }));

    };



    const addEvent = useCallback(event => {

        const eventsMap = eventsMapRef.current;
        const eventId = eventsMap.size + 1;
        const dayMap = dayMapRef.current;

        eventsMap.set(eventId, event);
        if (dayMap.has(modalState.date)) {
            dayMap.get(modalState.date).eventIds.push(eventId);
        }
        else {
            dayMap.set(modalState.date, {
                rowNumber: modalState.rowNumber,
                columnNumber: modalState.columnNumber,
                eventIds: [eventId]
            });
        }

    }, [modalState]);


    return {
        addEvent,
        dayEvents: updateDayEvents()
    };
}