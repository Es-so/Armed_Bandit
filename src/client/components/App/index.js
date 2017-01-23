import React from 'react';
import styled from 'styled-components';
import allActions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AllFruit from '../armedBandit/armedBandit';

const Wrapper = styled.section`
  padding: 4em;
`;

const App = ({ fruits, actions, finalObj }) => {
  console.log(fruits);
  return (
  <Wrapper>
    <AllFruit fruits={fruits} />
  </Wrapper>
)};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(allActions, dispatch),
});

App.propTypes = {
  fruits: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
