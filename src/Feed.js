import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./fire";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);
  const posts1 = [
    {
      text: "Hello",
      displayName: "Display Name",
      username: "UserName",
      verified: true,

      avatar:
        "https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png",
      image:
        "https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png"
    }
  ];
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts1.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
