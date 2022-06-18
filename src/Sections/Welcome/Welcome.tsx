import sharedStyles from '../../Style/sharedStyles.module.scss';
import styles from './Welcome.module.scss';
import {useEffect, useState} from "react";

const WelcomeSection = () => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    const words = ["Hello there!", "I'm Zsuzsi.", "I develop stuff."];

    useEffect(() => {
        if (reverse && index === words.length - 1 && subIndex === 0) {
            /**
             * restarting with words
             */
            setIndex(0);
            setReverse(false);
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            /**
             * deleting typed words
             */
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            /**
             * typing words
             */
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
            150, Math.random() * 350));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout);
    }, [blink]);


    return (
        <section className={sharedStyles.section} id="welcome-section">
            <div className={sharedStyles.title}>
                {`${words[index].substring(0, subIndex)}`}
                {blink ? <span className={styles.blinker}>_</span> : ""}
            </div>
        </section>
    )
}

export default WelcomeSection;