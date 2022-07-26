import classes from './Add.module.css'

import { useRef } from 'react'
import Input from './../../UI/Input'



const Add = dataProps => {



  const id = dataProps.item.id

  const countRef = useRef()



  const submitHandler = event => {

    event.preventDefault()

    const value = +countRef.current.value
    if(!(value >= 1 && value <= 4)) {
      alert('error')
      return
    }
    dataProps.onAdd(dataProps.item, value)

  }


  return (

<form className={ classes.add } onSubmit={ submitHandler }>



 <Input
  htmlFor={ id }
  labelInnerText={ 'amount' }
  input={ {
   type: 'number',
   id: 'amount_' + id,
   min: '1',
   max: '4',
   step: '1',
   defaultValue: '1'
  } }
  ref={ countRef }
 />

 <button type='submit'>
  + add
 </button>



</form>

  )



}



export default Add
