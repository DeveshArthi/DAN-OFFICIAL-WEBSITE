import Image from '../assets/logo/logo-black-bg.png';

export const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className='container'>
                <div className='footer_content'>
                    <img src={Image} alt="DAN TECHWORKS" />
                    <div className='footer_links'>
                        <h2>DAN IT CONSULTANCY SERVICE</h2>
                        
                      <ul>
                        <li>Web Development</li>
                        <li>Branding</li>
                        <li>Creative Design</li>
                      </ul>
                    </div>
                </div>
                <div>
                    DAN IT CONSULTANCY SERVICE@2026
                </div>
            </div>
        </div>
    )
}
