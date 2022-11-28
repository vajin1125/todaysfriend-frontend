import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { booking_top_banner, success_register_product } from './components/images'


export default () => (
    <div>
       <Header selected="registerproduct" />
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
                            <p style={{fontSize:"2em"}}>
                                제작된 상품이 정상적으로 제출되였습니다. Todays Friend의 새로운 Local Friend가 되신것을 진심으로 축하 드립니다.
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={13}>
                            <p>
                                해당 상품은 운영진의 상품 검증 후 등록 및 게시될 예정입니다.
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
                    <Link href="/mypage">
                        <Button type="primary" size="large">Back to My page</Button>
                    </Link>
                </Row>
            </Col>
       </Row>
       <Footer selected="registerproduct" />
    </div>
)