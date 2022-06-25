import sharedStyles from '../../Style/sharedStyles.module.scss';
import styles from './Welcome.module.scss';
import React, {ForwardedRef, useEffect, useMemo, useState} from "react";
import {words} from "../../Utils/data";

const WelcomeSection = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

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
        <div className={sharedStyles.section} ref={ref} id="welcome-section">
            <div className={styles.content}>
                <div className={sharedStyles.title}>
                    {`${display}`}
                    {blink ? <span className={styles.blinker}>_</span> : ""}
                </div>
            </div>
        </div>
    )
})

export default WelcomeSection;