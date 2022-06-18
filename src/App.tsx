import {ContactSection, ProjectsSection, WelcomeSection} from "./Sections";
import Header from "./Components/Header";
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <div className={styles.sections}>
                <WelcomeSection/>
                <ProjectsSection/>
                <ContactSection/>
            </div>
        </div>
    );
}

export default App;
