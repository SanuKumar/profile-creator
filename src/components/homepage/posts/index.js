import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { connect } from "react-redux";
import { fetchPosts } from "../../../actions";
import Comments from "./comments";
import Activity from "./activity";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList = () => {
    let { posts } = this.props;
    console.log("POST", this.props.posts);
    return posts.map(post => {
      return post.map(post => {
        if (post.userId === parseInt(localStorage.Id)) {
          return (
            <div key={post.id}>
              <Row type="flex" justify="center" align="top">
                <Col span={12}>
                  <Card style={{ width: 500 }}>
                    <Comments />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card style={{ width: 350 }}>
                    <Activity />
                  </Card>
                </Col>
              </Row>
            </div>
          );
        } else {
          return null;
        }
      });
    });
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.users.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
