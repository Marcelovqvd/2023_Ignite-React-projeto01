import { Header } from './compoments/Header'

import styles from './App.module.css'
import './global.css';
import { Sidebar } from './compoments/Sidebar';

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
           
        </main>
      </div>
    </div>
  )
}

export default App
