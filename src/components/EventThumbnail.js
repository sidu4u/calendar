
const EventThumbnail = ({ title }) => {


    return <div
        style={
            {
                width: '98px',
                overflow:'hidden',
                textOverflow:'ellipsis',
                background: 'lightBlue',
                borderRadius: '5px'
            }
        }
    >{title}</div>

}

export default EventThumbnail;