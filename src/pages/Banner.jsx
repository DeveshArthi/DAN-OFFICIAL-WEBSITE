
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import DarkBannerImage from '../assets/ref/ter (1).png';
import LightBannerImage from '../assets/ref/ter (2).png';

const Banner = ({theme}) => {
  return (
    <div className='banner_bg'>
      <div className='container banner_wrapper'>

        <div className='banner_content'>
          <h3>FREE LAUNCH WEB DEVELOPER & DESIGNER 👋</h3>
          <h1>website's and design <span>build around your</span>your Business</h1>
          <p>
            I design and develop responsive, user-friendly web interfaces that help businesses grow and users stay engaged.
            Let's build something amazing together!
          </p>
          <div className='banner_actions'>
            <a href="#contact" className="talk_btn">Start Your Project</a>
            <a
              href="https://drive.google.com/file/d/1Z9_BkPqZcsGszsvnXZrPoE0Sfac0B8az/preview"
              className="talk_btn"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon />
              Explore My Work
            </a>
          </div>
        </div>

        <div className='banner_img'>
           <img src={theme === 'dark' ? DarkBannerImage : LightBannerImage} />
          <div className='banner_links'>
            <hr></hr>
            <a href="https://www.instagram.com/its_a_rthi/"
              target="_blank"
              rel="noreferrer"><InstagramIcon className='inst_icon' />
            </a>
            <a href="https://github.com/ArthiGit18"
              target="_blank"
              rel="noreferrer">
              <GitHubIcon className='git_icon' /></a>
            <a href="https://www.linkedin.com/in/arthianbalagan/"
              target="_blank"
              rel="noreferrer"><LinkedInIcon className='link_icon' />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arthianbalagan180@gmail.com"
              className="social_link gmail"
              target="_blank">
              <EmailIcon className='mailb_icon' />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
