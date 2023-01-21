import { useRef, useCallback } from 'react';

const CreateEvent = ({ addEvent, closeModal }) => {

    const titleRef = useRef();
    const desRef = useRef();
    const startRef = useRef();
    const endRef = useRef();

    const addEventCallback = useCallback((event) => {
        event.preventDefault();
        addEvent({
            title: titleRef.current.value,
            description: desRef.current.value,
            startDate: startRef.current.value,
            endDate: endRef.current.value
        });

        closeModal();
    }, [addEvent, closeModal]);

    const close = useCallback(() => closeModal(), [closeModal]);

    return (<form style={{ width: '500px', background: 'white', border: '1px solid black' }} onSubmit={addEventCallback}>
        <div>
            <label htmlFor='title'>Title</label>
            <input ref={titleRef} type='input' id='title' />
        </div>
        <div>
            <label htmlFor='description'>Description</label>
            <input ref={desRef} type='input' id='description' />
        </div>
        <div>
            <label htmlFor='start'>Start Date</label>
            <input ref={startRef} type='input' id='start' />
        </div>
        <div>
            <label htmlFor='end'>End Date</label>
            <input ref={endRef} type='input' id='end' />
        </div>
        <div>
            <input type='submit' value='submit' />
            <input type='button' value='cancel' onClick={close} />
        </div>
    </form>);
}

export default CreateEvent;