import { Header } from './compoments/Header'

import styles from './App.module.css'
import './global.css';
import { Sidebar } from './compoments/Sidebar';
import { Post } from './compoments/Post';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </>
  )
}

export default App
