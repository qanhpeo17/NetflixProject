import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footerContainer">
      <div className="ask">
        <a href="https://help.netflix.com/en/contactus">
          Questions? Contact us.
        </a>
      </div>
      <div className="content">
        <div className="col1">
          <ul>
            <li>
              <a href="http://">FAQ</a>
            </li>
            <li>
              <a href="http://">Investor Relations</a>
            </li>
            <li>
              <a href="http://">Privacy</a>
            </li>
            <li>
              <a href="http://">Speed test</a>
            </li>
          </ul>
        </div>
        <div className="col2">
          <ul>
            <li>
              <a href="http://">Help Center</a>
            </li>
            <li>
              <a href="http://">Jobs</a>
            </li>
            <li>
              <a href="http://">Cookie Preferences</a>
            </li>
            <li>
              <a href="http://">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div className="col3">
          <ul>
            <li>
              <a href="http://">Account</a>
            </li>
            <li>
              <a href="http://">Ways to Watch</a>
            </li>
            <li>
              <a href="http://">Corporate Information</a>
            </li>
            <li>
              <a href="http://">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div className="col4">
          <ul>
            <li>
              <a href="http://">Media Center</a>
            </li>
            <li>
              <a href="http://">Terms of Use</a>
            </li>
            <li>
              <a href="http://">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
