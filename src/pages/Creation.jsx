import { useEffect, useRef, useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import image1 from '../assets/logo/img.png';

const cardContent = [
    {
        image: image1,
        title: 'Business Website',
        link: '/creation/website-development',
    },
    {
        image: image1,
        title: 'Brand Identity & Logo Design',
        link: '/creation/brand-identity',
    },
    {
        image: image1,
        title: 'Social Media & Marketing Design',
        link: '/creation/social-media-design',
    },
    {
        image: image1,
        title: 'E-commerce Website',
        link: '/creation/ecommerce-website',
    },
    {
        image: image1,
        title: 'Landing Page Design',
        link: '/creation/landing-page-design',
    },
];

// Copies before and after the original cards create the loop.
const carouselCards = [...cardContent, ...cardContent, ...cardContent];
const total = cardContent.length;

const Creation = () => {
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const movingRef = useRef(false);
    const [visibleCount, setVisibleCount] = useState(1);

    const [index, setIndex] = useState(total);
    const [step, setStep] = useState(0);
    const [animated, setAnimated] = useState(true);
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    // Measure a card and its gap for responsive sliding.
    useEffect(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!viewport || !track) return;

        const measure = () => {
            const card = track.querySelector('.creation_card');
            if (!card) return;

            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            const cardWidth = card.getBoundingClientRect().width;
            const slideStep = cardWidth + gap;

            if (slideStep <= 0) return;

            setStep(slideStep);

            setVisibleCount(
                Math.max(
                    1,
                    Math.round((viewport.clientWidth + gap) / slideStep)
                )
            );
        };

        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(viewport);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReducedMotion(media.matches);

        update();
        media.addEventListener('change', update);

        return () => media.removeEventListener('change', update);
    }, []);

    // Restore animation after silently returning to the original cards.
    useEffect(() => {
        if (animated) return;

        let secondFrame;

        const firstFrame = requestAnimationFrame(() => {
            secondFrame = requestAnimationFrame(() => {
                movingRef.current = false;
                setAnimated(true);
            });
        });

        return () => {
            cancelAnimationFrame(firstFrame);
            if (secondFrame) cancelAnimationFrame(secondFrame);
        };
    }, [animated]);

    const moveCarousel = (direction) => {
        if (!step || movingRef.current || !animated) return;

        if (reducedMotion) {
            setIndex((current) =>
                total + ((current - total + direction + total) % total)
            );
            return;
        }

        movingRef.current = true;
        setIndex((current) => current + direction);
    };

    // Automatic sliding.
    useEffect(() => {
        if (hovered || focused || reducedMotion || !step || !animated) return;

        const timer = setInterval(() => {
            if (movingRef.current) return;

            movingRef.current = true;
            setIndex((current) => current + 1);
        }, 3000);

        return () => clearInterval(timer);
    }, [hovered, focused, reducedMotion, step, animated]);

    const handleTransitionEnd = (event) => {
        if (
            event.target !== event.currentTarget ||
            event.propertyName !== 'transform'
        ) {
            return;
        }

        if (index >= total * 2 || index < total) {
            setAnimated(false);
            setIndex(
                total + ((index - total + total) % total)
            );
        } else {
            movingRef.current = false;
        }
    };

    return (
        <section className="creation_bg" id="mywork">
            <div className="container">
                <div className="creation_wrapper">
                    <p>My Work</p>
                    <h2>See What I Can Create!</h2>
                    <p>
                        A few concept projects to show the kind of work I can do.
                    </p>

                    <div
                        className="creation_carousel"
                        role="region"
                        aria-label="Concept projects carousel"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onFocusCapture={() => setFocused(true)}
                        onBlurCapture={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget)) {
                                setFocused(false);
                            }
                        }}
                    >
                        <div className="carousel_controls">
                            <button
                                type="button"
                                onClick={() => moveCarousel(-1)}
                                aria-label="Previous project"
                            >
                                <ChevronLeftIcon />
                            </button>

                            <button
                                type="button"
                                onClick={() => moveCarousel(1)}
                                aria-label="Next project"
                            >
                                <ChevronRightIcon />
                            </button>
                        </div>

                        <div
                            className="creation_viewport"
                            ref={viewportRef}
                        >
                            <div
                                className="creation_list"
                                ref={trackRef}
                                style={{
                                    transform: `translateX(-${index * step}px)`,
                                    transition:
                                        animated && !reducedMotion
                                            ? 'transform 500ms ease'
                                            : 'none',
                                    visibility: step ? 'visible' : 'hidden',
                                }}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {carouselCards.map((item, cardIndex) => {
                                    const visible =
                                        cardIndex >= index &&
                                        cardIndex < index + visibleCount;

                                    return (
                                        <article
                                            className="creation_card"
                                            key={`${item.link}-${cardIndex}`}
                                            aria-hidden={!visible}
                                        >
                                            <img src={item.image} alt={item.title} />

                                            <h3>{item.title}</h3>

                                            <a
                                                href={item.link}
                                                className="creation_link"
                                                tabIndex={visible ? 0 : -1}
                                                aria-label={`View ${item.title}`}
                                            >
                                                <ArrowCircleRightOutlinedIcon />
                                            </a>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creation;