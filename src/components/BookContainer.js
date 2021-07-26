import React from 'react';
import { connect } from 'react-redux';
import { buyBook } from '../redux';

const BookContainer = (props) => {
  return (
    <div>
      <h2>Number of Books - {props.numOfBook}</h2>
      <button onClick={props.buyBook}>Buy One</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfBook: state.book.numOfBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: () => dispatch(buyBook())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);