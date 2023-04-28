import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { CoffeeProps } from '../..'
import { useOrderContext } from '../../../../contexts/order-context'
import { IconWrapper, QuantityForm, QuantityWrapper } from './styles'

interface CoffeeFormProps {
  coffee: CoffeeProps
}

export const CoffeeQuantity = ({ coffee }: CoffeeFormProps) => {
  const [quantity, setQuantity] = useState(0)
  const { addCoffeeToOrder } = useOrderContext()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addCoffeeToOrder({ quantity, coffee })
  }

  function handleAddCoffee() {
    setQuantity((state) => state + 1)
  }

  function handleRemoveCoffee() {
    setQuantity((state) => state - 1)
  }

  return (
    <QuantityForm onSubmit={handleSubmit}>
      <label htmlFor="quantity">
        <span>R$ </span>
        {coffee.value.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </label>
      <QuantityWrapper>
        <IconWrapper onClick={handleRemoveCoffee} disabled={quantity <= 0}>
          <Minus size={14} />
        </IconWrapper>
        <input
          id="quantity"
          type={'number'}
          readOnly
          min={0}
          value={quantity}
        />
        <IconWrapper onClick={handleAddCoffee}>
          <Plus size={14} />
        </IconWrapper>
      </QuantityWrapper>
      <button type="submit">
        <ShoppingCart weight="fill" size={22} />
      </button>
    </QuantityForm>
  )
}
