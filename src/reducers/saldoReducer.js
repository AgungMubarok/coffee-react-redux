import { initialProduct } from './buyProductReducer';

const initialWallet = {
  wallet: 0,
}

const saldoReducer = (state = initialWallet, action) => {
  if (action.type === 'BUY_ONE_MOCHA') {
    const newState = {
      wallet: state.wallet + initialProduct.mocha.price,
    }
    return newState;
  } else if (action.type === 'BUY_ONE_CAPPUCINO') {
    const newState = {
      wallet: state.wallet + initialProduct.cappucino.price
    }
    return newState;
  } else if (action.type === 'BUY_ONE_CHOCOLATE') {
    const newState = {
      wallet: state.wallet + initialProduct.chocolate.price
    }
    return newState;
  } else if (action.type === 'BUY_ONE_TEA') {
    const newState = {
      wallet: state.wallet + initialProduct.tea.price
    }
    return newState;
  }
  return state;
}

export default saldoReducer;
