import { createContext, useReducer } from 'react'



const CartList = createContext({})

const increaseCountHandler = (previousList, item, count) => {

  const previousItems = previousList.items
  const count_ = count ? count : 1
  const total = previousList.total + item.price * count_
  const index = previousItems.findIndex(item_ => {
    return item_.id === item.id
  })
  if(index !== -1) {
    const items = [ ...previousItems ]
    const item_ = { ...items[index] }
    item_.count += count_
    items[index] = item_
    return {
      items: items,
      total: total
    }
  }
  const item_ = { ...item }
  item_.count = count_
  item_.id_ = 'cart_item_' + (previousItems.length + 1)
  const items = previousItems.concat(item_)
  return {
    items: items,
    total: total
  }

}

const reduceCountHandler = (previousList, item) => {

  const previousItems = previousList.items
  const total = previousList.total - item.price
  const index = previousItems.findIndex(item_ => { 
    return item_.id === item.id
  })
  if(index !== -1) {
    if(previousItems[index].count > 1) {
      const items = [ ...previousItems ]
      const item_ = { ...items[index] }
      --item_.count
      items[index] = item_
      return {
	items: items,
	total: total
      }
    }
    const items = previousItems.filter(item_ => item_.id !== item.id).map((item_, index) => {
      const item__ = { ...item_ }
      item__.id_ = 'cart_item_' + (index + 1)
      return item__
    })
    return {
      items: items,
      total: total
    }
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



  const [list, dispatchList] = useReducer(listReducer, {
    items: [],
    total: 0
  })



  const add = (item, count) => {

    dispatchList({ action: 'ADD', item: item, count: count })

  }

  const remove = item => {

    dispatchList({ action: 'REMOVE', item: item })

  }


  return (

<CartList.Provider
 value={ {
  list: {
    items: list.items,
    total: list.total
  },
  add: add,
  remove: remove
 } }
>



 { dataProps.children }



</CartList.Provider>

  )



}



export default CartList
