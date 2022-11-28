import Link from 'next/link'
import { Row, Col, Form, Input, Select, TimePicker, InputNumber, DatePicker, AutoComplete, Button } from 'antd'
import moment from 'moment';
import axios from 'axios'
import { base_url } from './components/base_url'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TourImage } from './components/TourImage'
import Googlemap from './components/Googlemap'
import { createproduct_top_banner } from './components/images'
import { language_list } from './components/language_list'


const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const languageOption = language_list.map((language) => 
    <Option key={language.name.toString()} value={language.name}>{language.name}</Option>
)

function languageChange(value) {
    console.log(`selected ${value}`);
}

// Meeting timepicker
function meetingtimeonChange(time, timeString) {
    console.log(time, timeString);
}


class CustomizeProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterdata: [],
            meetingtime: '',
            durationhours: '',
        }
    }

    meetingTimeOnChange = (time, timeString) => {
        console.log("meeting Time:", timeString)
        this.setState({
            meetingtime: timeString
        })
    }

    durationOnChange = (time, timeString) => {
        console.log("Duration Hours:", timeString)
        this.setState({
            durationhours: timeString
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('meetingtime:', this.state.meetingtime);
                console.log('durationhours:', this.state.durationhours);
                const meetingtime = this.state.meetingtime
                const durationhours = this.state.durationhours
                console.log('Received values of form: ', values);
                
                axios.post( base_url + '/api/customize_product', {values, meetingtime, durationhours})
                .then(function (response) {
                    console.log('response:', response);
                })
                .catch(function (error) {
                    console.log('error:', error);
                });
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        return(
            <div>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={createproduct_top_banner} alt='createproduct_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{marginTop:30}}>
                    <h1>Create a Product (Customized)</h1>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <p>
                            Customized 상품은 foreigner friend가 보다 다양하고 만족스러운 한국여행을 했으면 하는 바람으로 만들어진 페이지입니다. foreigner friend의 신청사항이 최대한 반영되도록 만들어 주시길 바라며, 상품에 대해 자세하게 설명해 주시면 forgeigner firend가 참고하는데 많은 도움이 될것입니다. Customized 상품을 통해 foreigner friend와 좋은 추억을 만드시길 바랍니다.!
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
                                                rules: [{
                                                    type: 'string', message: 'The input is not valid tour name!',
                                                }, {
                                                    required: true, message: 'Please input your tour name!',
                                                }],
                                            })(
                                                <Input size="large" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem
                                            label="Type of tour"
                                        >
                                            {getFieldDecorator('tourtype', {
                                                rules: [{
                                                    required: true, message: 'Please select your tour type!'
                                                }]
                                            })(
                                                <Select size="large">
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
                                                initialValue: 'Korea',
                                                rules: [{
                                                    required: true, message: 'Please input your country!'
                                                }]
                                            })(
                                                <Input size="large" />
                                            )}
                                            {/* <AutoComplete
                                                dataSource={this.state.filterdata}
                                                style={{ width: "100%" }}
                                                size="large"
                                                // onSelect={onSelect}
                                                onSearch={this.autocompleteCountry}
                                                mode="multiple"
                                                placeholder="Please enter your country"
                                            /> */}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={7}>
                                        <FormItem
                                            label="City"
                                        >
                                            {getFieldDecorator('city', {
                                                rules: [{
                                                    required: true, message: 'Please select your tour city!'
                                                }]
                                            })(
                                                <Select name="city" size="large">
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
                                            label="Detailed description of Tour"
                                        >
                                            {getFieldDecorator('detailedDesc', {
                                                rules: [{
                                                    required: true, message: 'Please input your detail desciption of your tour!'
                                                }]
                                            })(
                                                <TextArea autosize={{ minRows: 4, maxRows: 10 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Hash Tag (당신의 여행이 가지고 있는 특징을 4개의 Hash Tag 로 보여주세요.)"
                                        >
                                            {getFieldDecorator('hashtag', {
                                                rules: [{
                                                    required: true, message: 'Please input your hash tag of your tour!'
                                                }]
                                            })(
                                                <Input size="large" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Tour Image (투어를 대표하는 이미지를 넣어주세요.)"
                                        >
                                            {/* {getFieldDecorator('tourimg', {
                                                rules: [{
                                                    required: true, message: 'Please upload your images of your tour!'
                                                }]
                                            })( */}
                                                <TourImage />
                                            {/* )}                                             */}
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
                                                rules: [{
                                                    required: true, message: 'Please input meeting time!'
                                                }]
                                            })(
                                                <TimePicker onChange={this.meetingTimeOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{width:"100%"}} size="large"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem
                                            label="Duration (투어 소요시간)"
                                        >
                                            {getFieldDecorator('duration', {
                                                rules: [{
                                                    required: true, message: 'Please input duration of your tour!'
                                                }]
                                            })(
                                                <TimePicker onChange={this.durationOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{width:"100%"}} size="large"/>
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
                                                rules: [{
                                                    required: true, message: 'Please input meeting location of your tour!'
                                                }]
                                            })(
                                                <Input size="large"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left",marginTop:10}}>
                                    <Col span={23}>
                                        <label>Meeting Point</label>
                                        <div style={{width:"100%",height:300}}>
                                            <Googlemap />
                                        </div>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={23}>
                                        <FormItem
                                            label="Please describe directions and explain how to get there"
                                        >
                                            {getFieldDecorator('howgetthere', {
                                                rules: [{
                                                    required: true, message: 'Please input how to get there!'
                                                }]
                                            })(
                                                <TextArea autosize={{ minRows: 2, maxRows: 3 }} />
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
                                                rules: [{
                                                    required: true, message: 'Please input price!'
                                                }, {
                                                    type: 'integer', message: 'Must be of type integer!'
                                                }]
                                            })(
                                                <InputNumber size="large" min={0} max={100000000} onChange={this.priceChange} style={{width:"100%"}} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={15}>
                                        <FormItem
                                            label="Price included (비용에 포함된 식사, 여행지, 체험등을 간략히 작성)"
                                        >
                                            {getFieldDecorator('priceIncluded', {
                                                rules: [{
                                                    required: true, message: 'Please input what is include in price!'
                                                }]
                                            })(
                                                <Input size="large" />
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
                                    <Button name="completeBtn" htmlType="submit" size="large" type="primary" block style={{height:60}}><span style={{fontSize:"1.5em"}}>완 료</span></Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
const WrappedCustomizeProductForm = Form.create()(CustomizeProductForm);

export default class extends React.Component {
    render(){
        return(
            <div>
                <Header selected="customizeproduct" />                
                <WrappedCustomizeProductForm/>
                <Footer selected="customizeproduct" />
            </div>
        )
    }
}