
import DownloadIcon from '@mui/icons-material/Download';
import AboutImage from '../assets/ref/abt.png';

const About = () => {
    return (
        <div className='about_bg' id="about">
            <div className='container about_wrapper'>

                <div className='about_img'>
                    <img src={AboutImage} alt="Image-1" />
                </div>

                <div className='about_content'>
                    <div className='about_actions'>
                        <h2>Bringing Your Ideas to Life Across IT & Non-IT Projects</h2>
                        <p>
                            DAN IT CONSULTANCY SERVICE provides freelance services in web and
                            software development, design, branding, and non-IT project support.
                            We combine creativity, technical expertise, and a clear understanding
                            of your goals to deliver solutions tailored to your business.
                        </p>
                        <a
                            href="#"
                            className="talk_btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <DownloadIcon />
                            Lets Work Together
                        </a>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default About;
