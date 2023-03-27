import React from "react"

function Buttons({ upvotes, downvotes, onSetUpvote, onSetDownVote, commentBtn, onSetCommentBtn, commentDiv, onSetCommentDiv, comments }) {
    
    function handleUpvote() {
        onSetUpvote(()=> upvotes + 1)
    
    }
    function handleDownvote() {
        onSetDownVote(()=> downvotes + 1)
    }
    function handleCommentBtn() {
        commentBtn === "Hide Comments" ? onSetCommentBtn("Show Comments") : onSetCommentBtn("Hide Comments")
        commentBtn === "Hide Comments" ? onSetCommentDiv(null) : onSetCommentDiv(comments)
    }
    return(
        <div>
            <button id="upvote" onClick={handleUpvote}>{upvotes} 👍</button>
            <button id="downvote" onClick={handleDownvote}>{downvotes} 👎</button>
            <button id="comment-btn" onClick={handleCommentBtn}>{commentBtn}</button>
        </div>
    )
}

export default Buttons