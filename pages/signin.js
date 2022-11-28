import Link from 'next/link'
import Router from 'next/router'
import { Row, Col } from 'antd'
import { Form, Icon, Input, Button, Checkbox, Modal, Alert } from 'antd'
import axios from 'axios'
import { base_url } from './components/base_url'
import FacebookLogin from 'react-facebook-login'
// import GoogleLogin from 'react-google-login'
import KakaoLogin from 'react-kakao-login';
import { FaFacebook } from "react-icons/fa";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { googleicon, facebookicon, kakaotalkicon } from './components/images'
import '../static/css/signin.css'

const FormItem = Form.Item;
let sessionUserInfo = '';
let GoogleLib;
let for_signin = ''


class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
            showGoogleBtn: false,
            for: '',
        };
    }

    // onClickMyFacebookLoginBtn = () => {
    //     console.log("FACEBOOK", this);
    //     let facebookbtn = this.facebookLoginBtn
    //     facebookbtn.click();
    //     console.log(facebookbtn)
    // }

    // onClickGoogleloginBtn = () => {
    //     console.log("Click Google Login Button");
    // }

    // onClickMyGoogleLoginBtn = () => {
    //     console.log("THIS", this);
    //     let googlebtn = this.googleLoginBtn
    //     googlebtn.signIn();
    //     console.log(googlebtn)
    // }

    // onClickFacebook = () => {
    //     console.log("facebook")
    // }

    componentDidMount() {
        GoogleLib = require('react-google-login');
        this.setState({ showGoogleBtn: true });

        const surl = window.location.href
        const spl_url = surl.split("=")
        if (spl_url.length > 0) {
            for_signin = spl_url[1]
            console.log("nano:",for_signin)
        }
    }

    responseFacebook = (response) => {
        console.log("Facebook:", response);
        console.log("email:", response.email)
        console.log("name:", response.name)
        const email = response.email
        const name = response.name
        const socialId = response.userID
        const socialName = 'facebook'
        axios.post( base_url + '/api/social_login', {name, email, socialId, socialName})
        .then((response) => {
            console.log('response:', response)
            if (response.data['type'] === 'exist') {
                sessionStorage.setItem('session_username', response.data['name'])
                Router.push("/mypage")
            } else {
                sessionStorage.setItem('session_username', response.data['name'])
                Router.push("/signupsuccess")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    responseGoogle = (response) => {
        console.log("Google:" ,response);
        console.log("email:", response.profileObj.email)
        console.log('name:', response.profileObj.name)
        const email = response.profileObj.email
        const name = response.profileObj.name
        const socialId = response.profileObj.googleId
        const socialName = 'google'
        axios.post( base_url + '/api/social_login', {name, email, socialId, socialName})
        .then((response) => {
            console.log('response:', response)
            if (response.data['type'] === 'exist') {
                sessionStorage.setItem('session_username', response.data['name'])
                Router.push("/mypage")
            } else {
                sessionStorage.setItem('session_username', response.data['name'])
                Router.push("/signupsuccess")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    success = (response) => {
        console.log("Kakao-suc:", response);
    };
      
    failure = (error) => {
        console.log("Kakao-err:", error);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post( base_url + '/api/signin', {values})
                .then(function (response) {
                    console.log('response:', response);
                    if (response['data']['type'] == 'success') {
                        // sessionStorage.setItem('session_email', response['data']['email']);
                        sessionStorage.setItem('session_username', response['data']['name'])
                        sessionUserInfo = sessionStorage.getItem('session_username')

                        if (for_signin === 'community') {
                            Router.push("/community")
                        } else {
                            Router.push('/mypage')
                        }
                    } else if (response['data']['type'] == 'error' && response['data']['message'] == 'wrong password') {
                        Modal.error({
                            title: 'Password is wrong !',
                            content: 'Please input your correct password !',
                        });
                    } else if (response['data']['type'] == 'error' && response['data']['message'] == 'not exist') {
                        Modal.error({
                            title: 'This is the unregistered user !',
                            content: 'You should registered own your info. Please go to SignUp',
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

        return (
            <div>
                <Row type="flex" style={{marginTop:30}}>
                    <div style={{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:400,margin:"0 auto"}}>
                        <Form className="signin-form">
                            {/* <Button size="large" type="primary" ghost block style={{marginBottom:20}} onClick={this.onClickMyFacebookLoginBtn}>
                                <img src={facebookicon} style={{width:25,height:25,marginRight:20}} />Facebook ID Login
                            </Button> */}
                            <FacebookLogin
                                appId="1225297900950903"
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                size="small"
                                textButton="Login with Facebook"
                                // onClick={this.onClickFacebook}
                                // cssClass="my-facebook-button-class"
                                // icon={<FaFacebook />}
                                ref={ ref => this.facebookLoginBtn = ref }
                            />

                            {/* <Button size="large" type="primary" ghost block style={{marginBottom:20}} onClick={this.onClickMyGoogleLoginBtn}>
                                <img src={googleicon} style={{width:25,height:25,marginRight:35}} /> Google ID Login
                            </Button> */}
                            {this.state.showGoogleBtn ?
                                <GoogleLib.GoogleLogin
                                    clientId="509624737160-rloe5vbo4pcocoa0rbu4l5ilrd7ojota.apps.googleusercontent.com"
                                    // clientId="AIzaSyBsJ8hG9w0MBryA_cxWuXTxgGnO91vuRWM"
                                    buttonText="Google ID Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    buttonText="Login with Google"
                                    // onClick={this.onClickGoogleloginBtn}
                                    // theme="dark"
                                    icon={false}
                                    // ref={ ref => this.googleLoginBtn = ref }
                                    className="btn-googleLogin"
                                /> : null
                            }

                            {/* <Button size="large" type="primary" ghost block style={{marginBottom:20}}>
                                <img src={kakaotalkicon} style={{width:25,height:25,marginRight:43}} />Kakao ID Login
                            </Button> */}
                            <KakaoLogin
                                // jsKey="4cfbbfd0b7c9ad57a7784fb5158b9a2c6"
                                jsKey="b086da61855912814895c43964fdf30a"
                                onSuccess={this.success}
                                onFailure={this.failure}
                                useDefaultStyle
                                className="btn-kakaoLogin"
                            />

                            <p>-----------------------------  OR  -----------------------------</p>

                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid!'
                                    }, {
                                        required: true, message: 'Please input your email!'
                                    }]
                                })(
                                    <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.3)' }} />} placeholder="Your Email" onChange={this.emailChange} />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!'
                                    }]
                                })(
                                    <Input size="large" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.3)' }} />} placeholder="Password" onChange={this.passwordChange} />
                                )}
                            </FormItem>
                            
                            <Checkbox style={{float:"right",marginBottom:10}}>Remember me</Checkbox>
                            <Button size="large" type="primary" block onClick={this.handleSubmit}>Log in</Button>
                            <p></p>
                            <Row type="flex" justify="space-between">
                                <Col span={21}>
                                    <p style={{display:"inline",float:"left"}}>Are you not our friend ?</p>
                                </Col>
                                <Col span={3}>
                                    <Link href="/signup">
                                        <a>SignUp</a>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Row>
            </div>
        )
    }
}
const WrappedSignInForm = Form.create()(SignInForm);

export default class extends React.Component {
    componentDidMount(){
        document.title = "SignIn-Todays Friend"
    }
    render(){
        return(
            <div>
                <Header selected='signin' loggedIn={sessionUserInfo} />
                <WrappedSignInForm/>
                <Footer selected='signin'/>
            </div>
        )
    }
}