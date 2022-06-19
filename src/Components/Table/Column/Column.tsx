import React from 'react';
import styles from './Column.module.scss';
import {AccordionItemData} from "../../../Sections/Experience/Experience";

const Column = ({data}: { data: AccordionItemData }) => {

    return (
        <div className={styles.row}>
            <div className={styles.text}><span className={styles.title}>{data.title}</span>{`@ ${data.name}`}</div>
            <p className={styles.text}>{data.from} {data.to ? `- ${data.to}` : ''}</p>
            {data.description && <p className={`${styles.text} ${styles.list}`}>{data.description.map((item => (
                <ul>
                    <li>{item}</li>
                </ul>
            )))} </p>}
        </div>
    );
};

export default Column;