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

  function addCoffeeToOrder(coffee: CoffeeOrderProps) {
    setOrder((state) => [...state, coffee])
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
