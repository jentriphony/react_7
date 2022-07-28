import classes from './Cart.module.css'

import { useContext } from 'react'
import CartList from './../../context/cart-list'
import Modal from './../UI/Modal'
import Item from './Item'



const Cart = dataProps => {



  const listContext = useContext(CartList)
  const list = listContext.list.items
  const list_ = (

<ul className={ classes.list }>
 { list.map(item => (
 <Item
  key={ item.id_ }
  item={ item }
  onAdd={ listContext.add.bind(null, item, null) }
  onRemove={ listContext.remove.bind(null, item) }
 />
 )) }
</ul>

  )


  return (

<Modal closeHandler={ dataProps.closeHandler }>



 { list_ }

 <div className={ classes.total }>
  <span>total</span>

  <span className={ classes.green }>
   { `$${listContext.list.total.toFixed(2)}` }
  </span>
 </div>

 <div className={ classes.actions }>
  <button className={ classes['button-alt'] } onClick={ dataProps.closeHandler }>
   close
  </button>

  { list.length > 0 && (
  <button className={ classes.button }>
   order
  </button>
  ) }
 </div>



</Modal>

  )



}



export default Cart
