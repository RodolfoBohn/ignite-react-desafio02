import logo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderBase, Location, LocationCartWrapper } from './styles'

export const Header = () => {
  return (
    <HeaderBase>
      <img src={logo} alt="Logotipo Coffee Delivery" />
      <LocationCartWrapper>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart to="/shipping">
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </LocationCartWrapper>
    </HeaderBase>
  )
}
