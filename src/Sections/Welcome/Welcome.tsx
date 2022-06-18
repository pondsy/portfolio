import sharedStyles from '../../Style/sharedStyles.module.scss';

const WelcomeSection = () => {
    return (
        <section className={sharedStyles.section} id="welcome-section">
            <div>Zsuzsa Hudacsko</div>
            <div>Front end web developer</div>
        </section>
    )
}

export default WelcomeSection;