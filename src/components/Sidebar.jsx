import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover} >

            </div>

            <div className={styles.profile}>
                <Avatar src="https://github.com/marcelovqvd.png" />
                <strong>Marceo Vasques Vedroni</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}