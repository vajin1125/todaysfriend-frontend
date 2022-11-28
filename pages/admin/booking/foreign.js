import { Layout, Menu, Breadcrumb, Icon, Table } from 'antd';
import axios from 'axios'
import { MySider } from '../components/MySider'
import { base_url } from '../../components/base_url';

const { Header, Content, Footer } = Layout;

const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname'
    },
    {
        title: 'Last Name',
        dataIndex: 'lastname',
        key: 'lastname'
    },
    {
        title: 'Ages',
        dataIndex: 'ages',
        key: 'ages'
    },
    {
        title: 'Nationality',
        dataIndex: 'nationality',
        key: 'nationality'
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
    },
    {
        title: 'Language',
        dataIndex: 'language',
        key: 'language'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Cell Number',
        dataIndex: 'cellNumber',
        key: 'cellNumber'
    },
    {
        title: 'Main SNS',
        dataIndex: 'mainSNS',
        key: 'mainSNS'
    },
    {
        title: 'SNS ID',
        dataIndex: 'snsId',
        key: 'snsId'
    }
]

class ForeignTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foerignData: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'get',
            url: base_url + "/api/get_admin_foreignUser"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    foerignData: response.data
                });
            } else {
                console.log("try again")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.foerignData} />
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub5" selectedmenu="17"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Booking</Breadcrumb.Item>
                                <Breadcrumb.Item>Foreign Infor</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>Foreign Infor</h1>

                            <ForeignTable />

                        </Content>

                        <Footer style={{ textAlign: 'center' }}>
                            Todays Friend ©2018 Created by Haenok S.
                        </Footer>
                    </Layout>

                </Layout>
            </div>
        )
    }
}