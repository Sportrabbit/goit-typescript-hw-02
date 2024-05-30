import css from "./ImageCard.module.css";

export default function ImageCard({ image, openModal }) {
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