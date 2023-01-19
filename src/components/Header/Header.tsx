import styles from './Header.module.scss'
import logo from './../../../src/assets/img/logo.png'


const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.content}>
                    <h3>Todo manager</h3>
                    <p>Have a nice day!</p>
                </div>
            </div>
        </header>
    )
}

export default Header