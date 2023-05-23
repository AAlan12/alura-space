import styles from "./styles.module.scss";
import photos from "./photos-pupular.json"

export function Popular() {
  return (
    <aside className={styles.popular}>
        <h2>Populares</h2>
        <ul className={styles.popular__img}>
            {
                photos.map((photo) => {
                    return (
                        <li key={photo.id}>
                            <img src={photo.path} alt={photo.alt} />
                        </li>
                    );
                })
            }
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
