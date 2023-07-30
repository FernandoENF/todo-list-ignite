import {Header} from "./components/Header.tsx";
import './global.css'
import styles from './App.module.css'
import {TaskList} from "./components/TaskList.tsx";
function App() {
  return (
    <>
        <Header/>
        <main className={styles.wrapper}>
            <TaskList/>
        </main>
    </>
  )
}

export default App
