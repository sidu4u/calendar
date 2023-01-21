
const Modal = ({ children, isOpen }) => {
    return <div style={
        {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            visibility: !isOpen?'hidden':'initial'
        }
    }>
        {children}
    </div>
}

export default Modal;