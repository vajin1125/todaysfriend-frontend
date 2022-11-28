import { Row, Col, Form, Icon, Input, Button, Select, DatePicker,InputNumber,TimePicker, Spin } from 'antd'
import Link from 'next/link'
import moment from 'moment'
import axios from 'axios'
import { base_url } from './components/base_url'
import Router from 'next/router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {booking_top_banner} from './components/images'
import { language_list } from './components/language_list'
import '../static/css/summary.css'

const FormItem = Form.Item;
const Option = Select.Option;

const languageOption = language_list.map((language) => 
    <Option key={language.name.toString()} value={language.name}>{language.name}</Option>
)

function langChange(value) {
    console.log(`selected ${value}`);
}

function inputNumberonChange(value) {
    console.log('changed', value);
}

class BookingSummaryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            booking_tourname: '',
            booking_tourdate: '',
            booking_starttime: '',
            booking_language: [],
            booking_numberofpeople: '',
            booking_bookername: '',
            booking_email: '',
            booking_price: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            booking_tourname: sessionStorage.getItem('booking_tourname'),
            booking_tourdate: sessionStorage.getItem('booking_tourdate'),
            booking_starttime: sessionStorage.getItem('booking_tourstarttime'),
            booking_language: sessionStorage.getItem('booking_language'),
            booking_numberofpeople: sessionStorage.getItem('booking_numberofpeople'),
            booking_bookername: sessionStorage.getItem('booking_bookername'),
            booking_email: sessionStorage.getItem('booking_email'),
            booking_price: sessionStorage.getItem('booking_price')
        })
    }

    makeLanguageArray = () => {
        let langarray = []
        if (this.state.booking_language.length != 0) {
            let lang = this.state.booking_language.split(',')
            langarray = [...lang]
        }
        return langarray        
    }

    datepickeronChange = (date, dateString) => {
        console.log(date, dateString);
        // this.setState({
        //     tourdate: dateString,
        // })
    }

    timepickeronChange = (time, timeString) => {
        console.log(time, timeString);
        // this.setState({
        //     starttime: timeString,
        // })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log('Tour Date:', values.tourdate.format("YYYY-MM-DD"));
                console.log('Start Time:', values.starttime);
                const tourdate = values.tourdate.format("YYYY-MM-DD")
                
                axios.post( base_url + '/api/booking_summary', {values, tourdate})
                .then(function (response) {
                    console.log('response:', response);
                    if (response.data['type'] === 'success') {
                        Router.push('/payment')
                    } else {
                        this.setState({
                            loading: false
                        })
                        Modal.error({
                            title: 'Your booking has been failed!',
                            content: 'Please try again !',
                        });
                    }
                })
                .catch(function (error) {
                    console.log('error:', error);
                });
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };
        return(
            <div>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={booking_top_banner} alt='booking_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                </Row>
                <h1 style={{textAlign:"center",marginTop:30}}>Booking Summary</h1>
                <Row type="flex">
                    <Col span={12} style={{margin:"0 auto"}}>
                        <p style={{textAlign:"center",fontWeight:600}}>
                        Thank you for booking! A confirmation email has been sent to you email. Please check out the email. I hope you to have a good time with local friend!
                        </p>
                    </Col>
                </Row>
                <Form className="summary-form" onSubmit={this.handleSubmit}>
                    <div className="formBody" style={{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:500,margin:"0 auto"}}>
                        <FormItem
                            {...formItemLayout}
                            label="Tour Name"
                        >
                            {getFieldDecorator('tourname', {
                                initialValue: this.state.booking_tourname,
                                rules: [{
                                    required: true, message: 'Please input tour name!'
                                }]
                            })(
                                <Input size="large" placeholder="Tour Name"/>
                            )}
                        </FormItem>
                        
                        <FormItem
                            {...formItemLayout}
                            label="Date of Tour"
                        >
                            {getFieldDecorator('tourdate', {
                                initialValue: moment(this.state.booking_tourdate),
                                rules: [{
                                    required: true, message: 'Please input date of tour'
                                }]
                            })(
                                <DatePicker size="large" style={{width:"100%"}} onChange={this.datepickeronChange} placeholder="Date of tour"/>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="Start time"
                        >
                            {getFieldDecorator('starttime', {
                                initialValue: this.state.booking_starttime,
                                rules: [{
                                    required: true, message: 'Please input start time for your tour!'
                                }]
                            })(
                                // <TimePicker size="large" style={{width:"100%"}} onChange={this.timepickeronChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="Start time"/>
                                <Select 
                                    size="large" 
                                    onChange={this.onChangeMeetingTime}
                                >
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

                        <FormItem
                            {...formItemLayout}
                            label="Language"
                        >
                            {getFieldDecorator('language', {
                                initialValue: this.makeLanguageArray(),
                                rules: [{
                                    required: true, message: 'Please input your language!'
                                }]
                            })(
                                <Select size="large" mode="multiple" onChange={langChange} placeholder="Select your languages">
                                    {languageOption}
                                </Select>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="
                                Number of friend
                            "
                        >
                            {getFieldDecorator('numberOfPeople', {
                                initialValue: this.state.booking_numberofpeople,
                                rules: [{
                                    required: true, message:'Please input number of people!'
                                }]
                            })(
                                <InputNumber size="large" style={{width:"100%"}} min={1} max={100000} onChange={inputNumberonChange} placeholder="Number of people (total)"/>
                            )}
                        </FormItem>
                        
                        <FormItem
                            {...formItemLayout}
                            label="Name"
                        >
                            {getFieldDecorator('bookername', {
                                initialValue: this.state.booking_bookername,
                                rules: [{
                                    required: true, message: 'Please input booker name!'
                                }]
                            })(
                                <Input size="large" placeholder="Booker Name"/>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="Email"
                        >
                            {getFieldDecorator('email', {
                                initialValue: this.state.booking_email,
                                rules: [{
                                    required: true, message: 'Please input your email!'
                                }, {
                                    type: 'email', message: 'This input is not valid!'
                                }]
                            })(
                                <Input size="large" placeholder="Email"/>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="Price"
                        >
                            {getFieldDecorator('price', {
                                initialValue: this.state.booking_price,
                                rules: [{
                                    required: true, message: 'Please input price!'
                                }]
                            })(
                                <InputNumber
                                    min={0} 
                                    max={100000000}
                                    formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\₩\s?|(,*)/g, '')}
                                    size="large" 
                                    style={{width:"100%"}} 
                                    placeholder="Price" />
                            )}
                        </FormItem>
                    </div>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={4}>
                            <Spin spinning={this.state.loading} size="large">
                            <Button size="large" htmlType="submit" type="primary" block>Confirm</Button>
                            </Spin>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
const WrappedBookingSummaryForm = Form.create()(BookingSummaryForm);

export default class extends React.Component {
    render(){
        return(
            <div>
                <Header selected="summary" />                
                <WrappedBookingSummaryForm/>
                <Footer selected="summary" />
            </div>
        )
    }
}