import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { ParagraphElement } from "./homePageStyles";
import Profile from "../homepage/profile";
import Gallery from "../homepage/gallery";
import ToDo from "../homepage/todo";
import Posts from "../homepage/posts";

class HomePage extends Component {
  state = {
    names: [
      { id: 1, name: "Profile" },
      { id: 2, name: "Posts" },
      { id: 3, name: "Gallery" },
      { id: 4, name: "ToDo" }
    ],
    currentName: ""
  };

  handlePost = name => {
    console.log(name);
    this.setState({
      currentName: name
    });
  };

  renderList = () => {
    return this.state.names.map(list => {
      return (
        <div key={list.id}>
          <ParagraphElement onClick={name => this.handlePost(list.name)}>
            {list.name}
          </ParagraphElement>
          <hr />
        </div>
      );
    });
  };

  renderDetails = () => {
    let { currentName } = this.state;
    if (currentName === "Posts") {
      return (
        <div>
          <div style={{ paddingLeft: "8%" }}>
            Posts
            <hr />
          </div>
          <Posts />
        </div>
      );
    } else if (currentName === "Gallery") {
      return (
        <div>
          <div style={{ paddingLeft: "8%" }}>
            Gallery
            <hr style={{}} />
          </div>
          <Gallery />
        </div>
      );
    } else if (currentName === "ToDo") {
      return (
        <div>
          <div style={{ paddingLeft: "8%" }}>
            ToDo
            <hr />
          </div>
          <ToDo />
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ paddingLeft: "8%" }}>
            Profile
            <hr />
          </div>
          <Profile />
        </div>
      );
    }
  };

  render() {
    return (
      <div style={{ padding: "4%" }}>
        <Row>
          <Col span={4}>
            <Card
              style={{
                width: 250,
                height: 700,
                background: "#6356D9",
                borderRadius: "25px"
              }}
            >
              <div style={{ marginTop: "120%" }}>{this.renderList()}</div>
            </Card>
          </Col>
          <Col span={20}>{this.renderDetails()}</Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
