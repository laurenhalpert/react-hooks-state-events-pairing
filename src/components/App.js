/*
App (use State upvotes, downvotes, comment div)
|-Video
|- Buttons


staters:
-upvote
-downvote
-comment button
-comment div




*/


import React, {useState} from "react";
import video from "../data/video.js";
import Buttons from "./Buttons";

function App() {
  console.log("Here's your data:", video);

  const comments = video.comments.map(comment => {
    return (
      <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
      </div>
    )
  })
  const [upvote, setUpvote] = useState(video.upvotes);
  const [downvote, setDownvote] = useState(video.downvotes)
  const [commentBtn, setCommentBtn] = useState("Hide Comments")
  const [commentDiv, setCommentDiv] = useState(comments)
 

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>Never Gonna Give You Up</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Buttons comments={comments} upvotes={upvote} onSetUpvote={setUpvote} downvotes={downvote} onSetDownVote={setDownvote} commentBtn={commentBtn} onSetCommentBtn={setCommentBtn} commentDiv={commentDiv} onSetCommentDiv={setCommentDiv}/>
      <h2>{video.comments.length} Comments</h2>
      {commentDiv}
    </div>
  );
}

export default App;
