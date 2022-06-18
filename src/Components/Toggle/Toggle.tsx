import {useEffect, useState} from "react";
import styles from './Toggle.module.scss';
import anime from "animejs";

interface ThemeToggleProps {
    setTheme: (isDark: boolean) => void;
}

const ThemeToggle = ({setTheme}: ThemeToggleProps) => {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const moonPath = "M15 22.5C15 34.9264 22.5 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C22.5 0 15 10.0736 15 22.5Z";
    const sunPath = "M45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5Z";

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    }

    const animateSvg = (isDark: boolean) => {
        const themeSwitch = document.querySelector("#themeSwitch")
        anime.timeline({
            duration: 750,
            easing: "easeOutExpo",
            rotate: 180
        }).add({
            targets: ".sun",
            d: [
                {value: isDark ? moonPath : sunPath}
            ]
        }).add({
            targets: themeSwitch,
            rotate: isDark ? 0 : 360
        })
    }

    useEffect(() => {
        setTheme(isDarkTheme);
        animateSvg(isDarkTheme);
    }, [isDarkTheme])

    return (
        <button className={styles.toggle} onClick={toggleTheme}>
            <svg id="themeSwitch" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="sun" d="M45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5Z" fill="#FCCF5B"/>
            </svg>
        </button>
    );
}

export default ThemeToggle;