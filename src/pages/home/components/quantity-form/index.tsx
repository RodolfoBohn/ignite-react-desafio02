import { ShoppingCart } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { CoffeeProps } from '../..'
import { useOrderContext } from '../../../../contexts/order-context'
import { QuantityForm } from './styles'
import { Quantity } from '../../../../components/quantity'

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
      <Quantity
        quantity={quantity}
        handleAddCoffee={handleAddCoffee}
        handleRemoveCoffee={handleRemoveCoffee}
      />
      <button type="submit">
        <ShoppingCart weight="fill" size={22} />
      </button>
    </QuantityForm>
  )
}
