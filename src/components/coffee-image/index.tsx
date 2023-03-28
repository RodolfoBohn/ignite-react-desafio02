import CoffeeImages from '../../assets/coffees-images'

export type CoffeeImageType = keyof typeof CoffeeImages

interface CoffeeImageProps {
  coffee: CoffeeImageType
}
export const CoffeeImage = ({ coffee }: CoffeeImageProps) => {
  return <img src={CoffeeImages[coffee]} alt="" />
}
