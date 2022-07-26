import classes from './CartButton.module.css'

import { useContext } from 'react'
import CartList from './../../context/cart-list'



const CartButton = dataProps => {



  const cartListContext = useContext(CartList)


  return (

<button className={ classes.button } onClick={ dataProps.statusHandler }>
 <span className={ classes.icon }></span>

 <span>cart</span>

 <span className={ classes.badge }>{ cartListContext.list.length }</span>
</button>

  )


}



export default CartButton
