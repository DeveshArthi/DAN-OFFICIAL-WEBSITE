import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Image from '../../assets/ref/CAREER.png';
import { Footer } from '../Footer';

const consultancyServices = [
  {
    id: 1,
    title: 'IT Consulting',
    description:
      'Choose the right technologies and build a practical IT strategy for your business.',
    image: Image,
  },
  {
    id: 2,
    title: 'Web Development',
    description:
      'Create responsive websites and web applications tailored to your business goals.',
    image: Image,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description:
      'Design clear, engaging interfaces that make your digital products easier to use.',
    image: Image,
  },
  {
    id: 4,
    title: 'Digital Transformation',
    description:
      'Modernize your workflows and adopt digital tools to improve everyday operations.',
    image: Image,
  },
  {
    id: 5,
    title: 'Cloud Consulting',
    description:
      'Plan your cloud setup and migration with a focus on reliability and scalability.',
    image: Image,
  },
  {
    id: 6,
    title: 'Software Consulting',
    description:
      'Review your software needs and plan solutions that support your business growth.',
    image: Image,
  },
];

export default function Services_dt() {
  return (

    <>
    <section className="consultancy_wrapper">
      <h2>Our Consultancy Services</h2>

      <div className="consultancy_cards">
        {consultancyServices.map((service) => (
          <Card key={service.id} className="service_card">
            <CardActionArea component="a" href="#contact">
              <CardMedia
                component="img"
                height="180"
                image={service.image}
                alt={service.title}
              />

              <CardContent>
                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.description}
                </p>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small" href="#contact">
                Enquire Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
    <Footer />
    </>

  );
}