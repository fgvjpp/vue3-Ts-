<script setup lang="ts">
import { useRoute } from 'vue-router'
import topNav from './components/top-nav.vue'
import useStore from '@/store'
const { category } = useStore()
const id = useRoute().params.id

category.getcategory(String(id))
</script>

<template>
  <div class="top-category">
    <div class="container">
      <div class="category">
        <h3>全部分类</h3>
        <div class="topNav">
          <topNav class="top" :isShow="true" :goodsData="category.categoryList.children"></topNav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.top-category {
  .category {
    background-color: #fff;
    .topNav {
      width: 100%;
      height: 160px;
      .top {
        border-radius: 0;
        box-shadow: none;
      }
    }
    h3 {
      font-size: 28px;
      color: #666;
      font-weight: normal;
      text-align: center;
      line-height: 100px;
    }
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
}
</style>
