import classes from './Header.module.css'

import { Fragment } from 'react'
import CartButton from './CartButton'



const Header = dataProps => {



  return (

<Fragment>



 <header className={ classes.header }>
  <h1>title</h1>

  <CartButton statusHandler={ dataProps.cartStatusHandler } />
 </header>

 <div className={ classes['main-image'] }>
  <img src='' alt='background' />
 </div>



</Fragment>

  )



}



export default Header
