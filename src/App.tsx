import {AboutSection, ContactSection, ProjectsSection, WelcomeSection} from "./Sections";
import Header from "./Components/Header";
import styles from './App.module.scss';

function App() {

    const colors = {
        light: {
            '--color-primary': '#9b9b7a',
            '--color-secondary': '#d08c60',
            '--color-action': '#797d62',
            '--color-light-text': '#FDF4DC',
            '--color-dark-text': '#4f3130',
        },
        dark: {
            '--color-primary': '#4f3130',
            '--color-secondary': '#FDF4DC',
            '--color-action': '#797d62',
            '--color-light-text': '#d08c60',
            '--color-dark-text': '#9b9b7a',
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
