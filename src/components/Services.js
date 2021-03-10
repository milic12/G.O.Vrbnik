import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
// @material-ui/icons

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import image from "assets/img/construction.jpg";
import image2 from "assets/img/usluge2.jpg";
import image3 from "assets/img/usluge-4.jpg";

const useStyles = makeStyles(styles);

export default function Services() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer} id="services">
      <div className={classes.title}>
        <h1>USLUGE</h1>
      </div>
      <Grid container justify="center" direction="row" alignItems="stretch">
        {/* Card 1 */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project img"
                height="200"
                image={image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Sistem ključ u ruke{" "}
                  <span aria-label="key" role="img">
                    🔑
                  </span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Vodimo kompletnu gradnju od početka do useljenja u novi
                  objekt. Sve Vaše brige prepustite nama.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project img"
                height="200"
                image={image2}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Sanacije i renovacije
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Saniramo i renoviramo postojeće objekte
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project img"
                height="200"
                image={image3}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Grubi radovi
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Betoniranje temelja, zidanje, tesarske radove, izrade
                  krovišta, gradnja podkrova,
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
