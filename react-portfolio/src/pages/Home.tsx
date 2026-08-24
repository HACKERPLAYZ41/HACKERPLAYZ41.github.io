import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ProjectsGrid from '../components/ProjectsGrid';
import TechStack from '../components/TechStack';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth',
                    });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <>
            <Hero />
            <StatsBar />
            <ProjectsGrid />
            <TechStack />
            <Services />
            <Contact />
        </>
    );
};

export default Home;
