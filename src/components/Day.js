
const Day = ({ date, rowNumber, columnNumber }) => {

    return <div style={{
        width: '100px',
        height: '100px',
        border: '1px solid red',
    }} data-date={date} data-rownumber={rowNumber} data-columnnumber={columnNumber} >{date}</div>
}

export default Day;