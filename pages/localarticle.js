import axios from 'axios'
import { Row, Col, Form, Input, Button, Spin, Modal } from 'antd'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { base_url } from './components/base_url';
import { instagramicon, facebookicon_1, kakaotalkicon } from './components/images'
import '../static/css/travelarticle.css'

const FormItem = Form.Item;
const { TextArea } = Input;

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentData: []
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios({
                    method: 'post',
                    url: base_url + '/api/save_local_article_comment',
                    data: {
                        values,
                        articleId: this.props.articleId
                    }
                })
                .then((response) => {
                    console.log('response:', response);
                    if (response.data === 'no permission') {
                        Modal.error({
                            title: 'Comment has been failed!',
                            content: 'You have not the permission which can add the comments. Please input your username and password correctly!',
                        });
                    } else {
                        this.setState({
                            commentData: response.data
                        })
                        console.log("Chile commentData:",this.state.commentData)
                        if (this.state.commentData.length != 0) {
                            this.props.getCommentData(this.state.commentData)
                        }
                        this.props.form.resetFields();
                    }
                })
                .catch((error) => {
                    console.log('error:', error);
                    
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Row type="flex" style={{margin:"20px 0"}}>
                        <Col span={4}>
                            <FormItem>
                                {getFieldDecorator('name', {
                                    rules:[{
                                        required: true, message: 'Please input your name!'
                                    }]
                                })(
                                    <Input placeholder="Name:" />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <FormItem>
                                {getFieldDecorator('comment', {
                                    rules:[{
                                        required: true, message: 'Please input your comment!'
                                    }]
                                })(
                                    <TextArea autosize={{ minRows: 2, maxRows: 5 }} style={{width:'100%'}} placeholder="Comment:" />
                                    
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={4}>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules:[{
                                        required: true, message: 'Please input your password!'
                                    }]
                                })(
                                    <Input type="password" placeholder="Password:"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={2}>
                            <FormItem>
                                <Button
                                    type="default"
                                    htmlType="submit"
                                >
                                    OK
                                </Button>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
const WrappedCommentForm = Form.create()(CommentForm);


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            area: '',
            name: '',
            title: '',
            contents: '',
            loading: false,
            articleId: '',
            commentData: [],
            newCommentData: []
        }
    }

    componentDidMount = () => {
        const surl = window.location.href
        const spl_url = surl.split("=")
        const article_id = spl_url[1]
        console.log(article_id)
        console.log("commentData",this.state.commentData)
        this.setState({
            loading: true,
            articleId: article_id
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
                    category: response.data[0]['category'],
                    area: response.data[0]['area'],
                    name: response.data[0]['writer'],
                    title: response.data[0]['title'],
                    contents: response.data[0]['content'],
                    commentData: response.data[1],
                    loading: false
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    articleContents = () => {
        return(
            <div className="articleContents" dangerouslySetInnerHTML = {{__html: this.state.contents}} style={{width:'100%'}}></div>
        )
    }

    getHandleCommentData = (commentValue) => {
        this.setState({
            commentData: [...this.state.commentData, commentValue]
        })
    }

    render() {
        const { category, area, name, title, contents, loading, commentData } = this.state;
        console.log("Parent commentData:", commentData)
        const comment = commentData.map((comment) => {            
            return(
                commentData.length != 0 ?
                    <Row type="flex" justify="start" key={comment.id}>
                        <Col span={1}></Col>
                        <Col span={2}><p>{comment.name}</p></Col>
                        <Col span={10}><p>{comment.comment}</p></Col>
                        <Col span={3}><p>{comment.lastUpdated}</p></Col>
                    </Row>
                    : null
            )
        })
        return(
            <div>
                <Header selected="localarticle"/>

                <Row type="flex" justify="center">
                    <Col span={14}>
                        <h2>Local Community</h2>
                    </Col>
                </Row>
                <Spin spinning={loading} size="large">
                <Row type="flex" justify="center">
                    <Col span={14}>
                        <div style={{border:"1px solid #0498c7",borderRadius:20,padding:"50px 0"}}>
                            <Row type="flex" justify="center">
                                <Col span={6}>
                                    <h3>Category</h3>
                                    <p>{category}</p>
                                </Col>
                                <Col span={6}>
                                    <h3>Area</h3>
                                    <p>{area}</p>
                                </Col>
                                <Col span={6}>
                                    <h3>Name</h3>
                                    <p>{name}</p>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center">
                                <Col span={18}>
                                    <h3>Title</h3>
                                    <p>{title}</p>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center">
                                <Col span={18}>
                                    <h3>Contents</h3>
                                    {this.articleContents()}
                                </Col>
                            </Row>
                            <Row type="flex" justify="center">
                                <Col span={18}>
                                    <h3>Share</h3>
                                    <img src={facebookicon_1} style={{width:30,height:30,marginRight:20}} />
                                    <img src={instagramicon} style={{width:30,height:30,marginRight:20}} />
                                    <img src={kakaotalkicon} style={{width:30,height:30,marginRight:20}} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </Spin>
                <Row type="flex" justify="center">
                    <Col span={14}>
                        <h3>Comments</h3>
                        {comment}
                        <WrappedCommentForm articleId={this.state.articleId} getCommentData={this.getHandleCommentData}/>
                    </Col>
                </Row>

                <Footer selected="localarticle"/>
            </div>
        )
    }
}