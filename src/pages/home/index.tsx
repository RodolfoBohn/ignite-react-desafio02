import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { BannerWrapper, TitleWrapper, ItemsWrapper, Item } from './styles'
import coffeeBanner from '../../assets/coffee-banner.png'

export const Home = () => {
  return (
    <>
      <BannerWrapper>
        <div>
          <TitleWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleWrapper>
          <ItemsWrapper>
            <Item color="dark_yellow">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item color="gray">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item color="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span> Entrega rápida e rastreada</span>
            </Item>
            <Item color="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemsWrapper>
        </div>
        <img src={coffeeBanner} alt="Banner image" />
      </BannerWrapper>
    </>
  )
}
