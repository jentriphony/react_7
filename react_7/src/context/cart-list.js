import { createContext, useReducer } from 'react'



const CartList = createContext({})

const increaseCountHandler = (previousList, item, count) => {

  let index = null
  if(previousList.find((item_, index_) => { 
    const result = item_.id === item.id
    if(result) {
      index = index_
    }
    return result
  }) !== undefined) {
    const list = JSON.parse(JSON.stringify(previousList))
    list[index].count += count ? count : 1
    return list
  }
  const item_ = {...item}
  item_.id_ = 'cart_item_' + (previousList.length + 1)
  item_.count = count ? count : 1
  return [
    ...previousList,
    item_
  ]

}

const reduceCountHandler = (previousList, item) => {

  let index = null
  if(previousList.find((item_, index_) => {
    const result = item_.id === item.id
    if(result) {
      index = index_
    }
    return result
  }) !== undefined) {
    const list = JSON.parse(JSON.stringify(previousList))
    const count = list[index].count
    if(count > 1) {
      --list[index].count
      return list
    }
    const result = list.filter(item_ => item_.id !== item.id).map((item_, index) => {
      const item__ = {...item_}
      item__.id_ = 'cart_item_' + (index + 1)
      return item__
    })
    return result
  }

}

const listReducer = (previousList, action) => {

  if(action.action === 'ADD') {
    return increaseCountHandler(previousList, action.item, action.count)
  }
  if(action.action === 'REMOVE') {
    return reduceCountHandler(previousList, action.item)
  }

}

export const CartListProvider = dataProps => {



  const [list, dispatchList] = useReducer(listReducer, [])



  const add = (item, count) => {

    dispatchList({ action: 'ADD', item: item, count: count })

  }

  const remove = item => {

    dispatchList({ action: 'REMOVE', item: item })

  }


  return (

<CartList.Provider
 value={ {
  list: list,
  add: add,
  remove: remove
 } }
>



 { dataProps.children }



</CartList.Provider>

  )



}



export default CartList
