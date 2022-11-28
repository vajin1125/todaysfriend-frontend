import { Row, Col } from 'antd'
import Link from 'next/link'
import YouTube from 'react-youtube';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { bg_tour, aboutus_top, aboutus_making, aboutus_platform, aboutus_purpose, aboutus_arrow } from './components/images'

// Viedo player
const opts = {
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
}

export default () => (
    <div>
        <Header selected='aboutus'/>
        <Row>
            <Col span={24} style={{height:'20vw',position:'relative'}}>
                <img src={bg_tour} alt='bg_tour' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span={13}></Col>
            <Col span={2} style={{marginTop:150}}>
                <Link href="/about"><span style={{marginRight:20}}>English</span></Link>
                <Link href="/about_kr"><span>Korean</span></Link>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span={15} style={{marginTop:30}}>
                <img src={aboutus_top} alt="aboutus_top" style={{width:'100%'}}/>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span={2} style={{marginTop:50}}>
                <img src={aboutus_platform} alt="aboutus_platform" style={{height:150}} />
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span={15} style={{textAlign:"center",marginTop:80}}>
                <p style={{fontSize:20,marginBottom:0}}>
                <span style={{color:"#0498c7",fontSize:27,fontWeight:500}}>한국에 대해 잘 모르는 외국인들</span>에게 <span style={{color:"#f6b635",fontSize:27,fontWeight:500}}>지금의 한국문화에 대해</span>
                </p>
                <p style={{fontSize:20}}>
                <span style={{color:"#f6b635",fontSize:27,fontWeight:500}}>제일 민감한 대학생들</span>의 이야기를 통해 진정한 로컬여행이 가능하도록 하자
                </p>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:50}}>
            <Col span={5}>
                <div style={{width:"100%",textAlign:"center"}}>
                    <span style={{color:"#0498c7",fontSize:20}}>외국인 관광객의 <span style={{fontSize:25}}>Needs</span></span>
                </div>
                <div style={{border:"2px solid #0498c7",borderRadius:20,width:"100%",padding:20}}>
                    <ul style={{fontSize:20,color:"#0498c7",margin:0}}>
                        <li>Real local experience</li>
                        <li>Communication</li>
                        <li>Safety</li>
                        <li>Real/Reasonable price</li>
                    </ul>
                </div>
            </Col>
            <Col span={3} style={{padding:90}}>
                <img src={aboutus_arrow} alt="aboutus_arrow" style={{width:"100%",height:60}} />
            </Col>
            <Col span={5}>
                <div style={{width:"100%",textAlign:"center"}}>
                    <span style={{color:"#f6b635",fontSize:20}}>대학생의 <span style={{fontSize:25}}>Needs</span></span>
                </div>
                <div style={{border:"2px solid #0498c7",borderRadius:20,width:"100%",padding:20}}>
                    <ul style={{fontSize:20,color:"#0498c7",margin:0}}>
                        <li>언어능력 향상</li>
                        <li>대외활동</li>
                        <li>글로벌 네트워킹</li>
                        <li>수익 창출</li>
                    </ul>
                </div>
            </Col>
        </Row>

        <Row type="flex" justify="center">
            <Col span={2} style={{marginTop:50}}>
                <img src={aboutus_purpose} alt="aboutus_purpose" style={{height:150}} />
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:100}}>
            <Col span={10} style={{textAlign:"center"}}>
                <span style={{color:"#0498c7",fontSize:25,fontWeight:500}}>Todays friend가 만들어가는 세상</span>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:30}}>
            <Col span={15} style={{textAlign:"center"}}>
                <p style={{color:"#0498c7",fontSize:20,marginTop:50,marginBottom:40}}>여행은 좀 더 현지인 스럽게</p>
                <p style={{fontSize:16,margin:8}}>
                    당신의 한국여행은 어떤가요? 현지인들 보다 외국인들이 더 많은 여행지에 지치셨나요?
                </p>
                <p style={{fontSize:16,margin:8}}>
                    현지인들만의 음식, 놀이, 쇼핑을 위한 장소들이 궁금하진 않나요? 좀 더 특별하고 기억에 남는 여행을 하고 싶나요?
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Todays friend는 당신에게 가장 특별한 여행을 선물하고자 합니다.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Local friend들이 여행지도에 없는 Local들의 장소와 문화 속으로 당신을 안내해 줄 것입니다.
                </p>
                <p style={{fontSize:16,marginTop:30}}>
                    Todays friend의 Local friend들은 당신만을 위한 Local guider가 되어 줄 것입니다.
                </p>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:30}}>
            <Col span={15} style={{textAlign:"center"}}>
                <p style={{color:"#f6b635",fontSize:20,marginTop:50,marginBottom:40}}>세계일주를 한국에서 해보는건 어때요?</p>
                <p style={{fontSize:16,margin:8}}>
                    한국을 여행하는 전세계인
                </p>
                <p style={{fontSize:16,margin:8}}>
                    세계일주가 우리의 꿈 중 하나인 이유는 많은 나라를 여행하며 그 나라의 문화와 생활을 경험한다는건 정말 멋진일이기 때문일거예요.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    특히, 세계일주는 우리의 시야가 점점 넓혀지는 촉매제 같은 찬스라고 생각해요.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    하지만, 이미 한국에는 전세계의 사람들이 매일매일 우리들이 사는 모두의 장소로 여행을 오고 있답니다.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    However, already in Korea, people from all over the world are traveling to the place where we live every day.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    그들에게 한국의 문화와 생활을 소개하고 그들의 나라의 이야기도 들어보는것 자체가 이미 세계일주 아닐까요?
                </p>
                <p style={{fontSize:16,marginTop:30}}>
                    오늘의 친구는 이미 30개국이 넘는 나라를 여행하고 있는 Worldtraveler 입니다!
                </p>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:30}}>
            <Col span={15} style={{textAlign:"center"}}>
                <p style={{color:"#f6b635",fontSize:20,marginTop:50,marginBottom:40}}>우리는 이미 충분해요</p>
                <p style={{fontSize:16,margin:8}}>
                    아마추어가 어때서요? '오늘의친구'는 아마추어 스타트업 이랍니다.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Professional이 되기위해서는 Amateur을 거쳐야 하는건 당연하다 생각해요.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    여러분은 전문 가이더는 아니지만 우리는 누구보다 한국문화에 대해 잘 알고 있는 Pro local 이기도 하지요.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    아마추어답게, 아마추어스러운 우리만의 여행문화를 만들어 보세요
                </p>
                <p style={{fontSize:16,margin:8}}>
                    때론, 전문가가 할 수 없는 아마추어의 감성이 외국인에게는 가장 재밌는 경험이 된답니다.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    당신의 Try 만으로 이미 당신은 충분합니다.
                </p>
                <p style={{fontSize:16,marginTop:30}}>
                    아마추어로 시작한 오늘의 친구는 이미 30개가 넘는 투어상품을 Try 했어요!
                </p>
            </Col>
        </Row>

        <Row type="flex" justify="center">
            <Col span={2} style={{marginTop:100}}>
                <img src={aboutus_making} alt="aboutus_making" style={{height:150}} />
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:100}}>
            <Col span={8}>
                <YouTube
                    videoId="4pSzhZ76GdM"
                    opts={opts}
                    // onReady={this._onReady}
                />
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:100}}>
            <Col span={10} style={{textAlign:"center",fontSize:16}}>
                <p>
                    오늘의 친구는 여행상품 공유 플랫폼입니다.
                </p>
                <p>
                    어떻게 투어가 만들어지고 판매되며 외국인과 여행하게 되는지 영상을 통해 소개해드릴게요.
                </p>
            </Col>
        </Row>

        <Footer selected="aboutus" />
    </div>
)