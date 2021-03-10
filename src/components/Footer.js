/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import image from "assets/img/logo1.jpg";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={image} alt="logo-footer" />

        <p className="footer-links">
          <Link to="home" smooth={true} duration={1000} className="link-1">
            Home
          </Link>

          <Link to="services" smooth={true} duration={1000}>
            Usluge
          </Link>

          <Link to="about" smooth={true} duration={1000}>
            O nama
          </Link>

          <Link to="location" smooth={true} duration={1000}>
            Lokacija
          </Link>

          <Link to="contact1" smooth={true} duration={1000}>
            Kontakt
          </Link>
        </p>

        <p className="footer-company-name">
          G.O. Građevinar Vrbnik © SVA PRAVA PRIDRŽANA
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Vrbnik</span> Novo Naselje 18, Hrvatska
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+385 (022) 555-2368</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">govrbnik@net.hr</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>O nama</span>
          G.O. GRAĐEVINAR VRBNIK d.o.o. građevinska je tvrtka iz Vrbnika u 20
          godina rada i rasta, prerasli smo u jednu od većih tvrtki na području
          Knina u sektoru građevine.
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
