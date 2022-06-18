import sharedStyles from "../../Style/sharedStyles.module.scss";
import CustomVisibilitySensor from "../../Components/VisibilitySensor";

const AboutSection = () => {

    return (
        <CustomVisibilitySensor elementID={'about-section'}>
            <section className={sharedStyles.section} id="about-section">
                Here comes the about
            </section>
        </CustomVisibilitySensor>

    )
}

export default AboutSection;