import {
  AddressForm,
  AsideWrapper,
  CEPInput,
  CityInput,
  ComplementInput,
  ConfirmOrderButton,
  ContentWrapper,
  GroupInputWrapper,
  InputWrapper,
  MainWrapper,
  NeighborhoodInput,
  NumberInput,
  PaymentButton,
  PaymentFormError,
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
import { useOrderContext } from '../../contexts/order-context'
import { OrderItem } from './components/order-item'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
export enum PaymentFormValues {
  // eslint-disable-next-line no-unused-vars
  credito = 'credito',
  // eslint-disable-next-line no-unused-vars
  debito = 'debito',
  // eslint-disable-next-line no-unused-vars
  dinheiro = 'dinheiro',
}

const shippingPaymentValidationSchema = z.object({
  cep: z
    .string()
    .trim()
    .nonempty('O Campo CEP é obrigatório')
    .length(8, 'Digite o CEP completo'),
  rua: z.string().trim().nonempty('O campo Rua é obrigatório'),
  numero: z.coerce.number(),
  complemento: z.string().trim(),
  bairro: z.string().trim().nonempty('O campo Bairro é obrigatório'),
  cidade: z.string().trim().nonempty('O campo Cidade é obrigatório'),
  uf: z
    .string()
    .trim()
    .nonempty('O campo UF é obrigatório')
    .length(2, 'Digite uma UF válida'),
  formaPagamento: z.nativeEnum(PaymentFormValues, {
    errorMap: (issue, ctx) => {
      return { message: 'Selecione a forma de pagamento' }
    },
  }),
})

type ShippingPaymentFormType = z.infer<typeof shippingPaymentValidationSchema>

export const Shipping = () => {
  const { order, addShippingPaymentData } = useOrderContext()
  const navigate = useNavigate()

  const form = useForm<ShippingPaymentFormType>({
    resolver: zodResolver(shippingPaymentValidationSchema),
    shouldFocusError: false,
  })

  const { register, handleSubmit, formState } = form

  const { errors } = formState

  function onSubmit(data: ShippingPaymentFormType) {
    addShippingPaymentData(data)
    navigate('/finished-buy')
  }

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
          <AddressForm
            id="address-payment-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputWrapper hasError={!!errors.cep}>
              <CEPInput
                placeholder="CEP"
                maxLength={8}
                {...register('cep')}
                // exemplo para o caso de sobrescrever o onChange, como por exemplo para a adição de uma mascara manual
                onChange={(e) => {
                  register('cep').onChange(e)
                }}
              />
              {errors.cep && <span>{errors.cep.message}</span>}
            </InputWrapper>

            <InputWrapper hasError={!!errors.rua}>
              <StreeetInput placeholder="Rua" {...register('rua')} />
              {errors.rua && <span>{errors.rua.message}</span>}
            </InputWrapper>

            <GroupInputWrapper>
              <InputWrapper hasError={!!errors.numero}>
                <NumberInput placeholder="Número" {...register('numero')} />
                {errors.numero && <span>{errors.numero.message}</span>}
              </InputWrapper>

              <InputWrapper hasError={!!errors.complemento} useMaxWidth>
                <ComplementInput
                  placeholder="Complemento"
                  {...register('complemento')}
                />
                {errors.complemento && (
                  <span>{errors.complemento.message}</span>
                )}
              </InputWrapper>
            </GroupInputWrapper>

            <GroupInputWrapper>
              <InputWrapper hasError={!!errors.bairro}>
                <NeighborhoodInput
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                {errors.bairro && <span>{errors.bairro.message}</span>}
              </InputWrapper>

              <InputWrapper hasError={!!errors.cidade} useMaxWidth>
                <CityInput placeholder="Cidade" {...register('cidade')} />
                {errors.cidade && <span>{errors.cidade.message}</span>}
              </InputWrapper>

              <InputWrapper hasError={!!errors.uf}>
                <StateInput
                  placeholder="UF"
                  maxLength={2}
                  {...register('uf')}
                />
                {errors.uf && <span>{errors.uf.message}</span>}
              </InputWrapper>
            </GroupInputWrapper>
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
            <PaymentButton htmlFor="credit-card">
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
              <input
                type="radio"
                id="credit-card"
                value={PaymentFormValues.credito}
                form="address-payment-form"
                {...register('formaPagamento')}
              />
            </PaymentButton>
            <PaymentButton htmlFor="debit-card">
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
              <input
                form="address-payment-form"
                type="radio"
                id="debit-card"
                value={PaymentFormValues.debito}
                {...register('formaPagamento')}
              />
            </PaymentButton>
            <PaymentButton htmlFor="cash">
              <Money size={16} />
              <span>DINHEIRO</span>
              <input
                form="address-payment-form"
                type="radio"
                id="cash"
                value={PaymentFormValues.dinheiro}
                {...register('formaPagamento')}
              />
            </PaymentButton>
          </PaymentWrapper>
          {errors.formaPagamento && (
            <PaymentFormError>
              Selecione uma forma de pagamento
            </PaymentFormError>
          )}
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
          <ConfirmOrderButton type="submit" form="address-payment-form">
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </ContentWrapper>
      </AsideWrapper>
    </ShippingWrapper>
  )
}
