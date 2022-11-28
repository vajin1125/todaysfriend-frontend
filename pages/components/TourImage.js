import { Upload, Icon, Modal } from 'antd';
import axios from 'axios';
import { base_url } from './base_url'


export class TourImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            uploadedFileList: [],
            
        };
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

    // handleRemove = (file) => {
    //     Axios.post('http://localhost:8000/api/remove_uploaded_img', { file })
    //         .then(function(response) {
    //             if (response.data['type'] === 'success'){
    //                 console.log("removed!")
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log('error:', error);
    //         });
    // }

    handleUpload = () => {
        const { uploadedFileList } = this.state;
        const formData = new FormData();
        console.log("(handleUpload)TourImage component-fileList:", uploadedFileList)
        uploadedFileList.forEach((file) => {
            formData.append('uploaded_file', file);
        });
        console.log("formdata:", formData)

        axios({
            method: 'post',
            url: base_url + '/api/upload_testtour_img',
            data: formData
        })
        .then((response) => {
            console.log('response:', response.status);
            if (response.status === 200) {
                this.setState({
                    fileList: [],
                })
                console.log('upload successfully.');
            } else {
                console.log('upload failed.');
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        const { previewVisible, previewImage, fileList, uploadedFileList } = this.state;

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
            fileList,
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