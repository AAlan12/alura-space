import styles from "./styles.module.scss";
import home from '../../assets/icons_menu/home.png'
import maisCurtidas from '../../assets/icons_menu/mais-curtidas.png'
import maisVistas from '../../assets/icons_menu/mais-vistas.png'
import novas from '../../assets/icons_menu/novas.png'
import surpreendaMe from '../../assets/icons_menu/surpreenda-me.png'

export function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="" />
                <a href="">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="" />
                <a href="">Mais Vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="" />
                <a href="">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
