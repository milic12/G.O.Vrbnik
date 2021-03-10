import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import data from "assets/map-data/data";
import Markers from "components/Map/VenueMarkers";
import "leaflet/dist/leaflet.css";

import "assets/css/App.css";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 44.009896, lng: 16.189988 },
      zoom: 12,
    };
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <div className="pt-refrences">
        <div className="title-map" id="location">
          <h1>Lokacija</h1>
        </div>
        <MapContainer center={currentLocation} zoom={zoom} id="location">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <Markers venues={data.venues} />
        </MapContainer>
      </div>
    );
  }
}

export default MapView;
