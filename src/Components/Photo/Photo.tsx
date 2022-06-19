import styles from './Photo.module.scss';
import {useMemo} from "react";

interface PhotoProps {
    image: string;
    alt: string;
}

const Photo = ({image, alt}: PhotoProps) => {

    const randomRotate = useMemo(() => {
        return Math.floor(Math.random() * (6 - -6 + 1) + -6);
    }, [])

    return (
        <div className={styles.photoWrapper} style={{
            transform: `rotate(${randomRotate}deg)`,
            boxShadow: randomRotate < 0 ? 'var(--color-action) -10px 10px' : '10px 10px var(--color-action)'
        }}>
            <img className={styles.image} src={image} alt={alt}/>
        </div>
    )
}

export default Photo;