import ImageCard from "../imageCard/ImageCard";
import React from "react";
import css from "./ImageGallery.module.css";

interface Images {
    id: number;
}

interface Images extends Array<Image> {}

interface ImageGalleryProps {
    images: Images;
    openModal: boolean;
}

const ImageGallery: React.FC <ImageGalleryProps> = ({ images, openModal }) => {
    return (
        <div>
            <ul className={css["img-gallery"]}>
                {images.map((image) => (
                    <ImageCard key={image.id} image={image} openModal={openModal} />
                ))}
            </ul>
        </div>
    );
}

export default ImageGallery;