import Link from 'next/link'
import { Layout, Menu, Breadcrumb, Icon, Table } from 'antd';
import { MySider } from '../components/MySider'

const { Header, Content, Footer } = Layout;

const columns = [
    {
        title: 'Name',
        dataIndex: 'pdu_name',
        key: 'pdu_name',
    }, 
    {
        title: 'Type',
        dataIndex: 'pdu_type',
        key: 'pdu_type',
    },
    {
        title: 'City',
        dataIndex: 'pdu_city',
        key: 'pdu_city',
    },
    {
        title: 'Language',
        dataIndex: 'pdu_language',
        key: 'pdu_language',
    },
    {
        title: 'Hash Tag',
        dataIndex: 'pdu_hashtag',
        key: 'pdu_hashtag',
    },
    {
        title: 'Price',
        dataIndex: 'pdu_price',
        key: 'pdu_price',
    },
    {
        title: 'Created Date',
        dataIndex: 'pdu_created_time',
        key: 'pdu_created_time',
    },
    {
        title: 'Posted Date',
        dataIndex: 'pdu_posted_time',
        key: 'pdu_posted_time',
    },
    {
        title: 'Creator',
        dataIndex: 'pdu_created_by',
        key: 'pdu_created_by'
    }
]

class PostedProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return(
            <div>
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub4" selectedmenu="14"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Products</Breadcrumb.Item>
                                <Breadcrumb.Item>Post Products</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>Post Products</h1>

                            <PostedProductTable />

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