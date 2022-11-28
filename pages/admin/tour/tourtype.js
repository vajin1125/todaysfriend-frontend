import Link from 'next/link'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { MySider } from '../components/MySider'

const { Header, Content, Footer } = Layout;

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub3" selectedmenu="10"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Tour</Breadcrumb.Item>
                                <Breadcrumb.Item>Tour of Types</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>Tour of Types</h1>
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