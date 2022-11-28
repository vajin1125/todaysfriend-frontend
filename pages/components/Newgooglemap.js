import { Row, Col, Input } from 'antd'
import Geosuggest from 'react-geosuggest';
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


export default class Newgooglemap extends React.Component {
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

    componentWillReceiveProps = () => {
        this.props.meetingpointJson != undefined ?
            this.setState({
                location: this.props.meetingpointJson
            }): null
    }

    onSuggestSelect = (suggest) => {
        this.setState({
            location: {                
                lat: suggest.location.lat,
                lng: suggest.location.lng
            }
        })
    }

    onClickMap = (e) => {
        const lat = e.latLng.lat()
        const lng = e.latLng.lng()
        this.setState({
            location: {
                lat: lat,
                lng: lng
            }
        })
        this.props.getMeetingPoint(this.state.location)
    }


    render() {
        return(
            <div>
                {this.state.mount ?
                    <Row type="flex" justify="space-between" style={{marginBottom:10}}>
                        <Col span={12}>
                            <Geosuggest 
                                placeholder="Please type meeting point" 
                                onSuggestSelect={this.onSuggestSelect} 
                                location={new google.maps.LatLng(53.558572, 9.9278215)}
                                radius={20}
                            />
                        </Col>
                    
                        <Col span={11}>
                            <Input 
                                ref={ref => this.Latlngvalue = ref} 
                                readOnly 
                                size="large"
                                value={
                                    this.state.location.lat + "," + this.state.location.lng
                                } 
                                style={{marginTop:10}}/>
                        </Col>
                    </Row>
                    : null
                }
                
                {this.state.location && (
                    <MapWithAMarker
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        defaultCenter={
                            this.state.location
                        }
                        onClick={this.onClickMap}
                    />
                )}
            </div>
        )
    }
}