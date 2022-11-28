import { Layout, Menu, Breadcrumb, Icon, Table } from 'antd';
import axios from 'axios'
import { MySider } from '../components/MySider'
import { base_url } from '../../components/base_url';

const { Header, Content, Footer } = Layout;

const columns = [
    {
        title: 'User Name',
        dataIndex: 'username',
        key: 'username',
    }, 
    {
        title: 'Emain',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Created Date',
        dataIndex: 'date_joined',
        key: 'date_joined',
    },
    {
        title: 'Last Login',
        dataIndex: 'last_login',
        key: 'last_login',
    }
]

class AdminUserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'get',
            url: base_url + "/api/get_admin_user"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    userData: response.data
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
                <Table columns={columns} dataSource={this.state.userData} />    
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub6" selectedmenu="19"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>All users</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>All users</h1>

                            <AdminUserTable />

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