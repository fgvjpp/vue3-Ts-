export interface cartListType {
  id: string
  skuId: string
  name: string
  attrsText: string
  specs: any[]
  picture: string
  price: string
  nowPrice: string
  nowOriginalPrice: string
  selected: boolean
  stock: number
  count: number
  isEffective: boolean
  discount?: any
  isCollect: boolean
  postFee: number
}

export interface totalPriceAndQuantityType {
  totalPrice: number
  quantity: number
}
