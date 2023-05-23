import styles from "./styles.module.scss";
import facebook from "../../assets/icons_footer/facebook.svg"
import instagram from "../../assets/icons_footer/instagram.svg"
import twitter from "../../assets/icons_footer/twitter.svg"


export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__icons}>
                <a
                    href="https://www.facebook.com/AluraCursosOnline/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook} alt="ícone do facebook" />
                </a>
                <a
                    href="https://twitter.com/aluraonline?lang=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt="ícone do twitter" />
                </a>
                <a
                    href="https://www.instagram.com/aluraonline/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="ícone do instagram" />
                </a>
            </div>
            <p>Desenvolvido por Alura</p>
        </footer>
    );
}
