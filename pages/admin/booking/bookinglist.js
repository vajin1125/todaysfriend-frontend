import { Layout, Menu, Breadcrumb, Icon, Table } from 'antd';
import axios from 'axios'
import { MySider } from '../components/MySider'
import { base_url } from '../../components/base_url';

const { Header, Content, Footer } = Layout;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Tour Name',
        dataIndex: 'tourname',
        key: 'tourname'
    },
    {
        title: 'Tour Date',
        dataIndex: 'tourdate',
        key: 'tourdate'
    },
    {
        title: 'Start Time',
        dataIndex: 'starttime',
        key: 'starttime'
    },
    {
        title: 'Language',
        dataIndex: 'language',
        key: 'language'
    },
    {
        title: 'Number of People',
        dataIndex: 'numberPeople',
        key: 'numberPeople'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
    }
]

class BookingListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingData: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'get',
            url: base_url + "/api/get_admin_bookinglist"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    bookingData: response.data
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
                <Table columns={columns} dataSource={this.state.bookingData} />
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub5" selectedmenu="18"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Booking</Breadcrumb.Item>
                                <Breadcrumb.Item>Booking List</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>Booking List</h1>

                            <BookingListTable />

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