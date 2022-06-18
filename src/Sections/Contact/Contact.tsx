import sharedStyles from "../../Style/sharedStyles.module.scss";
import CustomVisibilitySensor from "../../Components/VisibilitySensor";

const ContactSection = () => {
    return (
        <CustomVisibilitySensor  elementID={'contact-section'}>
            <section className={sharedStyles.section} id="contact-section">
                Here comes the contact
            </section>
        </CustomVisibilitySensor>
    )
}

export default ContactSection;