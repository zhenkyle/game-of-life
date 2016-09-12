import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as GameActions from '../actions/index';

class App extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.delayUpdateWorld();
  }

  componentWillReceiveProps() {
    const {actions} = this.props;
    actions.delayUpdateWorld();
  }

  render() {
    return (
      <div>
        This is App
      </div>
    );
  }
}

App.propTypes = {
  world: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    world: state.world
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
