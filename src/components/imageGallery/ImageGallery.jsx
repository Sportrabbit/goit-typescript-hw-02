import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
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