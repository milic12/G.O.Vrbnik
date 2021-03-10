import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer.js";
import Contact from "components/Contact.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Services from "components/Services.js";
import AboutUs from "components/AboutUs.js";
import References from "components/References.js";
import MapView from "components/MapView.js";
import Typed from "react-typed";
import { Typography } from "@material-ui/core";
import { Link } from "react-scroll";

import styles from "assets/jss/material-kit-react/views/components.js";
import gif from "assets/img/mouse-scroll2.gif";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="home">
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/construction1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Typography className={classes.title} variant="h4">
                  <Typed strings={["G.O. GRAĐEVINAR VRBNIK"]} typeSpeed={60} />
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Link to="services" smooth={true} duration={1000}>
          <img src={gif} alt="mouse" className="mouse mouse-invisible" />
        </Link>
        <Services />
        <AboutUs />
        <References />
        <MapView />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
