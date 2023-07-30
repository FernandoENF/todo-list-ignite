import {Check, Trash} from "@phosphor-icons/react";
import styles from "./Task.module.css"
import {TaskType} from "./TaskList.tsx";

interface TaskProps {
    task: TaskType;
    onDeleteTask: (arg: string) => void;
    onCheckTask: (arg: string) => void;
}
export function Task ({task, onDeleteTask, onCheckTask}: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    function handleCheckTask () {
        onCheckTask(task.id)
    }

    return (
        <article className={styles.task}>
            <label>
                <input type="checkbox" checked={task.isComplete} onChange={handleCheckTask}/>
                <span>
                    <Check weight="bold"/>
                </span>
            </label>
            <p className={task.isComplete ? styles.checkedTask : undefined}>{task.content}</p>
            <button onClick={handleDeleteTask}>
                <Trash/>
            </button>
        </article>
    )
}