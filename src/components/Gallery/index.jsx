import styles from "./styles.module.scss";
import { Tags } from "../Tags";
import { Cards } from "../Cards";
import photos from "./photos.json";
import { useState } from "react";

export function Gallery() {

    const [itens, setItens] = useState(photos);
    const tags = [...new Set(photos.map((val) => val.tag))]

    const filterPhotos = (tag) => {
        const newPhotos = photos.filter((photo) => {
          return photo.tag === tag;
        });
    
        setItens(newPhotos);
      };

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} setItens={setItens} />
            <Cards itens={itens} styles={styles} />
        </section>
    )
}