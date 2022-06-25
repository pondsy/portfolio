import sharedStyles from "../../Style/sharedStyles.module.scss";
import styles from './Experience.module.scss';
import ExperienceTable from "../../Components/ExperienceTable";
import CustomMotionDiv from "../../Components/CustomMotionDiv";
import React, {ForwardedRef} from "react";
import {experience} from "../../Utils/data";

const ExperienceSection = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

    return (
        <div ref={ref} className={sharedStyles.section} id="experience-section">
            <CustomMotionDiv className={styles.container}>
                <div className={styles.experiences}>
                    {Object.entries(experience).map(([key, value], index) => (
                        <ExperienceTable title={key} data={value} key={index}/>
                    ))}
                </div>
                <div className={styles.download}>
                    <i className="fa-solid fa-download"/>
                    <a aria-label="CV download" rel="noreferrer" href="https://drive.google.com/file/d/1Bx2VEd4Wifp7_i1Ojoai9i5rgtXOVeYL/view?usp=sharing" target="_blank" download>{` download CV`}</a>
                </div>
            </CustomMotionDiv>
        </div>
    )
})

export default ExperienceSection;