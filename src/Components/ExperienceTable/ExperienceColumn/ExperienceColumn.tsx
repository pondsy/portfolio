import React, {useMemo} from 'react';
import styles from './ExperienceColumn.module.scss';
import {DateDiff} from "../../../Utils/utils";
import {DateTime} from "luxon";
import {AccordionItemData} from "../../../Utils/types";

const ExperienceColumn = ({data, type}: { data: AccordionItemData, type: string }) => {

    const date1 = data.to ? DateTime.fromFormat(`01/${data.to}`, "dd/MM/yyyy") : DateTime.now();
    const date2 = DateTime.fromFormat(`01/${data.from}`,"dd/MM/yyyy");

    const dateDiff = useMemo(() => {
        const diff = DateDiff(date1, date2);
        return `${diff.years} ${diff.years > 1 ? 'years' : 'year'}, and ${Math.floor(diff.months)} ${diff.months > 1 ? 'months' : 'month'}`
    }, [])

    return (
        <div className={styles.row}>
            <p className={`${styles.title} ${styles.inline}`}>{data.title}</p>
            <p className={`${styles.text} ${styles.inline}`}>{`@ ${data.name}`}</p>
            <p className={styles.text}>{data.from} - {data.to ? ` ${data.to}` : 'present'} {type === 'Work' && `(${dateDiff})`}</p>
            <ul>
                {data.description && <p className={`${styles.text} ${styles.list}`}>
                    {data.description.map(item => (<li key={item}>{item}</li>))}
                </p>
                }
                </ul>
        </div>
    );
};

export default ExperienceColumn;