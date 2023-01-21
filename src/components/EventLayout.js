import DayEvents from './DayEvents';

const EventLayout = ({ dayEvents, rowOffset, columnOffset }) => {

    return (<div>{
        dayEvents.map(({ rowNumber,date, columnNumber, eventTitles }) => (<DayEvents key={date} xPosition={columnNumber * columnOffset}
            yPosition={rowNumber * rowOffset}
            eventTitles={eventTitles}
        />))

    }</div>)

};

export default EventLayout;