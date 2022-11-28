import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import '../../static/css/newgooglemap.css'


const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={11}
        center={props.defaultCenter}
        onClick={props.onClick}
    >
        <Marker
            position={props.defaultCenter}
        />
    </GoogleMap>
);


export class Shownewgooglemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: false,
            location: {
                lat: 37.566535,
                lng: 126.97796919999996
            }
        }
    }

    componentDidMount = () => {       
        if (typeof window !== "undefined") {
            this.setState({
                mount: true
            })
        }
    }

    componentWillReceiveProps(){
        this.props.lat ?
            this.setState({
                location: {
                    lat: this.props.lat,
                    lng: this.props.lng
                }
            }): null
    }

    render() {
        console.log("Location:", this.state.location)
        return(
            <div>
                {this.state.location && (
                    <MapWithAMarker
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        defaultCenter={
                            this.state.location
                        }
                    />
                )}
            </div>
        )
    }
}