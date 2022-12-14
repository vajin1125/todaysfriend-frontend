import { Row, Col, Input, DatePicker, Select, Form, AutoComplete, Button, InputNumber, Spin, Modal } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'
import moment from 'moment';
import { base_url } from './components/base_url'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ModifyUploadAvatar } from './components/ModifyUploadAvatar'
import { booking_top_banner } from './components/images'
import { country_list } from './components/country_list'
import { language_list } from './components/language_list'
import '../static/css/modifyprofile.css'

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const dateFormat = 'YYYY-MM-DD';

const countryOption = country_list.map((country) =>
    <Option key={country.toString()} value={country}>{country}</Option>
)

const languageOption = language_list.map((language) => 
    <Option key={language.name.toString()} value={language.name}>{language.name}</Option>
)

function genderChange(value) {
    console.log(`selected ${value}`);
}

function langChange(value) {
    console.log(`selected ${value}`);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

class ModifyProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profileData: [],
            filterdata: [],
            birthday: '',
            uploadedFiles: [],
            loading: false,
        }
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        })
        const username = sessionStorage.getItem('session_username')
        axios({
            method: 'post',
            url: base_url + '/api/get_profile_for_modify',
            data: {
                username
            }
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    profileData: response.data[0],
                    loading: false
                })
            } else {
                this.setState({
                    loading: false
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    autocomplete = (value) => {
        if (value == '')
            this.setState({
                filterdata: []
            })
        else
            this.setState({
                filterdata: countries.filter((s) => s.toLowerCase().substring(0, value.length) === value.toLowerCase())
            })
    }

    datepickeronChange =(date, dateString) => {
        console.log(dateString)
        // this.setState({
        //     birthday: dateString
        // })
    }

    getUploadFiles = (data) =>  {
        this.setState({
            uploadedFiles: data
        })
        console.log("Uploaded File list:", this.state.uploadedFiles)
    }

    makeLanguageArray = () => {
        let langarray = []
        if (this.state.profileData.length != 0) {
            let lang = this.state.profileData.language.split(',')
            langarray = [...lang]
        }
        return langarray        
    }

    makeVisitCountryArray = () => {
        let visitCountryArray = []
        if (this.state.profileData.length != 0) {
            let country = this.state.profileData.visited_country.split(',')
            visitCountryArray = [...country]
        }
        return visitCountryArray
    }

    makeNextCountryArray = () => {
        let nextCountryArray = []
        if (this.state.profileData.length != 0) {
            let country = this.state.profileData.next_country.split(',')
            nextCountryArray = [...country]
        }
        return nextCountryArray
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                console.log('Received values of form: ', values);
                console.log(values.birthday.format('YYYY-MM-DD'))
                const birthday = values.birthday.format('YYYY-MM-DD')
                const username = sessionStorage.getItem('session_username')
                const uploadedFiles = this.state.uploadedFiles

                // this.refs.UploadingProfileImage.handleUpload()

                axios.post( base_url + '/api/save_modified_profile', {values, birthday, username, uploadedFiles})
                .then((response) => {
                    console.log('response:', response);
                    if (response.data['type'] === 'success'){
                        Modal.success({
                            title: 'Successful !',
                            content: 'Please go back My page.',
                            onOk() {
                                Router.push('/mypage')
                            }
                        })
                    } else {
                        this.setState({
                            loading: false
                        })
                        Modal.error({
                            title: 'Profile modification has been failed!',
                            content: 'Please try again !',
                        });
                    }
                })
                .catch((error) => {
                    console.log('error:', error);
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { profileData } = this.state;
        return(
            <div>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={booking_top_banner} alt='booking_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{marginTop:30}}>
                    <Col span={6} style={{textAlign:"center"}}>
                        <h1>????????? ??????</h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={6} className="profileheader" style={{textAlign:"center",marginBottom:20}}>
                        <p>?????????????????? ????????? ???????????? ???????????? ?????????????????? ???????????????.</p> 
                        <p>?????????????????? ?????? ?????? ??? ??????????????? ????????? ????????? ?????? ??????????????????,</p>
                        <p>????????? ?????? ???????????? ????????????????????? ?????????????????? ???????????? ?????????</p> 
                        <p>????????? ???????????? ????????? ???????????????.</p>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <Form className="modifyProfileForm" onSubmit={this.handleSubmit}>
                            <div style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:"100%",margin:"0 auto"}}>
                                <Row type="flex" justify="space-around" style={{textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="Name"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('name', {
                                                initialValue: profileData.name,
                                                rules: [{
                                                    required: true, message: 'Please input your name!',
                                                }],
                                            })(
                                                <Input size="large" placeholder="Name" />
                                            )}
                                        </FormItem>
                                        <span>*??????????????? ????????? ???????????????</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="Kakao ID"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('kakaoId', {
                                                initialValue: profileData.kakaoid,
                                                rules: [{
                                                    required: true, message: 'Please input your kakao ID!',
                                                }],
                                            })(
                                                <Input size="large" placeholder="Kakao ID" />
                                            )}
                                        </FormItem>
                                        <span>*???????????? ??? ????????? ?????? ???????????????</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="????????? ?????????"
                                            style={{marginBottom:0}}
                                        >
                                            <ModifyUploadAvatar 
                                                profileImg={profileData.image} 
                                                getUploadFileList={this.getUploadFiles} 
                                                ref='UploadingProfileImage' 
                                            />
                                        </FormItem>
                                        <span>*????????????????????? ????????? ???????????????</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="????????????"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('introSelf', {
                                                initialValue: profileData.introself,
                                                rules: [{
                                                    required: true, message: 'Please input about you!'
                                                }]
                                            })(
                                                <TextArea placeholder="Introduct yourself" autosize={{ minRows: 7, maxRows: 10 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="????????? ????????? ID"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('introvideo', {
                                                initialValue: profileData.videoId,
                                                rules: [{
                                                    // required: true, message: 'Please input Youtube Id!'
                                                }]
                                            })(
                                                <Input size='large' placeholder="youtube video Id for Introduct yourself" />
                                            )}
                                        </FormItem>
                                        <span>*????????????????????? ????????? ???????????? ????????? ???????????????.</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem 
                                            label="??????(Gender)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('gender', {
                                                initialValue: profileData.gender,
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
                                        <span>*?????????????????? ???????????????</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="?????????(interest)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('interest', {
                                                initialValue: profileData.interest,
                                                rules: [{
                                                    required: true, message: 'Please input your interest!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Interest" />
                                            )}
                                        </FormItem>
                                        <span>*?????? ???????????? ?????? ??????(Hash Tag)??? ??????????????????</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="??????(Languages)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('language', {
                                                initialValue: this.makeLanguageArray(),
                                                rules: [{
                                                    required: true, message: 'Please select your languages!'
                                                }, {
                                                    type: 'array',
                                                }]
                                            })(
                                                <Select mode="multiple" size="large" onChange={langChange} placeholder="Select your languages">
                                                    { languageOption }
                                                </Select>
                                            )}
                                        </FormItem>
                                        <span>*??????????????? ????????? ?????? ??????????????????</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="????????????(Birthday)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('birthday', {
                                                initialValue: moment(profileData.birthday, dateFormat),
                                                rules: [{
                                                    required: true, message: 'Please input your birthday!'
                                                }]
                                            })(
                                                <DatePicker size="large" style={{width:"100%"}} onChange={this.datepickeronChange} />
                                            )}
                                        </FormItem>
                                        <span>*?????????????????? ???????????? ???????????? ?????? ???????????? ????????????</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="??????(Major)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('major', {
                                                initialValue: profileData.major,
                                                rules: [{
                                                    required: true, message: 'Please input your major!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Major" />
                                            )}
                                        </FormItem>
                                        <span>*????????? ????????? ????????????????????? ????????????</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="E-Mail ??????"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('email', {
                                                initialValue: profileData.email,
                                                rules: [{
                                                    required: true, message: 'Please input your email!'
                                                }, {
                                                    type: 'email', message: 'Must be email type!' 
                                                }]
                                            })(
                                                <Input size="large" placeholder="Email" />
                                            )}
                                        </FormItem>
                                        <span>*???????????? ????????? ?????? ????????????, ???????????? ??????????????? ????????????</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="????????????(Cell Number)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('phone', {
                                                initialValue: profileData.cellnumber,
                                                rules: [{
                                                    required: true, message: 'Please input your cell number!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Cell Number" />
                                            )}
                                        </FormItem>
                                        <span>*????????????????????? ?????? ????????????, ???????????? ?????? ???????????? ????????????</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="???????????????(Emergency Contact)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('emergency', {
                                                initialValue: profileData.emergency,
                                                rules: [{
                                                    required: true, message: 'Please input good communication cell number for you!'
                                                }]
                                            })(
                                                <Input size="large" placeholder="Good communication cell number" />
                                            )}
                                        </FormItem>
                                        <span>*????????? ?????? ????????? ?????? ?????? ??????????????? ????????????????????? ????????????</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="????????????(Visited Country)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('visitCountry', {
                                                initialValue: this.makeVisitCountryArray(),
                                                rules: [{
                                                    type: 'array',
                                                }]
                                            })(
                                                <Select
                                                    size="large"
                                                    mode="multiple"
                                                    style={{ width: '100%' }}
                                                    placeholder="Please select"
                                                    onChange={handleChange}
                                                >
                                                    {countryOption}
                                                </Select>
                                            )}
                                        </FormItem>
                                        <span>*???????????? ????????? ?????? ??????????????????</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="??????(Afilliation)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('afilliation', {
                                                initialValue: profileData.afilliation,
                                                rules: [{
                                                    required: true, message: 'Please input your afilliation!'
                                                }]
                                            })(
                                                <Input size='large' placeholder='Afilliation' />
                                            )}
                                        </FormItem>
                                        <span>*????????? ???????????? ?????? ????????? ????????????????????? ????????????????????? ??????????????? ????????? ???????????????.</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="????????? ??????(Next Travel)"
                                            style={{marginBottom:0}}
                                        >
                                            {getFieldDecorator('nextCountry', {
                                                initialValue: this.makeNextCountryArray(),
                                                rules: [{
                                                    type: 'array',
                                                }]
                                            })(
                                                <Select
                                                    size="large"
                                                    mode="multiple"
                                                    style={{ width: '100%' }}
                                                    placeholder="Please select"
                                                    onChange={handleChange}
                                                >
                                                    {countryOption}
                                                </Select>
                                            )}
                                        </FormItem>
                                        <span>*????????? ??????????????? ???????????? ?????? ????????? ??????????????????</span>
                                    </Col>
                                </Row>
                            </div>
                            <Row type="flex" justify="center" style={{marginTop:20}}>
                                <Col span={7}>
                                    <Spin spinning={this.state.loading} size="large">
                                    <Button className="completedProfileBtn" htmlType="submit" size="large" type="primary" block style={{height:60,borderRadius:20}}><span>??? ???</span></Button>
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
const WrappedProfileForm = Form.create()(ModifyProfileForm)

export default class extends React.Component {
    render() {
        return(
            <div>
                <Header selected="modifyprofile" />
                <WrappedProfileForm />
                <Footer selected="modifyprofile" />
            </div>
        )
    }
}