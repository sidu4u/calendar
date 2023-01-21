import Day from './Day';

const Week = ({ days, rowNumber }) => {

    return <div style={{
        'display': 'flex'
    }}>
        {
            days.map((day, index) => (<Day key={day} date={day} rowNumber={rowNumber} columnNumber={index} />))
        }
    </div>;
}

export default Week;