import { ShippingWrapper } from './styles'

export const Shipping = () => {
  return (
    <ShippingWrapper>
      <main>
        <h2>Complete seu pedido</h2>
        <div>
          <h3>Endereço de entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <form></form>
        </div>
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma de pagamento que
            deseja pagar
          </span>
        </div>
      </main>
      <aside>
        <h3>Cafés selecionados</h3>
      </aside>
    </ShippingWrapper>
  )
}
