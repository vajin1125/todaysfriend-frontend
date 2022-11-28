import { Row, Col, Avatar, Button, Calendar, Spin, Modal } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import ImageGallery from 'react-image-gallery';
//Google Map
import Googlemap from './components/Googlemap'
import { Shownewgooglemap } from './components/Shownewgooglemap'
import ModalVideo from 'react-modal-video'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {booking_top_banner, korea, product_images } from './components/images'
// Image Gallery
import { Thumbnail } from './components/Thumbnail'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import '../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css'
// Modal video
import '../node_modules/react-modal-video/css/modal-video.min.css'
// Css
import '../static/css/product_detail.css'
import { base_url } from './components/base_url';
import profile from './profile';

// Calendar
function onPanelChange(value, mode) {
    console.log(value, mode);
}


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlideIndex: 0,
            thumbNailScale: .64,
            productData: [],
            productImgData: [],
            profileData: [],
            cellData: {
                original: '',
                thumbnail: ''
            },
            ImageArray:[],
            modalIsOpen: false,
        }
    }

    componentDidMount = () => {
        document.title = "Product Details-Todays Friend"
        const surl = window.location.href
        const spl_url = surl.split("=")
        const product_id = spl_url[1]
        console.log(product_id)

        axios({
            method: 'post',
            url: base_url + "/api/get_product_detail",
            data: {
                product_id
            }
        })
        .then((response) => {
            console.log(response)
            this.setState({
                productData: response.data[0],
                productImgData: response.data[1],
                profileData: response.data[2]
            })

            sessionStorage.setItem('booking_tourname', response.data[0].pdu_name)
            sessionStorage.setItem('booking_tourstarttime', response.data[0].pdu_meeting_time)
            sessionStorage.setItem('booking_price', response.data[0].pdu_price)

            console.log(this.state.productImgData)
            this.state.productImgData.map(image => {
                let imglink = base_url + "/" + image.pdu_img_url + "/" + image.pdu_img_name
                this.setState({
                    cellData: {
                        original: imglink,
                        thumbnail: imglink
                    }
                })
                this.setState({
                    ImageArray: [...this.state.ImageArray, this.state.cellData]
                })
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    gallerySlide = (currentIndex) => {
        this.setState({
            currentSlideIndex: currentIndex
        })
    }
    thumbClick = (key) => {
        this.imageGallery.slideToIndex(key);        
    }

    openVideoModal = () => {
        this.setState({modalIsOpen: true})
    }


    render() {
        const { productData, productImgData, profileData, ImageArray } = this.state;
        console.log(this.state.currentSlideIndex)
        var Thumbslider = () => <Thumbnail thumbClick={this.thumbClick} slideIndex={this.state.currentSlideIndex} images={productImgData}/>;

        return(
            <div>
                <Header selected="product_detail" />
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={booking_top_banner} alt='booking_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                    <img src={korea} alt='korea' style={{width:200,position:'absolute',left:'50%',bottom:-80,marginLeft:-100,zIndex:50}}/>
                </Row>
                <Row type="flex" justify="center" style={{marginTop:100}}>
                    <Col span={9} className="detailPdu">
                        <div style={{maxHeight:600}}>
                            <ImageGallery
                                items={ImageArray}
                                style={{maxHeight:600}}
                            />
                        </div>
                        {/* <div>
                            <Thumbslider/>
                        </div> */}
                        <div style={{marginTop:50}}>
                            <h2>Overview</h2>
                            <p>
                                {productData.pdu_brief_description}
                            </p>
                        </div>
                        <div>
                            <h2>Language</h2>
                            <p>
                                {productData.pdu_language}
                            </p>
                        </div>
                        <div>
                            <h2>Price</h2>
                            <p>
                                {productData.pdu_price}
                            </p>
                        </div>
                        <div>
                            <h2>Meeting Time</h2>
                            <p>
                                {productData.pdu_meeting_time}
                            </p>
                        </div>
                        <div>
                            <h2>Duration</h2>
                            <p>
                                {productData.pdu_duration}
                            </p>
                        </div>
                        <div>
                            <h2>The Number of Guest</h2>
                            <p>
                                {productData.pdu_min_guest} ~ {productData.pdu_max_guest} Guests
                            </p>
                        </div>
                        <div>
                            <h2>Include</h2>
                            <p>
                                {productData.pdu_price_include}
                            </p>
                        </div>
                        <div>
                            <h2>Meeting Point</h2>
                            <p>
                                {productData.pdu_location}
                            </p>
                            <div style={{height:400,marginBottom:20,position:"relative"}}>
                                <Shownewgooglemap lat={parseFloat(productData.pdu_meeting_point_lat)} lng={parseFloat(productData.pdu_meeting_point_lng)} />
                            </div>
                        </div>
                        <div>
                            <h2>Direction</h2>
                            <p>
                                {productData.pdu_hottoget}
                            </p>
                        </div>
                        <div>
                            <h2>Thing to Note</h2>
                            <p>
                                {productData.pdu_additional_info}
                            </p>
                        </div>
                        <div>
                            <h2>Review</h2>
                            <p>
                                I reccommend to wear a confortable clothes and shoes, and you should bring the water. If tour days is rainly, you prepare to raincoat that umbrella. If you want to change something about our tour, do not hesitate. I really want to you have excellent experience in my country. Anytime i gonna find some best way to enjoy travelling.
                            </p>
                        </div>
                        <div>
                            <h2>Related Tours</h2>

                        </div>
                    </Col>
                    <Col span={5}>
                        <div style={{height:770,textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,marginLeft:10,padding:"30px 20px"}}>
                            <Row type="flex" justify="center" style={{marginTop:10}}>
                                <Col span={10} style={{textAlign:"center"}}>
                                    <Avatar src={base_url + "/" + this.state.profileData.image} shape="circle" size={100} icon="user" style={{backgroundColor:'#f56a00'}}/>
                                </Col>
                                <Col span={10} style={{textAlign:"left"}}>
                                    <h2 style={{marginTop:30}}>{profileData.name}</h2>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center" style={{marginTop:10}}>
                                <Col className="cerria1" span={8} style={{textAlign:"justify",borderRight:"2px solid rgba(0, 0, 0, 0.5)"}}>
                                    <p>Language</p>
                                    <p>Major</p>
                                    <p>Visited Country</p>
                                    <p>Next Travel</p>
                                </Col>
                                <Col className="cerria2" span={11} style={{marginRight:20,textAlign:"justify"}}>
                                    <p>{profileData.language}</p>
                                    <p>{profileData.major}</p>
                                    <p>{profileData.visited_country}</p>
                                    <p>{profileData.next_country}</p>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center" style={{marginTop:30}}>
                                <Col span={16} style={{left:-10}}>
                                    <h3 style={{textAlign:"justify"}}>Interest</h3>
                                    <p>{profileData.interest}</p>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center" style={{marginTop:20}}>
                                <Col span={10}>
                                    <ModalVideo channel='youtube' isOpen={this.state.modalIsOpen} videoId={profileData.videoId} onClose={() => this.setState({modalIsOpen: false})} />
                                    <Button size="default" type="primary" block onClick={this.openVideoModal}>Profile Video</Button>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center" style={{marginTop:30}}>
                                <div style={{ width: 350, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                </div>
                            </Row>
                        </div>
                        <Row type="flex" justify="center" style={{marginTop:10}}>
                            <div style={{width:"100%",height:60,padding:"0 10px",marginLeft:10}}>
                                <Link href="/booking">
                                    <Button className="bookingButton" size="large" type="primary" block style={{height:"100%"}}><span style={{fontSize:"2em"}}>BOOKING</span></Button>
                                </Link>
                            </div>
                        </Row>
                    </Col>
                </Row>

                <Footer selected="product_detail" />
            </div>
        )
    }
}