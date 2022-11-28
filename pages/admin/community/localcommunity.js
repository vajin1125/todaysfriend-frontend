import axios from 'axios'
import { Row, Col, Layout, Breadcrumb, Table, Button, Form, Input, Select, Popconfirm, Spin } from 'antd';
import { MySider } from '../components/MySider'
import { base_url } from '../../components/base_url';
let Editor;
if (process.browser) {
    Editor = require('react-quill')    
}
import 'react-quill/dist/quill.snow.css'
import '../../../static/css/admin/koreatravel.css'

const { Header, Content, Footer } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;


class AdminLocalCommunityForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articleData: [],
            text: '',
            showForm: 'none',
            loading: false
        }
        this.render_articleDate = this.render_articleDate.bind(this);
    }

    onChangeCategory = value => {
        console.log("Category:",value)
    }

    onChangeTitle = e => {
        console.log("Title:", e.target.value)
    }

    onChangeArea = e => {
        console.log("Area:", e.target.value)
    }

    onChangeWriter = e => {
        console.log("Writer:", e.target.value)
    }

    onChangeModifyEditor = (value) => {
        console.log("ModifyEditerValue:", value)
        this.state.text = value;
    }

    onClickCancel = (e) => {
        window.location.reload();
    }

    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            ['link', 'image', 'video'],
            ['clean'] 
        ]
    }
    
    formats = [
        'bold', 'italic', 'underline', 'strike',
        'blockquote', 'code-block',
        'header', 'list', 'script',
        'indent', 'direction',
        'size', 'header',
        'color', 'background',
        'font', 'align',
        'link', 'image', 'video',
        'clean'
    ]

    render_articleDate() {
        if (this.props.articleData.content !== undefined && this.state.text !== this.props.articleData.content)
        {
            this.setState({
                text: this.props.articleData.content,
                showForm: this.props.showForm
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let content = this.state.text;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                console.log(values)
                
                axios({
                    method: 'post',
                    url: base_url + '/api/modify_local_article',
                    data: {
                        values: values,
                        content: content,
                        articleId: this.props.articleData.id
                    }
                })
                .then((response) => {
                    console.log('response:', response);
                    if (response.data['type'] === 'success'){
                        this.setState({
                            loading: false,
                            showForm: 'none',
                        })
                        window.location.reload();
                    } else {
                        this.setState({
                            loading: false
                        })
                        Modal.error({
                            title: 'Local article modification has been failed!',
                            content: 'Please try again !',
                        });
                    }
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({
                        loading: false
                    })
                });
            }
        });
    }


    render() {
        this.render_articleDate();
        const { getFieldDecorator } = this.props.form;
        
        return(
            <div>
                <Form onSubmit={this.handleSubmit} style={{display:this.state.showForm}}>
                    <Row>
                        <Col span={4}>
                            <FormItem
                                label="Category"
                            >
                                {getFieldDecorator('category', {
                                    initialValue: this.props.articleData.category,
                                    rules: [{
                                        required: true, message: 'Please input category!',
                                    }],
                                })(
                                    <Select onChange={this.onChangeCategory}>
                                        <Option value="Accomodation">Accomodation</Option>
                                        <Option value="Food">Food</Option>
                                        <Option value="Transprotation">Transprotation</Option>
                                        <Option value="festival">festival</Option>
                                        <Option value="life">life</Option>
                                        <Option value="culture">culture</Option>
                                        <Option value="history">history</Option>
                                        <Option value="activity">Transprotation</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={9}>
                            <FormItem
                                label="Title"
                            >
                                {getFieldDecorator('title', {
                                    initialValue: this.props.articleData.title,
                                    rules: [{
                                        required: true, message: 'Please input article title!',
                                    }],
                                })(
                                    <Input onChange={this.onChangeTitle}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={4}>
                            <FormItem
                                label="Area"
                            >
                                {getFieldDecorator('area', {
                                    initialValue: this.props.articleData.area,
                                    rules: [{
                                        required: true, message: 'Please input area!',
                                    }],
                                })(
                                    <Input onChange={this.onChangeArea}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={4}>
                            <FormItem
                                label="Writer"
                            >
                                {getFieldDecorator('writer', {
                                    initialValue: this.props.articleData.writer,
                                    rules: [{
                                        required: true, message: 'Please input writer name!',
                                    }],
                                })(
                                    <Input onChange={this.onChangeWriter} readOnly />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                        
                    <Row type="flex" justify="center">
                        <Col span={18} style={{marginBottom:30}}> 
                            {
                                process.browser &&
                                <Editor
                                    theme="snow"
                                    modules={this.modules}
                                    formats={this.formats}
                                    value={this.state.text} 
                                    onChange={this.onChangeModifyEditor} 
                                />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Spin spinning={this.state.loading} size="large">
                            <Button type="primary" htmlType="submit" style={{float:'right'}}>Save to Change</Button>
                            </Spin>
                            <Button type="default" onClick={this.onClickCancel} style={{float:'right'}}>Cancel</Button>                          
                        </Col>
                    </Row>
                </Form>
                
            </div>
        )
    }
}
const WrappedAdminLocalCommunityForm = Form.create()(AdminLocalCommunityForm);



class LocalCommunityTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category',
            }, 
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Area',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: 'Writer',
                dataIndex: 'writer',
                key: 'writer',
            },
            {
                title: 'Last Updated',
                dataIndex: 'lastUpdated',
                key: 'lastUpdated',
            },
            {
                title: 'View',
                dataIndex: 'view',
                key: 'view',
            },
            {   
                title: 'Edit',
                dataIndex: 'edit',
                render: (text, record) => (
                    this.state.data.length >= 1
                        ? ( 
                            <a data-key={record.key} onClick={this.readArticle}>Edit</a>
                        ) : null
                ),
            },
            {
                title: 'Delete',
                dataIndex: 'Delete',
                render: (text, record) => (
                  this.state.data.length >= 1
                    ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a href="javascript:;">Delete</a>
                        </Popconfirm>
                    ) : null
                ),
            }
        ]
        this.state = {
            showForm: 'none',
            data: [],
            articleData: [],
            loading: false,
        }
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        });

        axios({
            method: 'get',
            url: base_url + "/api/get_localArticle"
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    data: response.data,
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

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    // addArticle = () => {
    //     this.setState({
    //         showForm: this.state.showForm == 'none' ? 'block' : 'none'
    //     });
    // }

    readArticle = (e) => {
        console.log('key: ', e.currentTarget.dataset.key)
        const article_id = e.currentTarget.dataset.key
        // Router.push('/admin/community/edittravel?id=' + article_id)
        this.setState({
            loading: true
        })
        axios({
            method: 'post',
            url: base_url + '/api/get_localArticle_byId',
            data: {
                id: article_id
            }
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({
                    showForm: 'block',
                    articleData: response.data[0],
                    loading: false,
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }

    handleDelete = (key) => {
        console.log("key:", key)
        const dataSource = [...this.state.data];
        this.setState({ data: dataSource.filter(item => item.key !== key) });
        axios({
            method: 'post',
            url: base_url + "/api/del_localArticle",
            data: {
                key: key
            }
        })
        .then((response) => {
            if (response.status === 200){
                console.log("Delect Success!")
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return(
            <div>
                {/* <Button type="primary" onClick={this.addArticle}>Add</Button> */}
                <WrappedAdminLocalCommunityForm articleData={this.state.articleData} showForm={this.state.showForm}/>
                <Spin spinning={this.state.loading}>
                <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.state.data} />     
                </Spin>           
            </div>
        )
    }
}

export default class extends React.Component {
    render() {
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <MySider openkey="sub7" selectedmenu="23"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>

                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Community</Breadcrumb.Item>
                                <Breadcrumb.Item>Local Community</Breadcrumb.Item>
                            </Breadcrumb>

                            <h1>Local Community</h1>

                            <LocalCommunityTable />

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