import sharedStyles from '../../Style/sharedStyles.module.scss';
import styles from './Welcome.module.scss';
import {useEffect, useMemo, useState} from "react";
import CustomVisibilitySensor from "../../Components/VisibilitySensor";

const WelcomeSection = () => {

    const words = 'Hello there!\nI\'m Zsuzsi.\nI develop stuff.';

    const [blink, setBlink] = useState(true);
    const [typed, setTyped] = useState<number>(0);

    const display = useMemo(() => {
        return words.substring(0, typed);
    }, [typed])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTyped((prev) => prev + 1)
        }, (display.endsWith('!') || display.endsWith('.')) ? 1000 : 300)

        if (typed === words[0].length) return () => clearTimeout(timeout);
    }, [display])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 600);

        return () => clearTimeout(timeout);
    }, [blink]);
    
    return (
        <CustomVisibilitySensor  elementID={'welcome-section'}>
            <section className={sharedStyles.section} id="welcome-section">
                <div className={styles.content}>
                    <div className={sharedStyles.title}>
                        {`${display}`}
                        {blink ? <span className={styles.blinker}>_</span> : ""}
                    </div>
                </div>
            </section>
        </CustomVisibilitySensor>
    )
}

export default WelcomeSection;