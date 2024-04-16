import React from "react";
import kidsImg from "../img/kids.png";
import "../noidung4/noidung4.css";
function Noidung4() {
  return (
    <div className="cC4Container">
      <div className="wrapper">
        <div className="cC4LeftCard">
          <div className="kidsImg">
            <img src={kidsImg} alt="" />
          </div>
        </div>
        <div className="cC4RightCard">
          <h1 className="textTitle">Create profiles for kids</h1>
          <p className="subTitle">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Noidung4;
