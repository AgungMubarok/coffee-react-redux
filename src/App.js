import React from 'react';
import { connect } from 'react-redux';

import { 
  buyOneCoffeeMocha,
  buyOneCappucino,
  buyOneChocolate,
  buyOneTea,
  resetProducts
} from './actions/buyProductAction.js';
import {
  addOneCoffeeMocha,
  addOneCappucino,
  addOneChocolate,
  addOneTea,
  resetSaldo
} from './actions/saldoAction.js';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <h1>TOKO KOPI IMPACT</h1>
      <div className="product">
        <div onClick={props.resetOrDelete}>DELETE</div>
        <div>Saldo: {props.data.saldo.saldo}</div>{console.log(props)}
      </div>
      <div className="wrapperIngredients">
        Products
        <div className="ingredients">
          <div onClick={props.buyOneCoffeeMocha}>Coffe Mocha ({props.data.products.coffeeMocha.stock}) Rp.{props.data.products.coffeeMocha.price}</div>
          <div onClick={props.buyCappucino}>Cappucino ({props.data.products.cappucino.stock}) Rp {props.data.products.cappucino.price}</div>
          <div onClick={props.buyChocolate}>Chocholate ({props.data.products.chocolate.stock}) Rp {props.data.products.chocolate.price}</div>
          <div onClick={props.buyTea}>Tea ({props.data.products.tea.stock}) Rp {props.data.products.tea.price}</div>
        </div>
      </div>
    </div>
  );
}

// Menggunakan state data yang di ada redux untuk digunakan ke komponen ini sebagai props
const mapStateToProps = (state) => {
  return {
    data: state
  }
}

// Menggunakan action yang di ada redux untuk digunakan ke komponen ini sebagai props
const mapDispatchToProps = (dispatch) => {
  return {
    buyOneCoffeeMocha: () => {dispatch(buyOneCoffeeMocha); dispatch(addOneCoffeeMocha)},
    buyCappucino: () => {dispatch(buyOneCappucino); dispatch(addOneCappucino)},
    buyChocolate: () => {dispatch(buyOneChocolate); dispatch(addOneChocolate)},
    buyTea: () => {dispatch(buyOneTea); dispatch(addOneTea)},
    resetOrDelete: () => {dispatch(resetProducts); dispatch(resetSaldo)},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
