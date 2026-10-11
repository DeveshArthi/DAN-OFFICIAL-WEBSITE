import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import image1 from '../assets/logo/img.png';

const cardContent = [
    {
        image: image1,
        title: 'Website Development',
        description: 'Custom websites, landing pages, and portfolios built for mobile.',
        link: '/services/website-development',
    },
    {
        image: image1,
        title: 'Logo & Brand Design',
        description: 'Logos, colour palattes and visuals for consistent identity.',
        link: 'link',
    },
    {
        image: image1,
        title: 'Creative Design',
        description: 'Social graphics, banner, brochures, and digital designs.',
        link: 'link',
    },

];

const Services = () => {
    return (
        <section className="services_bg">
            <div className="container">
                <div className="services_wrapper">
                    <p>My Services</p>
                    <h2>Your Idea. My Skills. Let's Build It Together!</h2>
                    <p>From websites to branding and creative design, I provide everything you need to bring your idea to life.</p>
                    <div className="services_list">
                        {cardContent.map((exp, index) => (
                            <div className="services_card" key={index}>
                                <img src={exp.image} alt={exp.title} />
                                <h3>{exp.title}</h3>
                                <p className="company">{exp.description}</p>
                                <a href={exp.link} className="services_link">
                                    <ArrowCircleRightOutlinedIcon style={{ color: '#0075ce', fontSize: '2.5rem', margin: '10px 0' }} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
