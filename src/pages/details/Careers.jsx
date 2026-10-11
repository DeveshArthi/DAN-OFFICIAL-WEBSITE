import careersImage from '../../assets/ref/CAREER.png'
import { Footer } from '../Footer';

export default function Careers() {
  return (
    <>
    <main className="careers_wrapper">
      <div className="container">

        <img src={careersImage} alt="Careers" />

        <div className="careers_content">
          <h2> Build Your Future with DAN TECHWORKS</h2>

          <p>Turn your ideas, skills, and curiosity into meaningful digital work.<br />

            We welcome people interested in web development, design, and technology consulting. Introduce yourself and show us what you enjoy creating.</p>

          <strong>Let's Connect</strong>

          <p>Whether you're starting your career or bringing experience, we'd like to learn about your skills and interests.</p>

          <p>Tell us about:</p>
          <ul>
            <li><strong>Web Development:</strong> Your experience building responsive websites and applications.</li>
            <li><strong>UI/UX Design:</strong> How you create clear, practical digital experiences.</li>
            <li><strong>Technology Consulting:</strong> How you approach business problems and technical solutions.</li>
            <li><strong>Internships:</strong> What you want to learn and the projects you've worked on.</li>
          </ul>

          <h2> What We Look For</h2>

          <p>Curiosity, clear communication, attention to detail, and a willingness to learn. Share examples that show how you solve problems and work with others.</p>

          <h2> Introduce Yourself</h2>

          <p>Send your résumé, portfolio or GitHub link, and a short introduction to:</p>

          <strong>**OFFICIALDANTECH1518@GMAIL.COM**</strong>

          <p>Use the subject line: **Career Enquiry  Your Name  Area of Interest**</p>

          <p>We'll review your profile and contact you if a suitable opportunity becomes available.</p>

          <p><strong>Button: Send Your Profile</strong></p>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}