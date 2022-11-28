import { Row, Col, Button, Input, Select, Form, AutoComplete, DatePicker, InputNumber  } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { bg_customized, ask_sign } from './components/images'
import { language_list } from './components/language_list'
import { country_list } from './components/country_list'
import { base_url } from './components/base_url'
import '../static/css/customized.css'


const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const languageOption = language_list.map((language) => 
    <Option key={language.name.toString()} value={language.name}>{language.name}</Option>
)

function cityChange(value) {
    console.log(`selected ${value}`);
}

function genderChange(value) {
    console.log(`selected ${value}`);
}

// Language
function langChange(value) {
    console.log(`selected ${value}`);
}

// Natinoality
function handleChange(value) {
    console.log(`selected ${value}`);
}


function guestNumChange(value) {
    console.log('changed', value);
}


class AskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterdata: [],
            tourdate: '',
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

    
    datepickeronChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({
            tourdate: dateString,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const tourdate = this.state.tourdate
                console.log('Booking Date:', tourdate)
                
                axios.post( base_url + '/api/ask', {values, tourdate})
                .then(function (response) {
                    console.log('response:', response);
                    Router.push('/customized')
                })
                .catch(function (error) {
                    console.log('error:', error);
                });
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img className="customizedTopBanner" src={bg_customized} alt='bg_customized' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                        <img src={ask_sign} alt='ask_sign' style={{width:180,position:'absolute',left:'50%',bottom:-120,marginLeft:-100,zIndex:50}}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{paddingTop:130}}>
                    <h1>Ask to Local friend</h1>
                </Row>
                <Row type='flex' justify="center">
                    <Col span={8}>
                        <p>Please describe in detail the features of your trip. Even if you write only roughly, local friend will make a wonderful tour, but please write in more detail to make your trip special. Email and SNS accounts are only used to deliver travel items of your local friend, and will not be visible to anyone except for the administrator.</p>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={10}>
                        <Form onSubmit={this.handleSubmit}>
                            <div style={{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:20,padding:"20px 20px",width:"100%"}}>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={11}>
                                        <FormItem
                                            label="First Name"
                                        >
                                            {getFieldDecorator('firstname', {
                                                rules: [{
                                                    required: true, message: 'Please input first name!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="First Name" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={11}>
                                        <FormItem
                                            label="Last Name"
                                        >
                                            {getFieldDecorator('lastname', {
                                                rules: [{
                                                    required: true, message: 'Please input last name!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Last Name" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around">
                                    <Col span={11}>
                                        <FormItem
                                            label="Gender"
                                        >
                                            {getFieldDecorator('gender', {
                                                rules: [{
                                                    required: true, message: 'Please selsect your gender!'
                                                }]
                                            })(
                                                <Select name="gender" size="large" onChange={genderChange} placeholder="Select your gender">
                                                    <Option value="man">Man</Option>
                                                    <Option value="woman">Woman</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={11}>
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
                                    <Col span={11}>
                                        <FormItem
                                            label="City"
                                        >
                                            {getFieldDecorator('city', {
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
                                    <Col span={11}>
                                        <FormItem
                                            label="Languages"
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
                                    <Col span={11}>
                                        <FormItem
                                            label="Email"
                                        >
                                            {getFieldDecorator('email', {
                                                rules: [{
                                                    required: true, message: 'Please input your Email!'
                                                }, {
                                                    type: 'email', message: 'This input is not valid!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Email" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={11}>
                                        <FormItem
                                            label="Password"
                                        >
                                            {getFieldDecorator('password', {
                                                rules: [{
                                                    required: true, message: 'Please input your password!'
                                                }]
                                            })(
                                                <Input type="password" size="large" placeholder="Password" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around">
                                    <Col span={11}>
                                        <FormItem
                                            label="Date (choice available day)"
                                        >   
                                            {getFieldDecorator('tourDay', {
                                                rules: [{
                                                    required: true, message: 'Please select your tour Day!'
                                                }]
                                            })(
                                                <DatePicker size="large" style={{width:"100%"}} onChange={this.datepickeronChange} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={11}>
                                        <FormItem
                                            label="Title of asking"
                                        >
                                            {getFieldDecorator('titleOfAsking', {
                                                rules: [{
                                                    required: true, message: 'Please input title of asking!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Please enter title of asking"></Input>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around">
                                    <Col span={11}>
                                        <FormItem
                                            label="Mainly used SNS"
                                        >
                                            {getFieldDecorator('snsname', {
                                                rules: [{
                                                    required: true, message: 'Please input your SNS name!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Please enter your mainly used SNS name" />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={11}>
                                        <FormItem
                                            label="SNS ID"
                                        >
                                            {getFieldDecorator('snsId', {
                                                rules: [{
                                                    required: true, message: 'Please input your SNS id!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Please enter your SNS ID" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around">
                                    <Col span={11}>
                                        <FormItem
                                            label="Guest Number"
                                        >
                                            {getFieldDecorator('guestnumber', {
                                                rules: [{
                                                    required: true, message: 'Please input number of guest!'
                                                }]
                                            })(
                                                <InputNumber min={1} max={100000} onChange={guestNumChange} placeholder="Guest Number" size="large" style={{width:"100%"}}/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={11}>
                                        <FormItem
                                            label="Price (total)"
                                        >
                                            {getFieldDecorator('price', {
                                                rules: [{
                                                    required: true, message: 'Please input price!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Please input price" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around">
                                    <Col span={23}>
                                        <FormItem
                                            label="What do you want ?"                                        
                                        >
                                            {getFieldDecorator('whatwant', {
                                                rules: [{
                                                    required: true, message: 'Please input what you want'
                                                }]
                                            })(
                                                <TextArea autosize={{ minRows: 3, maxRows: 8 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </div>
                            <Row type="flex" justify="center" style={{marginTop:20}}> 
                                <Col span={5}>
                                    <Button size="large" htmlType="submit" type="primary" block><span>Submit</span></Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )    
    }
}
const WrappedAskForm = Form.create()(AskForm);

export default class extends React.Component {
    render(){
        return(
            <div>
                <Header selected="ask" />                
                <WrappedAskForm/>
                <Footer selected="ask" />
            </div>
        )
    }
}