import { createContext, ReactNode, useContext, useState } from 'react'
import { CoffeeProps } from '../pages/home'

export interface CoffeeOrderProps {
  coffee: CoffeeProps
  quantity: number
}

interface OrderContextProps {
  order: CoffeeOrderProps[]
  addCoffeeToOrder: (coffee: CoffeeOrderProps) => void
}

const OrderContext = createContext({} as OrderContextProps)

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [order, setOrder] = useState<CoffeeOrderProps[]>([])

  function addCoffeeToOrder(coffee: CoffeeOrderProps) {
    setOrder((state) => [...state, coffee])
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addCoffeeToOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderProvider = () => useContext(OrderContext)
