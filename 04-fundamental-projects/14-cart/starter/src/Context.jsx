import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEM } from "./actions";
import cartItems from "./data";
import { getTotals } from "./Utils";

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map()
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { totalAmount, totalCost } = getTotals(state.cart)
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } })
  }

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }
  const fetchData = async () => {
    dispatch({ type: LOADING })
    const response = await fetch('https://www.course-api.com/react-useReducer-cart-project')
    const cart = await response.json()
    dispatch({ type: DISPLAY_ITEM, payload: { cart } })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (<AppContext.Provider value={{ ...state, clearCart, removeItem, increase, decrease, totalAmount, totalCost }}>
    {children}
  </AppContext.Provider>)
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}