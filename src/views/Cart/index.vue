<script setup lang="ts">
import { message } from '@/components/XtxUI'
import router from '@/router'
import useStore from '@/store'

const { cart } = useStore()
const checkout = () => {
  if (cart.isLogin) {
    cart.cartList.length > 0 ? router.push('/checkout') : message({ type: 'warn', text: '还没有添加商品哦~', time: 1500 })
  } else {
    message({ type: 'error', text: '您还未登录', time: 1500 })
  }
}
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120"><XtxCheckBox>全选</XtxCheckBox></th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <template v-if="cart.cartList.length > 0">
              <tr v-for="item in cart.cartList" :key="item.id">
                <td><XtxCheckBox /></td>
                <td>
                  <div class="goods">
                    <RouterLink to="/">
                      <img :src="item.picture" alt="" />
                    </RouterLink>
                    <div>
                      <p class="name ellipsis">{{ item.name }}</p>
                      <p class="attr">{{ item.attrsText }}</p>
                    </div>
                  </div>
                </td>
                <td class="tc">
                  <p>&yen;{{ item.price }}</p>
                </td>
                <td class="tc">
                  <XtxCount :max="item.stock" v-model="item.count" />
                </td>
                <td class="tc">
                  <p class="f16 red">&yen;{{ +item.price * item.count }}</p>
                </td>
                <td class="tc">
                  <p><a href="javascript:;">移入收藏夹</a></p>
                  <p><a @click="cart.delShopItem(item.skuId)" class="green" href="javascript:;">删除</a></p>
                  <p><a href="javascript:;">找相似</a></p>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="6">
                  <div class="cart-none" style="text-align: center">
                    <img src="@/assets/images/none.png" alt="" />
                    <p>购物车内暂时没有商品</p>
                    <div class="btn" style="margin: 20px">
                      <XtxButton type="primary"> 继续逛逛 </XtxButton>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch"></div>
        <div class="total">
          共 {{ cart.totalPriceAndQuantity.quantity }} 件有效商品，已选择 2 件，商品合计：
          <span class="red">¥{{ cart.totalPriceAndQuantity.totalPrice }}</span>
          <XtxButton @click="checkout" type="primary">下单结算</XtxButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tc {
  text-align: center;
  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}
.red {
  color: @priceColor;
}
.green {
  color: @xtxColor;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .xtx-checkbox {
    color: #999;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.xtx-cart-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>
