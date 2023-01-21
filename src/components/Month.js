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
   
    const renderState = useRenderState(monthMap.get(monthName));
    const [modalState, updateModalState] = useState({ isOpen: false, date: null, rowNumber: null, columnNumber: null });
    const { addEvent, dayEvents } = useDataState(modalState);
    
    const handleClick = useCallback((event) => {
        if (event.target.dataset.date) {
            updateModalState({
                isOpen: true, date: event.target.dataset.date,
                rowNumber: event.target.dataset.rownumber,
                columnNumber: event.target.dataset.columnnumber
            });
        }
    }, []);

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
        <EventLayout dayEvents={dayEvents} rowOffset={100} columnOffset={100} />
    </div>


}

export default Month;