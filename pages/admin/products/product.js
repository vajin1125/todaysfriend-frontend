import { Layout, Menu, Breadcrumb, Icon, Table, Select } from 'antd';
import axios from 'axios'
import { MySider } from '../components/MySider'
import { base_url } from '../../components/base_url';

const { Header, Content, Footer } = Layout;
const Option = Select.Option;


class AdminProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: 'none',
            productdata: [],
            articleData: [],
            loading: false,
        }
        this.columns = [
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
                title: 'Creator',
                dataIndex: 'pdu_created_by',
                key: 'pdu_created_by'
            },
            {
                title: 'Show in Tour Program page?',
                dataIndex: 'pdu_show_tourpage',
                key: 'pdu_show_tourpage',
                render: (text, record) => (
                    <Select defaultValue={text + " " + record.id} style={{width:"50%"}} onChange={this.onChangeShowTourPage}>
                        <Option value={"1" + " " + record.id}>Show</Option>
                        <Option value={"0" + " " + record.id}>Hide</Option>
                    </Select>
                )
            }
        ]
    }

    onChangeShowTourPage = (value) => {
        console.log("Show:", value);

        axios({
            method: 'post',
            url: base_url + "/api/show_tour_program_page",
            data: {
                value
            }
        })
        .then((response) => {
            console.log(response)
        })
        .then((error) => {
            console.log(error)
        });
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        });

        axios({
            method: 'get',
            url: base_url + "/api/get_admin_product"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    productdata: response.data,
                    loading: false
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
        return(
            <div>
                <Table columns={this.columns} dataSource={this.state.productdata} />                
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub4" selectedmenu="11"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Products</Breadcrumb.Item>
                                <Breadcrumb.Item>All Products</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>All Products</h1>
            
                            <AdminProductTable />

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