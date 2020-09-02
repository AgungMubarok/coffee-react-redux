export const initialProduct = {
  mocha: {
    stock: 20,
    price: 50000
  },
  cappucino: {
    stock: 10,
    price: 35000,
  },
  chocolate: {
    stock: 10,
    price: 25000,
  },
  tea: {
    stock: 5,
    price: 20000,
  },
}

const buyProductReducer = (state = initialProduct, action) => {
  if (action.type === 'BUY_ONE_MOCHA') {
    const newState = {
      mocha: {
        stock: state.mocha.stock - 1,
      },
      cappucino: {
        stock: state.cappucino.stock,
      },
      chocolate: {
        stock: state.chocolate.stock,
      },
      tea: {
        stock: state.tea.stock,
      },
    }
    return newState
  } else if (action.type === 'BUY_ONE_CAPPUCINO') {
    const newState = {
      mocha: {
        stock: state.mocha.stock,
      },
      cappucino: {
        stock: state.cappucino.stock - 1,
      },
      chocolate: {
        stock: state.chocolate.stock,
      },
      tea: {
        stock: state.tea.stock,
      },
    }
    return newState
  } else if (action.type === 'BUY_ONE_CHOCOLATE') {
    const newState = {
      mocha: {
        stock: state.mocha.stock,
      },
      cappucino: {
        stock: state.cappucino.stock,
      },
      chocolate: {
        stock: state.chocolate.stock - 1,
      },
      tea: {
        stock: state.tea.stock,
      },
    }
    return newState
  } else if (action.type === 'BUY_ONE_TEA') {
    const newState = {
      mocha: {
        stock: state.mocha.stock,
      },
      cappucino: {
        stock: state.cappucino.stock,
      },
      chocolate: {
        stock: state.chocolate.stock,
      },
      tea: {
        stock: state.tea.stock - 1,
      },
    }
    return newState
  }
  return state;
}

export default buyProductReducer