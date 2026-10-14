
import DataExplorationOutlinedIcon from '@mui/icons-material/DataExplorationOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const iconStyle = {
    color: '#0075ce',
    fontSize: '2.5rem',
    margin: '10px 0',
};

const cardContent = [
    {
        image: <MessageOutlinedIcon sx={iconStyle} />,
        title: 'Direct Communication',
        text: 'Stay informed with clear updates and a dedicated point of contact throughout your project.',
    },
    {
        image: <DataExplorationOutlinedIcon sx={iconStyle} />,
        title: 'Built Around Your Goals',
        text: 'Get tailored support for your IT or non-IT project, based on your business needs.',
    },
    {
        image: <ArticleOutlinedIcon sx={iconStyle} />,
        title: 'Clear Project Scope',
        text: 'Agree on deliverables, timelines, and pricing before work begins.',
    },
    {
        image: <DataExplorationOutlinedIcon sx={iconStyle} />,
        title: 'Attention to Detail',
        text: 'Careful execution and thoughtful reviews help ensure the final work meets your requirements.',
    },
];

const Keys = () => {
    return (
        <section className="keys_bg">
            <div className="container">
                <div className="keys_wrapper">
                    <p>WHY WORK WITH US</p>
                    <h2>A Clear, Collaborative Approach to Every Project</h2>
                    <p>
                        From software and websites to design and non-IT projects,
                        we work closely with you to understand your needs and deliver
                        practical solutions.
                    </p>
                    <div className="keys_list">
                        {cardContent.map((exp, index) => (
                            <div className="keys_card" key={index}>
                                {exp.image}
                                <h3>{exp.title}</h3>
                                <p>{exp.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Keys;
