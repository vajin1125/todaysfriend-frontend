import axios from 'axios'
import { Row, Col, Layout, Breadcrumb, Table, Button, Form, Input, DatePicker, Popconfirm, Spin } from 'antd';
import moment from 'moment';
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
const { RangePicker} = DatePicker;

class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articleData: [],
            period: [],
            showForm: 'none',
            showEditForm: 'none',
            text: '',
            isProps: false,
            loading: false,
        }
        this.render_articleDate = this.render_articleDate.bind(this);
    }

    componentDidMount = () => {
        this.props.articleData !== 0 &&
        this.setState({
            isProps: true
        })  
    }

    onChangePeriod = (date, dateString) => {
        console.log(date, dateString);
        this.setState({
            period: dateString
        });
    }

    onChangeName = e => {
        console.log("Name:", e.target.value)
    }

    onChangeArea = e => {
        console.log("Area:", e.target.value)
    }

    onChangeEditor = (value) => {
        console.log("Editor", value)
        this.setState({ text: value })
    }

    onChangeModifyEditor = (value) => {
        console.log("ModifyEditerValue:", value)
        this.state.text = value;
    }

    onClickCancel = (e) => {
        window.location.reload();
    }

    addArticle = () => {
        this.setState({
            showForm: this.state.showForm == 'none' ? 'block' : 'none'
        });
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

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Editor Contents",this.state.text);
        let content = this.state.text;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values)
                const period = this.state.period
                axios({
                    method: 'post',
                    url: base_url + '/api/save_event_article',
                    data: {
                        values,
                        period,
                        content
                    }
                })
                .then((response) => {
                    console.log('response:', response);
                    if (response.data['type'] === 'success'){
                        this.setState({
                            showForm: 'none'
                        })
                    } else {
                        this.setState({
                            loading: false
                        })
                        Modal.error({
                            title: 'Event article registeration has been failed!',
                            content: 'Please try again !',
                        });
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
            }
        });
    }

    handleSubmitEdit = (e) => {
        e.preventDefault();
        let content = this.state.text;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                console.log("Modify_values",values)
                const period = this.state.period
                console.log("period:", period)
                if (period.length === 0) {
                    console.log('No Change period')
                } else {
                    console.log("Changed period")
                }
                console.log("----")
                axios({
                    method: 'post',
                    url: base_url + '/api/modify_event_article',
                    data: {
                        values,
                        period,
                        content,
                        articleId: this.props.articleData.id
                    }
                })
                .then((response) => {
                    console.log('response:', response);
                    if (response.data['type'] === 'success'){
                        this.setState({
                            loading: false,
                            showEditForm: 'none'
                        })
                        // window.location.reload();
                    } else {
                        this.setState({
                            loading: false
                        })
                        Modal.error({
                            title: 'Event article modification has been failed!',
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

    render_articleDate() {
        if (this.props.articleData.content !== undefined && this.state.text !== this.props.articleData.content)
        {
            this.setState({
                text: this.props.articleData.content,
                showEditForm: this.props.showEditForm
            })
        }
    }

    render() {
        this.render_articleDate();
        const { getFieldDecorator } = this.props.form;
        let myRef = (el) => this.myQuillRef = el;
        // console.log('props-articleData:', this.props.articleData)
        return(
            <div>
                <Button type="primary" onClick={this.addArticle}>Add</Button>
                {this.props.articleData.length !== 0 ?
                <Form onSubmit={this.handleSubmitEdit} style={{display:this.state.showEditForm}}>
                    <Row>
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
                                    <Input onChange={this.onChangeArea} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <FormItem
                                label="Name"
                            >
                                {getFieldDecorator('name', {
                                    initialValue: this.props.articleData.name,
                                    rules: [{
                                        required: true, message: 'Please input article name!',
                                    }],
                                })(
                                    <Input onChange={this.onChangeName}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={6}>
                            <FormItem
                                label="Period"
                            >
                                {getFieldDecorator('period', {
                                    initialValue: [moment(this.props.articleData.period_from, 'YYYY-MM-DD'), moment(this.props.articleData.period_to, 'YYYY-MM-DD')],
                                    rules: [{
                                        required: true, message: 'Please input event period!',
                                    }],
                                })(
                                    <RangePicker ref={period => this.period = period} onChange={this.onChangePeriod}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                        
                    <Row type="flex" justify="center">
                        <Col span={18} style={{marginBottom:30}}>
                            {
                                process.browser &&
                                <Editor
                                    ref={myRef}
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
                            <Spin spinning={this.state.loading}>
                            <Button type="primary" htmlType="submit" style={{float:'right'}}>Save to Change</Button>
                            </Spin>
                            <Button type="default" onClick={this.onClickCancel} style={{float:'right'}}>Cancel</Button>                          
                        </Col>
                    </Row>
                </Form>
                :
                <Form onSubmit={this.handleSubmit} style={{display:this.state.showForm}}>
                    <Row>
                        <Col span={4}>
                            <FormItem
                                label="Area"
                            >
                                {getFieldDecorator('area', {
                                    rules: [{
                                        required: true, message: 'Please input area!',
                                    }],
                                })(
                                    <Input onChange={this.onChangeArea} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <FormItem
                                label="Name"
                            >
                                {getFieldDecorator('name', {
                                    rules: [{
                                        required: true, message: 'Please input article name!',
                                    }],
                                })(
                                    <Input onChange={this.onChangeName}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={6}>
                            <FormItem
                                label="Period"
                            >
                                {getFieldDecorator('period', {
                                    rules: [{
                                        required: true, message: 'Please input event period!',
                                    }],
                                })(
                                    <RangePicker onChange={this.onChangePeriod}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                        
                    <Row type="flex" justify="center">
                        <Col span={18} style={{marginBottom:30}}>
                            {
                                process.browser &&
                                <Editor
                                    ref={Editor => {
                                        this.myEditor = Editor;
                                    }}
                                    theme="snow"
                                    modules={this.modules}
                                    formats={this.formats}
                                    value={this.state.text} 
                                    onChange={this.onChangeEditor} 
                                />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Spin spinning={this.state.loading} size="large">
                            <Button type="primary" htmlType="submit" style={{float:'right'}}>POST</Button>
                            </Spin>
                            <Button type="default" onClick={this.onClickCancel} style={{float:'right'}}>Cancel</Button>                         
                        </Col>
                    </Row>
                </Form>
                }
            </div>
        )
    }
}
const WrappedEventForm = Form.create()(EventForm);


class EventTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: 'none',
            data: [],
            articleData: [],
            loading: false,
        }
        this.columns = [ 
            {
                title: 'Area',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Period From',
                dataIndex: 'period_from',
                key: 'period_from'
            },
            {
                title: 'Period To',
                dataIndex: 'period_to',
                key: 'period_to'
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
            articleData: []
        }
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        });

        axios({
            method: 'get',
            url: base_url + "/api/get_eventArticle"
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

    readArticle = (e) => {
        console.log('key: ', e.currentTarget.dataset.key);
        const article_id = e.currentTarget.dataset.key
        this.setState({
            loading: true
        })
        axios({
            method: 'post',
            url: base_url + '/api/get_eventArticle_byId',
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
            url: base_url + "/api/del_eventArticle",
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
                <WrappedEventForm articleData={this.state.articleData} showEditForm='block' />
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
                    <MySider openkey="sub7" selectedmenu="22"/>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />

                        <Content style={{ margin: '0 16px' }}>

                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Community</Breadcrumb.Item>
                                <Breadcrumb.Item>Korea Event</Breadcrumb.Item>
                            </Breadcrumb>

                            <h1>Korea Event</h1>

                            <EventTable />

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