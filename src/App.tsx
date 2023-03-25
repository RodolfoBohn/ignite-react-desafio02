import { Header } from './components/header'
import { PageWrapper } from './styles'
import { Home } from './pages/home'

function App() {
  return (
    <PageWrapper>
      <Header />
      <Home />
    </PageWrapper>
  )
}

export default App
