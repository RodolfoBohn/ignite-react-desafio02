import logo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderBase, Location, LocationCartWrapper } from './styles'
import { Link } from 'react-router-dom'

export const Header = () => {
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
        </Cart>
      </LocationCartWrapper>
    </HeaderBase>
  )
}
