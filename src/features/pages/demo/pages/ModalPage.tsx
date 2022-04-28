import React, { useCallback, useState } from "react";
import { Button, Heading, Modal, ModalBody, ModalFooter, ModalHeader } from "src/library";

const ModalPage = () => {
    const [modal, setModal] = useState(false);
    const openModal = useCallback(() => {
        setModal(true);
    }, []);
    const closeModal = useCallback(() => {
        setModal(false);
    }, []);
    const [modalWithoutHeader, setModalWithoutHeader] = useState(false);
    const openModalWithoutHeader = useCallback(() => {
        setModalWithoutHeader(true);
    }, []);
    const closeModalWithoutHeader = useCallback(() => {
        setModalWithoutHeader(false);
    }, []);
    const doNothing = () => void 0;

    return (
        <div className="page">
            <div className="page-name">Modal</div>
            <div className="page-content">
                <Button type="link" onClick={openModal}>
                    Open Modal
                </Button>
                <Button type="link" onClick={openModalWithoutHeader}>
                    Open Modal without header
                </Button>
                {modal && (
                    <Modal close={closeModal}>
                        <ModalHeader title="Title" section="Section" close={closeModal} />
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, consectetur
                            corporis distinctio dolores, error, fugit id ipsum iusto nesciunt placeat porro provident
                            quaerat quasi ratione reprehenderit sunt vero voluptatum?
                        </ModalBody>
                        <ModalFooter align="right">
                            <div className="modal-buttons-right">
                                <Button color="primary" size="small" onClick={doNothing}>
                                    Confirm
                                </Button>
                            </div>
                        </ModalFooter>
                    </Modal>
                )}
                {modalWithoutHeader && (
                    <Modal close={closeModalWithoutHeader}>
                        <ModalBody>
                            <Heading level="4">Modal title</Heading>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, consectetur
                            corporis distinctio dolores, error, fugit id ipsum iusto nesciunt placeat porro provident
                            quaerat quasi ratione reprehenderit sunt vero voluptatum?
                        </ModalBody>
                        <ModalFooter align="right">
                            <div className="modal-buttons-right">
                                <Button color="primary" size="small" onClick={doNothing}>
                                    Confirm
                                </Button>
                            </div>
                        </ModalFooter>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default ModalPage;
