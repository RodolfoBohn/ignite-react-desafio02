import { CoffeeProps } from '../..'
import { CoffeeImage } from '../../../../components/coffee-image'
import { CoffeeQuantity } from '../quantity'
import { CoffeeWrapper, Tag } from './styles'

interface Props {
  coffee: CoffeeProps
}

export const CoffeeCard = ({ coffee }: Props) => {
  return (
    <CoffeeWrapper key={coffee.name}>
      <CoffeeImage coffee={coffee.image} />
      <div>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag.toUpperCase()}</Tag>
        ))}
      </div>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <CoffeeQuantity coffee={coffee} />
    </CoffeeWrapper>
  )
}
