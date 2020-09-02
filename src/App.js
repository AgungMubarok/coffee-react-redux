import React from 'react';
import { connect } from 'react-redux';

import { buyOneMocha } from './actions/buyOneMocha';
import { buyOneChocolate } from './actions/buyOneChocolate';
import { buyOneCappucino } from './actions/buyOneCappucino';
import { buyOneTea } from './actions/buyOneTea';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <h1>TOKO KOPI IMPACT</h1>
      <div className="product">
        <div>COFFEE</div>
        <div>Saldo: {props.data.wallet.wallet}</div>
      </div>
      <div className="wrapperIngredients">
        Products
        <div className="ingredients">
          <div onClick={props.buyMocha}>Coffe Mocha ({props.data.products.mocha.stock}) Rp 50000</div>
          <div onClick={props.buyCappucino}>Cappucino ({props.data.products.cappucino.stock}) Rp 35000</div>
          <div onClick={props.buyChocolate}>Chocholate ({props.data.products.chocolate.stock}) Rp 25000</div>
          <div onClick={props.buyTea}>Tea ({props.data.products.tea.stock}) Rp 20000</div>
        </div>
      </div>
    </div>
  );
}

// Menggunakan state data yang di ada redux untuk digunakan ke komponen ini sebagai props
const mapStateToProps = (state) => {
  return {
    data: state,
  }
}

// Menggunakan action yang di ada redux untuk digunakan ke komponen ini sebagai props
const mapDispatchToProps = (dispatch) => {
  return {
    buyMocha: () => dispatch(buyOneMocha),
    buyCappucino: () => dispatch(buyOneCappucino),
    buyChocolate: () => dispatch(buyOneChocolate),
    buyTea: () => dispatch(buyOneTea),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
