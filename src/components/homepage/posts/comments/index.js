import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../../../actions";

class Comments extends Component {
  render() {
    return <div>hi from comments</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
