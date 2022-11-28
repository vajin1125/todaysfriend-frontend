import React from 'react';

import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_with_hover_styles';
import { googlemap_marker } from './images'

export default class MyGreatPlaceWithHover extends React.PureComponent {

  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
       <div style={style}>
          <img src={googlemap_marker} style={{marginTop:-64,marginLeft:-18}}/>
          {/* {this.props.text} */}
       </div>
    );
  }
}
