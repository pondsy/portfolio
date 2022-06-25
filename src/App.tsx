import {AboutSection, ContactSection, ProjectsSection, WelcomeSection} from "./Sections";
import Header from "./Components/Header";
import styles from './App.module.scss';
import ExperienceSection from "./Sections/Experience";
import {createRef, useCallback, useEffect, useMemo, useState} from "react";
import {setTheme} from "./Utils/utils";

function App() {

    const ref = createRef<HTMLDivElement>();
    const [y, setY] = useState<number>(0);
    const [positions, setPositions] = useState<number[]>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [offsetHeight, setOffsetHeight] = useState<number>(0);

    const sectionRefs = useMemo(() => {
        return {
            welcome: createRef<HTMLDivElement>(),
            about: createRef<HTMLDivElement>(),
            experience: createRef<HTMLDivElement>(),
            projects: createRef<HTMLDivElement>(),
            contact: createRef<HTMLDivElement>()
        }
    }, [])

    const onScroll = useCallback(() => {

        if (!ref.current || positions === undefined) return;
        let scrollPosition = ref.current.scrollTop;

        if (!scrollPosition) return;
        let scrollingDown = true;

        if (y > scrollPosition) {
            scrollingDown = false;
        } else if (y < scrollPosition) {
            scrollingDown = true;
        }
        setY(scrollPosition);

        positions.forEach((position, index) => {
            if (scrollingDown && scrollPosition > position) {
                setActiveIndex(index+1)
            } else if (!scrollingDown && scrollPosition+offsetHeight > position) {
                setActiveIndex(index)
            }
        })
    }, [ref])

    useEffect(() => {
        const div = ref.current;
        if (div) {
            setOffsetHeight(div.offsetHeight);
            div.addEventListener("scroll", onScroll);
        }
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [onScroll]);

    useEffect(() => {
        const values: number[] = [];
        Object.entries(sectionRefs).map(([key, value], index) => {
            const positionY = value.current?.offsetTop;
            const height = value.current?.clientHeight;
            if (positionY !== undefined && height) {
                values.push(positionY + height / 2)
            }
        })

        setPositions(() => values);
    }, [sectionRefs]);

    return (
        <div className={styles.app} ref={ref}>
            <Header setTheme={setTheme} activeIndex={activeIndex}/>
            <div className={styles.sections}>
                <WelcomeSection ref={sectionRefs.welcome}/>
                <AboutSection ref={sectionRefs.about}/>
                <ExperienceSection ref={sectionRefs.experience}/>
                <ProjectsSection ref={sectionRefs.projects}/>
                <ContactSection ref={sectionRefs.contact}/>
            </div>
        </div>
    );
}

export default App;
