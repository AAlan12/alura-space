import styles from "./styles.module.scss";
import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo do Alura Space" />
            <div className={styles.header__container}>
                <input 
                    className={styles.header__input} 
                    type="text" placeholder="O que você procura?" />
                <img src={Search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}