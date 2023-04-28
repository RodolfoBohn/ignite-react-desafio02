import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
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
  totalValueFromOrder: number
  freight: number
  totalValueFromOrderWithFreight: number
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
  const freight = 3.5
  const [order, setOrder] = useState<CoffeeOrderProps[]>([])
  const [totalValueFromOrder, setTotalValueFromOrder] = useState(0)
  const [totalValueFromOrderWithFreight, setTotalValueFromOrderWithFreight] =
    useState(0)

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

  useEffect(() => {
    const totalValue = order.reduce((acc, orderItem) => {
      return (
        acc + Number((orderItem.coffee.value * orderItem.quantity).toFixed(2))
      )
    }, 0)
    setTotalValueFromOrder(totalValue)
    setTotalValueFromOrderWithFreight(totalValue + freight)
  }, [order])

  return (
    <OrderContext.Provider
      value={{
        order,
        shippingPayment,
        totalValueFromOrder,
        freight,
        totalValueFromOrderWithFreight,
        addCoffeeToOrder,
        addShippingPaymentData,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => useContext(OrderContext)
