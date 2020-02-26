import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";
import { Row, Avatar } from "antd";
import {
  NameSpan,
  HrTag,
  ListDiv,
  ProfileCol,
  HeadPara,
  DivScroll
} from "./landingStyles";
import history from "../../history";

class Landing extends React.Component {
  state = {
    id: ""
  };
  componentDidMount() {
    if (0 === this.props.users.length) {
      this.props.fetchUser();
    }
  }

  findIndex1 = id => {
    localStorage.setItem("Id", id);
    console.log("local storage id", localStorage);
    history.push("/homePage");
  };

  renderList = () => {
    let users = this.props.users;
    return users.map(user => {
      return user.map(user => {
        return (
          <div key={user.id}>
            <ListDiv
              onClick={() =>
                this.findIndex1(user.id, this.setState({ id: user.id }))
              }
            >
              <Avatar src={user.profilepicture} />
              <NameSpan>{user.name}</NameSpan>
            </ListDiv>
            <HrTag />
          </div>
        );
      });
    });
  };

  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fillOpacity="1"
            d="M0,224L24,229.3C48,235,96,245,144,234.7C192,224,240,192,288,186.7C336,181,384,203,432,229.3C480,256,528,288,576,282.7C624,277,672,235,720,202.7C768,171,816,149,864,160C912,171,960,213,1008,240C1056,267,1104,277,1152,282.7C1200,288,1248,288,1296,256C1344,224,1392,160,1416,128L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
        <Row>
          <ProfileCol>
            <HeadPara>Select an account</HeadPara>
            <div>
              <DivScroll id="scroll-bar">{this.renderList()}</DivScroll>
            </div>
          </ProfileCol>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
