import { ShoppingCart } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { CoffeeProps } from '../..'
import { useOrderContext } from '../../../../contexts/order-context'

interface CoffeeFormProps {
  coffee: CoffeeProps
}

export const CoffeeForm = ({ coffee }: CoffeeFormProps) => {
  const [quantity, setQuantity] = useState(0)
  const { addCoffeeToOrder } = useOrderContext()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addCoffeeToOrder({ quantity, coffee })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="quantity">
        <span>R$ </span>
        {coffee.value.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </label>

      <input
        id="quantity"
        type={'number'}
        min={0}
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      />
      <button type="submit">
        <ShoppingCart weight="fill" size={22} />
      </button>
    </form>
  )
}
