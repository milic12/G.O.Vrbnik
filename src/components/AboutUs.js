import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Carousel from "react-slick";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import Card from "components/Card/Card.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

import "assets/css/App.css";
import image1 from "assets/img/img2.JPG";
import image2 from "assets/img/img3.JPG";
import image3 from "assets/img/img4.JPG";

export default function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container mx-auto px-3 pb-32 pt-24" id="about">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto px-12 md:px-4">
          <div className="md:pr-4">
            <h3 className="text-gold-200 text-3xl font-semibold">O Nama</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              G.O. GRAĐEVINAR VRBNIK d.o.o. građevinska je tvrtka iz Vrbnika u
              20 godina rada i rasta, prerasli smo u jednu od većih tvrtki na
              području Knina u sektoru građevine. Nudimo kompletnu paletu
              građevinskih radova uz uvijek konkurentne cijene i jamstvo
              kvalitete koje dokazuju naše brojne reference .
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 pre-line">
              Prilikom izvođenja radova naglasak stavljamo na profesionalnost,
              kvalitetu i sigurnost te jedinstveni doprinos svih zaposlenih u
              realizaciji zadanih projekata. Imamo sve ono što je potrebno za
              besprijekorno izvršavanje svih vrsta projekata; od
              najjednostavnijih do najsloženijih.
            </p>
          </div>
        </div>

        <div className="w-full md:w-8/12 mr-auto px-12 pt-8 md:pt-20">
          <div
            style={{
              transform:
                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
            }}
          >
            <GridContainer>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption shadow1">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Vrbnik, Hrvatska
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Vrbnik, Hrvatska
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Vrbnik, Hrvatska
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
