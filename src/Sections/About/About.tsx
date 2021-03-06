import sharedStyles from "../../Style/sharedStyles.module.scss";
import styles from "./About.module.scss";
import CustomMotionDiv from "../../Components/CustomMotionDiv";
import Photo from "../../Components/Photo";
import profileImage from '../../resources/img/coding_with_a_cat.jpg';
import {DateTime} from 'luxon';
import React, {ForwardedRef, useMemo} from "react";
import {DateDiff} from "../../Utils/utils";

const AboutSection = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {

    const dateDiff = useMemo(() => {
        return DateDiff(DateTime.now(), DateTime.fromISO("2018-09-01T08:00"))
    }, [])

    return (
        <div ref={ref} className={sharedStyles.section} id="about-section">
            <div className={styles.innerSection}>
                <Photo image={profileImage} alt={'girl with a computer and a cat on her lap'}/>
                <div className={styles.content}>
                    {dateDiff && <CustomMotionDiv initialX={-100} className={styles.aboutText}>
                        {`I'm a front-end developer based in the Netherlands (and sometimes in Hungary, France... :)
                            I've been working professionally since 2018 august 
                            (${dateDiff.years} years, and ${Math.floor(dateDiff.months)} months).
                            I love the challenge of development, seeing design come together with functionality and the detective-work
                            of finding and fixing issues.`}
                    </CustomMotionDiv>}
                    <div className={styles.links}>
                        <a href="https://github.com/Panduss" rel="noreferrer" target="_blank" aria-label="github-link"><i className="fa-brands fa-github-square"/></a>
                        <a href="https://www.linkedin.com/in/zsuzsa-hudacsko-11b478109/" rel="noreferrer" target="_blank" aria-label="github-link"><i className="fa-brands fa-linkedin"/></a>
                        <a href="https://www.last.fm/user/Panduss" rel="noreferrer" target="_blank" aria-label="github-link"><i className="fa-brands fa-lastfm-square"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutSection;