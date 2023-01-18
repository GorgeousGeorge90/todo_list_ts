import styles from './Header.module.scss'


const Header = () => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img/>
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