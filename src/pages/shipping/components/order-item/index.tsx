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
  const { addCoffeeToOrder, removeCoffeeFromOrder } = useOrderContext()

  function handleAddCoffeeQuantity() {
    const newOrderItem: CoffeeOrderProps = {
      ...orderItem,
      quantity: orderItem.quantity + 1,
    }
    addCoffeeToOrder(newOrderItem)
  }

  function handleRemoveCoffeeQuantity() {
    const newOrderItem: CoffeeOrderProps = {
      ...orderItem,
      quantity: orderItem.quantity - 1,
    }
    addCoffeeToOrder(newOrderItem)
  }

  function handleRemoveCoffeeFromOrder() {
    removeCoffeeFromOrder(orderItem.coffee.name)
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
              handleAddCoffee={handleAddCoffeeQuantity}
              handleRemoveCoffee={handleRemoveCoffeeQuantity}
            />
            <RemoveButton onClick={handleRemoveCoffeeFromOrder}>
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
