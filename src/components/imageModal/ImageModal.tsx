import Modal from "react-modal";
import React from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: "90vh",
    },
};

Modal.setAppElement("#root");

interface Image {
    urls: {
        regular: string;
    }
    description: string;
    likes: number;
}
interface ImageModalProps {
    image: Image;
    openModal: boolean;
    closeModal: () => void;
}

const ImageModal: React.FC <ImageModalProps> = ({ image, openModal, closeModal }) => {
    const { urls, description, likes } = image;

    return (
        <Modal isOpen={openModal} onRequestClose={closeModal} style={customStyles} >
            <div>
                <img src={urls.regular} alt={description} />
                <p>{description}</p>
                <p>Likes: {likes}</p>
            </div>
        </Modal>
    );
}

export default ImageModal;