import React, { useState } from 'react'

export default function useFilter(orders) {
    let [search, setSearch]= useState('')
    let filteredOrders = orders.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))

  return { setSearch, filteredOrders}
}
