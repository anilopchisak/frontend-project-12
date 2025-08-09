const ModalChannelForm = ({
    children,
    handleConfirm,
    handleCancel,
    showModal,

}) => {
    const handleShowModal = () => setShowModal(true)
    
    const handleCancel = () => setShowModal(false)
    return (
        <ModalWindow 
            show={showModal} 
            onConfirm={handleConfirm}
            onCancel={handleCancel} 
            header={t('chat.titles.addChannel')}
        >
            <FormLayout 
                initialValues={{ name: '' }}
                validationSchema={() => newChannelNameValidationSchema(t)}
                onSubmit={handleConfirm}
                onCancel={handleCancel}
                formType={formTypes.modal}
            >
                <FormField 
                    label={t('chat.placeholders.newChannel')}
                    name='name'
                    autoFocus={true}
                />
            </FormLayout>
        </ModalWindow>
    )
}

export default ModalChannelForm