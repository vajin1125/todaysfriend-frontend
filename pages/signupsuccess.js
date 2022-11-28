import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { booking_top_banner, success_register_product } from './components/images'


export default () => (
    <div>
       <Header selected="signupsuccess" />
       {/* <Row>
            <Col span={24} style={{height:'20vw',position:'relative'}}>
                <img src={booking_top_banner} alt='booking_top_banner' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
            </Col>
        </Row> */}
       <Row type="flex" justify="center" style={{marginTop:30}}>
            <Col span={10}>
                <div style={{textAlign:"center",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:10,padding:"30px 20px"}}>
                    <Row type="flex" justify="center">
                        <Col span={19}>
                            <p style={{fontSize:"2.5em"}}>
                            Congratulation on your membership
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={13}>
                            <p style={{fontSize:"1.5em"}}>
                                I sincerely welcome you as a Todays friend.
                            </p>
                            <p style={{fontSize:"1.5em"}}>
                                Let's make a real local trip with us.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <img src={success_register_product} alt="success_register_product" />
                        </Col>
                    </Row>
                </div>
                <Row type="flex" justify="center" style={{marginTop:30}}>
                    <Link href="/profile">
                        <Button type="primary" size="large">Write a profile</Button>
                    </Link>
                </Row>
            </Col>
       </Row>
       <Footer selected="signupsuccess" />
    </div>
)