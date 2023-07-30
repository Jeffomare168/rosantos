export const initialState = {
    basket: [],
    cartLoading: true, 
    user: null,
    settings: {},
    messages: [],
    chat: null,
    available: 0,
    alerts: [],
    socket: null,
    onlineUsers: [],
    message: null,
    unread: 0,
    notifications: 0,
    offers: [],
    navigations: [], 
  };
  
  export const getBasketTotal = basket =>
    basket.reduce ((amount, item) => item.price * item.quantity + amount, 0);
  
  export const getShipping = basket => {
    let shipping = [];
    basket.forEach (itm => {
      shipping.push (itm.shipping);
    });
    return Math.max.apply (null, shipping);
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      // basket context
      case 'PUSH_TO_BASKET':
        return {
          ...state,
          cartLoading: false, 
          basket: action.payload
        };
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
      case 'SET_BASKET':
        return {
          ...state,
          basket: [...action.payload],
        };
      case 'REMOVE_FROM_BASKET':
        let newBasket = [...state.basket];
  
        const index = state.basket.findIndex (
          basketItem => basketItem.id === action.id
        );
  
        if (index >= 0) {
          newBasket.splice (index, 1);
          return {...state, basket: newBasket};
        } else {
          console.warn (`Can't remove product `);
        }
  
        return {...state, basket: newBasket};
      case 'CLEAR_BASKET':
        return {...state, basket: []};
  
  
      // user context
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'REMOVE_USER':
        return {
          ...state,
          user: null,
        };
  
      // messages context
      case 'SET_MESSAGES':
        return {
          ...state,
          messages: action.payload,
        };
      case 'CLEAR_MESSAGES':
        return {
          ...state,
          messages: [],
        };
  
      // chat context
      case 'SET_CHATS':
        return {
          ...state,
          chat: action.payload,
        };
      case 'CLEAR_CHATS':
        return {
          ...state,
          chat: null,
        };
      case 'NEW_CHAT':
        return {
          ...state,
          message: action.payload,
        };
      case 'REMOVE_CHAT':
        return {
          ...state,
          message: null,
        };
  
      // online context
      case 'SET_AVAILABILITY':
        return {
          ...state,
          availability: action.payload,
        };
  
      // unread messages
      case 'SET_UNREAD':
        return {
          ...state,
          unread: action.payload,
        };
      // unread notifications 
      case 'SET_NOTIFICATIONS':
        return {
          ...state,
          notifications: action.payload,
        };
  
      case 'SET_OFFERS':
        return {
          ...state,
          offers: action.payload,
        };
  
      // socket context
      case 'SET_SOCKET':
        return {
          ...state,
          socket: action.payload,
        };
      case 'REMOVE_SOCKET':
        return {
          ...state,
          socket: null,
        };
  
      // online users context
      case 'ADD_ONLINE_USER':
        let arr = state.onlineUsers.filter (itm => itm !== action.payload);
        return {
          ...state,
          onlineUsers: [...arr, action.payload],
        };
      case 'REMOVE_ONLINE_USER':
        let itms = state.onlineUsers.filter (itm => itm !== action.payload);
        return {
          ...state,
          onlineUsers: [...itms],
        };
      case 'CLEAR_ONLINE_USER':
        return {
          ...state,
          onlineUsers: [],
        };
      
      case 'SET_ALERT':
        return {
          ...state, 
          alerts: [...state.alerts, action.payload]
        } 
      case 'CLEAR_ALERT': 
        return {
          ...state, 
          alerts: [...state.alerts.filter(itm => itm.id !== action.payload)]
        }
      case 'CLEAR_ALL_ALERTS':
        return {
          ...state, 
          alerts: []
        }
  
      // ui
      case 'SET_NAVS':
        return {
          ...state, 
          navigations: [...action.payload]
        } 
      default:
        return state;
    }
  };
  
  export default reducer;
  