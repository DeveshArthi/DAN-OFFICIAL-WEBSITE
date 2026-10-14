import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import image1 from '../assets/logo/img.png';

const cardContent = [
    {
        image: image1,
        title: 'Web & Software Development',
        description:
            'Custom websites, web applications, and software tailored to your business needs.',
        link: '/services/website-development',
    },
    {
        image: image1,
        title: 'Design & Branding',
        description:
            'Logo design, brand identities, UI/UX, and marketing visuals that bring your business to life.',
        link: '#contact',
    },
    {
        image: image1,
        title: 'Non-IT Project Services',
        description:
            'Flexible freelance support for non-IT business projects, tailored to your requirements.',
        link: '#contact',
    },
];

const Services = () => {
    return (
        <section className="services_bg">
            <div className="container">
                <div className="services_wrapper">
                    <p>Our Services</p>
                    <h2>Your Ideas. Our Expertise. Let’s Build Together!</h2>
                    <p>
                        From websites and software to design, branding, and non-IT projects,
                        we provide tailored freelance services to bring your ideas to life
                        and support your business goals.
                    </p>
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
