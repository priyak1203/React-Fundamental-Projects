import {
  CLEAR_CART,
  DECREASE_AMOUNT,
  DISPLAY_ITEMS,
  INCREASE_AMOUNT,
  REMOVE_ITEM,
  SET_LOADING,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };

    case REMOVE_ITEM: {
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }

    case INCREASE_AMOUNT: {
      const newCart = new Map(state.cart);
      const itemId = action.payload.id;
      const item = newCart.get(itemId);
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(itemId, newItem);
      return { ...state, cart: newCart };
    }

    case DECREASE_AMOUNT: {
      const newCart = new Map(state.cart);
      const itemId = action.payload.id;
      const item = newCart.get(itemId);

      if (item.amount === 1) {
        newCart.delete(itemId);
        return { ...state, cart: newCart };
      }

      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(itemId, newItem);
      return { ...state, cart: newCart };
    }

    case SET_LOADING:
      return { ...state, loading: true };

    case DISPLAY_ITEMS: {
      return {
        ...state,
        loading: false,
        cart: new Map(action.payload.cart.map((item) => [item.id, item])),
      };
    }
  }
  throw new Error(`no matchin action type: ${action.type}`);
};

export default reducer;
