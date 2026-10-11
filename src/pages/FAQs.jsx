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

const accordionData =
    [
        {
            "id": "panel1",
            "title": "Accordion 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "icon": "arrowDownward"
        },
        {
            "id": "panel2",
            "title": "Accordion 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "icon": "arrowDropDown"
        },
        {
            "id": "panel3",
            "title": "Accordion 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "icon": "arrowDropDown"
        },
        {
            "id": "panel4",
            "title": "Accordion 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "icon": "arrowDropDown"
        },
        {
            "id": "panel5",
            "title": "Accordion 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            "icon": "arrowDropDown"
        }
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