import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import image1 from '../assets/logo/img.png';

const cardContent = [
    {
        image: image1,
        title: 'Business Website',
        link: '/creation/website-development',
    },
    {
        image: image1,
        title: 'Brand Identity',
        link: 'link',
    },
    {
        image: image1,
        title: 'Social Media Design',
        link: 'link',
    },

];

const Creation = () => {
    return (
        <section className="creation_bg" id="mywork">
            <div className="container">
                <div className="creation_wrapper">
                    <p>My Work</p>
                    <h2>See What I Can Create!</h2>
                    <p>A few concept projects to show the kind of work I can do.</p>
                    <div className="creation_list">
                        {cardContent.map((exp, index) => (
                            <div className="creation_card" key={index}>
                                <img src={exp.image} alt={exp.title} />
                                <h3>{exp.title}</h3>
                                <a href={exp.link} className="creation_link">
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

export default Creation;
