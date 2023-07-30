import styles from "./EmptyComponent.module.css";
import clipboardIcon from "../assets/Clipboard.svg";

export function EmptyComponent(){
    return (
        <div className={styles.emptyElement}>
            <img src={clipboardIcon} alt=""/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}