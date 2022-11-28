import { Layout, Row, Col, Table } from 'antd';
import DataSet from '@antv/data-set';
import { MySider } from './components/MySider'
let bizcharts;
if (process.browser) {
    bizcharts = require('bizcharts')
}

const { Header, Content, Footer } = Layout;

class TotalProductCountChart extends React.Component {
    render() {
        const productCount = [
            {
              city: "seoul",
              count: 100
            },
            {
              city: "busan",
              count: 120
            },
            {
              city: "jeju",
              count: 88
            },
            {
              city: "gyeongju",
              count: 65
            },
            {
                city: "jeonju",
                count: 65
            },
            {
                city: "daegu",
                count: 65
            },
            {
                city: "others",
                count: 20
            }
        ]
          
        return (
            <div>
                <bizcharts.Chart height={100} data={productCount} padding={0} forceFit>
                    Total Products: <span style={{fontSize:20}}>300</span>
                    <bizcharts.Axis name="city" visible={false} />
                    <bizcharts.Axis name="count" visible={false} />
                    <bizcharts.Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <bizcharts.Geom 
                        type="interval"
                        color="city"
                        position="city*count"
                    />
                </bizcharts.Chart>
            </div>
        )
    }
}

class TotalVisitorChart extends React.Component {
    render() {
        const visitordata = [
            {
              date: "2018-12-10",
              value: 15468
            },
            {
              date: "2018-12-11",
              value: 16100
            },
            {
              date: "2018-12-12",
              value: 15900
            },
            {
              date: "2018-12-13",
              value: 17409
            }
        ];
        return(
            <div>
                <bizcharts.Chart height={100} data={visitordata} padding={[0, 10]} forceFit>
                    Visitors: <span style={{fontSize:20}}>1352</span>
                    <bizcharts.Axis name="date" visible={false} />
                    <bizcharts.Axis name="value" visible={false} />
                    <bizcharts.Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <bizcharts.Geom 
                        type="line" 
                        position="date*value"
                    />
                    <bizcharts.Geom 
                        type="area" 
                        position="date*value"
                    />
                </bizcharts.Chart>
            </div>
        )
    }
}

class PaymentCountChart extends React.Component {
    render() {
        const paymentCount = [
            {
              date: "2018-12-10",
              value: 7
            },
            {
              date: "2018-12-11",
              value: 5
            },
            {
              date: "2018-12-12",
              value: 10
            },
            {
              date: "2018-12-13",
              value: 4
            },
            {
                date: "2018-12-14",
                value: 4
            },
            {
                date: "2018-12-15",
                value: 4
            },
            {
                date: "2018-12-16",
                value: 4
            }
        ];
        return(
            <div>
                <bizcharts.Chart height={100} data={paymentCount} padding={[0, 20]} forceFit>
                    Payments: <span style={{fontSize:20}}>300</span>
                    <bizcharts.Axis name="date" visible={false} />
                    <bizcharts.Axis name="value" visible={false} />
                    <bizcharts.Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <bizcharts.Geom 
                        type="interval" 
                        position="date*value"
                    />
                </bizcharts.Chart>
            </div>
        )
    }
}

class UserCountChart extends React.Component {
    render() {
        const usersdata = [
            {
              date: "2018-12-10",
              value: 3
            },
            {
              date: "2018-12-11",
              value: 5
            },
            {
              date: "2018-12-12",
              value: 10
            },
            {
              date: "2018-12-13",
              value: 25
            }
        ];
        return(
            <div>
                <bizcharts.Chart height={100} data={usersdata} padding={[0, 10]} forceFit>
                    Registered Users: <span style={{fontSize:20}}>210</span>
                    <bizcharts.Axis name="date" visible={false} />
                    <bizcharts.Axis name="value" visible={false} />
                    <bizcharts.Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <bizcharts.Geom 
                        type="line" 
                        position="date*value"
                    />
                </bizcharts.Chart>
            </div>
        )
    }
}

