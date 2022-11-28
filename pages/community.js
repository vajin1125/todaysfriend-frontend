import { Row, Col, Button, Tabs, Table, Calendar } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { community_top_banner } from './components/images'
import { base_url } from './components/base_url';


const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

// Calendar
function onPanelChange(value, mode) {
    console.log(value, mode);
}

class TravelTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category',
            }, 
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) => (
                    <a data-key={record.key} onClick={this.readArticle}>{text}</a>
                )
            },
            {
                title: 'Area',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: 'Writer',
                dataIndex: 'writer',
                key: 'writer',
            },
            {
                title: 'Last Updated',
                dataIndex: 'lastUpdated',
                key: 'lastUpdated',
            },
            {
                title: 'View',
                dataIndex: 'view',
                key: 'view',
            }
        ]
        this.state ={
            travelData: [],
            articleId: '',
        }
    }

    componentDidMount = () => {
        axios({
            method: 'get',
            url: base_url + "/api/get_travelArticle"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    travelData: response.data
                });
            } else {
                console.log("try again")
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    readArticle = (e) => {
        console.log('key: ', e.currentTarget.dataset.key);
        Router.push('/travelarticle?id=' + e.currentTarget.dataset.key)
    }

    render() {
        return(
            <div>
                <Table columns={this.columns} dataSource={this.state.travelData}></Table>
            </div>
        )
    }
}

class EventTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns1 = [
            {
                title: 'Area',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) => (
                    <a data-key={record.key} onClick={this.readArticle}>{text}</a>
                )
            },
            {
                title: 'Period',
                dataIndex: 'period',
                key: 'period',
            },
            {
                title: 'View',
                dataIndex: 'view',
                key: 'view',
            }
        ]
        this.state ={
            eventData: [],
            articleId: ''
        }
    }

    componentDidMount = () => {
        axios({
            method: 'get',
            url: base_url + "/api/get_eventArticle"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    eventData: response.data
                });
            } else {
                console.log("try again")
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    readArticle = (e) => {
        console.log('key: ', e.currentTarget.dataset.key);
        Router.push('/eventarticle?id=' + e.currentTarget.dataset.key)
    }

    render() {
        return(
            <div>
                <Table columns={this.columns1} dataSource={this.state.eventData}></Table>
            </div>
        )
    }
}

class LocalTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns2 = [
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category',
            }, 
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => (
                    <a data-key={record.key} onClick={this.readArticle}>{text}</a>
                )
            },
            {
                title: 'Area',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: 'Writer',
                dataIndex: 'writer',
                key: 'writer',
            },
            {
                title: 'Last Updated',
                dataIndex: 'lastUpdated',
                key: 'lastUpdated',
            },
            {
                title: 'View',
                dataIndex: 'view',
                key: 'view',
            }
        ]
        this.state ={
            localData: [],
            articleId: '',
        }
    }

    componentDidMount = () => {
        
        axios({
            method: 'get',
            url: base_url + "/api/get_localArticle"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    localData: response.data
                });
            } else {
                console.log("try again")
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    readArticle = (e) => {
        console.log('key: ', e.currentTarget.dataset.key);
        Router.push('/localarticle?id=' + e.currentTarget.dataset.key)
    }

    writeLocalArticel = () => {
        Router.push("/writearticle")
    }

    render() {
        return(
            <div>
                <Table columns={this.columns2} dataSource={this.state.localData}></Table>
                <Button size="default" type="primary" style={{float:"right"}} onClick={this.writeLocalArticel}><span>글쓰기</span></Button>
            </div>
        )
    }
}

export default class Community extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            sessionInfo: ''
        }
    }

    componentDidMount(){
        document.title = "Community-Todays Friend"

        this.setState({
            sessionInfo: sessionStorage.getItem('session_username')
        });
    }

    onClickLogin = () => {
        Router.push("/signin?for=community")
    }

    render() {
        return(
            <div>
                <Header selected="community"/>
                <Row>
                    <Col span={24} style={{height:'20vw',position:'relative'}}>
                        <img src={community_top_banner} alt='bg_customized' style={{width:'100%',position:'absolute',left:0,bottom:0}}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={16}>
                        <div style={{width:"100%",marginTop:50,textAlign:"center"}}>
                            <Tabs defaultActiveKey="1" size="large" onChange={callback}>

                                <TabPane tab="Korea Travel" key="1">
                                    <Row>
                                        <TravelTable />
                                    </Row>
                                </TabPane>

                                <TabPane tab="Korea Event" key="2">
                                    <Row type="flex" justify="space-around">
                                        <Col span={8}>
                                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                        </Col>
                                        <Col span={14}>
                                            <EventTable />
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tab="Local Community" key="3">
                                    <Row>
                                        {
                                            this.state.sessionInfo ?
                                                <LocalTable />:
                                                <Row type="flex" justify="center">
                                                    <Col span={10}>
                                                        <p style={{fontSize:20}}>You have to log in todaysfriend for Local Community</p>
                                                        <Button type="primary" onClick={this.onClickLogin}>Log In</Button>
                                                    </Col>
                                                </Row>
                                        }
                                    </Row>
                                    
                                </TabPane>

                            </Tabs>
                        </div>
                    </Col>
                </Row>
                <Footer selected="community" />
            </div>
        )
    }
}