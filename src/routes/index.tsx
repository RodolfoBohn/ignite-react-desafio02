import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/default-layout'
import { Shipping } from '../pages/shipping'
import { Home } from '../pages/home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shipping" element={<Shipping />} />
      </Route>
    </Routes>
  )
}
