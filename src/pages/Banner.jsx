
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DarkBannerImage from '../assets/ref/ter (1).png';
import LightBannerImage from '../assets/ref/ter (2).png';

const Banner = ({ theme }) => {
  return (
    <div className='banner_bg'>
      <div className='banner_pattern'>
        <div className='anime_ball1'></div>
        <div className='anime_ball2'></div>
        <div className='anime_ball3'></div>
      </div>
      <div className='container banner_wrapper'>

        <div className="banner_content">
          <h3>FREELANCE IT & NON-IT PROJECT SERVICES 👋</h3>

          <h1>
            Your Ideas. <span>Our Expertise.</span> Solutions for Your Business.
          </h1>

          <p>
            From websites and software development to branding, design, and
            non-IT business projects, DAN IT Consultancy Service brings your
            ideas to life. We deliver practical, tailored solutions that support
            your goals and help your business grow.
          </p>

          <div className="banner_actions">
            <a href="#contact" className="talk_btn">
              Start Your Project
            </a>

            <a href="#services" className="talk_btn">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className='banner_img'>
          <img src={theme === 'dark' ? DarkBannerImage : LightBannerImage} />
          <div className='banner_links'>
            <hr></hr>
            <a href="#"
              target="_blank"
              rel="noreferrer"><InstagramIcon className='inst_icon' />
            </a>
            <a href="#"
              target="_blank"
              rel="noreferrer">
              <GitHubIcon className='git_icon' /></a>
            <a href="#"
              target="_blank"
              rel="noreferrer"><LinkedInIcon className='link_icon' />
            </a>
            <a href="#"
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
