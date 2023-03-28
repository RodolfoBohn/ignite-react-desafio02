import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  BannerWrapper,
  TitleWrapper,
  ItemsWrapper,
  Item,
  CoffeesListWrapper,
  CoffeeCard,
  Tag,
} from './styles'
import coffeeBanner from '../../assets/coffee-banner.png'
import { CoffeeForm } from './components/form'
import { CoffeeImage, CoffeeImageType } from '../../components/coffee-image'

export interface CoffeeProps {
  name: string
  description: string
  tags: string[]
  value: number
  image: CoffeeImageType
}

const EXPRESSO_TRADICIONAL: CoffeeProps = {
  name: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  tags: ['tradicional'],
  value: 9.9,
  image: 'expressoTradicional',
}

const EXPRESSO_AMERCANO: CoffeeProps = {
  name: 'Expresso Americano',
  description: 'Expresso diluído, menos intenso que o tradicional',
  tags: ['tradicional'],
  value: 9.9,
  image: 'expressoAmericano',
}
const EXPRESSO_CREMOSO: CoffeeProps = {
  name: 'Expresso Cremoso',
  description: 'Café expresso tradicional com espuma cremosa',
  tags: ['tradicional'],
  value: 9.9,
  image: 'expressoCremoso',
}
const EXPRESSO_GELADO: CoffeeProps = {
  name: 'Expresso Gelado',
  description: 'Bebida preparada com café expresso e cubos de gelo',
  tags: ['tradicional', 'gelado'],
  value: 9.9,
  image: 'expressoGelado',
}
const CAFE_COM_LEITE: CoffeeProps = {
  name: 'Café com Leite',
  description: 'Meio a meio de expresso tradicional com leite vaporizado',
  tags: ['tradicional', 'com leite'],
  value: 9.9,
  image: 'cafeComLeite',
}

const LATTE: CoffeeProps = {
  name: 'Latte',
  description:
    'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  tags: ['tradicional', 'com leite'],
  value: 9.9,
  image: 'latte',
}

const CAPUCCINO: CoffeeProps = {
  name: 'Capuccino',
  description:
    'Bebida com canela feita de doses iguais de café, leite e espuma',
  tags: ['tradicional', 'com leite'],
  value: 9.9,
  image: 'capuccino',
}
const MACCHIATO: CoffeeProps = {
  name: 'Macchiato',
  description: 'Café expresso misturado com um pouco de leite quente e espuma',
  tags: ['tradicional', 'com leite'],
  value: 9.9,
  image: 'macchiato',
}
const MOCACCINO: CoffeeProps = {
  name: 'Mocaccino',
  description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  tags: ['tradicional', 'com leite'],
  value: 9.9,
  image: 'mocaccino',
}
const CHOCOLATE_QUENTE: CoffeeProps = {
  name: 'Chocolate Quente',
  description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  tags: ['tradicional', 'com leite'],
  value: 9.9,
  image: 'chocolateQuente',
}
const CUBANO: CoffeeProps = {
  name: 'cubano',
  description:
    'Drink gelado de café expresso com rum, creme de leite e hortelã',
  tags: ['especial', 'alcoólico', 'gelado'],
  value: 9.9,
  image: 'cubano',
}
const HAVAIANO: CoffeeProps = {
  name: 'Havaiano',
  description: 'Bebida adocicada preparada com café e leite de coco',
  tags: ['especial'],
  value: 9.9,
  image: 'havaiano',
}
const ARABE: CoffeeProps = {
  name: 'Árabe',
  description: 'Bebida preparada com grãos de café árabe e especiarias',
  tags: ['especial'],
  value: 9.9,
  image: 'arabe',
}

const IRLANDES: CoffeeProps = {
  name: 'Irlandes',
  description: 'Bebida preparada com grãos de café árabe e especiarias',
  tags: ['especial', 'alcoólico'],
  value: 9.9,
  image: 'irlandes',
}

export const coffeesList: CoffeeProps[] = [
  EXPRESSO_TRADICIONAL,
  EXPRESSO_AMERCANO,
  EXPRESSO_CREMOSO,
  EXPRESSO_GELADO,
  CAFE_COM_LEITE,
  LATTE,
  CAPUCCINO,
  MACCHIATO,
  MOCACCINO,
  CHOCOLATE_QUENTE,
  CUBANO,
  HAVAIANO,
  ARABE,
  IRLANDES,
]

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
      <CoffeesListWrapper>
        <h2>Nossos cafés</h2>
        <div>
          {coffeesList.map((coffee) => (
            <CoffeeCard key={coffee.name}>
              <CoffeeImage coffee={coffee.image} />
              <div>
                {coffee.tags.map((tag) => (
                  <Tag key={tag}>{tag.toUpperCase()}</Tag>
                ))}
              </div>
              <h3>{coffee.name}</h3>
              <p>{coffee.description}</p>
              <CoffeeForm coffee={coffee} />
            </CoffeeCard>
          ))}
        </div>
      </CoffeesListWrapper>
    </>
  )
}
