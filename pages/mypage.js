import { Row, Col, Input, Avatar, Button, Tabs, Icon, Modal, Spin, label } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import { base_url } from './components/base_url';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { product_summary_image, tour_image_sample } from './components/images'
import '../static/css/mypage.css'

const TabPane = Tabs.TabPane;
// let sessionUserInfo = sessionStorage.getItem('session_email')

function callback(key) {
  console.log(key);
}

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: 'none',
            productsData: [],
            productsImgData: [],
            profileData: [],
            mainArray: [],
            noproduct: false,
            noprofile: false,
            loading: false,
            profileLoading: false,
            
        }
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        })
        const username = sessionStorage.getItem('session_username')
        if (username === null) {
            Router.push('/signin')
        }
        axios({
            method: 'post',
            url: base_url + '/api/mypage_profile_products',
            data: {
                username
            }
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200){
                if (response.data == "No profile") {
                    this.setState({
                        noprofile: true
                    })
                }
                if (response.data[0] != "Nothing") {
                    this.setState({
                        productsData: response.data[0],
                        productsImgData: response.data[1],
                        profileData: response.data[2],
                        loading: false
                    })

                    let mergeArray = this.state.productsImgData.map(x => Object.assign(x, this.state.productsData.find(y => y.pdu_ustr == x.pdu_ustr)));
                    this.setState({
                        mainArray: mergeArray
                    })
                    console.log("mainArray", this.state.mainArray)

                } else {
                    this.setState({
                        profileData: response.data[1],
                        noproduct: true,
                        loading: false
                    })
                }
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    showDetail = () => {
        this.setState({
            showDetail: this.state.showDetail == 'none' ? 'block' : 'none'
        })
    }

    handleLogOut = () => {
        Modal.confirm({
            title: 'Do you want to log out now?',
            onOk() {
                console.log('OK');
                sessionStorage.clear();
                Router.push('/signin');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    noProfile = () => {
        return (
            <Row type="flex" justify="center">
                <Col span={15} style={{textAlign:"center",marginTop:100,marginBottom:300}}>
                    <h2 style={{marginBottom:30}}>We need your profile info.</h2>
                    <h3>We can't find your profile info.</h3>
                    <h3 style={{marginBottom:30}}>Firstly, You have to submit your profile info to us. </h3>
                    <Link href="/profile">
                        <a>Create your profile</a>
                    </Link>
                </Col>
            </Row>
        )
    } 

    profileCard = () => {
        if (this.state.profileData.length != 0){
            return (
                <div className="profileDiv" style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:"100%"}}>
                    <Avatar src={base_url + "/" + this.state.profileData.image} shape="circle" size={100} icon="user" style={{backgroundColor:'#f56a00'}}/>
                    <Input name="name" size="large" placeholder="Name" value={this.state.profileData.name} readOnly />
                    <Input name="language" size="large" placeholder="Languages" value={this.state.profileData.language} readOnly />
                    <Input name="major" size="large" placeholder="Major" value={this.state.profileData.major} readOnly />
                    <Input name="visitedCounty" size="large" placeholder="Visited Country" value={this.state.profileData.visited_country} readOnly />
                    <Input name="nextTravel" size="large" placeholder="Next Travel" value={this.state.profileData.next_country} readOnly />
                    <Input name="interest" size="large" placeholder="Interest" value={this.state.profileData.interest} readOnly />
                    <Link href="/modifyprofile">
                        <Button size="default" type="primary">Change the Profile</Button>
                    </Link>
                </div>
            )
        } else {
            return (
                <Spin size="large">
                    <div className="profileDiv" style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:"100%"}}>
                        <Avatar shape="circle" size={100} icon="user" style={{backgroundColor:'#f56a00'}}/>
                        <Input name="name" size="large" placeholder="Name" />
                        <Input name="language" size="large" placeholder="Languages" />
                        <Input name="major" size="large" placeholder="Major" />
                        <Input name="visitedCounty" size="large" placeholder="Visited Country" />
                        <Input name="nextTravel" size="large" placeholder="Next Travel" />
                        <Input name="interest" size="large" placeholder="Interest" />
                        <Link href="/profile">
                            <Button size="default" type="primary">Change the Profile</Button>
                        </Link>
                    </div>
                </Spin>
            )
        }
    }

    productModify = (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        console.log("productID:", id)
        Router.push("/modifyproduct?id=" + id)
    }

    render() {
        const { mainArray, profileData } = this.state;        

        const productCard = mainArray.map(product => {
            let imgLink = base_url + "/" + product.pdu_img_url + "/" + product.pdu_img_name;
            return (
                <Row type="flex" justify="space-between" style={{marginTop:20}} key={product.id}>
                    <Col span={20}>
                        <div style={{width:"100%",height:200,border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:20}}>
                            <Row>
                                <Col span={8}>
                                    <div className="productImage" style={{width:"100%",height:200}}>
                                        <img src={imgLink} alt="product image" style={{width:"100%",height:198,borderRadius:"20px 0 0 20px"}}/>
                                    </div>
                                </Col>
                                <Col span={16} style={{textAlign:"justify",padding:10}}>
                                    <h2>{product.pdu_name}</h2>
                                    <Row type="flex" justify="space-between">
                                        <Col span={10}>
                                            <p>{product.pdu_type}</p>
                                        </Col>
                                        <Col span={10} style={{position:'relative'}}>
                                            <div style={{width:100,backgroundColor:"#0498c7",borderRadius:'20px 0 0 20px',textAlign:'center',padding:'3px 10px',fontSize:12,position:'absolute',top:-20,right:-10}}>
                                                <span style={{color:"#fff"}}>₩   {product.pdu_price}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row type="flex" justify="space-after" style={{height:60}}>
                                        <p style={{margin:0,overflow:'hidden',display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical'}}>{product.pdu_brief_description}</p>
                                    </Row>
                                    <div>
                                        <Icon type="clock-circle" theme="twoTone" twoToneColor="#eb2f96"/><span>  {product.pdu_duration}</span>
                                    </div>
                                    <div>
                                        <Icon type="smile" theme="twoTone" /><span>  {product.pdu_price_include}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={3} style={{margin:"auto 0"}}>
                        <Button type="primary" size="default" block ghost  data-id={product.id} onClick={this.productModify}>Modify</Button>
                        <Button type="primary" size="default" block ghost>Delete</Button>
                    </Col>
                </Row>
            )
        });

        return (
            <div>
                <Header selected="mypage" />
                <Row type="flex" justify="center">
                    <h1>My Page</h1>
                </Row>
                {this.state.noprofile ? 
                    this.noProfile():
                    <div>
                        <Row type="flex" justify="center">
                            <p>프로필 관리, 투어프로그램 관리, 예약 일정 관리페이지</p>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col span={4} style={{marginRight:10}}>
                                { this.profileCard() }

                                <div className="addBankDiv" style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",marginTop:20,borderRadius:10,padding:"30px 20px",width:"100%"}}>
                                    <Input name="bname" size="large" placeholder="Name" />
                                    <Input name="bankname" size="large" placeholder="Bank Name" />
                                    <Input name="accountnumber" size="large" placeholder="Account Number" />
                                    <Button size="default" type="primary">Add Bank Account</Button>
                                </div>
                            </Col>
                            <Col span={10} style={{marginLeft:10}}>
                                <div style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px",width:"100%"}}>
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane tab="Your Product" key="1">
                                            <Spin spinning={this.state.loading} size="large">
                                            {
                                                this.state.noproduct ? 
                                                    <h3>You don't have any product yet. Please create a product.</h3> :
                                                    productCard                                            
                                            }
                                            </Spin>
                                            <Row type="flex" justify="center" style={{marginTop:30}}>
                                                <Col span={5}>
                                                    <Link href="/createproduct">
                                                        <Button type="primary" size="large" block>Create a product</Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tab="Your Booking" key="2">
                                            <Row type="flex" justify="center">
                                                <div style={{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"10px 10px",width:"100%"}}>
                                                    <Row type="flex" justify="space-between">
                                                        <Col span={18} style={{textAlign:"justify"}}>
                                                            <span style={{fontSize:20,margin:"auto 0"}}>Seoul night walking tour / Brown / 30s / 3</span>
                                                        </Col>
                                                        <Col span={5}>
                                                            <Row type="flex" justify="space-between">
                                                                <Col span={11}>
                                                                    <Button type="primary" ghost style={{margin:"auto 0"}} onClick={this.showDetail}>Detail</Button>
                                                                </Col>
                                                                <Col span={11}>
                                                                    <Button type="primary" ghost style={{margin:"auto 0"}}>Reject</Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <div style={{marginTop:10,display:this.state.showDetail}}>
                                                        <Row type="flex" justify="center">
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Tour : Seoul night walking tour</span>
                                                            </Col>
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Name : William</span>
                                                            </Col>
                                                        </Row>
                                                        <Row type="flex" justify="center">
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Date : 2018년 11월 31일</span>
                                                            </Col>
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Nationality : USA</span>
                                                            </Col>
                                                        </Row>
                                                        <Row type="flex" justify="center">
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Gender : Man</span>
                                                            </Col>
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Number of people : 3</span>
                                                            </Col>
                                                        </Row>
                                                        <Row type="flex" justify="center">
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Email : williamgood@gmail.com</span>
                                                            </Col>
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Language : English</span>
                                                            </Col>
                                                        </Row>
                                                        <Row type="flex" justify="center">
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                <span>Things to Note : No</span>
                                                            </Col>
                                                            <Col span={10} style={{textAlign:"justify"}}>
                                                                
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tab="Your Schedule" key="3">Content of Tab Pane 3</TabPane>
                                        <TabPane tab="Your Customized" key="4">Content of Tab Pane 4</TabPane>
                                    </Tabs>
                                </div>
                                <Row style={{float:"right"}}>
                                    <Button type="dashed" size="default" onClick={this.handleLogOut}>Log Out</Button>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                }

                <Footer selected="mypage" />
            </div>
        )
    }
}