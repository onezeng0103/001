<template>
  <div class="uni-tabbar-bottom" style="width: 100%">
    <div class="uni-tabbar" style="backdrop-filter: none; width: 100%">
      <div class="uni-tabbar-border"></div>
      <div
        class="uni-tabbar__item"
        @click="handleClick(item.linkUrl)"
        v-for="(item, index) in getTabbarList"
        :key="index"
      >
        <div class="uni-tabbar__bd" style="height: 50px">
          <div
            class="uni-tabbar__icon uni-tabbar__icon__diff"
            :class="{ 'trade-icon': item.key === 'trade' }"
          >
            <img :src="item.imgUrl" />
          </div>
          <div
            class="uni-tabbar__label"
            style="color: rgb(137, 137, 137); font-size: 12px; line-height: normal; margin-top: 3px"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useMainStore } from '@/store'
const mainStore = useMainStore()
const getTabbarList = computed(() => {
  console.log(mainStore.getTabbarList)
  let arr = [
    {
      imgUrl: new URL('../../assets/img/06.png', import.meta.url).href,
      checkedImgUrl: new URL('../../assets/img/06.png', import.meta.url).href,
      linkUrl: '/',
      key: 'home',
      name: '首页',
      sort: 1
    },
    {
      imgUrl: new URL('../../assets/img/07.png', import.meta.url).href,
      checkedImgUrl: new URL('../../assets/img/07.png', import.meta.url).href,
      linkUrl: '/store',
      key: 'store',
      name: '行情',
      sort: 2
    },
    {
      imgUrl: new URL('../../assets/img/08.png', import.meta.url).href,
      checkedImgUrl: new URL('../../assets/img/08.png', import.meta.url).href,
      linkUrl: '/trade',
      key: 'trade',
      name: '交易',
      sort: 3
    },
    {
      imgUrl: new URL('../../assets/img/09.png', import.meta.url).href,
      checkedImgUrl: new URL('../../assets/img/09.png', import.meta.url).href,
      linkUrl: '/invaite',
      key: 'invaite',
      name: '团队',
      sort: 4
    },
    {
      imgUrl: new URL('../../assets/img/10.png', import.meta.url).href,
      checkedImgUrl: new URL('../../assets/img/10.png', import.meta.url).href,
      linkUrl: '/wallet',
      key: 'wallet',
      name: '个人中心',
      sort: 5
    }
  ]
  // return mainStore.getTabbarList.filter((elem) => elem.isOpen)
  return arr
})

const router = useRouter()
const route = useRoute()
const pathStr = ref(route.path)
watch(route, (to) => {
  pathStr.value = to.path
})
const handleClick = (path) => {
  pathStr.value = path
  router.push(path)
}
</script>
<style lang="scss" scoped>
.uni-tabbar-bottom {
  position: fixed;
  bottom: 0;
  .uni-tabbar {
    bottom: 0;
    display: flex;
    .uni-tabbar-border {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background-color: #000;
    }
    .uni-tabbar__item {
      display: flex;
      padding-top: 5px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      font-size: 0;
      background-color: #000;
      text-align: center;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      &.trade-button {
        margin-top: -20px;

        .uni-tabbar__label {
          margin-top: -5px;
        }
      }

      .uni-tabbar__bd {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .uni-tabbar__icon {
          position: relative;
          display: inline-block;
          margin-top: 5px;
          width: 25px;
          height: 25px;

          &.trade-icon {
            width: 50px;
            height: 50px;
            background-color: #baec57;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -25px;

            img {
              width: 30px;
              height: 30px;
            }
          }
        }
        .uni-tabbar__icon__diff {
          margin-top: 0;
          width: 25px;
          height: 25px;
        }
        .uni-tabbar__label {
          position: relative;
          text-align: center;
          font-size: 10px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
