import React from "react";

import Gallery from "react-grid-gallery";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "assets/img/img5.JPG";
import image2 from "assets/img/img6.jpg";
import image3 from "assets/img/img8.jpg";
import image4 from "assets/img/img9.jpg";
import image5 from "assets/img/img10.jpg";
import image6 from "assets/img/img11.jpg";
import image7 from "assets/img/img12.jpg";
import image8 from "assets/img/img13.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import "assets/css/App.css";
const useStyles = makeStyles(styles);

const IMAGES = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 450,
    thumbnailHeight: 450,
    tags: [{ value: "Grubi Radovi", title: "Grubi Radovi" }],
    caption: "Obnova kuće Vrbnik",
  },
  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 320,
    thumbnailHeight: 300,
    tags: [
      { value: "Grubi Radovi", title: "Architecture | Outdoors" },
      { value: "Sanacije", title: "Industrial" },
    ],
    caption: "Sanacije",
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 280,
    thumbnailHeight: 148,
    tags: [{ value: "Grubi Radovi", title: "Grubi Radovi" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 170,
    thumbnailHeight: 120,
    tags: [{ value: "Sistem ključ u ruke", title: "Sistem ključ u ruke" }],
    caption: "Sistem ključ u ruke",
  },
  {
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 450,
    thumbnailHeight: 320,
    tags: [{ value: "Obnova", title: "People" }],
    caption: "Sistem ključ u ruke",
  },
  {
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    tags: [
      { value: "Sanacije", title: "Sanacije" },
      { value: "Renovacije", title: "Renovacije" },
    ],
    caption: "Sanacija Fasade",
  },
  {
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 450,
    thumbnailHeight: 320,
    tags: [{ value: "Grubi radovi", title: "Sanacije" }],
    caption: "Sanacija Krova",
  },
  {
    src: image8,
    thumbnail: image8,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    tags: [{ value: "Sistem ključ u ruke", title: "Sistem ključ u ruke" }],
    caption: "Sistem ključ u ruke",
  },
];

function References() {
  const classes = useStyles();
  return (
    <div className="margin-references" id="reference">
      <div className="title-map">
        <h1>Reference</h1>
      </div>
      <Gallery
        images={IMAGES}
        enableLightbox={true}
        // maxRows={3}
        backdropClosesModal
        // currentImage={3}
        // isOpen={ true}
      />
    </div>
  );
}

export default References;
