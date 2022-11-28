import { Row, Col, Button, Form, Select, Input, Modal, Spin } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { base_url } from './components/base_url';
let Editor;
if (process.browser) {
    Editor = require('react-quill')
}
import 'react-quill/dist/quill.snow.css'

const FormItem = Form.Item;
const Option = Select.Option;

class WriteLocalArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            loading: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const writer = sessionStorage.getItem('session_username')
                const content = this.state.text
                this.setState({
                    loading: true
                })
                axios.post( base_url + '/api/save_local_article', {values, writer, content})
                .then(function (response) {
                    console.log('response:', response);
                    if (response.data['type'] === 'success') {
                        Router.push('/community')
                    } else {
                        this.setState({
                            loading: false
                        })
                        Modal.error({
                            title: 'Your post has been failed!',
                            content: 'Please try again !',
                        });
                    }
                })
                .catch(function (error) {
                    console.log('error:', error);
                });
            }
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

    onChangeEditor = (value) => {
        console.log("Editor", value)
        this.setState({ text: value })
    }

    onChangeCategory = (value) => {
        console.log("Category:", value)
    }

    onChangeArea = (e) => {
        console.log("Area:", e.target.value)
    }

    onChangeTitle = (e) => {
        console.log("Area:", e.target.value)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row type="flex" justify="start">
                        <Col span={5}>
                            <FormItem
                                label="Category"
                            >
                                {getFieldDecorator('category', {
                                    rules:[{
                                        required: true, message: 'Please select category!'
                                    }]
                                })(
                                    <Select onChange={this.onChangeCategory}>
                                        <Option value="accomodation">accomodation</Option>
                                        <Option value="food">food</Option>
                                        <Option value="transprotation">transprotation</Option>
                                        <Option value="festival">festival</Option>
                                        <Option value="life">life</Option>
                                        <Option value="culture">culture</Option>
                                        <Option value="history">history</Option>
                                        <Option value="activity">activity</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={5}>
                            <FormItem
                                label="Area"
                            >
                                {getFieldDecorator('area', {
                                    rules:[{
                                        required: true, message: 'Please input area!'
                                    }]
                                })(
                                    <Input onChange={this.onChangeArea}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={15}>
                            <FormItem
                                label="Title"
                            >
                                {getFieldDecorator('title', {
                                    rules:[{
                                        required: true, message: 'Please input area!'
                                    }]
                                })(
                                    <Input onChange={this.onChangeTitle} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={24}>
                            <FormItem
                                label="Contents"
                            >
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
                            </FormItem>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={4}>
                            <Spin spinning={this.state.loading}>
                                <Button type="primary" htmlType="submit" >POST</Button>     
                            </Spin>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
const WrappedWriteLocalArticleForm = Form.create()(WriteLocalArticleForm);

export default class extends React.Component {
    render() {
        return (
            <div>
                <Header selected="writearticle"/>

                <Row type="flex" justify="center">
                    <Col span={14}>
                        <h2>Local Community</h2>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={14}>
                        <div style={{border:"1px solid #0498c7",borderRadius:20,padding:"50px 50px"}}>
                            <WrappedWriteLocalArticleForm />
                        </div>
                    </Col>
                </Row>

                <Footer selected="writearticle"/>
            </div>
        )
    }
}