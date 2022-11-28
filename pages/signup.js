import Router from 'next/router'
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, Modal } from 'antd';
import axios from 'axios'
import { base_url } from './components/base_url'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import '../static/css/signup.css'


const FormItem = Form.Item;
let sessionUserInfo = '';


class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmDirty: false,
        }
    }

    // Validated Password
    handleConfirmPasswordBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['passwordConfirm'], { force: true });
        }
        callback();
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                axios.post( base_url + '/api/signup', {values})
                .then(function (response) {
                    console.log('response:', response);
                    if (response['data']['type'] == 'success') {
                        sessionStorage.setItem('session_username', response['data']['name'])
                        sessionUserInfo = sessionStorage.getItem('session_username')
                        Router.push("/signupsuccess")
                    } else if (response['data']['type'] == 'error' && response['data']['message'] == 'already registered username') {
                        Modal.error({
                            title: 'Already registered UserName !',
                            content: 'Please input different UserName',
                        });
                    } else if(response['data']['type'] == 'error' && response['data']['message'] == 'already registered email') {
                        Modal.error({
                            title: 'Already registered email !',
                            content: 'Please input different email',
                        });
                    } else if(response['data']['type'] == 'error' && response['data']['message'] == 'already existed user') {
                        Modal.error({
                            title: 'This user already existed here',
                            content: 'Please try again',
                        });
                    }
                })
                .catch(function (error) {
                    console.log('error:', error);
                });
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <h1 style={{textAlign:"center"}}>SignUp</h1>
                <p style={{textAlign:"center",fontWeight:900}}>Please enter your membership information</p>
                <Row type="flex" style={{textAlign:"center"}}>
                    <div style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,paddingTop:50,paddingBottom:50,width:400,margin:"0 auto"}}>
                        <Form className="signup-form" onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{
                                        type: 'string', message: 'The input is not valid!'
                                    }, {
                                        required: true, message: 'Please input your name!'
                                    }]
                                })(
                                    <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{width:350,marginBottom:0}} placeholder="Name"   />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid!'
                                    }, {
                                        required: true, message: 'Please input your email!'
                                    }, {
                                        validator: this.validateToNextEmail,
                                    }]
                                })(
                                    <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{width:350,marginBottom:0}} placeholder="ID(E-mail)" />
                                )}
                            </FormItem>
                            
                            <FormItem>
                                {getFieldDecorator('emailConfirm', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid!'
                                    }, {
                                        required: true, message: 'Please confirm your email!'
                                    }, {
                                        validator: this.compareToFirstEmail,
                                    }]
                                })(
                                    <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{width:350,marginBottom:0}} placeholder="ID(E-mail) Confirm" onBlur={this.handleConfirmEmailBlur} />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!'
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }]
                                })(
                                    <Input size="large" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{width:350,marginBottom:0}} placeholder="Password" />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('passwordConfirm', {
                                    rules: [{
                                        required: true, message: 'Please confirm your password!'
                                    }, {
                                        validator: this.compareToFirstPassword,
                                    }]
                                })(
                                    <Input size="large" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{width:350,marginBottom:0}} placeholder="Password Confirm" onBlur={this.handleConfirmPasswordBlur} />
                                )}
                            </FormItem>
                            
                            <Button size="large" type="primary" block style={{width:350,marginTop:20}} htmlType="submit">Sign Up</Button>
                        </Form>
                    </div>
                </Row>
            </div>
        )
    }
}
const WrappedSignUpForm = Form.create()(SignUpForm);

export default class extends React.Component {
    componentDidMount(){
        document.title = "SignUp-Todays Friend"
    }
    render(){
        return(
            <div>
                <Header selected='signup' loggedIn={sessionUserInfo}/>
                <WrappedSignUpForm/>
                <Footer selected='signup'/>
            </div>
        )
    }
}