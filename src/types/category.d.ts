export interface categoryTypeChildrenGood {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  orderNum: number
}

export interface categoryTypeChildren {
  id: string
  name: string
  picture: string
  goods: categoryTypeChildrenGood[]
}

export interface categoryType {
  id: string
  name: string
  children: categoryTypeChildren[]
}
