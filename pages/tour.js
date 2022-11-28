import Link from 'next/link'
import axios from 'axios'
import { Row, Col, Spin } from 'antd'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { base_url } from './components/base_url';
import { korea, bg_tour, divider, bar_seoul, bar_busan, bar_jeju, bar_daegu, bar_gyeonju, bar_jeonju, bar_others, tour_more, product_summary_image } from './components/images'
import '../static/css/tour.css'


export default class TourProgram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsData: [],
            productsImgData: [],
            cityArray: [],
            seoulProducts: [],
            busanProducts: [],
            jejuProducts: [],
            gyeongjuProducts: [],
            jeonjuProducts: [],
            daeguProducts: [],
            otherProducts: [],
            loading: false,
        }
    }

    componentDidMount(){
        document.title = "Tour Program-Todays Friend";
        this.setState({
            loading: true
        })

        axios.get( base_url + '/api/show_tourpage_products')
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.setState({
                    productsData: response.data[0],
                    productsImgData: response.data[1],
                    loading: false
                })
    
                let mergeArray = this.state.productsImgData.map(x => Object.assign(x, this.state.productsData.find(y => y.pdu_ustr == x.pdu_ustr)));
                this.setState({
                    cityArray: mergeArray
                })
    
                this.state.cityArray.map(product => {
                    if (product.pdu_city === "seoul"){
                        this.setState({
                            seoulProducts: [...this.state.seoulProducts, product]
                        })
                    } else if (product.pdu_city === "busan") {
                        this.setState({
                            busanProducts: [...this.state.busanProducts, product]
                        })
                    } else if (product.pdu_city === "jeju") {
                        this.setState({
                            jejuProducts: [...this.state.jejuProducts, product]
                        })
                    } else if (product.pdu_city === "gyeongju") {
                        this.setState({
                            gyeongjuProducts: [...this.state.gyeongjuProducts, product]
                        })
                    } else if (product.pdu_city === "jeonju") {
                        this.setState({
                            jeonjuProducts: [...this.state.jeonjuProducts, product]
                        })
                    } else if (product.pdu_city === "daegu") {
                        this.setState({
                            daeguProducts: [...this.state.daeguProducts, product]
                        })
                    } else {
                        this.setState({
                            otherProducts: [...this.state.otherProducts, product]
                        })
                    }
                })
            } else if (response.data === "nothing") {
                this.setState({
                    loading: false
                })
            }
            
        })
        .catch((error) => {
            console.log(error)
        });        
    }

    productCard = (city) => {
        let products = []
        if (city === "seoul") {
            products = this.state.seoulProducts;
        } else if (city === "busan") {
            products = this.state.busanProducts;
        } else if (city === "jeju") {
            products = this.state.jejuProducts;
        } else if (city === "gyeongju") {
            products = this.state.gyeongjuProducts;
        } else if (city === "jeonju") {
            products = this.state.jeonjuProducts;
        } else if (city === "daegu") {
            products = this.state.daeguProducts;
        } else if (city === "other") {
            products = this.state.otherProducts;
        }

        if (products.length != 0) {
            let card = []
            for (let i=0; i<products.length; i++) {
                let children = []
                children.push(
                    <Col span={11}>
                        <Link href={"/product_detail?id=" + products[i].id}>
                            <div style={{width:"100%",height:150,marginTop:20,border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:20}}>
                                <Row>
                                    <Col span={9}>
                                        <div className="productImage" style={{width:"100%",height:150}}>
                                            <img src={ base_url + "/" + products[i].pdu_img_url + "/" + products[i].pdu_img_name } alt="product image" style={{width:"100%",height:148,borderRadius:"20px 0 0 20px"}}/>
                                        </div>
                                    </Col>
                                    <Col span={15} style={{textAlign:"justify",padding:10}}>
                                        <h3>{products[i].pdu_name}</h3>
                                        <Row type="flex" justify="left" style={{marginTop:10}}>
                                            <Col className="tourinfo1" span={8} style={{textAlign:"left",borderRight:"2px solid rgba(0, 0, 0, 0.5)"}}>
                                                <p>Price</p>
                                                <p>Lead Time</p>
                                                <p>Language</p>
                                                <p>Hashtag</p>
                                            </Col>
                                            <Col className="tourinfo2" span={16} style={{textAlign:"justify"}}>
                                                <p>{products[i].pdu_price}</p>
                                                <p>{products[i].pdu_duration}</p>
                                                <p>{products[i].pdu_language}</p>
                                                <p>{products[i].pdu_hashtag}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Link>
                    </Col>
                )
                children.push(<Col span={2}></Col>)
                card.push(<div>{children}</div>)
            }
            return card
        } else {
            return <h3>"There is not any products yet. Coming soon !"</h3>
        }
    }


    render() { 
        return(
            <div>
                <Header selected='tour'/>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={bg_tour} alt='bg_tour' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                        <img src={korea} alt='korea' style={{width:200,position:'absolute',left:'50%',bottom:-80,marginLeft:-100,zIndex:50}}/>
                    </Col>
                </Row>
                <Row style={{background:'#FFF',textAlign:'center',paddingTop:100}}>
                    <img src={divider} alt='divider' style={{width:630}}/>
                </Row>
                <Spin spinning={this.state.loading} size="large">
                <Row style={{textAlign:'center'}}>
                    <div style={{width:900,margin:'0 auto'}}>
                        <Row style={{marginTop:20,position:'relative'}}>
                            <img src={bar_seoul} alt='bar_seoul' style={{width:'100%'}}/>
                            <Link href="/city?name=seoul">
                                <img src={tour_more} alt='tour_more' style={{width:50,position:'absolute',bottom:0,right:20}}/>
                            </Link>
                        </Row>
                        <Row>
                            {this.productCard("seoul")}          
                        </Row>

                        <Row style={{marginTop:20,position:'relative'}}>
                            <img src={bar_busan} alt='bar_busan' style={{width:'100%'}}/>
                            <Link href="/city?name=busan">
                                <img src={tour_more} alt='tour_more' style={{width:50,position:'absolute',bottom:0,right:20}}/>
                            </Link>
                        </Row>
                        <Row>
                            {this.productCard("busan")} 
                        </Row>

                        <Row style={{marginTop:20,position:'relative'}}>
                            <img src={bar_jeju} alt='bar_jeju' style={{width:'100%'}}/>
                            <Link href="/city?name=jeju">
                                <img src={tour_more} alt='tour_more' style={{width:50,position:'absolute',bottom:0,right:20}}/>
                            </Link>
                        </Row>
                        <Row>
                            {this.productCard("jeju")} 
                        </Row>

                        <Row style={{marginTop:20,position:'relative'}}>
                            <img src={bar_gyeonju} alt='bar_gyeonju' style={{width:'100%'}}/>
                            <Link href="/city?name=gyeongju">
                                <img src={tour_more} alt='tour_more' style={{width:50,position:'absolute',bottom:0,right:20}}/>
                            </Link>
                        </Row>
                        <Row>
                            {this.productCard("gyeongju")} 
                        </Row>

                        <Row style={{marginTop:20,position:'relative'}}>
                            <img src={bar_jeonju} alt='bar_jeonju' style={{width:'100%'}}/>
                            <Link href="/city?name=jeonju">
                                <img src={tour_more} alt='tour_more' style={{width:50,position:'absolute',bottom:0,right:20}}/>
                            </Link>
                        </Row>
                        <Row>
                            {this.productCard("jeonju")} 
                        </Row>

                        <Row style={{marginTop:20,position:'relative'}}>
                            <img src={bar_daegu} alt='bar_jeonju' style={{width:'100%'}}/>
                            <Link href="/city?name=daegu">
                                <img src={tour_more} alt='tour_more' style={{width:50,position:'absolute',bottom:0,right:20}}/>
                            </Link>
                        </Row>
                        <Row>
                            {this.productCard("daegu")} 
                        </Row>

                        <Row style={{marginTop:20,position:'relative'}}>
                            <img src={bar_others} alt='bar_others' style={{width:'100%'}}/>
                            <Link href="/city?name=other">
                                <img src={tour_more} alt='tour_more' style={{width:50,position:'absolute',bottom:0,right:20}}/>
                            </Link>
                        </Row>
                        <Row>
                            {this.productCard("other")} 
                        </Row>

                    </div>
                </Row>
                </Spin>
                <Footer selected="tour"/>
            </div>
        )
    }
}