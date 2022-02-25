import React, {Component} from "react";
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    handleSubmitComment(comment) {
        console.log(comment);
        if (!comment) return
        if (!comment.userName) return alert('請輸入用戶名')
        if (!comment.content) return alert('請輸入內容')
        this.state.comments.push(comment);
        console.log(comment);
        this.setState({
            comments: this.state.comments
        })
    }
    render() {
        return (
        <div className="wrapper">
            <CommentInput 
                onSubmit={this.handleSubmitComment.bind(this)}/>
            <CommentList comments={this.state.comments}/>
        </div>
        )
    }
}

export default CommentApp