import React, {useState} from 'react';
import './StarContainer.scss';

const StarContainer = ({nStars}) => {
    const allStars = new Array(nStars).fill(0);
    const [starClicked, setStarClicked] = useState(null);
    const [starHovered, setStarHovered] = useState(null);

    const handleStarClick = (idx) => 
    {
        setStarClicked(idx);
    }
    const handleMouseEnterEvent = (idx) => 
    {
        setStarHovered(idx);
    }

    return (
        <div className='container'>
            <div className="star-container">
                {
                    allStars.map((_, idx) => 
                    {
                        const condition = ((starHovered!==null && idx <= starHovered) || (starHovered==null && starClicked!==null && idx <= starClicked)) ? 'gold' : '';
                        return (
                            <span 
                            className={`star ${condition}`}
                            key={idx}
                            onClick={() => handleStarClick(idx)}
                            onMouseEnter={() => handleMouseEnterEvent(idx)}
                            onMouseLeave={() => setStarHovered(null)}
                            >&#9733;</span>
                        )
                    })
                }
            </div>
            <div className="rating">
                Rating: {starClicked + 1}
            </div>
        </div>
    )
}

export default StarContainer;
