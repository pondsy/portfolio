import {useState, useEffect, RefObject} from 'react'

const useIntersection = (element: RefObject<HTMLElement>, rootMargin: string, id: string) => {
    const [isVisible, setState] = useState(false);
    const [activeId, setActiveId] = useState<string>('welcome-section');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.disconnect();
    }, []);

    return isVisible;
};
