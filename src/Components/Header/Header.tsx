import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                Hi
            </div>
            <div>
                About me
            </div>
            <div>
                Projects
            </div>
            <div>
                Contact
            </div>
        </div>
    )
}

export default Header;