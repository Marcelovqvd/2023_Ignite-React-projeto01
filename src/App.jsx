import { Header } from './compoments/Header'

import styles from './App.module.css'
import './global.css';
import { Sidebar } from './compoments/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </>
  )
}

export default App
