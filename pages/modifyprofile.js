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
                        <h1>프로필 수정</h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={6} className="profileheader" style={{textAlign:"center",marginBottom:20}}>
                        <p>외국인친구와 만나기 위해서는 추가적인 프로필입력이 필요합니다.</p> 
                        <p>개인프로필은 상품 검증 및 상품운영에 도움을 드리기 위해 참고할것이며,</p>
                        <p>진심이 담긴 프로필은 외국인친구들이 여러분들에게 공감대를 가지고</p> 
                        <p>편하게 다가갈수 있도록 도와줍니다.</p>
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
                                        <span>*외국인에게 보여질 이름입니다</span>
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
                                        <span>*투어진행 및 완료를 위해 필요합니다</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="프로필 이미지"
                                            style={{marginBottom:0}}
                                        >
                                            <ModifyUploadAvatar 
                                                profileImg={profileData.image} 
                                                getUploadFileList={this.getUploadFiles} 
                                                ref='UploadingProfileImage' 
                                            />
                                        </FormItem>
                                        <span>*외국인친구에게 보여질 사진입니다</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="자기소개"
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
                                            label="프로필 동영상 ID"
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
                                        <span>*외국인친구에게 자신을 소개하는 영상을 올려주세요.</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem 
                                            label="성별(Gender)"
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
                                        <span>*통계목적으로 사용됩니다</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="관심사(interest)"
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
                                        <span>*평소 관심사를 해시 태그(Hash Tag)로 작성해주세요</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="언어(Languages)"
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
                                        <span>*사용가능한 언어를 모두 선택해주세요</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="생년월일(Birthday)"
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
                                        <span>*통계목적으로 사용되며 타인에게 절대 공개되지 않습니다</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="전공(Major)"
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
                                        <span>*본인의 전공을 기입하여주시기 바랍니다</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="E-Mail 주소"
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
                                        <span>*예약확인 메일을 위해 필요하니, 정확하게 알려주시기 바랍니다</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="전화번호(Cell Number)"
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
                                        <span>*상품검증안내를 위해 필요하며, 타인에게 절대 공개되지 않습니다</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="비상연락처(Emergency Contact)"
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
                                        <span>*연락이 가장 잘될수 있는 분의 전화번호를 입력하여주시기 바랍니다</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="방문국가(Visited Country)"
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
                                        <span>*방문했던 나라를 모두 선택해주세요</span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" style={{marginTop:20,textAlign:"left"}}>
                                    <Col span={10}>
                                        <FormItem
                                            label="소속(Afilliation)"
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
                                        <span>*자신이 소속되여 있는 학교나 개별단체이름을 입력하여주시면 통계자료로 활용할 예정입니다.</span>
                                    </Col>
                                    <Col span={10}>
                                        <FormItem
                                            label="방문할 국가(Next Travel)"
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
                                        <span>*방문할 계획이거나 방문하고 싶은 국가를 선택해주세요</span>
                                    </Col>
                                </Row>
                            </div>
                            <Row type="flex" justify="center" style={{marginTop:20}}>
                                <Col span={7}>
                                    <Spin spinning={this.state.loading} size="large">
                                    <Button className="completedProfileBtn" htmlType="submit" size="large" type="primary" block style={{height:60,borderRadius:20}}><span>완 료</span></Button>
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