import { Row, Col, Form, Input, Select, TimePicker, InputNumber, DatePicker, AutoComplete, Button, Modal, Spin } from 'antd'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
import moment from 'moment';
import { base_url } from './components/base_url'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ModifyTourImage } from './components/ModifyTourImage'
import Newgooglemap from './components/Newgooglemap'
import Googlemap from './components/Googlemap'
import { createproduct_top_banner } from './components/images'
import { language_list } from './components/language_list'
import '../static/css/createproduct.css'

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../static/css/mypicker.css'


const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const { TextArea } = Input;
let for_modify_id;

const languageOption = language_list.map((language) => 
    <Option key={language.name.toString()} value={language.name}>{language.name}</Option>
)

// Type of tour Select
function tourTypeChange(value) {
    console.log(`selected ${value}`);
}

// city select
function cityChange(value) {
    console.log(`selected ${value}`);
}

function languageChange(value) {
    console.log(`selected ${value}`);
}

// Number of Guest
function numGuestonChange(value) {
    console.log('changed', value);
}

// Price of tour
function priceChange(value) {
    console.log('changed', value);
}


class ModifyProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterdata: [],
            seasondate: [],
            notAllowedDate: '',
            uploadedFiles: [],
            loading: false,
            // for modify data
            productData: [],
            productImgData: [],
            language: [],
            meetingpoint: '',
            meetingpointJson: {
                lat: 0,
                lng: 0
            },
            selectedDays: [],
            textareaDays: [],
            pickerClassName: 'myPickerHide',
            briefLength: 0,
            detailLength: 0
        }
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(day, { selected }) {
        const { selectedDays, textareaDays } = this.state;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
            textareaDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
            console.log(day.toISOString())
            const newday = day.toISOString().split('T')[0]
            textareaDays.push(newday)
        }
        this.setState({ 
            selectedDays,
            textareaDays
        });
        console.log(this.state.selectedDays)
    }

    onClickTextarea = () => {
        this.state.pickerClassName === 'myPickerHide' ?
        this.setState({
            pickerClassName: 'myPickerShow'
        })
        :
        this.setState({
            pickerClassName: 'myPickerHide'
        })
    }

    componentDidMount = () => {
        const surl = window.location.href
        const spl_url = surl.split("=")
        if (spl_url.length > 0) {
            for_modify_id = spl_url[1]
            console.log("nano:",for_modify_id)
        }

        axios({
            method: 'post',
            url: base_url + "/api/get_modify_product",
            data: {
                productId: for_modify_id
            }
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    productData: response.data[0],
                    productImgData: response.data[1],
                    textareaDays: response.data[0]['pdu_unavailable_date']
                })
                this.setState({
                    meetingpointJson: {
                        lat: parseFloat(response.data[0].pdu_meeting_point_lat),
                        lng: parseFloat(response.data[0].pdu_meeting_point_lng)
                    }
                })
                const notDaysArray = response.data[0]['pdu_unavailable_date'].split(",")
                this.setState({
                    textareaDays: notDaysArray
                })
                const array = []
                notDaysArray.forEach(day => {
                    const sp_day = day.split("-")
                    array.push(new Date(sp_day[0], parseInt(sp_day[1])-1, sp_day[2]))
                });
                
                this.setState({
                    selectedDays: array
                })

                this.setState({
                    briefLength: response.data[0]['pdu_brief_description'].length,
                    detailLength: response.data[0]['pdu_detailed_description'].length,
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }
    
    autocompleteCountry = (value) => {
        if (value == '')
            this.setState({
                filterdata: []
            })
        else
            this.setState({
                filterdata: countries.filter((s) => s.toLowerCase().substring(0, value.length) === value.toLowerCase())
            })
    }
    autocompleteLanguage = (value) => {
        if (value == '')
            this.setState({
                filterdata: []
            })
        else
            this.setState({
                filterdata: languages.filter((s) => s.toLowerCase().substring(0, value.length) === value.toLowerCase())
            })
    }

    getDuration = () => {
        console.log("Duration:",this.duration.value)
    }

    tournameOnChange = (e) => {
        this.setState({
            tourname: e.target.value
        })
        console.log(this.state.tourname)
    }

    // meeting Time Select
    onChangeMeetingTime = (value) => {
        console.log(`selected ${value}`);
    }
    // duration Select
    onChangeDuration = (value) => {
        console.log(`selected ${value}`);
    }

    seasonOnChange = (date, dateString) => {
        console.log("season date form ~ to", dateString)
        this.setState({
            seasondate: dateString
        })
    }

    onChangeNotAllowed = (date, dateString) => {
        console.log("Not allowed Date:", dateString)
        this.setState({
            notAllowedDate: dateString
        })
    }

    getUploadFiles = (data) =>  {
        this.setState({
            uploadedFiles: data
        })
        console.log("Uploaded File list:", this.state.uploadedFiles)
    }

    getMeetingPoint = (point) => {
        this.state.meetingpointJson = point
        console.log("MeetingPointJSON:", this.state.meetingpointJson)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                // const meetingtime = this.meetingtime.state.value.format("HH:mm:ss")
                // const durationhours = this.duration.state.value.format("HH:mm:ss")
                const seasondate_from = this.season.picker.state.value[0].format("YYYY-MM-DD")
                const seasondate_to = this.season.picker.state.value[1].format("YYYY-MM-DD")
                const notAllowedDate = this.state.textareaDays
                const uploadedFiles = this.state.uploadedFiles
                const ustr = this.state.productData.pdu_ustr
                const meetingpoint = this.state.meetingpointJson
                console.log('uploaded Files: ', uploadedFiles);
                console.log('Received values of form: ', values);
                console.log("logged in username:", sessionStorage.getItem('session_username'))
                const username = sessionStorage.getItem('session_username')

                this.refs.UploadingTourImage.handleUpload();

                axios({
                    method: 'post',
                    url: base_url + '/api/modify_product',
                    data: {
                        values, 
                        seasondate_from,
                        seasondate_to,
                        notAllowedDate,
                        uploadedFiles,
                        username,
                        ustr,
                        for_modify_id,
                        meetingpoint
                    }
                })
                .then((response) => {
                    console.log('response:', response);
                    if (response.data['type'] === 'success'){
                        Router.push("/successproduct")
                    } else {
                        this.setState({
                            loading: false
                        })
                        Modal.error({
                            title: 'Product registeration has been failed!',
                            content: 'Please try again !',
                        });
                    }
                })
                .catch((error) => {
                    console.log('error:', error);
                    this.setState({
                        loading: false
                    })
                    Modal.error({
                        title: 'Product registeration has been failed!',
                        content: 'Please try again !',
                    });
                });
            }
        });
    }

    makeLanguageArray = () => {
        let langarray = []
        if (this.state.productData.length != 0) {
            let lang = this.state.productData.pdu_language.split(',')
            langarray = [...lang]
        }
        return langarray        
    }
    
    makeSeasonArray = () => {
        let seasonarray = []
        if (this.state.productData.length != 0) {
            let fromdate = this.state.productData.pdu_season_from
            let todate = this.state.productData.pdu_season_to
            seasonarray = [...fromdate]
            seasonarray = [...todate]
        }
        return seasonarray 
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const { productData, productImgData } = this.state;
        console.log("tourname:", productData.pdu_season_from)

        return(
            <div>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={createproduct_top_banner} alt='createproduct_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{marginTop:30}}>
                    <h1>Modify a Product</h1>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <p>
                            모든 내용은 영어 또는 가이드가 진행될 외국어로 작성해주셔야 합니다. 작성된 상품은 '오늘의 친구'에서 검토 후 수정 요청 또는 상품등록을 진행할 예정입니다. 상품에 대한 검증이 필요할 경우 '오늘의 친구'매니저가 입력된 연락처로 안내를 드린 후, 투어일정을 함께 체험하여 컨설팅을 진행할 예정이며 그 이후 상품등록을 진행합니다. 상품검증시 발생하는 비용을 '오늘의 친구'에서 지불 상품의 질을 높이고 투어상품 개발자의 편의를 돕고자 상품게시까지 일정 시간이 소요될수 있음을 참고해주시기 바랍니다!
                        </p>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        
                        <Form onSubmit={this.handleSubmit}>
                            <div style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"20px 20px",width:"100%",margin:"0 auto"}}>
                                <Row type="flex" justify="end">
                                    <span style={{color:"red",fontSize:".8em"}}>*영어로 작성해 주세요</span>
                                </Row>

                                {/* 1. Basic Information */}
                                <Row type="flex" justify="start" style={{marginBottom:20}}>
                                    <span style={{fontSize:"1.5em"}}>1. Basic Information</span>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={7}>
                                        <FormItem
                                            label="Name of tour"
                                        >
                                            {getFieldDecorator('tourname', {
                                                initialValue: productData.pdu_name,
                                                rules: [{
                                                    type: 'string', message: 'The input is not valid tour name!',
                                                }, {
                                                    required: true, message: 'Please input your tour name!',
                                                }],
                                            })(
                                                <Input size="large" onChange={this.tournameOnChange} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem
                                            label="Type of tour"
                                        >
                                            {getFieldDecorator('tourtype', {
                                                initialValue: productData.pdu_type,
                                                rules: [{
                                                    required: true, message: 'Please select your tour type!'
                                                }]
                                            })(
                                                <Select size="large" onChange={tourTypeChange}>
                                                    <Option value="Night Tour">Night Tour</Option>
                                                    <Option value="Private Car Tour">Private Car Tour</Option>
                                                    <Option value="Food Tour">Food Tour</Option>
                                                    <Option value="Climbing Tour">Climbing Tour</Option>
                                                    <Option value="Walking Tour">Walking Tour</Option>
                                                    <Option value="Bicycle Tour">Bicycle Tour</Option>
                                                    <Option value="Market Tour">Market Tour</Option>
                                                    <Option value="Nature Tour">Nature Tour</Option>
                                                    <Option value="Other">Other</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem
                                            label="Country"
                                        >
                                            {getFieldDecorator('country', {
                                                initialValue: productData.pdu_country,
                                                rules: [{
                                                    required: true, message: 'Please input your country!'
                                                }]
                                            })(
                                                <Input size="large" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={7}>
                                        <FormItem
                                            label="City"
                                        >
                                            {getFieldDecorator('city', {
                                                initialValue: productData.pdu_city,
                                                rules: [{
                                                    required: true, message: 'Please select your tour city!'
                                                }]
                                            })(
                                                <Select name="city" size="large" onChange={cityChange}>
                                                    <Option value="seoul">Seoul</Option>
                                                    <Option value="busan">Busan</Option>
                                                    <Option value="gyeongju">Gyeongju</Option>
                                                    <Option value="jeonju">Jeonju</Option>
                                                    <Option value="jejuisland">Jejuisland</Option>
                                                    <Option value="daegu">Daegu</Option>
                                                    <Option value="others">Others</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={15}>
                                        <FormItem
                                            label="Language(3개국어까지 입력가능)"
                                        >
                                            {getFieldDecorator('language', {
                                                initialValue: this.makeLanguageArray(),
                                                rules: [{
                                                    required: true, message: 'Please input languages!'
                                                }, {
                                                    type: 'array',
                                                }]
                                            })(
                                                <Select
                                                    mode="multiple"
                                                    style={{ width: '100%' }}
                                                    placeholder="Please select languages"
                                                    onChange={languageChange}
                                                    size="large"
                                                >
                                                    {languageOption}
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Brief description of Tour"
                                        >
                                            {getFieldDecorator('briefDesc', {
                                                initialValue: productData.pdu_brief_description,
                                                rules: [{
                                                    required: true, message: 'Please input your brief desciption of your tour!'
                                                }]
                                            })(
                                                <TextArea 
                                                    autosize={{ minRows: 3, maxRows: 8 }} 
                                                    maxLength={250} 
                                                    placeholder="간단하게 당신의 상품특징에 대해 설명해주세요." 
                                                    onChange={e => this.setState({briefLength: e.target.value.length})} 
                                                />
                                            )}
                                            <span style={{float:'right'}}>{this.state.briefLength}/250</span>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Detailed description of Tour"
                                        >
                                            {getFieldDecorator('detailedDesc', {
                                                initialValue: productData.pdu_detailed_description,
                                                rules: [{
                                                    required: true, message: 'Please input your detail desciption of your tour!'
                                                }]
                                            })(
                                                <TextArea 
                                                    autosize={{ minRows: 6, maxRows: 10 }} 
                                                    maxLength={1200}
                                                    placeholder="당신이 만든 local여행에 대해 설명을 자유롭게 작성해주세요. Tip! 당신의 투어만이 가지고 있는 특징에 대해 설명해주세요. 외국인은 언제나 local다움과 funny한 상품을 찾고 있습니다." 
                                                    onChange={e => this.setState({detailLength: e.target.value.length})}
                                                />
                                            )}
                                            <span style={{float:'right'}}>{this.state.detailLength}/1200</span>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Hash Tag (당신의 여행이 가지고 있는 특징을 4개의 Hash Tag 로 보여주세요.)"
                                        >
                                            {getFieldDecorator('hashtag', {
                                                initialValue: productData.pdu_hashtag,
                                                rules: [{
                                                    required: true, message: 'Please input your hash tag of your tour!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Ex) #seoul #hiking #bicycle #picnic" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Tour Image (투어를 대표하는 이미지를 넣어주세요.)"
                                        >
                                            <ModifyTourImage uploadedFileList={productImgData} getUploadFileList={this.getUploadFiles} ref='UploadingTourImage' />
                                        </FormItem>
                                    </Col>
                                </Row>
                                
                                {/* 2. Course Information */}
                                <Row type="flex" justify="start" style={{marginTop:30,marginBottom:20}}>
                                    <span style={{fontSize:"1.5em"}}>2. Course Information</span>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={7}>
                                        <FormItem
                                            label="Meeting Time"
                                        >   
                                            {getFieldDecorator('meetingTime', {
                                                initialValue: productData.pdu_meeting_time,
                                                rules: [{
                                                    required: true, message: 'Please input meeting time!'
                                                }]
                                            })(
                                                // <TimePicker ref={meetingtime => this.meetingtime = meetingtime} onChange={this.meetingTimeOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{width:"100%"}} size="large"/>
                                                <Select size="large" onChange={this.onChangeMeetingTime}>
                                                    <Option value="09:00">09:00</Option>
                                                    <Option value="09:30">09:30</Option>
                                                    <Option value="10:00">10:00</Option>
                                                    <Option value="10:30">10:30</Option>
                                                    <Option value="11:00">11:00</Option>
                                                    <Option value="11:30">11:30</Option>
                                                    <Option value="12:00">12:00</Option>
                                                    <Option value="12:30">12:30</Option>
                                                    <Option value="13:00">13:00</Option>
                                                    <Option value="13:30">13:30</Option>
                                                    <Option value="14:00">14:00</Option>
                                                    <Option value="14:30">14:30</Option>
                                                    <Option value="15:00">15:00</Option>
                                                    <Option value="15:30">15:30</Option>
                                                    <Option value="16:00">16:00</Option>
                                                    <Option value="16:30">16:30</Option>
                                                    <Option value="17:00">17:00</Option>
                                                    <Option value="18:30">18:30</Option>
                                                    <Option value="19:00">19:00</Option>
                                                    <Option value="19:30">19:30</Option>
                                                    <Option value="20:00">20:00</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem
                                            label="Duration (투어 소요시간)"
                                        >
                                            {getFieldDecorator('duration', {
                                                // initialValue: moment(productData.pdu_duration, 'HH:mm:ss'),
                                                initialValue: productData.pdu_duration,
                                                rules: [{
                                                    required: true, message: 'Please input duration of your tour!'
                                                }]
                                            })(
                                                // <TimePicker ref={duration => this.duration = duration} onChange={this.durationOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{width:"100%"}} size="large"/>
                                                <Select size="large" onChange={this.onChangeDuration}>
                                                    <Option value="30min">30min</Option>
                                                    <Option value="1hr">1hr</Option>
                                                    <Option value="1hr30min">1hr 30min</Option>
                                                    <Option value="2hr">2hr</Option>
                                                    <Option value="2hr30min">2hr 30min</Option>
                                                    <Option value="3hr">3hr</Option>
                                                    <Option value="3hr30min">3hr 30min</Option>
                                                    <Option value="4hr">4hr</Option>
                                                    <Option value="4hr30min">4hr 30min</Option>
                                                    <Option value="5hr">5hr</Option>
                                                    <Option value="5hr30min">5hr 30min</Option>
                                                    <Option value="6hr">6hr</Option>
                                                    <Option value="6hr30min">6hr 30min</Option>
                                                    <Option value="7hr">7hr</Option>
                                                    <Option value="7hr30min">7hr 30min</Option>
                                                    <Option value="8hr">8hr</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Meeting location of Tour (네이버의 영어주소를 리용하면 편리)"
                                        >
                                            {getFieldDecorator('meetingLocation', {
                                                initialValue: productData.pdu_location,
                                                rules: [{
                                                    required: true, message: 'Please input meeting location of your tour!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Ex) exit 3, Dongmyo station, 1, Wangsan-ro, Dongdaemun-gu, Seoul" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                    <label><span style={{color:'red',fontSize:18}}>*  </span>Meeting Point</label>
                                        <Newgooglemap 
                                            getMeetingPoint={this.getMeetingPoint} 
                                            // lat={parseFloat(this.state.productData.pdu_meeting_point_lat)} 
                                            // lng={parseFloat(this.state.productData.pdu_meeting_point_lng)} 
                                            meetingpointJson={this.state.meetingpointJson}
                                        />
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Please describe directions and explain how to get there"
                                        >
                                            {getFieldDecorator('howgetthere', {
                                                initialValue: productData.pdu_hottoget,
                                                rules: [{
                                                    required: true, message: 'Please input how to get there!'
                                                }]
                                            })(
                                                <TextArea autosize={{ minRows: 2, maxRows: 3 }} placeholder="If you come out of exit 3 of Dongmyo station, you can find me" />
                                            )}                                          
                                        </FormItem>
                                    </Col>
                                </Row>

                                {/* 3. Price & Other Information */}
                                <Row type="flex" justify="start" style={{marginTop:30,marginBottom:20}}>
                                    <span style={{fontSize:"1.5em"}}>3. Price & Other Information</span>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={7}>
                                        <FormItem
                                            label="Price of tour"
                                        >
                                            {getFieldDecorator('price', {
                                                initialValue: productData.pdu_price,
                                                rules: [{
                                                    required: true, message: 'Please input price!'
                                                }, {
                                                    type: 'integer', message: 'Must be of type integer!'
                                                }]
                                            })(
                                                <InputNumber 
                                                    size="large" 
                                                    min={0} 
                                                    max={100000000} 
                                                    formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    parser={value => value.replace(/\₩\s?|(,*)/g, '')}
                                                    onChange={this.priceChange} 
                                                    style={{width:"100%"}} 
                                                    placeholder="Ex) 30000(단위생략)" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={15}>
                                        <FormItem
                                            label="Price included (비용에 포함된 식사, 여행지, 체험등을 간략히 작성)"
                                        >
                                            {getFieldDecorator('priceIncluded', {
                                                initialValue: productData.pdu_price_include,
                                                rules: [{
                                                    required: true, message: 'Please input what is include in price!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Ex) lunch, snacks in the traditional market, rental fee to bicycle" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={7}>
                                        <FormItem
                                            label="Minimum Number of guest"
                                        >
                                            {getFieldDecorator('minNumGuest', {
                                                initialValue: productData.pdu_min_guest,
                                                rules: [{
                                                    required: true, message: 'Please input minimum number of guest!'
                                                }, {
                                                    type: 'integer', message: 'Please input number!'
                                                }]
                                            })(
                                                <InputNumber size="large" min={1} max={1000} onChange={numGuestonChange} style={{width:"100%"}} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem
                                            label="Maximum Number of guest"
                                        >
                                            {getFieldDecorator('maxNumGuest', {
                                                initialValue: productData.pdu_max_guest,
                                                rules: [{
                                                    required: true, message: 'Please input maximum number of guest!'
                                                }, , {
                                                    type: 'integer', message: 'Please input number!'
                                                }]
                                            })(
                                                <InputNumber size="large" min={1} max={1000} onChange={numGuestonChange} style={{width:"100%"}} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={9}>
                                        <FormItem
                                            label="Season from (투어 운영기간)"
                                        >
                                            {getFieldDecorator('season', {
                                                initialValue: [moment(productData.pdu_season_from, dateFormat), moment(productData.pdu_season_to, dateFormat)],
                                                rules: [{
                                                    required: true, message: 'Please input season of your tour!'
                                                }]
                                            })(
                                                <RangePicker ref={season => this.season = season} name="avaliable" size="large" format={dateFormat} onChange={this.seasonOnChange} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={13}>
                                        <FormItem
                                            label="Date not allowed"
                                        >
                                            {getFieldDecorator('notAllowed', {
                                                initialValue: moment(productData.pdu_unavailable_date, dateFormat)
                                            })(
                                                // <DatePicker ref={notallowed => this.notallowed = notallowed} size="large" format={dateFormat} onChange={this.onChangeNotAllowed} />
                                                <div>
                                                    <TextArea
                                                        onClick={this.onClickTextarea}
                                                        value={this.state.textareaDays}
                                                        readOnly
                                                    />

                                                    <div className={this.state.pickerClassName}>
                                                        <DayPicker
                                                            initialMonth={this.state.selectedDays[0]}
                                                            selectedDays={this.state.selectedDays}
                                                            onDayClick={this.handleDayClick}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Please write any additional information for your guest"
                                        >
                                            {getFieldDecorator('addNote', {
                                                initialValue: productData.pdu_additional_info,
                                                rules: [{
                                                    required: true, message: 'Please input any additional information for your guest!'
                                                }]
                                            })(
                                                <TextArea autosize={{ minRows: 3, maxRows: 4 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </div>
                            <Row type="flex" justify="center" style={{marginTop:20}}> 
                                <Col span={5}>
                                <Spin spinning={this.state.loading} size="large">
                                    <Button name="completeBtn" htmlType="submit" size="large" type="primary" block style={{height:60}}><span style={{fontSize:"1.5em"}}>완 료</span></Button>
                                </Spin>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
const WrappedModifyProductForm = Form.create()(ModifyProductForm);



export default class extends React.Component {
    render(){
        return(
            <div>
                <Header selected="modifyproduct" />                
                <WrappedModifyProductForm/>
                <Footer selected="modifyproduct" />
            </div>
        )
    }
}