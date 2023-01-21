import DayEvents from './DayEvents';

const EventLayout = ({ dayEvents, rowOffset, columnOffset }) => {

    return (<div>{
        dayEvents.map(({ rowNumber,date, columnNumber, eventTitles }) => (<DayEvents key={date} xPosition={columnNumber * columnOffset + (columnNumber)*2}
            yPosition={rowNumber * rowOffset + (rowNumber)*2}
            eventTitles={eventTitles}
        />))

    }</div>)

};

export default EventLayout;