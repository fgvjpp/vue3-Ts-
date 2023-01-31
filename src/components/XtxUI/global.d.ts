import Skeleton from './Skeleton/Skeleton.vue'
import Slider from './Slider/index.vue'
import More from './More/index.vue'
import Bread from './Bread/index.vue'
import BreadItem from './Bread/Item.vue'
import City from './City/index.vue'
import Count from './Count/index.vue'
import Button from './Button/index.vue'
import CheckBox from './CheckBox/index.vue'
import ImageView from './ImageView/index.vue'
import Sku from './Sku/index.vue'
import Dialog from './Dialog/index.vue'
import InfiniteLoad from './InfiniteLoad/index.vue'
import Tabs from './Tabs/index.vue'
import TabPane from './Tabs/pane.vue'
declare module 'vue' {
  // 全局组件需要定义 interface GlobalComponents
  export interface GlobalComponents {
    XtxSkeleton: typeof Skeleton
    XtxSlider: typeof Slider
    XtxMore: typeof More
    XtxBread: typeof Bread
    XtxBreadItem: typeof BreadItem
    XtxImageView: typeof ImageView
    XtxCity: typeof City
    XtxSku: typeof Sku
    XtxCount: typeof Count
    XtxButton: typeof Button
    XtxCheckBox: typeof CheckBox
    XtxDialog: typeof Dialog
    XtxTabs: typeof Tabs
    XtxTabPane: typeof TabPane
    XtxInfiniteLoad: typeof InfiniteLoad
  }
}
