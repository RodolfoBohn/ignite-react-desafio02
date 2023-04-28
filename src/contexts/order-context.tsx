import { createContext, ReactNode, useContext, useState } from 'react'
import { CoffeeProps } from '../pages/home'
import { PaymentFormValues } from '../pages/shipping'

export interface CoffeeOrderProps {
  coffee: CoffeeProps
  quantity: number
}

interface ShippingPaymentProps {
  cep: string
  rua: string
  numero?: number
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  formaPagamento: PaymentFormValues
}

interface OrderContextProps {
  order: CoffeeOrderProps[]
  shippingPayment: ShippingPaymentProps | null
  addCoffeeToOrder: (coffee: CoffeeOrderProps) => void
  addShippingPaymentData: (addShippingPaymentData: ShippingPaymentProps) => void
}

const OrderContext = createContext({} as OrderContextProps)

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [order, setOrder] = useState<CoffeeOrderProps[]>([])
  const [shippingPayment, setShippingPayment] =
    useState<ShippingPaymentProps | null>(null)

  function newOrderCoffeeAlreadyOnOrderList(coffeeName: string): boolean {
    return order.some((orderItem) => orderItem.coffee.name === coffeeName)
  }

  function addCoffeeToOrder(newOrder: CoffeeOrderProps) {
    if (newOrderCoffeeAlreadyOnOrderList(newOrder.coffee.name)) {
      setOrder((state) => {
        return state.map((orderItem) => {
          if (orderItem.coffee.name === newOrder.coffee.name) {
            return newOrder
          }
          return orderItem
        })
      })
      return
    }

    setOrder((state) => [...state, newOrder])
  }

  function addShippingPaymentData(shippingPaymentData: ShippingPaymentProps) {
    setShippingPayment(shippingPaymentData)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        shippingPayment,
        addCoffeeToOrder,
        addShippingPaymentData,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => useContext(OrderContext)
