
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
                        <h2>Bringing Ideas to Life Through Design & Technology.</h2>
                        <p>DAN cONSULTING SERVICE is my freelance web development and design venture. I combine creativity with technical expertise to deliver solutions that exceed expectations.</p>
                        <a
                            href="https://drive.google.com/file/d/1Z9_BkPqZcsGszsvnXZrPoE0Sfac0B8az/preview"
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
