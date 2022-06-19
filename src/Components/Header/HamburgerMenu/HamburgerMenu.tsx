import styles from "./HamburgerMenu.module.scss";
import React from "react";
import {NavProps} from "../Header";

const HamburgerMenu = ({links, isOpen, scrollInView}: NavProps) => {
    return (
        <React.Fragment>
            <div className={styles.overlay} style={{display : isOpen ? 'flex' : 'none'}}>
                {Object.entries(links).map(([key, value], index) => (
                    <div className={styles.hamburgerItem} style={{display : isOpen ? 'inline' : 'none'}} key={index}>
                        <div style={{display : isOpen ? 'inline' : 'none'}}>
                            <div className={styles.item} onClick={() => scrollInView(value)}>{key}</div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default HamburgerMenu;