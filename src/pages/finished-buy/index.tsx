import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryImage from '../../assets/delivery-banner.png'
import { useOrderContext } from '../../contexts/order-context'
import {
  FinishedBuyWrapper,
  InfoImageWrapper,
  InfoItem,
  InfoItemIconWrapper,
  InfoWrapper,
} from './styles'
import { PaymentFormValues } from '../shipping'

export const FinishedBuy = () => {
  const { shippingPayment } = useOrderContext()

  // eslint-disable-next-line no-unused-vars
  const PaymentFormText: { [key in PaymentFormValues]: string } = {
    credito: 'Cartão de crédito',
    debito: 'Cartão de débito',
    dinheiro: 'Dinheiro',
  }
  return (
    <FinishedBuyWrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <InfoImageWrapper>
        <InfoWrapper>
          <InfoItem>
            <InfoItemIconWrapper color="purple">
              <MapPin size={16} weight="fill" />
            </InfoItemIconWrapper>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {shippingPayment?.rua}, {shippingPayment?.numero}
                </span>
              </p>
              <p>
                {shippingPayment?.bairro}, {shippingPayment?.cidade},{' '}
                {shippingPayment?.uf}
              </p>
            </div>
          </InfoItem>

          <InfoItem>
            <InfoItemIconWrapper color="yellow">
              <Timer size={16} weight="fill" />
            </InfoItemIconWrapper>
            <div>
              <p>Previsão de entrega</p>
              <p>20min - 30min</p>
            </div>
          </InfoItem>

          <InfoItem>
            <InfoItemIconWrapper color="dark_yellow">
              <CurrencyDollar size={16} />
            </InfoItemIconWrapper>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                {shippingPayment &&
                  PaymentFormText[shippingPayment!.formaPagamento]}
              </p>
            </div>
          </InfoItem>
        </InfoWrapper>
        <img src={deliveryImage} alt="" />
      </InfoImageWrapper>
    </FinishedBuyWrapper>
  )
}
