import React from "react";
import ReactDom from "react-dom";
import "./ItemComponent.css";

export default function ItemComponent(data) {
  return (
    <div className="content">
      {data.activities.map(item => (
        //<img src={item.user.avatar} />

        <div className="item">
          <div className="avatar">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg?crop=0.671xw:1.00xh;0.0847xw,0&resize=640:*"
              width="30"
              height="30"
              alt=""
            />
          </div>
          <span className="time">10 AM</span>
          <p>Here is my first tweet</p>
        </div>
      ))}
    </div>
  );
}
