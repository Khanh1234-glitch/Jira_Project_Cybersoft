import React from "react";
import IMG from "../../assets/download.png";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
type Props = {};

const Info = (props: Props) => {
  return (
    <div>
      <div className="info" style={{ display: "flex" }}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          <div className="avatar">
            <img src={IMG1} />
          </div>
          <div className="avatar">
            <img src={IMG2} />
          </div>
          <div className="avatar">
            <img src={IMG3} />
          </div>
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Recently Updated
        </div>
      </div>
    </div>
  );
};

export default Info;
