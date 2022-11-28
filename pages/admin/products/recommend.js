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
        title: 'Creator',
        dataIndex: 'pdu_created_by',
        key: 'pdu_created_by'
    }
]

class RecommendProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendData: []
        }
    }

    render() {
        return(
            <div>
                <Table columns={columns} dataSource={this.state.recommendData} />
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub4" selectedmenu="13"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Products</Breadcrumb.Item>
                                <Breadcrumb.Item>Recommended Products</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>Recommend Products</h1>

                            <RecommendProductTable />

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