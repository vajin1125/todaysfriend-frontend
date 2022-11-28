import { Row, Col, Form, Icon, Input, Button, Select, DatePicker,InputNumber,TimePicker } from 'antd'
import Link from 'next/link'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Header } from './components/Header'
import { Footer } from './components/Footer';
import {booking_top_banner} from './components/images'

const FormItem = Form.Item;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                
                // axios.post( base_url + '/api/booking_summary', {values})
                // .then(function (response) {
                //     console.log('response:', response);
                // })
                // .catch(function (error) {
                //     console.log('error:', error);
                // });
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
                <h1 style={{textAlign:"center",marginTop:30}}>Payment</h1>
                <Row type="flex">
                    <Col span={12} style={{margin:"0 auto"}}>
                        <p style={{textAlign:"center",fontWeight:600}}>
                            It's last procedure! If you want to enjoy the local life tour, you should pay this.
                            Please fill out your payment information. You can experinece real local life with local friend!
                        </p>
                    </Col>
                </Row>
                <Form className="summary-form" onSubmit={this.handleSubmit}>
                    <div className="formBody" style={{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:500,margin:"0 auto"}}>
                        <FormItem
                            {...formItemLayout}
                            label="Card Number"
                        >
                            {getFieldDecorator('cardnumber', {
                                rules: [{
                                    required: true, message: 'Please input card number!'
                                }]
                            })(
                                <Input size="large" />
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="Expairation of Date"
                        >
                            {getFieldDecorator('expairDate', {
                                rules: [{
                                    required: true, message: 'Please input expairation date!'
                                }]
                            })(
                                <MonthPicker size="large" onChange={onChange} placeholder="Select Expairation Date" style={{width:"100%"}} />
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="Security Code"
                        >
                            {getFieldDecorator('secuCode', {
                                rules: [{
                                    required: true, message: 'Please input security code!'
                                }]
                            })(
                                <Input size="large" />
                            )}
                        </FormItem>
                        
                        <FormItem
                            {...formItemLayout}
                            label="First Name"
                        >
                            {getFieldDecorator('firstname', {
                                rules: [{
                                    required: true, message: 'Please input first name!'
                                }]
                            })(
                                <Input size="large" />
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="Last Name"
                        >
                            {getFieldDecorator('lastname', {
                                rules: [{
                                    required: true, message: 'Please input last name!'
                                }]
                            })(
                                <Input size="large" />
                            )}
                        </FormItem>
                    </div>
                    <Row type="flex" style={{marginTop:20}}>
                        <Col span={12} style={{margin:"0 auto"}}>
                            <p style={{textAlign:"center",fontWeight:600}}>
                                By confirming this reservation, you agree to the <Link href="/policy"><a>Terms & Legal, Cancel & Refund</a></Link> policies.
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={3}>
                            <Button size="large" htmlType="submit" type="primary" block>Confirmation</Button>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Button size="large" htmlType="reset" type="primary" block>Cancel</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
const WrappedPaymentForm = Form.create()(PaymentForm);


class PaypalButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPaypal: false
        };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.setState({
                showPaypal: true
            })
        }
    }

    render() {
        const onSuccess = (payment) => {
			// 1, 2, and ... Poof! You made it, everything's fine and dandy!
            console.log("Payment successful!", payment);
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onCancel = (data) => {
			// The user pressed "cancel" or closed the PayPal popup
			console.log('Payment cancelled!', data);
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onError = (err) => {
			// The main Paypal script could not be loaded or something blocked the script from loading
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		}

		let env = 'sandbox'; // you can set this string to 'production'
		let currency = 'USD'; // you can set this string from your props or state  
		let total = 1;  // this is the total amount (based on currency) to charge
		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

		const client = {
			sandbox: 'AQXQ8tuz1pvbGAvvwVxIddulINB4ol35mkjX5FvwsEu5R_xc_r406-FVvv6Pl9niHFD7rzu5EtrDgIB5'
        }

        return(
            <div>
                {
                    this.state.showPaypal ?
                        <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                        : <label>undefined</label>

                }
            </div>
        )
    }
}

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header selsected="payment" />

                <WrappedPaymentForm />
                <Row type="flex" justify='center'>
                    <Col span={4} style={{textAlign:"center",width:"100%", marginTop:30}}>
                        <PaypalButton />
                    </Col>
                </Row>
                
                <Footer selsected="payment" />
            </div>
        )
    }
}