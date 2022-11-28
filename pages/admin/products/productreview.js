import Link from 'next/link'
import { Layout, Menu, Breadcrumb, Icon, Table } from 'antd';
import { MySider } from '../components/MySider'

const { Header, Content, Footer } = Layout;

const columns = [
    {
        title: 'Product Name',
        dataIndex: 'tourname',
        key: 'tourname'
    },
    {
        title: 'Visitors',
        dataIndex: 'countvisitor',
        key: 'countvisitor'
    },
    {
        title: 'Counts of Review',
        dataIndex: 'counts',
        key: 'counts'
    },
    {
        title: 'Everage Review',
        dataIndex: 'evgreview',
        key: 'evgreview'
    },
    {
        title: 'Rejects',
        dataIndex: 'countreject',
        key: 'countreject'
    }
]

class ProductReviewTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewData: []
        }
    }

    render() {
        return(
            <div>
                <Table columns={columns} dataSource={this.state.reviewData} />
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub4" selectedmenu="12"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Products</Breadcrumb.Item>
                                <Breadcrumb.Item>Reviews of products</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>Products reviews</h1>

                            <ProductReviewTable />

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