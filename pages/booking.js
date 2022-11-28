import { Row, Col } from 'antd'
import Link from 'next/link'
import { Form, Icon, Input, Button, Select, DatePicker,InputNumber, AutoComplete, Spin, Modal } from 'antd'
import axios from 'axios'
import Router from 'next/router'
import { base_url } from './components/base_url'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {booking_top_banner} from './components/images'
import { language_list } from './components/language_list'
import { country_list } from './components/country_list'

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const countryOption = country_list.map((country) =>
    <Option key={country.toString()} value={country}>{country}</Option>
)

const languageOption = language_list.map((language) => 
    <Option key={language.name.toString()} value={language.name}>{language.name}</Option>
)

function agesChange(value) {
    console.log(`selected ${value}`);
}

function nationalityChange(value) {
    console.log(`selected ${value}`);
}

function genderChange(value) {
    console.log(`selected ${value}`);
}

function langChange(value) {
    console.log(`selected ${value}`);
}

// inputNumber
function inputNumberonChange(value) {
    console.log('changed', value);
}


class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            filterdata: [],
            bookingdate: '',
            loading: false,
        }
    }

    autocompleteCountry = (value) => {
        if (value == '')
            this.setState({
                filterdata: []
            })
        else
            this.setState({
                filterdata: country_list.filter((s) => s.toLowerCase().substring(0, value.length) === value.toLowerCase())
            })
    }

    // Validated Email
    handleConfirmEmailBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    validateToNextEmail = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['emailConfirm'], { force: true });
        }
        callback();
    }

    compareToFirstEmail = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('email')) {
            callback('Two email that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    datepickeronChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({
            bookingdate: dateString
        })
    }

    onChangeMainSNS = (value) => {
        console.log(value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                });
                console.log('Received values of form: ', values);
                const bookingdate = this.state.bookingdate
                console.log('Booking Date:', bookingdate)
                
                axios.post( base_url + '/api/booking_register', {values, bookingdate})
                .then(function (response) {
                    console.log('response:', response);
                    if (response.data['type'] === 'success') {

                        sessionStorage.setItem('booking_tourdate', bookingdate)
                        sessionStorage.setItem('booking_language', values.language)
                        sessionStorage.setItem('booking_numberofpeople', values.numberOfPeople)
                        sessionStorage.setItem('booking_bookername', values.firstname + ' ' + values.lastname)
                        sessionStorage.setItem('booking_email', values.email)

                        Router.push('/summary')
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

        return(
            <div>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={booking_top_banner} alt='booking_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                </Row>
                <h1 style={{textAlign:"center",marginTop:30}}>Booking</h1>
                <Row type="flex">
                    <Col span={12} style={{margin:"0 auto"}}>
                        <p style={{textAlign:"center",fontWeight:600}}>
                            We need brief information to confirm your reservation. We help locals who are prepareing to show you a treal local trip make more efficient arrangements and guidance. 'SNS ID' is not a mandatory entry. We use that in order to contact you immediately if there is any change in the circumstances of the tour that is unavoidable.
                        </p>
                    </Col>
                </Row>
                <Form className="booking-form" onSubmit={this.handleSubmit}>
                    <div style={{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:800,margin:"0 auto"}}>
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <FormItem
                                    label="First Name"
                                >
                                    {getFieldDecorator('firstname', {
                                        rules: [{
                                            required: true, message: 'Please input your first name!'
                                        }]
                                    })(
                                        <Input size="large" placeholder="First Name" />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem
                                    label="Last Name"
                                >
                                    {getFieldDecorator('lastname', {
                                        rules: [{
                                            required: true, message: 'Please input your last name!'
                                        }]
                                    })(
                                        <Input size="large" placeholder="Last Name" />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <FormItem
                                    label="Age"
                                >
                                    {getFieldDecorator('agerange', {
                                        rules: [{
                                            required: true, message: 'Please select your age range!'
                                        }]
                                    })(
                                        <Select size="large" onChange={agesChange} placeholder="Select your age ranges">
                                            <Option value="10s">10s</Option>
                                            <Option value="20s">20s</Option>
                                            <Option value="30s">30s</Option>
                                            <Option value="40s">40s</Option>
                                            <Option value="50s">50s</Option>
                                            <Option value="60s">60s</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem
                                    label="Nationality"
                                >
                                    {getFieldDecorator('nationality', {
                                        rules: [{
                                            required: true, message: 'Please input your nationality!'
                                        }]
                                    })(
                                        <AutoComplete
                                            dataSource={this.state.filterdata}
                                            style={{ width: "100%" }}
                                            size="large"
                                            // onSelect={onSelect}
                                            onSearch={this.autocompleteCountry}
                                            mode="multiple"
                                            placeholder="Please enter your nationality"
                                        />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <FormItem
                                    label="Gender"
                                >
                                    {getFieldDecorator('gender', {
                                        rules: [{
                                            required: true, message: 'Please select your gender!'
                                        }]
                                    })(
                                        <Select size="large" onChange={genderChange} placeholder="Select your gender">
                                            <Option value="man">Man</Option>
                                            <Option value="woman">Woman</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem
                                    label="Language"
                                >
                                    {getFieldDecorator('language', {
                                        rules: [{
                                            required: true, message: 'Please select your languages!'
                                        }]
                                    })(
                                        <Select size="large" mode="multiple" onChange={langChange} placeholder="Select your languages">
                                            {languageOption}
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <FormItem
                                    label="Email"
                                >
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            required: true, message: 'Please input your Email!'
                                        }, { 
                                            type: 'email', message: 'The input is not valid!'
                                        }, {
                                            validator: this.validateToNextEmail,
                                        }]
                                    })(
                                        <Input size="large" placeholder="Email" />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem
                                    label="Confirmed Email"
                                >
                                    {getFieldDecorator('emailConfirm', {
                                        rules: [{
                                            type: 'email', message: 'The input is not valid!'
                                        }, {
                                            required: true, message: 'Please confirm your email!'
                                        }, {
                                            validator: this.compareToFirstEmail,
                                        }]
                                    })(
                                        <Input size="large" placeholder="Email confirmation" onBlur={this.handleConfirmEmailBlur}/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <FormItem
                                    label="Date"
                                >
                                    {getFieldDecorator('bookingDate', {
                                        rules: [{
                                            required: true, message: 'Please select booking date!'
                                        }]
                                    })(
                                        <DatePicker size="large" style={{width:"100%"}} onChange={this.datepickeronChange} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem
                                    label="Cell Number (Including country number)"
                                >
                                    {getFieldDecorator('phone', {
                                        rules: [{
                                            required: true, message: 'Please input your cell number!'
                                        }]
                                    })(
                                        <Input size="large" placeholder="Cell Number (Including country number)" />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <FormItem
                                    label="Mainly used SNS"
                                >
                                    {getFieldDecorator('mainSNS', {
            
                                    })(
                                        <Select size="large" onChange={this.onChangeMainSNS} placeholder="Select your mainly use SNS Name">
                                            <Option value="Twitter">Twitter</Option>
                                            <Option value="Facebook">Facebook</Option>
                                            <Option value="Instagram">Instagram</Option>
                                            <Option value="Whatapp">Whatapp</Option>
                                            <Option value="Snapchat">Snapchat</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem
                                    label="SNS ID"
                                >
                                    {getFieldDecorator('snsId', {
                                        
                                    })(
                                        <Input size="large" placeholder="SNS ID" />                                        
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <FormItem
                                    label="Number of People"
                                >
                                    {getFieldDecorator('numberOfPeople', {
                                        rules: [{
                                            required: true, message: 'Please input number of people!'
                                        }, {
                                            type: 'number', message: 'Invalided input!'
                                        }]
                                    })(
                                        <InputNumber size="large" style={{width:"100%"}} min={1} max={100000} onChange={inputNumberonChange} placeholder="Number of people"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem
                                    label="Things of Demand"
                                >
                                    {getFieldDecorator('note', {
                                        
                                    })(
                                        <TextArea placeholder="Things to demand" autosize={{ minRows: 3, maxRows: 10 }} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={4}>
                            <Spin spinning={this.state.loading} size="large">
                            <Button htmlType="submit" size="large" type="primary" block>Confirm</Button>
                            </Spin>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
const WrappedBookingForm = Form.create()(BookingForm);

export default class extends React.Component {
    render(){
        return(
            <div>
                <Header selected="booking" />                
                <WrappedBookingForm/>
                <Footer selected="booking" />
            </div>
        )
    }
}