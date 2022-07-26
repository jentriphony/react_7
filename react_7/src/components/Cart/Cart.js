import classes from './Cart.module.css'

import { useContext } from 'react'
import CartList from './../../context/cart-list'
import Modal from './../UI/Modal'



const Cart = dataProps => {



  const listContext = useContext(CartList)
  const list = listContext.list

  const list_ = (

<ul className={ classes.list }>
 { list.map(item => (
 <li key={ item.id_ } onAdd={ listContext.add }>
  { item.title }
 </li>
 )) }
</ul>

  )


  return (

<Modal closeHandler={ dataProps.closeHandler }>



 { list_ }

 <div className={ classes.total }>
  <span>total</span>

  <span>{ list.length }</span>
 </div>

 <div className={ classes.actions }>
  <button className={ classes['button-alt'] } onClick={ dataProps.closeHandler }>
   close
  </button>

  <button className={ classes.button }>
   order
  </button>
 </div>



</Modal>

  )



}



export default Cart
