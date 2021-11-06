import React from "react";
import axios from "axios";
import Post from "./Post";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="card mt-3 mx-auto w-50" style={{width: '300px', height: '500px'}}>
        <div className="card-body overflow-scroll">
          {posts.map((post) => {
            return (
              <>
                <Post post={post} />
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
