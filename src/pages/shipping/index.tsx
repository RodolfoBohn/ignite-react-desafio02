import {
  AddressForm,
  AsideWrapper,
  CEPInput,
  CityInput,
  ComplementInput,
  ContentWrapper,
  MainWrapper,
  NeighborhoodInput,
  NumberInput,
  PaymentWrapper,
  ShippingWrapper,
  StateInput,
  StreeetInput,
  TitleWrapper,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

export const Shipping = () => {
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
        <ContentWrapper>Opa</ContentWrapper>
      </AsideWrapper>
    </ShippingWrapper>
  )
}
