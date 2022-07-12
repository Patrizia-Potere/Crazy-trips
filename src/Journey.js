import React from "react";

function Journey({image,caption,info}) {
  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <h1>{caption}</h1>
        <p>{info[0]}</p>
        <p>{info[1]}</p>
        <p>{info[2]}</p>
        <p>{info[3]}</p>
        <p>{info[4]}</p>
        <p>{info[5]}</p>
        <p>{info[6]}</p>
      </div>
      <div className="flex-item-right">
        <img src={image} alt={caption}/>
      </div>
    </div>
  )
}

export default Journey;
