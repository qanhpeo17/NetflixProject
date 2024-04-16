import React from "react";
import cC3Img from "../img/device-pile-vn.png";
import "../noidung3/noidung3.css";
function Noidung3() {
  return (
    <div className="cC3Container">
      <div className="wrapper">
        <div className="cC3LeftCard">
          <h1 className="textTitle">Watch everywhere</h1>
          <p className="subTitle">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="cC3RightCard">
          <div className="devicePileImg">
            <img src={cC3Img} alt="" />
          </div>
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
            className="cC3Video"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Noidung3;
