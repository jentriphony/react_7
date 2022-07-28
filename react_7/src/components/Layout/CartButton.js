import classes from './CartButton.module.css'

import {
  useContext,
  useState,
  useEffect
} from 'react'
import CartList from './../../context/cart-list'



const CartButton = dataProps => {



  const cartListContext = useContext(CartList)



  const [addStatus, setAddStatus] = useState(false)



  useEffect(() => {

    setAddStatus(previousStatus => true)
    const timer = setTimeout(() => {
      setAddStatus(previousStatus => false)
    }, 512)
    return () => {
      clearTimeout(timer)
      setAddStatus(false)
    }
    

  }, [cartListContext.list.total])


  const className = classes.button + (addStatus ? ' ' + classes.bump : '')


  return (

<button className={ className } onClick={ dataProps.statusHandler }>
 <span className={ classes.icon }></span>

 <span>cart</span>

 <span className={ classes.badge }>{ cartListContext.list.items.length }</span>
</button>

  )


}



export default CartButton
