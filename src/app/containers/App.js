import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as GameActions from '../actions/index';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

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
    const {world, status, actions} = this.props;
    return (
      <div className="HolyGrail">
        <Header/>
        <MainSection world={world} status={status} actions={actions}/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  world: PropTypes.array.isRequired,
  status: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    world: state.world,
    status: state.status
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
