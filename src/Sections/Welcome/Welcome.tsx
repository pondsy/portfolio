import sharedStyles from '../../Style/sharedStyles.module.scss';
import styles from './Welcome.module.scss';
import {useEffect, useState} from "react";

const WelcomeSection = () => {

    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    const words = ["Hello there!", "I'm Zsuzsi.", "I develop stuff."];

    useEffect(() => {console.log(wordIndex)}, [wordIndex])

    useEffect(() => {
        if (reverse && wordIndex === words.length - 1 && letterIndex === 0) {
            /**
             * restarting with words
             */
            setWordIndex(0);
            setReverse(false);
            return;
        }

        if (letterIndex === words[wordIndex].length + 1 && !reverse) {
            /**
             * deleting typed words
             */
            setReverse(true);
            return;
        }

        if (letterIndex === 0 && reverse) {
            /**
             * typing words
             */
            setReverse(false);
            setWordIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setLetterIndex((prev) => prev + (reverse ? -1 : 1));
        }, (letterIndex === words[wordIndex].length) ? 600 : reverse ? 100 : 300);

        return () => clearTimeout(timeout);
    }, [letterIndex, wordIndex, reverse]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout);
    }, [blink]);
    
    return (
        <section className={sharedStyles.section} id="welcome-section">
            <div className={sharedStyles.title}>
                {`${words[wordIndex].substring(0, letterIndex)}`}
                {blink ? <span className={styles.blinker}>_</span> : ""}
            </div>
        </section>
    )
}

export default WelcomeSection;