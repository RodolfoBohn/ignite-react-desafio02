import { Trash } from 'phosphor-react'
import { CoffeeImage } from '../../../../components/coffee-image'
import { CoffeeOrderProps } from '../../../../contexts/order-context'
import { NameAndQuantityWrapper, Wrapper } from './styles'

export const OrderItem = (orderItem: CoffeeOrderProps) => {
  return (
    <Wrapper key={orderItem.coffee.name}>
      <div>
        <CoffeeImage coffee={orderItem.coffee.image} />
        <NameAndQuantityWrapper>
          <span>{orderItem.coffee.name}</span>
          <div>
            <input type="number" value={orderItem.quantity} />
            <button>
              <Trash size={16} />
              <span>REMOVER</span>
            </button>
          </div>
        </NameAndQuantityWrapper>
      </div>
      <strong>{orderItem.quantity * orderItem.coffee.value}</strong>
    </Wrapper>
  )
}
