import rocket from "../assets/rocket.svg";
import styles from "./Header.module.css"
export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocket} alt="logo do projeto (foguete)"/>
                <h1>
                    to
                    <strong>
                        do
                    </strong>
                </h1>
            </div>
        </header>
    )
}