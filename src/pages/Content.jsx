import { useEffect, useRef, useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';

export const Content = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const section = sectionRef.current;

        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);
    return (
        <section
            ref={sectionRef}
            className={`content_wrapper ${isVisible ? 'is-visible' : ''}`}
            
        >
            <hr className='content_hr' />
            <div className='content_wrapper'>

                <div className='container'>
                    <div className='content1'>
                        <CodeIcon style={{ color: '#0075ce', fontSize: '2rem' }} />
                        <p>Web Development</p>
                    </div>
                    <div className='content1'>
                        <PaletteIcon style={{ color: '#ce000e', fontSize: '2rem' }} />
                        <p>UI/UX Design</p>
                    </div>
                    <div className='content1'>
                        <BrushIcon style={{ color: '#00ce18', fontSize: '2rem' }} />
                        <p>Branding</p>
                    </div>
                </div>
            </div>
            <hr className='content_hr' />
        </section>
    )
}
