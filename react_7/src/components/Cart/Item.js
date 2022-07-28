import classes from './Item.module.css'



const Item = dataProps => {



  const item = dataProps.item


  return (

<li className={ classes.item }>



 <div>
  <h2>{ item.title }</h2>

  <div className={ classes.summary }>
   <span className={ classes.price }>
    { `$${ item.price.toFixed(2) }` }
   </span>

   <span className={ classes.count }>
    { `x ${ item.count }` }
   </span>
  </div>
 </div>
 <div className={ classes.actions }>
  <button onClick={ dataProps.onRemove }>
   -
  </button>

  <button onClick={ dataProps.onAdd }>
   +
  </button>
 </div>



</li>

  )



}



export default Item
