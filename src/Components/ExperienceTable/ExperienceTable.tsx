import React from 'react';
import ExperienceColumn from "./ExperienceColumn";
import styles from './ExperienceTable.module.scss'
import CustomMotionDiv from "../CustomMotionDiv";
import {AccordionItemData} from "../../Utils/types";

const ExperienceTable = ({title, data}: { title: string, data: AccordionItemData[] }) => {

    return (
        <CustomMotionDiv initialX={title === "Work" ? -100 : 100} className={styles.container}>
            <div className={styles.table}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.accordionContent}>
                    {data.map((item, i) => (
                        <ExperienceColumn data={item} type={title} key={i}/>
                    ))}
                </div>
            </div>
        </CustomMotionDiv>
    )
}

export default ExperienceTable;