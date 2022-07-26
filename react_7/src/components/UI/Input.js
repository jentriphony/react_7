import classes from './Input.module.css'

import {
  forwardRef,
  useState,
  useImperativeHandle
} from 'react'



const Input = forwardRef((dataProps, ref) => {


  const input = dataProps.input

  const [value, setValue] = useState(input.defaultValue)



  useImperativeHandle(ref, () => {
    return { value: value }
  })



  const handler = event => {

    setValue(event.target.value)

  }


  return (

<div className={ classes.input }>



 <label htmlFor={ dataProps.htmlFor }>
  { dataProps.labelInnerText }
 </label>

 <input { ...input } onInput={ handler } />



</div>

  )



})



export default Input
