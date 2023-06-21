import { Header } from './components/Header';
import './global.css'

import styles from './App.module.css'
import { SideBar } from './components/Sidebar';
import { Post } from './components/Post';

function App() {  

  return (
    <div>
      <Header />
      <div className={styles.wrap}>
        <SideBar />
        <Post />
      </div>
    </div>
  )
}

export default App
