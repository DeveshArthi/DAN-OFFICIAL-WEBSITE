import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import accordionData from './accordionData.json';

const icons = {
    arrowDownward: ArrowDownwardIcon,
    arrowDropDown: ArrowDropDownIcon,
};

const accordionData = [
    {
        id: 'panel1',
        title: 'What services does DAN IT Consultancy Service offer?',
        description:
            'We offer website and software development, UI/UX design, logo and brand design, marketing visuals, and freelance support for non-IT projects. Contact us to discuss your requirements.',
        icon: 'arrowDownward',
    },
    {
        id: 'panel2',
        title: 'How do I get started with a project?',
        description:
            'Use our contact form to share your project idea, requirements, budget, and preferred timeline. We will discuss the details with you and outline the scope, pricing, and next steps.',
        icon: 'arrowDropDown',
    },
    {
        id: 'panel3',
        title: 'How much will my project cost?',
        description:
            'Pricing depends on the project scope, complexity, features, and deliverables. Once we understand your requirements, we will provide a tailored quote for your review before work begins.',
        icon: 'arrowDropDown',
    },
    {
        id: 'panel4',
        title: 'How long does it take to complete a project?',
        description:
            'Timelines vary based on project size, complexity, and the availability of content and feedback. We will agree on a delivery schedule with you before starting and communicate any changes along the way.',
        icon: 'arrowDropDown',
    },
    {
        id: 'panel5',
        title: 'Can you update an existing website or work on a custom project?',
        description:
            'Yes, we can discuss website redesigns, feature updates, and custom IT or non-IT projects. Share your current setup and goals so we can assess the work and recommend a suitable approach.',
        icon: 'arrowDropDown',
    },
];

export default function AccordionExpandIcon() {
    const id = React.useId();

    return (
        <>
            <div className="accordion_wrapper" >
                <div className="container" style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h2>Frequently Asked Questions</h2>
                    <div>
                        {accordionData.map((item) => {
                            const Icon = icons[item.icon] || ArrowDownwardIcon;
                            const panelId = `${id}-${item.id}`;

                            return (




                                <Accordion key={item.id} sx={{ marginBottom: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                    <AccordionSummary
                                        expandIcon={<Icon />}
                                        aria-controls={`${panelId}-content`}
                                        id={`${panelId}-header`}
                                        className="accordion_summary"

                                    >
                                        <Typography component="span">
                                            {item.title}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <Typography>{item.description}</Typography>
                                    </AccordionDetails>
                                </Accordion>


                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}