import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivity } from "../../../../actions";

class Comments extends Component {
  render() {
    return <div>hi from activity</div>;
  }
}

const mapStateToProps = state => ({
  activity: state.activity
});

const mapDispatchToProps = dispatch => ({
  fetchActivity: () => dispatch(fetchActivity())
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
