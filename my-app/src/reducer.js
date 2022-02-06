export const initialState = {
    basket: [],
    user: null
};

//selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => (item.price + amount), 0);
    

//Lyssnar och lägger till i basket
    const reducer = (state, action) => {
        switch (action.type) {
          case "ADD_TO_BASKET":
            return {
              ...state,
              basket: [...state.basket, action.item],
            };

          case "REMOVE_FROM_BASKET":
              const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id //matchar någon av basket id the action id? Ger dig den första o tar där med bara rbort den första
              );
              let newBasket = [...state.basket];

              if (index >= 0){
                  newBasket.splice(index, 1);//klipper ut 1 element där x   skapar ny array utan den somklippts ut
              }else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in the
                  basket!`
                )
              }
            
              
            return {
              ...state,
              basket: newBasket
            }

          case "SET_USER":
            return{
              ...state,
              user: action.user
            }

          case "EMPTY_BASKET":
            return {
              ...state,
              basket: []
            }

          default:
            return state;

    }
};

export default reducer;