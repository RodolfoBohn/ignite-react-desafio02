import { createContext, ReactNode, useContext, useState } from 'react'
import { CoffeeProps } from '../pages/home'

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
  formaPagamento: string
}

interface OrderContextProps {
  order: CoffeeOrderProps[]
  shippingPayment: ShippingPaymentProps
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
  const [paymentShipping, setPaymentShipping] =
    useState<ShippingPaymentProps | null>(null)

  function addCoffeeToOrder(coffee: CoffeeOrderProps) {
    setOrder((state) => [...state, coffee])
  }

  function addShippingPaymentData(shippingPaymentData: ShippingPaymentProps) {
    setPaymentShipping(shippingPaymentData)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        paymentShipping,
        addCoffeeToOrder,
        addShippingPaymentData,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderProvider = () => useContext(OrderContext)
