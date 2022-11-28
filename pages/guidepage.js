import { Row, Col } from 'antd'
import Link from 'next/link'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { local_friend, foreigner_friend, guide_d, first, second, third } from './components/images'

export default class extends React.Component {
    state = {
        default: true,
        isLocal: ''
    }

    onClickLocalFriend = () => {
        this.setState({
            default: false,
            isLocal: 'Y'
        })
    }

    onClickForeignerFriend = () => {
        this.setState({
            default: false,
            isLocal: 'N'
        })
    }

    render() {
        return(
            <div>
                <Header selected='guidepage'/>
                <Row type="flex" justify="center">
                    <Col span={6} style={{marginTop:50,textAlign:'center'}}>
                        <h1>How to use a 'Todays Friend'</h1>
                    </Col>
                </Row>

                <Row type="flex" justify="center" style={{marginTop:30}}>
                    <Col span={2} style={{textAlign:'center'}}>
                        <img src={local_friend} alt='local_friend' style={{width:'100%'}} onClick={this.onClickLocalFriend} />
                        <h3>Local Friend</h3>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={2} style={{textAlign:'center'}}>
                        <img src={foreigner_friend} alt='foreigner_friend' style={{width:'100%'}} onClick={this.onClickForeignerFriend} />
                        <h3>Foreigner Friend</h3>
                    </Col>
                </Row>

                { this.state.isLocal === 'Y' &&
                <div>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={2}>
                            <img src={first} alt='first' style={{width:'100%'}} />
                        </Col>
                        <Col span={15} style={{textAlign:"left"}}>
                            <p style={{color:'#0498c7',marginTop:20}}>'오늘의친구'에는 어떤 투어상품들이 있을까요?</p>
                            <p style={{margin:0,padding:0}}>
                                Tour program 페이지에서 다른 로컬친구들의 상품을 살펴보세요. 나의 지역에는 어떤 투어가 진행되고 있나요.
                            </p>
                            <p style={{margin:0,padding:0}}>
                                당신은 이미 어느분야에서는 specialist입니다. special한 투어상품을 기대할게요!
                                <Link href="/tour">
                                    <a style={{color:'#0498c7',marginLeft:50}}>Go</a>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={15} style={{textAlign:"right"}}>
                            <p style={{color:'#0498c7',marginTop:20}}>Local Friend가 되어 여러분만의 특별한 투어를 진행해 보아요!</p>
                            <p style={{margin:0,padding:0}}>
                                Be a local 메뉴를 클릭하여 여러분만의 투어를 만들 수 있어요. 외국인 친구들이 공감할수 있는 여러분의 프로필을
                            </p>
                            <p style={{margin:0,padding:0}}>
                                작성하고 스페셜한 투어를 만들어주세요. 투어 테마, 시간, 비용, 인원 등 모든것은 여러분의 기획으로 만들어지며
                            </p>
                            <p style={{margin:0,padding:0}}>
                                <Link href="/signin">
                                    <a style={{color:'#0498c7',marginRight:50}}>Go</a>
                                </Link>
                                '오늘의 친구'는 여러분의 재미난 투어를 위해 최선을 다해 도울거예요!
                            </p>
                        </Col>
                        <Col span={2}>
                            <img src={second} alt='second' style={{width:'100%'}} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={2}>
                            <img src={third} alt='third' style={{width:'100%'}} />
                        </Col>
                        <Col span={15} style={{textAlign:"left"}}>
                            <p style={{color:'#0498c7',marginTop:20}}>여러분의 경험을 다른 Local Friend들과 공유해보세요</p>
                            <p style={{margin:0,padding:0}}>
                                당신만의 투어를 성공적으로 진행하셨나요? 역시! 여러분은 이미 충분히 멋진 재능들을 가지고 있군요! 여러분의
                            </p>
                            <p style={{margin:0,padding:0}}>
                                재미난 투어 이야기를 로컬친구들에게 공유해주세요. Local cummunity에 공유 된 여러분의 재미난 이야기와 Tip들이
                            </p>
                            <p style={{margin:0,padding:0}}>
                                또 다른 친구들에게 도전의 기회를 준답니다.
                                <Link href="/community">
                                    <a style={{color:'#0498c7',marginLeft:50}}>Go</a>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </div>
                }
                { this.state.isLocal === 'N' &&
                
                
                <div>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={2}>
                            <img src={first} alt='first' style={{width:'100%'}} />
                        </Col>
                        <Col span={15} style={{textAlign:"left"}}>
                            <p style={{color:'#0498c7',marginTop:20}}>Search a special tour for you!</p>
                            <p style={{margin:0,padding:0}}>
                                When you enter the tour program, you can meet various special tour. If you choose your travel
                            </p>
                            <p style={{margin:0,padding:0}}>
                                dates and the language you want, you can find more convenient tour products.
                                <Link href="/tour">
                                    <a style={{color:'#0498c7',marginLeft:100}}>Go</a>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={15} style={{textAlign:"right"}}>
                            <p style={{color:'#0498c7',marginTop:20}}>Do you want special tour just for you?</p>
                            <p style={{margin:0,padding:0}}>
                                How about making a 'customized tour'? If you can't find the tour products you want on the
                            </p>
                            <p style={{margin:0,padding:0}}>
                                'Tour program' page, just enter the customized tour page. If you ask a tour that you want,
                            </p>
                            <p style={{margin:0,padding:0}}>
                                <Link href="/signin">
                                    <a style={{color:'#0498c7',marginRight:100}}>Go</a>
                                </Link>
                                local friends will make a tour just for you.
                            </p>
                        </Col>
                        <Col span={2}>
                            <img src={second} alt='second' style={{width:'100%'}} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{marginTop:30}}>
                        <Col span={2}>
                            <img src={third} alt='third' style={{width:'100%'}} />
                        </Col>
                        <Col span={15} style={{textAlign:"left"}}>
                            <p style={{color:'#0498c7',marginTop:20}}>You can find real local travel information.</p>
                            <p style={{margin:0,padding:0}}>
                                From the 'Travel information' menu, go to 'Korea travel' and you will find various local
                            </p>
                            <p style={{margin:0,padding:0}}>
                                travel information about Real Korea!
                                <Link href="/community">
                                    <a style={{color:'#0498c7',marginLeft:100}}>Go</a>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </div>
                }
                
                <Row type="flex" justify="center">
                    <Col span={3} style={{marginTop:50}}>
                        <img src={guide_d} alt='guide_d' style={{width:'100%'}} />
                    </Col>
                </Row>

                <Footer selected='guidepage'/>
            </div>
        )
    }
}