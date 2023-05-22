import styles from "./styles.module.scss";
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.header__container}>
                <input 
                    className={styles.header__input} 
                    type="text" placeholder="O que você procura?" />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}