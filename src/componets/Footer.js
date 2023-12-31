import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
    const handlePageChange = () => { window.location.href="https://github.com/BxNoel" }
return (
    <div className="footer">
    <div className="socialMedia">
        <GitHub onClick={handlePageChange} />
        <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/noel-negron-n26/'} />
        <EmailIcon />
    </div>
    <p> &copy; Noel Negron Columbia University Class of 2026</p>
    </div>
);
}

export default Footer;