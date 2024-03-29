const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, { ...action.payload, qty: 1 }],
      };
    case "ADD_TO_ORDER":
      // const date = new Date()
      return {
        ...state,

        myOrder: [...state.myOrder,action.payload],
        cartItem: [],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter((p) => p.id !== action.payload.id),
      };

    case 'REMOVE-FROM-ORDER':
      return {
        ...state,
        myOrder: state.myOrder.filter((a)=>a.id !== action.payload )
      }
    case "INCRESE_QUANTITY":
      return {
        ...state,
        cartItem: state.cartItem.filter((c) =>
          c.id === action.payload.id ? action.payload.qty++ : c.qty
        ),
      };
    case "DECREASE_QUANTITY":
      const updatedCart = state.cartItem.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      return {
        ...state,
        cartItem: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItem: [],
      };

    default:
      return state;
  }
};

export default StoreReducer;