class ProductCityChart extends React.Component {
    render() {
        const { DataView } = DataSet;
        const { Html } = bizcharts.Guide;
        const data = [
            {
                item: "Seoul",
                count: 30
            },
            {
                item: "busan",
                count: 20
            },
            {
                item: "jeju",
                count: 15
            },
            {
                item: "gyeongju",
                count: 20
            },
            {
                item: "jeonju",
                count: 10
            },
            {
                item: "daegu",
                count: 20
            },
            {
                item: "other",
                count: 5
            }
        ];
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                val = val * 100 + "%";
                return val;
                }
            }
        };
        return (
            <div>
                <bizcharts.Chart
                    height={400}
                    data={dv}
                    scale={cols}
                    padding={[0, 0, 0, 0]}
                    forceFit
                >
                    <span>Products of Cities</span>
                    <bizcharts.Coord type={"theta"} radius={0.75} innerRadius={0.6} />
                    <bizcharts.Axis name="percent" />
                    <bizcharts.Legend
                        position="bottom"
                        offsetY={-60}
                        offsetX={0}
                    />
                    <bizcharts.Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <bizcharts.Guide>
                        <Html
                        position={["50%", "50%"]}
                        html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>City<br><span style=&quot;color:#262626;font-size:2.0em&quot;>300</span>Products</div>"
                        alignX="middle"
                        alignY="middle"
                        />
                    </bizcharts.Guide>
                    <bizcharts.Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                        "item*percent",
                        (item, percent) => {
                            percent = percent * 100 + "%";
                            return {
                            name: item,
                            value: percent
                            };
                        }
                        ]}
                        style={{
                        lineWidth: 1,
                        stroke: "#fff"
                        }}
                    >
                        {/* <bizcharts.Label
                        content="percent"
                        formatter={(val, item) => {
                            return item.point.item + ": " + val;
                        }}
                        /> */}
                    </bizcharts.Geom>
                </bizcharts.Chart>
            </div>
        )
    }
}

class MonthTourChart extends React.Component {
    render() {
        const monthTour = [
            {
              city: "Jan",
              count: 10
            },
            {
              city: "Feb",
              count: 20
            },
            {
              city: "Mar",
              count: 36
            },
            {
              city: "Apr",
              count: 40
            },
            {
                city: "May",
                count: 80
            },
            {
                city: "Jun",
                count: 110
            },
            {
                city: "Jul",
                count: 90
            },
            {
                city: "Aug",
                count: 127
            },
            {
                city: "Sep",
                count: 100
            },
            {
                city: "Oct",
                count: 70
            },
            {
                city: "Nov",
                count: 80
            },
            {
                city: "Dec",
                count: 30
            },
        ]

        const cols = {
            count: {
                min: 1
            },
        }
        return(
            <div>
                <bizcharts.Chart height={400} data={monthTour} scale={cols} forceFit padding={[0,0,30,30]}>
                    <span>Monthly Tour Progression</span>
                    <bizcharts.Axis name="city" />
                    <bizcharts.Axis name="count" />
                    <bizcharts.Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <bizcharts.Geom 
                        type="line"
                        color="Green"
                        position="city*count"
                    />
                    <bizcharts.Geom 
                        type="area"
                        color="Green"
                        position="city*count"
                    />
                </bizcharts.Chart>
            </div>
        )
    }
}

class InProgressTour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingData: []
        }
    }

    render() {
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
        return(
            <div>
                <span>In Progressing Tour</span>
                <Table columns={columns} dataSource={this.state.bookingData} />
            </div>
        )
    }
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: false
        }
    }

    componentDidMount = () => {
        this.setState({
            mount: true
        })
    }

    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider selectedmenu="20"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <h1>Dashbard</h1>

                            {this.state.mount && 
                            <Row type="flex" justify="center">
                                <Col span={6}>
                                    {process.browser &&
                                        <TotalProductCountChart />
                                    }
                                </Col>
                                <Col span={6}>
                                    {process.browser &&
                                        <TotalVisitorChart />
                                    }
                                </Col>
                                <Col span={6}>
                                    {process.browser &&
                                        <PaymentCountChart />
                                    }
                                </Col>
                                <Col span={6}>
                                    {process.browser &&
                                        <UserCountChart />
                                    }
                                </Col>
                            </Row>
                            }
                            {this.state.mount && 
                            <Row type="flex" justify="space-between" style={{marginTop:30}}>
                                <Col span={8}>
                                    {process.browser &&
                                        <ProductCityChart />
                                    }
                                </Col>
                                <Col span={15}>
                                    {process.browser &&
                                        <MonthTourChart />
                                    }
                                </Col>
                            </Row>
                            }
                            <Row style={{marginTop:30}}>
                                <InProgressTour />
                            </Row>
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