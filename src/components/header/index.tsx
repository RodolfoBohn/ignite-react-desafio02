import logo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  Cart,
  CartQuantity,
  HeaderBase,
  Location,
  LocationCartWrapper,
} from './styles'
import { Link } from 'react-router-dom'
import { useOrderContext } from '../../contexts/order-context'

export const Header = () => {
  const { order } = useOrderContext()

  const quantityOfCoffees = order.length

  return (
    <HeaderBase>
      <Link to="/">
        <img src={logo} alt="Logotipo Coffee Delivery" />
      </Link>
      <LocationCartWrapper>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart to="/shipping">
          <ShoppingCart size={22} weight="fill" />
          {quantityOfCoffees > 0 && (
            <CartQuantity>{quantityOfCoffees}</CartQuantity>
          )}
        </Cart>
      </LocationCartWrapper>
    </HeaderBase>
  )
}
