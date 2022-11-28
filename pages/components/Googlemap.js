import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithHover from './my_great_place_with_hover';


const locations = [{"lat":38.9095,"lng":-77.0469}]
const mapCenter = {lat: 38.9095, lng: -77.0469};

const markers = ( locations, handler ) => {
  return locations.map((location, key) => (
      <MyGreatPlaceWithHover
          // text={location.id}
          lat={location.lat}
          lng={location.lng}
          key={key}
      />
  ))
}

export default class Googlemap extends React.Component {

  static defaultProps = {
    center: mapCenter,
    zoom: 20
  };

  render() {
    return(
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCW1Xur6MrdJwVONpAuQPATK-wLo_gzmTg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // hoverDistance={K_SIZE / 2}
      >
          {markers(locations)}
      </GoogleMapReact>
    );
  }
}