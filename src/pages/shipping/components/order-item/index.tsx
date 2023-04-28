import { Trash } from 'phosphor-react'
import { CoffeeImage } from '../../../../components/coffee-image'
import {
  CoffeeOrderProps,
  useOrderContext,
} from '../../../../contexts/order-context'
import { NameAndQuantityWrapper, RemoveButton, Wrapper } from './styles'
import { Quantity } from '../../../../components/quantity'
import { formatterMoney } from '../../../../utils/formatter'

export const OrderItem = (orderItem: CoffeeOrderProps) => {
  const { addCoffeeToOrder } = useOrderContext()

  function handleAddCoffee() {
    const newOrderItem: CoffeeOrderProps = {
      ...orderItem,
      quantity: orderItem.quantity + 1,
    }
    addCoffeeToOrder(newOrderItem)
  }

  function handleRemoveCoffee() {
    const newOrderItem: CoffeeOrderProps = {
      ...orderItem,
      quantity: orderItem.quantity - 1,
    }
    addCoffeeToOrder(newOrderItem)
  }

  return (
    <Wrapper key={orderItem.coffee.name}>
      <div>
        <CoffeeImage coffee={orderItem.coffee.image} />
        <NameAndQuantityWrapper>
          <span>{orderItem.coffee.name}</span>
          <div>
            <Quantity
              minimalValue={1}
              quantity={orderItem.quantity}
              handleAddCoffee={handleAddCoffee}
              handleRemoveCoffee={handleRemoveCoffee}
            />
            <RemoveButton>
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </NameAndQuantityWrapper>
      </div>
      <strong>
        {formatterMoney(
          Number((orderItem.quantity * orderItem.coffee.value).toFixed(2)),
        )}
      </strong>
    </Wrapper>
  )
}
