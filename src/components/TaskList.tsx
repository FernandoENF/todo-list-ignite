import styles from './TaskList.module.css'
import {SearchBar} from "./SearchBar.tsx";
import {useState} from "react";
import {Task} from "./Task.tsx";
import { v4 as uuidv4 } from 'uuid';
import {EmptyComponent} from "./EmptyComponent.tsx";
export interface TaskType {
    id: string;
    isComplete: boolean;
    content: string;
}

export function TaskList () {
    const [tasks, setTasks] = useState<TaskType[]>([])

    function createTask(content: string){
        setTasks(state => [{id: uuidv4(), isComplete: false, content}, ...state])
    }

    function checkTask(id: string) {
        setTasks(state =>
            state.map(task => task.id === id? {...task, isComplete: !task.isComplete} : task)
        )
    }
    function deleteTask(id: string) {
        setTasks(state => state.filter(task => task.id !== id))
    }

    return (
        <>
            <SearchBar onCreateTask={createTask}/>
            <section>
                <div className={styles.info}>
                    <div className={styles.createdTasks}>
                        <span>Tarefas criadas</span>
                        <span className={styles.badge}>{tasks.length}</span>
                    </div>
                    <div className={styles.finishedTasks}>
                        <span>Concluídas</span>
                        <span className={styles.badge}>{tasks.length > 0?
                        `${tasks.reduce((finished, task) => {
                            if(task.isComplete){
                                return finished + 1
                            } else {
                                return finished
                            }
                        },0)} de ${tasks.length}`
                            :
                            `${tasks.length}`
                        }</span>
                    </div>
                </div>
                <div className={styles.taskList}>
                    {tasks.length > 0?
                        tasks.map(task => {
                            return <Task key={task.id} task={task} onDeleteTask={deleteTask} onCheckTask={checkTask}/>
                        })
                        :
                        <EmptyComponent/>
                    }
                </div>
            </section>
        </>
    )
}