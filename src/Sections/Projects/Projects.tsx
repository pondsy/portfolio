import sharedStyles from "../../Style/sharedStyles.module.scss";
import CustomVisibilitySensor from "../../Components/VisibilitySensor";

const ProjectsSection = () => {

    return (
        <CustomVisibilitySensor  elementID={'projects-section'}>
            <section className={sharedStyles.section} id="projects-section">
                Here comes the projects
            </section>
        </CustomVisibilitySensor>
    )
}

export default ProjectsSection;