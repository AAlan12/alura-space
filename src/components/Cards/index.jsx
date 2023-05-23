import open from "../../assets/open.png"
import fav from "../../assets/fav.png"

export function Cards({ itens, styles}) {
    return (
        <ul className={styles.gallery__cards}>
            {itens.map((item) => {
                return (
                    <li key={item.id} className={styles.gallery__card}>
                        <img
                            className={styles.gallery__img}
                            src={item.img}
                            alt={item.title}
                        />
                        <p className={styles.gallery__description}>{item.title}</p>
                        <div>
                            <p>{item.credits}</p>
                            <span>
                                <img src={fav} alt="Ícone coração de curtir" />
                                <img src={open} alt="Ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}
