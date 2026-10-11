// import Nav from "../pages/Nav"
import Services from "../pages/Skills"
import Banner from "../pages/Banner"
import Reveal from "./Reveal"
import Creation from "../pages/Creation"
import Keys from "../pages/Keys"
import About from "../pages/About"
import AccordionExpandIcon from "../pages/FAQs"
import Form from "../pages/Form"
import { Content } from "../pages/Content"
import { Footer } from "../pages/Footer"


const Home = ({theme}) => {
  return (
          <div>
        <Banner theme={theme} />
        <Content />
        <Reveal className="services_wrapper">
          <Services />
        </Reveal>
        <Reveal className="creation_wrapper">
          <Creation />
        </Reveal>
        <Reveal className="keys_wrapper">
          <Keys />
        </Reveal>
        <Reveal className="about_wrapper">
          <About />
        </Reveal>
        <Reveal className="about_wrapper">
        <AccordionExpandIcon />
        </Reveal>
        <Form />
        <Footer />
      </div>

  )
}

export default Home