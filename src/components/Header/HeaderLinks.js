/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-scroll";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {
  Apps,
  ContactPhone,
  EmojiPeople,
  Work,
  LocationOn,
  HomeWork,
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
          to="services"
          smooth={true}
          duration={1000}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Work className={classes.icons} /> Usluge
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <EmojiPeople className={classes.icons} /> O nama
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="reference"
          smooth={true}
          duration={1000}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <HomeWork className={classes.icons} /> Reference
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="location"
          smooth={true}
          duration={1000}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <LocationOn className={classes.icons} /> Lokacija
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="contact1"
          smooth={true}
          duration={1000}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ContactPhone className={classes.icons} /> Kontakt
        </Link>
      </ListItem>
    </List>
  );
}
