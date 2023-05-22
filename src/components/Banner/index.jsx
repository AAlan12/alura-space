import styles from "./styles.module.scss";
import banner from '../../assets/banner.png'

export function Banner() {
    return (
        <div className={styles.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
        </div>
    )
}
