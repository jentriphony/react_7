import classes from './Item.module.css'

import Add from './Add'



const Item = dataProps => {



  const item = dataProps.item


  return (

<li className={ classes.item }>



 <div>
  <h3>{ item.title }</h3>

  <div className={ classes.description }>
   { item.description }
  </div>
 </div>

 <div className={ classes.price }>
  { `$${ item.price.toFixed(2) }` }
 </div>

 <div>
  <Add item={ item } onAdd={ dataProps.onAdd } />
 </div>



</li>

  )



}



export default Item
