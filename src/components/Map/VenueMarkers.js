import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "components/Map/VenueLocationIcon";
import MarkerPopup from "components/Map/MarkerPopup";

const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>;
};

export default VenueMarkers;
