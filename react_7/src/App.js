import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import { CartListProvider } from './context/cart-list'
import Cart from './components/Cart/Cart'



function App() {



  const [cartStatus, setCartStatus] = useState(false)



  const toggleCartStatus = () => {

    setCartStatus(previousStatus => !previousStatus)

  }


  return (

<CartListProvider>



 <Header cartStatusHandler={ toggleCartStatus } />

 <Meals />

 { cartStatus && (
 <Cart closeHandler={ toggleCartStatus } />
 ) }



</CartListProvider>

  )



}

export default App
