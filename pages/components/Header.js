import React from 'react';
import Link from 'next/link'
import { Row, Col } from 'antd'
import { logo, menu_about, menu_customized, menu_tourprogram, menu_belocal, menu_community, menu_login, menu_mypage, facebook, instagram, youtube, friend } from './images'
import '../../static/css/menu.css'


export class Header extends React.Component {
    state = {
        sessionInfo: '',
    }
    
    componentDidMount() {
        this.setState({
            sessionInfo: sessionStorage.getItem('session_username')
        });
    }

    render() {
        return (
            <div>
                <Row style={{background:'#FFF',paddingBottom:20,zIndex:50}}>
                    <Col span={22} style={{textAlign:'right'}}>
                        <Link href="https://www.facebook.com">
                            <a><img src={facebook} alt='facebook' style={{width:35,marginLeft:15,marginTop:10}}/></a>
                        </Link>
                        <Link href="https://www.instagram.com">
                            <a><img src={instagram} alt='instagram' style={{width:35,marginLeft:15,marginTop:10}}/></a>
                        </Link>
                        <Link href="https://www.youtube.com">
                            <a><img src={youtube} alt='youtube' style={{width:35,marginLeft:15,marginTop:10,marginRight:20}}/></a>                 
                        </Link>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={1}></Col>
                </Row>
                <Row style={{background:'#FFF',paddingBottom:10,zIndex:50}}>
                    <Col span={24}>
                        <Row type="flex" justify="space-around">
                        <Col span={1}></Col>
                        <Col span={3} style={{textAlign:'center'}}>
                            <Link href="/about">
                                <img src={menu_about} alt='about' style={{width:140}}/>
                            </Link>
                        </Col>
                        <Col span={3} style={{textAlign:'center'}}>
                            <Link href="/customized">
                                <img src={menu_customized} alt='customized' style={{width:140}}/>
                            </Link>
                        </Col>
                        <Col span={3} style={{textAlign:'center'}}>
                            <Link href="/tour">
                                <img src={menu_tourprogram} alt='tourprogram' style={{width:140}}/>
                            </Link>
                        </Col>
                        <Col span={4} style={{textAlign:'center',position:'relative'}}>
                            <Link href="/">
                                <img src={logo} alt='logo' style={{width:250,position:'absolute',top:-30,left:'50%',marginLeft:-125}}/>
                            </Link>
                            { this.props.selected === 'index' ?
                                <Link href="/guidepage">
                                    <img src={friend} alt='friend' style={{width:100,position:'absolute',top:50,left:'50%',marginLeft:-50,zIndex:100}}/>
                                </Link> :
                                ''
                            }
                        </Col>
                        <Col span={3} style={{textAlign:'center'}}>
                            <Link href="/signin">
                                <img src={menu_belocal} alt='belocal' style={{width:140}}/>
                            </Link>
                        </Col>
                        <Col span={3} style={{textAlign:'center'}}>
                            <Link href="/community">
                                <img src={menu_community} alt='community' style={{width:140}}/>
                            </Link>
                        </Col>
                        <Col span={3} style={{textAlign:'center'}}>
                            {
                                this.state.sessionInfo ?
                                    <Link href="/mypage">
                                        <img src={menu_mypage} alt='login' style={{width:140}}/>
                                    </Link> :
                                    <Link href="/signin">
                                        <img src={menu_login} alt='login' style={{width:140}}/>
                                    </Link>
                            }
                        </Col>
                        <Col span={1}></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }    
}