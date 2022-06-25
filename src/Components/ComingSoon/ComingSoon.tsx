import styles from './ComingSoon.module.scss';

interface ComingSoonProps {
    project: string;
}

const ComingSoon = ({project}: ComingSoonProps) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={`${styles.word} ${styles.first}`}>{project}</span>
                <span className={`${styles.word} ${styles.second}`}>coming</span>
                <span className={`${styles.word} ${styles.third}`}>soon</span>
            </h2>
        </div>
    )
}

export default ComingSoon;