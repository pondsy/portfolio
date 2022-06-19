import React from 'react';
import Column from "./Column";
import styles from './Table.module.scss'
import {AccordionItemData} from "../../Sections/Experience/Experience";
import CustomMotionDiv from "../CustomMotionDiv";

const Table = ({title, data}: { title: string, data: AccordionItemData[] }) => {

    return (
        <CustomMotionDiv initialX={title === "Work experience" ? -100 : 100} className={styles.container}>
            <div className={styles.table}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.accordionContent}>
                    {data.map((item, i) => (
                        <Column data={item} key={i}/>
                    ))}
                </div>
            </div>
        </CustomMotionDiv>
    )
}

export default Table;