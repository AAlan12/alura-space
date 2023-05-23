import styles from "./styles.module.scss";
import photos from "../Gallery/photos.json"

export function Tags({ tags, filterPhotos, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return <li key={tag} onClick={() => filterPhotos(tag)}>
            {tag}
          </li>
        })}
        <li onClick={() => setItens(photos)}>Todas</li>
      </ul>
    </div>
  )
}
