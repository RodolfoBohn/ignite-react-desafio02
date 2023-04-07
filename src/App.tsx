import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { OrderContextProvider } from './contexts/order-context'

function App() {
  return (
    <BrowserRouter>
      <OrderContextProvider>
        <Router />
      </OrderContextProvider>
    </BrowserRouter>
  )
}

export default App
