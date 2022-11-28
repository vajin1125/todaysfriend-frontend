import { Row, Col, Affix } from 'antd'
import Link from 'next/link'
import { video, friend, tourprogram, ask_circle, map, empty_map, seoul, jeonju, daegu, gyeongju, busan, jejudo } from './components/images'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TawkChat } from './components/TawkChat'
import '../static/css/index.css'

export default class extends React.Component {

  componentDidMount(){
    document.title = "Home-Todays Friend"
  }

  render() {
    return(
      <div>
        {/* <DocumentTitle title='Todays Friend'> */}
        <Header selected='index'/>

        <Row>
          <Col span={24} style={{height:'42vw',position:'relative',margin:0}}>
            <video style={{width:'100%',position:'absolute',top:-240,left:0}} autoPlay loop muted>
              <source src={video}></source>
            </video>
            {/* <Affix offsetTop={700} onChange={affixed => console.log(affixed)}>
              <img src={ask_circle} alt='ask_circle' style={{width:150,position:'absolute',bottom:'20%',right:0,zIndex:999}}/>
            </Affix>         */}
            <img src={tourprogram} alt='tourprogram' style={{width:400,position:'absolute',bottom:-150,left:'50%',marginLeft:-200,zIndex:100}}/>
          </Col>
        </Row>    

        <Row style={{background:'#FFF',paddingTop:80}}>
          <Col span={24} style={{textAlign:'center',position:"relative"}}>
            <img src={empty_map} alt='map' style={{width:'50%',zIndex:-1}}/>
              <Link href="/city?name=seoul">
                <img className="seoulIcon" src={seoul} alt='seoul' style={{width:'6%',zIndex:999}}/>
              </Link>
              <Link href="/city?name=jeonju">
                <img className="jeonjuIcon" src={jeonju} alt='jeonju' style={{width:'6%',zIndex:999}}/>
              </Link>
              <Link href="/city?name=daegu">
                <img className="daeguIcon" src={daegu} alt='daegu' style={{width:'5%',zIndex:999}}/>
              </Link>
              <Link href="/city?name=gyeongju">
                <img className="gyeongjuIcon" src={gyeongju} alt='gyeongju' style={{width:'5%',zIndex:999}}/>
              </Link>
              <Link href="/city?name=busan">
                <img className="busanIcon" src={busan} alt='busan' style={{width:'6%',zIndex:999}}/>
              </Link>
              <Link href="/city?name=jejudo">
                <img className="jejudoIcon" src={jejudo} alt='jejudo' style={{width:'4%',zIndex:999}}/>
              </Link>
          </Col>
        </Row>
        <TawkChat />
        <Footer selected="index"/>
        {/* </DocumentTitle> */}
      </div>
    );
  }
}
