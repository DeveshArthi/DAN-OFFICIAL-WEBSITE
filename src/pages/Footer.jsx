import Image from '../assets/logo/logo-black-bg.png';

export const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className='container'>
                <div className='footer_content'>
                    <img src={Image} alt="DAN TECHWORKS" />
                    <div className='footer_links'>
                        <h2>DAN CONSULTANCY SERVICE</h2>
                        
                      <ul>
                        <li>Web Development</li>
                        <li>Branding</li>
                        <li>Creative Design</li>
                      </ul>
                    </div>
                </div>
                <div>
                    DAN@2024 All Rights Reserved
                </div>
            </div>
        </div>
    )
}
