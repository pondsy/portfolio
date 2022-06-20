import React from 'react';
import styles from './Column.module.scss';
import {AccordionItemData} from "../../../Sections/Experience/Experience";

const Column = ({data}: { data: AccordionItemData }) => {

    return (
        <div className={styles.row}>
            <p className={`${styles.title} ${styles.inline}`}>{data.title}</p>
            <p className={`${styles.text} ${styles.inline}`}>{`@ ${data.name}`}</p>
            <p className={styles.text}>{data.from} - {data.to ? ` ${data.to}` : 'present'}</p>
            <ul>
                {data.description && <p className={`${styles.text} ${styles.list}`}>
                    {data.description.map(item => (<li key={item}>{item}</li>))}
                </p>
                }
                </ul>
        </div>
    );
};

export default Column;