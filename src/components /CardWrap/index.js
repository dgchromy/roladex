import React from 'react';
import './style.css';


// The cards will be responsive
function CardWrap({ children }) {
    return (
        <div className="wrapper">{children}</div>
    )
}


export default CardWrap;