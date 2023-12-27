import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
return (
    <div className="footer">
    <div className="socialMedia">
        <GitHub />
        <LinkedInIcon />
    </div>
    <p> &copy; Noel Negron Columbia University Class of 2026</p>
    </div>
);
}

export default Footer;