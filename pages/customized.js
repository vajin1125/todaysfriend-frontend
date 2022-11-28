import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { bg_customized, ask_sign } from './components/images'
import '../static/css/customized.css'


export default class Customized extends React.Component {
    componentDidMount(){
        document.title = "Customized-Todays Friend"
    }
    render() {
        return(
            <div>
                <Header selected='customized'/>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img className="customizedTopBanner" src={bg_customized} alt='bg_customized' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                        <img src={ask_sign} alt='ask_sign' style={{width:180,position:'absolute',left:'50%',bottom:-120,marginLeft:-100,zIndex:50}}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{paddingTop:130}}>
                    <h1>What is Customized ?</h1>
                </Row>
                <Row type='flex' justify="center">
                    <p>Your tirp should always be special. Ask to local friends to make the tour what you need and something special just for you.</p>
                </Row>
                <Row type="flex" justify="center" style={{marginTop:20}}>
                    <Col span={4}>
                        <Link href="/ask">
                            <Button type="primary" size="large" block style={{height:80,borderRadius:50}}>
                                <span style={{fontSize:25}}>Ask to todays friend</span>
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{marginTop:60}}>
                    <Col span={10}>
                        <div style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:20,padding:"20px 20px",width:"100%"}}>
                            <Row type="flex" justify="center">
                                <Col span={15} style={{paddingLeft:30,textAlign:"left"}}>
                                    <h2>Climing Tour</h2>
                                    <p>'Hanak' is Korea traditional house. If you can go to traditional Korean village, you can see mast beautiful house 'Hanak'. How about take a picture...</p>
                                    <Row type="flex">
                                        <Col span={5} style={{marginRight:20}}>
                                            <Link href="/customizeproduct">
                                                <Button size="default" type="primary" ghost block style={{borderRadius:20}}>Try</Button>                                    
                                            </Link>
                                        </Col>
                                        <Col span={5}>
                                            <Button size="default" type="primary" ghost block style={{borderRadius:20}}>Modify</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="detaP" span={9} style={{borderLeft:"2px solid rgba(0, 0, 0, 0.5)",textAlign:"left",paddingLeft:30}}>
                                    <p>Name : Lee Browny</p>
                                    <p>City : Seoul</p>
                                    <p>Date : '18.10.25 or '18.10.26</p>
                                    <p>Guest Number : 3</p>
                                    <p>Language : English, Chinese</p>
                                    <p>Gender : Man</p>
                                    <p>Price : $20</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Footer selected="customized" />
            </div>
        )
    }
}