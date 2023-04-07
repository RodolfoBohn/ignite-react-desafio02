import {
  AddressForm,
  AsideWrapper,
  CEPInput,
  CityInput,
  ComplementInput,
  ConfirmOrderButton,
  ContentWrapper,
  MainWrapper,
  NeighborhoodInput,
  NumberInput,
  PaymentWrapper,
  ShippingWrapper,
  StateInput,
  StreeetInput,
  SubtotalContentWrapper,
  TitleWrapper,
  TotalContentWrapper,
  TotalWrapper,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useOrderProvider } from '../../contexts/order-context'
import { OrderItem } from './components/order-item'

export const Shipping = () => {
  const { order } = useOrderProvider()
  return (
    <ShippingWrapper>
      <MainWrapper>
        <h2>Complete seu pedido</h2>
        <ContentWrapper>
          <TitleWrapper iconColor="yellow">
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </TitleWrapper>
          <AddressForm>
            <CEPInput placeholder="CEP" />
            <StreeetInput placeholder="Rua" />
            <div>
              <NumberInput placeholder="Número" />
              <ComplementInput placeholder="Complemento" />
            </div>
            <div>
              <NeighborhoodInput placeholder="Bairro" />
              <CityInput placeholder="Cidade" />
              <StateInput placeholder="UF" />
            </div>
          </AddressForm>
        </ContentWrapper>
        <ContentWrapper>
          <TitleWrapper iconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma de pagamento que
                deseja pagar
              </span>
            </div>
          </TitleWrapper>
          <PaymentWrapper>
            <button>
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </button>
            <button>
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </button>
            <button>
              <Money size={16} />
              <span>DINHEIRO</span>
            </button>
          </PaymentWrapper>
        </ContentWrapper>
      </MainWrapper>

      <AsideWrapper>
        <h2>Cafés selecionados</h2>
        <ContentWrapper>
          {order.map((orderItem) => (
            <OrderItem
              key={orderItem.coffee.name}
              coffee={orderItem.coffee}
              quantity={orderItem.quantity}
            />
          ))}
          <TotalWrapper>
            <SubtotalContentWrapper>
              <span>Total de itens</span>
              <span>R$51,99</span>
            </SubtotalContentWrapper>
            <SubtotalContentWrapper>
              <span>Entrega</span>
              <span>R$51,99</span>
            </SubtotalContentWrapper>
            <TotalContentWrapper>
              <span>Total</span>
              <span>R$51,99</span>
            </TotalContentWrapper>
          </TotalWrapper>
          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </ContentWrapper>
      </AsideWrapper>
    </ShippingWrapper>
  )
}
