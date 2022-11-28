import { Upload, Icon, Modal } from 'antd';
import axios from 'axios';
import { base_url } from './base_url'


export class ModifyTourImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            uploadedFileList: [],
            
        };
    }

    componentDidMount = () => {
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        console.log("(handlePreview)-file:", file)
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        this.setState({ fileList })
        console.log("(handleChange)TourImage component-fileList:",{fileList})
        this.props.getUploadFileList(fileList)
    }

    handleUpload = () => {
        const { uploadedFileList } = this.state;
        const formData = new FormData();
        console.log("(handleUpload)TourImage component-fileList:", uploadedFileList)
        uploadedFileList.forEach((file) => {
            formData.append('uploaded_file', file);
        });
        console.log("formdata:", formData)

        // axios({
        //     method: 'post',
        //     url: base_url + '/api/upload_modify_tour_img',
        //     data: {
        //         formData,
        //         ustr: this.props.uploadedFileList.pdu_ustr
        //     }
        // })
        // .then((response) => {
        //     console.log('response:', response.status);
        //     if (response.status === 200) {
        //         this.setState({
        //             fileList: [],
        //         })
        //         console.log('upload successfully.');
        //     } else {
        //         console.log('upload failed.');
        //     }
        // })
        // .catch((error) => {
        //     console.log(error)
        // });
    }

    makeFileList = () => {
        let uploadedImg = []
        if (this.props.uploadedFileList.length != 0) {
            for (let i=0; i<this.props.uploadedFileList.length; i++) {
                let uid = i
                let name = this.props.uploadedFileList[i].pdu_img_name
                let status = 'done'
                let url = base_url + '/' + this.props.uploadedFileList[i].pdu_img_url + '/' + name
                let obj = new Object();
                obj.uid = uid
                obj.name = name
                obj.status = status
                obj.url = url
                console.log(obj)
                uploadedImg.push(obj)
            }
            console.log("make:", uploadedImg)
            return uploadedImg
        } 
    }
        

    render() {
        const { previewVisible, previewImage, fileList, uploadedFileList } = this.state;
        console.log("productImage:", this.props.uploadedFileList)
        console.log("make:", fileList)
        const props = {
            onRemove: (file) => {
                this.setState((state) => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                    fileList: newFileList,
                    };
                });
                this.setState((state) => {
                    const index = state.uploadedFileList.indexOf(file);
                    const newFileList = state.uploadedFileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        uploadedFileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                // this.setState(state => ({
                //     fileList: [...state.fileList, file],
                // }));
                this.setState(state => ({
                    uploadedFileList: [...state.uploadedFileList, file],
                }));
                return false;
            },
            fileList: this.makeFileList(),
            listType: "picture-card",
            onPreview: this.handlePreview,
            onChange: this.handleChange,
        };

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div className="clearfix">
                <Upload
                    {...props}
                    // fileList={this.makeFileList()}
                >
                    {uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="avata" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}