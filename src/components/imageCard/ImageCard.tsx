import css from "./ImageCard.module.css";
import React from "react";

interface Image {
  urls: {
    small: string;
  }
  id: number;
}

interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}

const ImageCard: React.FC <ImageCardProps> = ({ image, openModal }) => {
    const { urls } = image;

    return (
        <div>
		  <img 
          src={urls.small} 
          alt=""
          onClick={() => {
            openModal(image)
          }}
          className={css["card-img"]} 
          />
		</div>
    );
}

export default ImageCard;