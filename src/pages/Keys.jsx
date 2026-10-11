
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
        title: 'Direct Comminication',
        text: 'You\'ll work directly with me from start to finish',
    },
    {
        image: <DataExplorationOutlinedIcon sx={iconStyle} />,
        title: 'Designed for Your Goals',
        text: 'You\'ll work directly with me from start to finish',
    },
    {
        image: <ArticleOutlinedIcon sx={iconStyle} />,
        title: 'Clear Project Scope',
        text: 'You\'ll work directly with me from start to finish',
    },
    {
        image: <DataExplorationOutlinedIcon sx={iconStyle} />,
        title: 'Attention to Detail',
       text: 'You\'ll work directly with me from start to finish',
    },

];

const Keys = () => {
    return (
        <section className="keys_bg">
            <div className="container">
                <div className="keys_wrapper">
                    <p>WHY WORK WITH ME</p>
                    <h2>A Simple, Collaborative Process.</h2>
                    <p>A few concept projects to show the kind of work I can do.</p>
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
