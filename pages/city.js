import { Row, Col, AutoComplete, DatePicker, Select, Icon, Spin } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import YouTube from 'react-youtube';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { divider, booking_top_banner, korea, bar_seoul, bar_busan, bar_jeju, bar_daegu, bar_gyeonju, bar_jeonju, bar_others, product_summary_image } from './components/images'
import { language_list } from './components/language_list'
import { base_url } from './components/base_url'
import { any } from 'prop-types';


const { RangePicker } = DatePicker;
const Option = Select.Option;

const languageOption = language_list.map((language) => 
    <Option key={language.name.toString()} value={language.name}>{language.name}</Option>
)

// Viedo player
const opts = {
    height: '240',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
}

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterdata: [],
            productsData: [],
            productsImgData: [],
            cityArray: [],
            cityBar: '',
            loading: false,
            fromDate: '',
            toDate: '',
            selectTime: '',
            language: []
        }
    }

    componentDidMount = () => {
        
        const surl = window.location.href
        const spl_url = surl.split("=")
        const cityname = spl_url[1]

        document.title = cityname + "-Todays Friend"

        this.setState({
            loading: true
        });

        this.setState({
            cityBar: "bar_" + cityname
        });

        axios({
            method: 'post',
            url: base_url + "/api/city_products",
            data: {
                cityname
            }
        })
        .then((response) => {
            console.log(response)
            this.setState({
                productsData: response.data[0],
                productsImgData: response.data[1],
                loading: false
            });

            let mergeArray = this.state.productsImgData.map(x => Object.assign(x, this.state.productsData.find(y => y.pdu_ustr == x.pdu_ustr)));
            this.setState({
                cityArray: mergeArray
            });
        })
        .catch((error) => {
            console.log(error)
        });
    }

    cityBarGen = () => {
        if (this.state.cityBar != '') {
            let bar = this.state.cityBar
            if (bar === 'bar_seoul') return <img src={bar_seoul} alt={this.state.cityBar} style={{width:'90%'}}/>
            if (bar === 'bar_busan') return <img src={bar_busan} alt={this.state.cityBar} style={{width:'90%'}}/>
            if (bar === 'bar_jeju') return <img src={bar_jeju} alt={this.state.cityBar} style={{width:'90%'}}/>
            if (bar === 'bar_gyeonju') return <img src={bar_gyeonju} alt={this.state.cityBar} style={{width:'90%'}}/>
            if (bar === 'bar_jeonju') return <img src={bar_jeonju} alt={this.state.cityBar} style={{width:'90%'}}/>
            if (bar === 'bar_daegu') return <img src={bar_daegu} alt={this.state.cityBar} style={{width:'90%'}}/>
            if (bar === 'bar_others') return <img src={bar_others} alt={this.state.cityBar} style={{width:'90%'}}/>
        } else {
            return <Spin />
        }
    }

    handleChangeTime = value => {
        console.log(`selected Time ${value}`);
        this.setState({
            selectTime: value
        });
    }

    langChange = value => {
        console.log(`selected ${value}`);
        this.setState({
            language: value
        })
    }
    
    onChangeDate = (date, dateString) => {
        console.log(date, dateString);
        this.setState({
            fromDate: dateString[0],
            toDate: dateString[1]
        })
    }

    onBlurTime = value => {
        console.log("selectedDate", this.state.selectTime)
    }
    

    render() {
        console.log("Date",this.state.fromDate, this.state.toDate)
        console.log("Time",this.state.selectTime)
        console.log("Language",this.state.language)
        const { cityArray } = this.state;
        const productCard = cityArray.map(product => {
            let imageLink = base_url + "/" + product.pdu_img_url + "/" + product.pdu_img_name;
            return (
                <Link href={"/product_detail?id=" + product.id} key={product.id}>
                    <div style={{width:"95%",height:200,border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:30,float:"right",marginBottom:20}}>
                        <Row>
                            <Col span={10}>
                                <div className="productImage" style={{width:"100%",height:200}}>
                                    <img src={imageLink} alt="product image" style={{width:"100%",height:198,borderRadius:"20px 0 0 20px"}}/>
                                </div>
                            </Col>
                            <Col span={14} style={{textAlign:"justify",padding:10}}>
                                <h2>{product.pdu_name}</h2>
                                <Row type="flex" justify="space-between">
                                    <Col span={10}>
                                        <p>{product.pdu_type}</p>
                                    </Col>
                                    <Col span={10} style={{position:'relative'}}>
                                        <div style={{width:100,backgroundColor:"#0498c7",borderRadius:'20px 0 0 20px',textAlign:'center',padding:'3px 10px',fontSize:12,position:'absolute',top:-20,right:-10}}>
                                            <span style={{color:"#fff"}}>₩   {product.pdu_price}</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-after" style={{height:60}}>
                                    <p style={{margin:0,overflow:'hidden',display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical'}}>{product.pdu_brief_description}</p>
                                </Row>
                                <div>
                                    <Icon type="clock-circle" theme="twoTone" twoToneColor="#eb2f96"/><span>  {product.pdu_duration}</span>
                                </div>
                                <div>
                                    <Icon type="smile" theme="twoTone" /><span>  {product.pdu_price_include}</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Link>
            );
        });

        return(
            <div>
                <Header selected='city'/>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={booking_top_banner} alt='booking_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                    <img src={korea} alt='korea' style={{width:200,position:'absolute',left:'50%',bottom:-80,marginLeft:-100,zIndex:50}}/>
                </Row>
                <Row style={{background:'#FFF',textAlign:'center',paddingTop:80}}>
                    <img src={divider} alt="divider" style={{width:630}}/>
                </Row>
                <Row style={{textAlign:"center"}}>
                    <div style={{width:900,margin:'0 auto'}}>
                        <Row style={{marginTop:20,position:'relative'}}>
                            {this.cityBarGen()}
                        </Row>
                        <Row type="flex" justify="space-around" style={{marginTop:30}}>
                            <Col span={7}>
                                <RangePicker onChange={this.onChangeDate} style={{}} placeholder={['Day', 'Day']}/>
                            </Col>
                            <Col span={7}>
                                <Select placeholder="Time" style={{width:"100%"}} onChange={this.handleChangeTime} onBlur={this.onBlurTime}>
                                    <Option value="before12">Before 12</Option>
                                    <Option value="12-17">12 ~ 17</Option>
                                    <Option value="after17">After 17</Option>
                                </Select>
                            </Col>
                            <Col span={7}>
                                <Select mode="multiple" onChange={this.langChange} placeholder="Languages" style={{width:"100%"}}>
                                    {languageOption}
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <Spin spinning={this.state.loading} size="large">
                        <div style={{width:"60%",margin:'0 auto'}}>
                            <Row type="flex" justify="center" style={{marginTop:50}}>
                                <Col span={8}>
                                    <YouTube
                                        videoId="4pSzhZ76GdM"
                                        opts={opts}
                                        // onReady={this._onReady}
                                    />
                                    <p style={{textAlign:'left',fontSize:16,color:'#0498c7'}}>
                                        As the biggest city, Korea's past, present and future coexist. You can do everything In the capital city.
                                    </p>
                                </Col>
                                <Col span={16}>
                                    {productCard}
                                </Col>
                            </Row>
                        </div>
                    </Spin>
                </Row>
                <Footer selected="city"/>
            </div>
        )
    }
}