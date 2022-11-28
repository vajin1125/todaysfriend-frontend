import Link from 'next/link'
import Router from 'next/router'
import { Layout, Menu, Icon } from 'antd';
import '../../../static/css/admin/mysider.css'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export class MySider extends React.Component {
    state = {
        collapsed: false,
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    menu1Click = () => {
        Router.push("/admin/reviews")
    }
    menu2Click = () => {
        Router.push("/admin/daystour")
    }
    menu3Click = () => {
        Router.push("/admin/ranking/students")
    }
    menu4Click = () => {
        Router.push("/admin/ranking/products")
    }
    menu5Click = () => {
        Router.push("/admin/popular")
    }
    menu6Click = () => {
        Router.push("/admin/website/videocomment")
    }
    menu7Click = () => {
        Router.push("/admin/website/policy")
    }
    menu8Click = () => {
        Router.push("/admin/tour/tourcity")
    }
    menu9Click = () => {
        Router.push("/admin/tour/newcity")
    }
    menu10Click = () => {
        Router.push("/admin/tour/tourtype")
    }
    menu11Click = () => {
        Router.push("/admin/products/product")
    }
    menu12Click = () => {
        Router.push("/admin/products/productreview")
    }
    menu13Click = () => {
        Router.push("/admin/products/recommend")
    }
    menu14Click = () => {
        Router.push("/admin/products/post")
    }
    menu15Click = () => {
        Router.push("/admin/products/modified")
    }
    menu16Click = () => {
        Router.push("/admin/products/remove")
    }
    menu17Click = () => {
        Router.push("/admin/booking/foreign")
    }
    menu18Click = () => {
        Router.push("/admin/booking/bookinglist")
    }
    menu19Click = () => {
        Router.push("/admin/user/user")
    }
    menu20Click = () => {
        Router.push("/admin")
    }
    menu21Click = () => {
        Router.push("/admin/community/koreatravel")
    }
    menu22Click = () => {
        Router.push("/admin/community/koreaevent")
    }
    menu23Click = () => {
        Router.push("/admin/community/localcommunity")
    }

    render() {
        return(
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                width={250}
                style={{boxShadow:"2px 0 5px #aaa"}}
            >
                <div className="adminLogo" />
                
                <Menu 
                    theme="dark"
                    mode="inline"
                    defaultOpenKeys={[this.props.openkey]} 
                    defaultSelectedKeys={[this.props.selectedmenu]} 
                    >

                    <Menu.Item key="20" onClick={this.menu20Click}>
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="rocket" /><span>Ranking</span></span>}
                    >
                        <Menu.Item key="3" onClick={this.menu3Click}>Students</Menu.Item>
                        <Menu.Item key="4" onClick={this.menu4Click}>Products</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="1" onClick={this.menu1Click}>
                        <Icon type="star" />
                        <span>All Reviews</span>
                    </Menu.Item>

                    <Menu.Item key="2" onClick={this.menu2Click}>
                        <Icon type="calendar" />
                        <span>Days of Tours</span>
                    </Menu.Item>

                    <Menu.Item key="5" onClick={this.menu5Click}>
                        <Icon type="like" />
                        <span>Popular Products</span>
                    </Menu.Item>

                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="desktop" /><span>Website</span></span>}
                    >
                        <Menu.Item key="6" onClick={this.menu6Click}>Videos & Comments</Menu.Item>
                        <Menu.Item key="7" onClick={this.menu7Click}>Terms & policy</Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="sub3"
                        title={<span><Icon type="global" /><span>Tour</span></span>}
                    >
                        <Menu.Item key="8" onClick={this.menu8Click}>Tour of Cities</Menu.Item>
                        <Menu.Item key="9" onClick={this.menu9Click}>Add New City</Menu.Item>
                        <Menu.Item key="10" onClick={this.menu10Click}>Type of Tour</Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="sub4"
                        title={<span><Icon type="customer-service" /><span>Products</span></span>}
                    >
                        <Menu.Item key="11" onClick={this.menu11Click}>All Products</Menu.Item>
                        <Menu.Item key="12" onClick={this.menu12Click}>Reviews of Products</Menu.Item>
                        <Menu.Item key="13" onClick={this.menu13Click}>Recommend Products</Menu.Item>
                        <Menu.Item key="14" onClick={this.menu14Click}>Post Products</Menu.Item>
                        {/* <Menu.Item key="15" onClick={this.menu15Click}>Modified Products</Menu.Item>
                        <Menu.Item key="16" onClick={this.menu16Click}>Removed Products</Menu.Item> */}
                    </SubMenu>

                    <SubMenu
                        key="sub5"
                        title={<span><Icon type="eye" /><span>Booking</span></span>}
                    >
                        <Menu.Item key="17" onClick={this.menu17Click}>Foreign Information</Menu.Item>
                        <Menu.Item key="18" onClick={this.menu18Click}>Booking List</Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="sub6"
                        title={<span><Icon type="user" /><span>User</span></span>}
                    >
                        <Menu.Item key="19" onClick={this.menu19Click}>All Users</Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="sub7"
                        title={<span><Icon type="heart" /><span>Community</span></span>}
                    >
                        <Menu.Item key="21" onClick={this.menu21Click}>Korea Travel</Menu.Item>
                        <Menu.Item key="22" onClick={this.menu22Click}>Korea Event</Menu.Item>
                        <Menu.Item key="23" onClick={this.menu23Click}>Local Community</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}