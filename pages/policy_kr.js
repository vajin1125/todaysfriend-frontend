import { Row, Col, Tabs } from 'antd'
import Link from 'next/link'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const TabPane = Tabs.TabPane;

export default () => (
    <div>
        <Header selected='policy'/>

        <Row type="flex" justify="center">
            <Col span={10}></Col>
            <Col span={2} style={{marginTop:50}}>
                <Link href="/policy"><span style={{marginRight:20}}>English</span></Link>
                <Link href="/policy_kr"><span>Korean</span></Link>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span={5} style={{textAlign:"center",marginTop:20}}>
                <h1>오늘의 친구 정책</h1>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{height:400}}>
            <Col span={12}>
                <div style={{width:"100%",marginTop:20,textAlign:"center"}}>
                    <Tabs defaultActiveKey="1" size="large">
                        <TabPane tab="이용약관" key="1">
                            <Row style={{textAlign:'left'}}>
                                <h2>이용약관</h2>
                            </Row>
                            <Row style={{textAlign:'left'}}>
                                <h3>제 1 조 (목적)</h3>
                                이 약관은 오늘의 친구‘Todays friend'(이하 "당사"이라 합니다)이 운영하는 웹사이트(https://www.todaysfriend.com/)에서 제공하는 서비스(이하 "서비스"라 합니다)를 이용함에 있어 “당사”와 이용자의 권리 및 의무 및 책임사항을 규정함을 목적으로 합니다.
                            </Row>
                        </TabPane>

                        <TabPane tab="개인정보 처리방침" key="2">
                            <Row style={{textAlign:'left'}}>
                                <h2>개인정보 처리방침</h2>
                            </Row>
                            <Row style={{textAlign:'left'}}>
                            오늘의 친구[Todays friend] (이하 “당사”)은 고객의 개인정보를 중요시하며, 개인정보의 보호와 관련하여 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및「개인정보 보호법」 등 관련법 상의 개인정보 보호 규정을 준수하고 있으며, 당사는 이용자가 당사의 개인정보 처리방침의 내용에 대하여 「동의」버튼 또는 「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집 및 이용 등 아래 개인정보 처리방침에 대해 동의한 것으로 봅니다.
                            </Row>
                        </TabPane>

                        <TabPane tab="취소 및 환불 정책" key="3">
                            <Row style={{textAlign:'left'}}>
                                <h2>취소 및 환불 정책</h2>
                            </Row>
                            <Row style={{textAlign:'left'}}>
                            각 상품 별 취소 환불 약관이 별도 기재되어 있을 경우 별도 기재 내용이 해당 규정으로서 선 적용됩니다.
                            
                            </Row>
                        </TabPane>
                    </Tabs>
                </div>                
            </Col>
        </Row>

        <Footer selected='policy'/>
    </div>
)