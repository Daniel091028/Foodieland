import { useEffect } from 'react'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import InboxEmail from './component/InboxEmail/InboxEmail'
import AppRoutes from './routes'
//  shift + alt  + o

const App = () => {

  
  return (
    <div>
      <Header />
      <AppRoutes />
      <section className='container'>
        <InboxEmail />
      </section>
      <Footer />
    </div>
  )
}

export default App
