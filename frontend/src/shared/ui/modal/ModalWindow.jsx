import Modal from 'react-bootstrap/Modal'

const ModalWindow = ({
    children,
    show, 
    onCancel,
    header
}) => {
    
    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default ModalWindow
