

import EventThumbnail from "./EventThumbnail";

const DayEvents = ({
    eventTitles,
    xPosition,
    yPosition
}) => {

    return <div
        style={{
            position: 'absolute',
            left: `${xPosition}px`,
            top: `${yPosition}px`
        }}
    >{
            eventTitles.map(({title,eventId}) => (<EventThumbnail key={eventId} title={title} />))
        }</div>

}

export default DayEvents;