import { useDataState } from '../hooks/useDataState';
import { useMemo, useState, useCallback } from 'react';
import { useRenderState } from '../hooks/useRenderState';
import EventLayout from './EventLayout';
import { monthMapper } from '../utils'
import Week from './Week';
import Modal from './Modal';
import CreateEvent from './CreateEvent';


const Month = ({ monthName }) => {
    const monthMap = useMemo(() => monthMapper(), []);
    const { eventsMap, dayMap } = useDataState();
    const renderState = useRenderState(monthMap.get(monthName));
    const [modalState, updateModalState] = useState({ isOpen: false, date: null, rowNumber: null, columnNumber: null });
    
    const handleClick = useCallback((event) => {
        if (event.target.dataset.date) {
            updateModalState({
                isOpen: true, date: event.target.dataset.date,
                rowNumber: event.target.dataset.rownumber,
                columnNumber: event.target.dataset.columnnumber
            });
        }
    }, []);

    const addEvent = useCallback(event => {
        const eventId = eventsMap.size + 1;

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

    }, [modalState,dayMap,eventsMap]);

    const closeModal = useCallback(() => {
        updateModalState(state => ({
            ...state,
            isOpen: false
        }))
    }, []);

    return <div onClick={handleClick}>
        {
            renderState.map((week, index) => (<Week key={index} days={week} rowNumber={index} />))  // check on key usage
        }
        <Modal isOpen={modalState.isOpen}>
            <CreateEvent addEvent={addEvent} closeModal={closeModal} />
        </Modal>
        <EventLayout dayEvents={Array.from(dayMap.entries()).map(([date,{ eventIds, rowNumber, columnNumber }]) => ({
            rowNumber,
            columnNumber,
            date,
            eventTitles: eventIds.map(eventId => ({title:eventsMap.get(eventId).title,eventId}))
        }))} rowOffset={100} columnOffset={100} />
    </div>


}

export default Month;