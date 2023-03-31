import React from "react";

const Card = ({data}) => {
    const {title, subtitle, text, icon} = data
    return (
      <div className='card-container'>
  
  <div className="title-container">
        <img src={icon} alt={title} />
        <h1>{title}</h1>
</div>
        <h3>{subtitle}</h3>
        <p>{text}</p>
  
      </div>
    );
  };
  
  export default Card 