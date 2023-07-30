import styles from './SearchBar.module.css'
import {PlusCircle} from "@phosphor-icons/react";
import {ChangeEvent, FormEvent, useState} from "react";

interface SearchBarProps {
    onCreateTask: (content: string) => void
}
export function SearchBar ({onCreateTask}: SearchBarProps) {
    const [content, setContent] = useState('')

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        onCreateTask(content)
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setContent(event.target.value)
    }

    return (
        <form className={styles.searchBar} onSubmit={handleCreateNewTask}>
            <input placeholder="Adicione uma nova tarefa" onChange={handleNewTaskChange} value={content}/>
            <button>Criar<PlusCircle size="1rem"></PlusCircle></button>
        </form>
    )
}