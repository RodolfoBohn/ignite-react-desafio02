import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityWrapper } from './styles'

interface Props {
  quantity: number
  minimalValue?: number
  handleRemoveCoffee: () => void
  handleAddCoffee: () => void
}

export const Quantity = ({
  quantity,
  minimalValue = 0,
  handleAddCoffee,
  handleRemoveCoffee,
}: Props) => {
  return (
    <QuantityWrapper>
      <IconWrapper
        type="button"
        onClick={handleRemoveCoffee}
        disabled={quantity <= minimalValue}
      >
        <Minus size={14} />
      </IconWrapper>
      <input
        id="quantity"
        type={'number'}
        readOnly
        min={minimalValue}
        value={quantity}
      />
      <IconWrapper type="button" onClick={handleAddCoffee}>
        <Plus size={14} />
      </IconWrapper>
    </QuantityWrapper>
  )
}
