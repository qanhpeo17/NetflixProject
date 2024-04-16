import React from "react";
import mobileImg from "../img/mobile-0819.jpg";
import downloadCardImg from "../img/downloadCardImg.png";
import downloadCardGif from "../img/download-icon.gif";
import "../noidung2/noidung2.css";
function Noidung2() {
  return (
    <div className="cC2Container">
      <div className="wrapper">
        <div className="cC2LeftCard">
          <img src={mobileImg} alt="" />
          <div className="downloadCard">
            <div className="downloadCard-leftCard">
              <div className="downloadcardImg">
                <img src={downloadCardImg} alt="" />
              </div>
              <div className="processCard">
                <div className="downloadCardTitle">Stranger Things</div>
                <div className="downloadCardProcess">Downloading...</div>
              </div>
            </div>
            <div className="download-animation"></div>
          </div>
        </div>
        <div className="cC2RightCard">
          <h1 className="textTitle">Download your shows to watch offline</h1>

          <p className="subTitle">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Noidung2;
