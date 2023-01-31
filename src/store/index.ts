import useCartStore from './cart'
import useCategories from './category'
import useHomeStore from './home'
import useUserInfoStore from './userInfo'
export default function useStore() {
  return {
    home: useHomeStore(),
    category: useCategories(),
    userInfo: useUserInfoStore(),
    cart: useCartStore(),
  }
}
