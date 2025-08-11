import Modal from 'react-bootstrap/Modal'
import {useDispatch, useSelector} from "react-redux";
import {closeModal, selectModal} from "../../../features/modal/model/modalSlice.js";
import AddModal from "../../../features/modal/ui/channels/addModal/AddModal.jsx";
import RenameModal from "../../../features/modal/ui/channels/renameModal/RenameModal.jsx";
import DeleteModal from "../../../features/modal/ui/channels/deleteModal/DeleteModal.jsx";

const modalComponents = {
    create: AddModal,
    rename: RenameModal,
    delete: DeleteModal,
}

const ModalWindow = () => {
    const { isOpen, type, props } = useSelector(selectModal)
    const dispatch = useDispatch()

    if (!isOpen || !type) return null

    const handleClose = () => {
        dispatch(closeModal())
    }

    const Component = modalComponents[type]
    if (!Component) return null

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Component {...props} onCancel={handleClose}/>
            </Modal.Body>
        </Modal>
    )
}

export default ModalWindow
