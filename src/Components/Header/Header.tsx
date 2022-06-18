import styles from './Header.module.scss';
import {useLayoutEffect} from "react";
import ThemeToggle from "../Toggle/Toggle";
import React from 'react';
import {useActiveSections} from "../../Hooks/useActiveSection";

interface HeaderProps {
    setTheme: (isDark: boolean) => void
}

const Header = ({setTheme}: HeaderProps) => {

    const {activeId} = useActiveSections();

    const navigation = {
        'Hi': 'welcome-section',
        'About me': 'about-section',
        'Projects': 'projects-section',
        'Contact': 'contact-section'
    }

    const scrollIntoView = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (!element) return;
        element.scrollIntoView({behavior: 'smooth'});
    }

    useLayoutEffect(() => {
        console.log('activeId', activeId)
    }, [activeId])

    return (
        <div className={styles.header}>
            <ThemeToggle setTheme={setTheme}/>
            <nav className={styles.navBar}>
                {Object.entries(navigation).map(([key, value], index) => (
                    <div className={`${styles.menuitem} ${activeId === value ? styles.active : ''}`} key={index}>
                        <div onClick={() => scrollIntoView(value)}>{key}</div>
                        <div className={styles.underline}/>
                    </div>

                ))}
            </nav>
        </div>
    )
}

export default Header;