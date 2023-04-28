export function formatterMoney(value: number) {
  return value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })
}
