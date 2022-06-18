import {AboutSection, ContactSection, ProjectsSection, WelcomeSection} from "./Sections";
import Header from "./Components/Header";
import styles from './App.module.scss';

function App() {

    const colors = {
        light: {
            '--color-primary': '#bbd4ce',
            '--color-secondary': '#fdebd3',
            '--color-action': '#f4aea0',
            '--color-primary-text': '#264e70',
            '--color-secondary-text': '#679186',
            '--color-action-text': '#b1706c'
        },
        dark: {
            '--color-primary': '#264e70',
            '--color-secondary': '#679186',
            '--color-action': '#b1706c',
            '--color-primary-text': '#bbd4ce',
            '--color-secondary-text': '#fdebd3',
            '--color-action-text': '#f4aea0'
        }
    }

    const setTheme = (isDark: boolean) => {
        /**
        * Changes the properties which are used the css based on dark / light theme.
        */
        const root = document.querySelector<HTMLInputElement>(':root');
        if (!root) throw Error("Could not retrieve root selector");
        Object.entries(colors[isDark ? 'dark' : 'light']).map(([key, value]) => {
            root.style.setProperty(key, value);
        })
    }

    return (
        <div className={styles.app}>
            <Header setTheme={setTheme}/>
            <div className={styles.sections}>
                <WelcomeSection/>
                <AboutSection/>
                <ProjectsSection/>
                <ContactSection/>
            </div>
        </div>
    );
}

export default App;
