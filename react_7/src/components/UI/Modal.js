import classes from './Modal.module.css'

import { createPortal } from 'react-dom'
import { Fragment } from 'react'


const Backdrop = dataProps => {



  return (

<div className={ classes.backdrop } onClick={ dataProps.onClick } />

  )



}

const OverlayModal = dataProps => {



  return (

<div className={ classes.modal }>



 <div className={ classes.content }>
  { dataProps.children }
 </div>



</div>

  )



}

const destination = document.getElementById('overlays')

const Modal = dataProps => {



  return (

<Fragment>


 { createPortal(
 <Backdrop onClick={ dataProps.closeHandler } />,
 destination) }

 { createPortal(
 <OverlayModal>
  { dataProps.children }
 </OverlayModal>,
 destination) }



</Fragment>

  )



}



export default Modal
