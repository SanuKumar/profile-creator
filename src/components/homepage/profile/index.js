import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../../actions";
import { Row, Col, Card, Avatar } from "antd";
import {
  DetailOList,
  DetailList,
  TitleSpan,
  DetailSpan
} from "./profileStyles";
import ReactGoogleMaps from "./components/googleMap";

class Profile extends Component {
  componentDidMount() {
    if (0 === this.props.users.length) {
      this.props.fetchUser();
    }
  }
  renderList = props => {
    let users = this.props.users;
    return users.map(user => {
      return user.map(user => {
        if (user.id === parseInt(localStorage.Id)) {
          return (
            <div key={user.id}>
              <Row type="flex" justify="center" align="top">
                <Col span={8}>
                  <Card style={{ width: 350 }}>
                    <div style={{ textAlign: "-webkit-center" }}>
                      <Avatar size={200} src={user.profilepicture} />
                      <p>{user.name}</p>
                    </div>
                    <DetailOList>
                      <DetailList>
                        <TitleSpan>Username :</TitleSpan>
                        <DetailSpan>{user.username}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>e -mail :</TitleSpan>
                        <DetailSpan>{user.email}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>Phone :</TitleSpan>
                        <DetailSpan>{user.phone}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>Website :</TitleSpan>
                        <DetailSpan>{user.website}</DetailSpan>
                      </DetailList>
                    </DetailOList>
                    <hr />
                    <DetailOList>
                      <p>Company</p>
                      <DetailList>
                        <TitleSpan>Name :</TitleSpan>
                        <DetailSpan>{user.company.name}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>catchphrase :</TitleSpan>
                        <DetailSpan>{user.company.catchPhrase}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>bs :</TitleSpan>
                        <DetailSpan>{user.company.bs}</DetailSpan>
                      </DetailList>
                    </DetailOList>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card style={{ width: 600 }}>
                    <p>Address:</p>
                    <DetailOList>
                      <DetailList>
                        <TitleSpan>Street :</TitleSpan>
                        <DetailSpan>{user.address.street}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>Suite :</TitleSpan>
                        <DetailSpan>{user.address.suite}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>City :</TitleSpan>
                        <DetailSpan>{user.address.city}</DetailSpan>
                      </DetailList>
                      <DetailList>
                        <TitleSpan>Zipcode :</TitleSpan>
                        <DetailSpan>{user.address.zipcode}</DetailSpan>
                      </DetailList>
                    </DetailOList>
                  </Card>
                  <Card style={{ width: 600 }}>
                    <ReactGoogleMaps geo={user.address.geo} />
                    <div style={{ marginTop: "-12%", float: "right" }}>
                      <p>
                        <span>Lat : </span>
                        <span style={{ padding: "8px" }}>
                          {user.address.geo.lat}
                        </span>
                        <span>Long : </span>
                        <span>{user.address.geo.lng}</span>
                      </p>
                    </div>
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
    return (
      <div>
        <div>{this.renderList()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
