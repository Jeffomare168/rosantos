export const initialState = {
  order: []
};
  
  
  const reducer = (state, action) => {
    switch (action.type) {

      case 'ADD_TO_ORDER':
        return {
          ...state,
          order: [...state.order, action.payload],
      };
      case 'REMOVE FROM_ORDER':
        return {
          ...state,
          order: [...state.order.filter(itm => itm.id !== action.payload)],
      };
      case 'CLEAR_ORDER':
        return {
          ...state, 
          order: []
        }


      default:
        return state;
    }
  };
  
  export default reducer;
  