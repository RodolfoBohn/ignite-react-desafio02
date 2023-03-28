import { ShoppingCart } from 'phosphor-react'
import { CoffeeProps } from '../..'

interface CoffeeFormProps {
  coffee: CoffeeProps
}

export const CoffeeForm = ({coffee}: CoffeeFormProps) => {
  return (
    <form>
      <label htmlFor="quantity">
        <span>R$ </span>
        {coffee.value.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </label>

      <input id="quantity" type={'number'} min={0} />
      <button type="submit">
        <ShoppingCart weight="fill" size={22} />
      </button>
    </form>
  )
}
