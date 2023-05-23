import styles from "./styles.module.scss";
import { Tags } from "../Tags";
import photos from "./photos.json";
import open from "../../assets/open.png"
import fav from "../../assets/fav.png"

export function Gallery() {
    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.gallery__cards}>
                {photos.map((photo) => {
                    return (
                        <li key={photo.id} className={styles.gallery__card}>
                            <img
                                className={styles.gallery__img}
                                src={photo.img}
                                alt={photo.title}
                            />
                            <p className={styles.gallery__description}>{photo.title}</p>
                            <div>
                                <p>{photo.credits}</p>
                                <span>
                                    <img src={fav} alt="Ícone coração de curtir" />
                                    <img src={open} alt="Ícone de abrir modal" />
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}