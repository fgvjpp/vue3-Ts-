export type categoryListType = {
  id: string
  name: string
  picture: string
  children: {
    id: string
    name: string
    picture: string
    children: null
    goods: null
  }[]
  goods: {
    id: string
    name: string
    desc: string
    price: string
    picture: string
    discount: null
    orderNum: null
  }[]
}
export type bannerListType = {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}

export type newGoodsListType = {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: null
  orderNum: number
}

export type hotGoodsList = {
  id: string
  picture: string
  title: string
  alt: string
}
