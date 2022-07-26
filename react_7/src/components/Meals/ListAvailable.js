import classes from './ListAvailable.module.css'

import { useContext } from 'react'
import CartList from './../../context/cart-list'
import Card from './../UI/Card'
import Item from './Item/Item'



const list = [

  {
    id: 'item_1',
    title: 'title_1',
    description: 'description_1',
    price: 100
  },
  {
    id: 'item_2',
    title: 'title_2',
    description: 'description_2',
    price: 200
  },
  {
    id: 'item_3',
    title: 'title_3',
    description: 'description_3',
    price: 300
  },
  {
    id: 'item_4',
    title: 'title_4',
    description: 'description_4',
    price: 400
  }

]

const ListAvailable = () => {



  const cartListContext = useContext(CartList)

  const list_ = list.map(item => (

<Item
 key={ item.id }
 item={ item }
 onAdd={ cartListContext.add }
/>

  ))


  return (

<section className={ classes.list }>



 <Card>
  <ul>
   { list_ }
  </ul>
 </Card>



</section>

  )



}



export default ListAvailable
