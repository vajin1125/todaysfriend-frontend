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
                <h1>Todays Friend Policies</h1>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{height:400}}>
            <Col span={12}>
                <div style={{width:"100%",marginTop:20,textAlign:"center"}}>
                    <Tabs defaultActiveKey="1" size="large">
                        <TabPane tab="Terms & Legal" key="1">
                            <Row style={{textAlign:'left'}}>
                                <h2>Terms & Legal</h2>
                            </Row>
                            <Row style={{textAlign:'left'}}>
                                <h3>Article 1 (Purpose)</h3>
                                These terms and conditions shall be defined as "we", and the rights and obligations of the users of the service provided by today's Friend's "Todays Friend" website(https://www.todaysfriend.com/) (hereinafter referred to as the "service").
                            </Row>
                        </TabPane>

                        <TabPane tab="Security & Privacy" key="2">
                            <Row style={{textAlign:'left'}}>
                                <h2>Security & Privacy</h2>
                            </Row>
                            <Row style={{textAlign:'left'}}>
                                Today's friend [Todays Friend] (hereinafter " company") values the personal information of the client, and the "Act on the Promotion of Use of Information Communication Network and Protection Act" concerning the protection of personal information.
                            </Row>
                        </TabPane>

                        <TabPane tab="Cancel & Refund" key="3">
                            <Row style={{textAlign:'left'}}>
                                <h2>Cancel & Refund</h2>
                            </Row>
                            <Row style={{textAlign:'left'}}>
                                If the cancellation and refund terms for each product are specified separately, the separate entry will be applied as applicable.
                            </Row>
                        </TabPane>
                    </Tabs>
                </div>                
            </Col>
        </Row>

        <Footer selected='policy'/>
    </div>
)