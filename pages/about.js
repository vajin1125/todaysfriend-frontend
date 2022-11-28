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
                <Link href="/about"><a><span style={{marginRight:20}}>English</span></a></Link>
                <Link href="/about_kr"><a><span>Korean</span></a></Link>
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
                For <span style={{color:"#0498c7",fontSize:27,fontWeight:500}}>foreigners who don't know well about Korea</span>, let's make a real local tour
                </p>
                <p style={{fontSize:20}}>
                through the stories of <span style={{color:"#f6b635",fontSize:27,fontWeight:500}}>the most sensitive college students about current Korean culture</span>.
                </p>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:50}}>
            <Col span={5}>
                <div style={{width:"100%",textAlign:"center"}}>
                    <span style={{color:"#0498c7",fontSize:20}}>Foreign tourists <span style={{fontSize:25}}>Needs</span></span>
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
                    <span style={{color:"#f6b635",fontSize:20}}>College students <span style={{fontSize:25}}>Needs</span></span>
                </div>
                <div style={{border:"2px solid #0498c7",borderRadius:20,width:"100%",padding:20}}>
                    <ul style={{fontSize:20,color:"#0498c7",margin:0}}>
                        <li>Language skill up</li>
                        <li>Diverse activity</li>
                        <li>Global networking</li>
                        <li>Benefits</li>
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
                <span style={{color:"#0498c7",fontSize:25,fontWeight:500}}>A world created by Todays friend</span>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:30}}>
            <Col span={15} style={{textAlign:"center"}}>
                <p style={{color:"#0498c7",fontSize:20,marginTop:50,marginBottom:40}}>Travel like a local</p>
                <p style={{fontSize:16,margin:8}}>
                    What about your trip to Korea? Are you tired of places just for foreigners?
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Aren't you curious about locals' places for food, play and shopping? Do you want to make a more special and memorable trip?
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Todays friend wants to present you the most special trip.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Local friends will guide you to the places and cultures of the local that are not on the travel map.
                </p>
                <p style={{fontSize:16,marginTop:30}}>
                    Our Local friends will be your only local guide.
                </p>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:30}}>
            <Col span={15} style={{textAlign:"center"}}>
                <p style={{color:"#f6b635",fontSize:20,marginTop:50,marginBottom:40}}>How about going around the world in Korea?</p>
                <p style={{fontSize:16,margin:8}}>
                    People from all over the world travel to Korea.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    One of our dreams is to travel around the world because it is so wonderful to travel
                </p>
                <p style={{fontSize:16,margin:8}}>
                    to many countries and experience the culture and life of the country.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    In particular, I think that world travel is a big chance to improve line of sight.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    However, already in Korea, people from all over the world are traveling to the place where we live every day.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Wouldn't it is a world travel itself to introduce them about Korea's culture and life and to listen to their country's stories?
                </p>
                <p style={{fontSize:16,marginTop:30}}>
                    Today's friend is already a Worldtraveler traveling in over 30 countries!
                </p>
            </Col>
        </Row>
        <Row type="flex" justify="center" style={{marginTop:30}}>
            <Col span={15} style={{textAlign:"center"}}>
                <p style={{color:"#f6b635",fontSize:20,marginTop:50,marginBottom:40}}>You're already good enough</p>
                <p style={{fontSize:16,margin:8}}>
                    What about an amateur? 'Today's Friend' is an amateur start-up.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    To become a professional, you must go through a period of an amateur.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    You are not a professional guider, but we are a Pro local who knows more about Korean culture&life than anyone else.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Make an amateur tour. Create a travel culture by an amateur.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    Sometimes, amateur emotion that a professional can't do is the most exciting experience for foreigners.
                </p>
                <p style={{fontSize:16,margin:8}}>
                    You are already enough with your Try.
                </p>
                <p style={{fontSize:16,marginTop:30}}>
                    Todays friend, who started as an amateur, has already tried over 30 tour programs!
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
                    Today's friend is a travel product sharing platform.
                </p>
                <p>
                    I'll show you how the tours are made and managed, and how to tour with foreigners.
                </p>
            </Col>
        </Row>

        <Footer selected="aboutus" />
    </div>
)