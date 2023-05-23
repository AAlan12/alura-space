import styles from "./styles.module.scss";
import { Tags } from "../Tags";
import { Cards } from "../Cards";
import photos from "./photos.json";

export function Gallery() {
    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <Cards itens={photos} styles={styles} />
        </section>
    )
}