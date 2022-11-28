import React from 'react';
import { Row, Col } from 'antd'
import Link from 'next/link'

export class Footer extends React.Component {

    render() {
        return (
            <Row style={{height:250,background:'#b5b8bf',marginTop:100}}>
                <Col span={24} style={{textAlign:'center',paddingTop:20}}>
                    <h3>Contact Us</h3>
                    <Link href="/policy">
                        <p >Terms & Legal | Security & Privacy | Cancel & Refund</p>
                    </Link>
                    <p>Company name: Todaysfriend | Representative: Kim Heein & Lee seungju | Company permit number: 101-17-99099</p>
                    <p>Company Address: 55-17, Hoengun 4-gil, Gwanak-gu, Seoul, Republic of Korea</p>
                    <p>Email: admin@todaysfriend.com</p>
                    <p>Copyright @ Todaysfriend</p>
                </Col>
            </Row>
        )
    }    
}