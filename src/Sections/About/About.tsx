import sharedStyles from "../../Style/sharedStyles.module.scss";
import styles from "./About.module.scss";
import CustomVisibilitySensor from "../../Components/VisibilitySensor";
import CustomMotionDiv from "../../Components/CustomMotionDiv";
import Photo from "../../Components/Photo";
import profileImage from '../../resources/img/coding_with_a_cat.jpg';
import {DateTime} from 'luxon';
import {useMemo} from "react";

const AboutSection = () => {

    const diff = useMemo(() => {
        const date2 = DateTime.fromISO("2018-09-01T08:00");
        return DateTime.now().diff(date2, ["years", "months"])
    }, [])

    return (
        <CustomVisibilitySensor elementID={'about-section'}>
            <section className={sharedStyles.section} id="about-section">
                <div className={styles.innerSection}>
                    <Photo image={profileImage} alt={'girl with a computer and a cat on her lap'}/>
                    <CustomMotionDiv className={styles.content}>
                        {diff && <div className={styles.aboutText}>
                            {`I'm a front end developer based in the Netherlands (and sometimes in Hungary, France, etc.
                                I've been developing professionally since 2018 august 
                                (${diff.years} years, and ${Math.floor(diff.months)} months).
                                I love the challenge of development, seeing design come together with functionality and the detective-work
                                of finding and fixing issues.`}
                        </div>}
                        <div className={styles.links}>
                            <a href="https://github.com/Panduss" rel="noreferrer" target="_blank"
                               aria-label="github-link"><i className="fa-brands fa-github-square"/></a>
                            <a href="https://www.linkedin.com/in/zsuzsa-hudacsko-11b478109/" rel="noreferrer"
                               target="_blank" aria-label="github-link"><i className="fa-brands fa-linkedin"/></a>
                            <a href="https://www.last.fm/user/Panduss" rel="noreferrer" target="_blank"
                               aria-label="github-link"><i className="fa-brands fa-lastfm-square"/></a>
                        </div>
                    </CustomMotionDiv>
                </div>
            </section>
        </CustomVisibilitySensor>
    )
}

export default AboutSection;