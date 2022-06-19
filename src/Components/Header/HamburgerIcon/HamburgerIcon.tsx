import styles from "./HamburgerIcon.module.scss";

interface HamburgerProps {
    isOpen: boolean;
    onClick?: () => void;
}

const HamburgerIcon = ({isOpen, onClick}: HamburgerProps) => {

    return (
        <div onClick={onClick} className={`${styles.hamburger} ${isOpen ? styles.active : '' }`}>
            <span className={`${styles.bar} ${isOpen ? styles.active : '' }`}/>
            <span className={`${styles.bar} ${isOpen ? styles.active : '' }`}/>
            <span className={`${styles.bar} ${isOpen ? styles.active : '' }`}/>
            <span className={`${styles.bar} ${isOpen ? styles.active : '' }`}/>
        </div>
    )
}

export default HamburgerIcon;