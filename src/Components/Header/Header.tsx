import styles from './Header.module.scss';
import {useState} from "react";
import ThemeToggle from "../Toggle/Toggle";
import React from 'react';
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import ReactDOM from "react-dom";
import HamburgerIcon from "./HamburgerIcon";
import {navigation} from "../../Utils/data";

interface HeaderProps {
    setTheme: (isDark: boolean) => void;
    activeIndex: number;
}

export interface NavProps {
    links : {[key:string]: string};
    isOpen?: boolean;
    closeMenu: () => void;
    scrollInView: (value: any) => void;
}

const Header = ({setTheme, activeIndex}: HeaderProps) => {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    const scrollIntoView = (elementId: string) => {
        if (hamburgerIsOpen) setHamburgerIsOpen(false);
        const element = document.getElementById(elementId);
        if (!element) return;
        element.scrollIntoView({behavior: 'smooth'});
    }

    const toggleHamburgerMenu = () => {
        setHamburgerIsOpen((prev) => !prev)
    }

    const menu = (
        <div className={styles.header}>
            <ThemeToggle setTheme={setTheme}/>
            <nav className={styles.menu}>
                {Object.entries(navigation).map(([key, value], index) => (
                    <div className={`${styles.menuItem} ${activeIndex === index ? styles.active : ''}`} key={index}>
                        <div onClick={() => scrollIntoView(value)}>{key}</div>
                        <div className={styles.underline}/>
                    </div>
                ))}
            </nav>
            <HamburgerIcon onClick={toggleHamburgerMenu} isOpen={hamburgerIsOpen}/>
            <HamburgerMenu links={navigation} scrollInView={scrollIntoView} isOpen={hamburgerIsOpen} closeMenu={toggleHamburgerMenu}/>
        </div>
    )
    return ReactDOM.createPortal(menu, document.body);
}

export default Header;