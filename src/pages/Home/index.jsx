import styles from "./styles.module.scss";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Banner } from "../../components/Banner";

export function Home() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <Banner /> 
                </section>
            </main>

        </>

    )
}