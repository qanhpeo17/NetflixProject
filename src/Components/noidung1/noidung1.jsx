import React from "react";
import tvImg from "../img/tv.png";
import "../noidung1/noidung1.css";

function Noidung1() {
  // Note: PascalCase
  return (
    <div className="cC1Container">
      <div className="wrapper">
        <div className="cC1LeftCard">
          <h1 className="textTitle">Enjoy on your TV</h1>
          <p className="subTitle">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="cC1RightCard">
          <div className="tv">
            <img src={tvImg} alt="" />
          </div>
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>{" "}
        </div>
      </div>
    </div>
  );
}

export default Noidung1; // Note: PascalCase
