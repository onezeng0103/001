<template>
  <div
    class="home"
    :style="{ overflow: showInfoPopup ? 'hidden' : '', height: showInfoPopup ? '100vh' : '' }"
  >
    <div class="nav-bar">
      <div class="nav-bar-header">
        <div class="nav-bar">
          <div class="nav-bar-avatar">
            <img :src="path" alt="avatar" />
          </div>
          <div class="nav-bar-search">
            <img src="../../assets/img/search.png" alt="search" />
            <input type="text" placeholder="点击搜索币种" />
            <div class="nav-bar-search-button">查找</div>
          </div>
          <div class="nav-bar-button" style="position: relative">
            <img
              src="../../assets/img/message.png"
              @click="router.push('/message')"
              alt="message"
            />
            <div
              v-if="isRed"
              style="
                position: absolute;
                top: 2px;
                left: 18px;
                width: 5px;
                height: 5px;
                background: #ea4337;
                border-radius: 50%;
              "
            ></div>
            <img src="../../assets/img/customer.png" @click="handleKeFu" alt="message" />
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <van-swipe
        class="swiper_wrap"
        :loop="true"
        :autoplay="3000"
        indicator-color="rgba(186, 236, 87, 1)"
      >
        <van-swipe-item v-for="(item, index) in imgList" :key="index" @click="handleImg(item)">
          <img style="width: 100%; height: 153px; object-fit: cover" :src="item.imgUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
      <div class="menu">
        <div class="menu-item">
          <div class="imgBox">
            <img src="../../assets/img/01.png" alt="" />
          </div>
          <span>充币</span>
        </div>
        <div class="menu-item">
          <div class="imgBox">
            <img src="../../assets/img/02.png" alt="" />
          </div>
          <span>提币</span>
        </div>
        <div class="menu-item" @click="router.push('/flashExchange')">
          <div class="imgBox">
            <img src="../../assets/img/03.png" alt="" />
          </div>
          <span>闪兑</span>
        </div>
        <div class="menu-item">
          <div class="imgBox">
            <img src="../../assets/img/04.png" alt="" />
          </div>
          <span>资金划转</span>
        </div>
        <div class="menu-item">
          <div class="imgBox">
            <img src="../../assets/img/05.png" alt="" />
          </div>
          <span>内部转账</span>
        </div>
      </div>
      <div class="list-box">
        <div class="list-box-header">
          <div
            class="list-box-header-item"
            :class="{ active: currentIndex == 0 }"
            @click="handleIndex(0)"
          >
            24小时涨幅榜
          </div>
          <div
            class="list-box-header-item"
            :class="{ active: currentIndex == 1 }"
            @click="handleIndex(1)"
          >
            24小时跌幅榜
          </div>
        </div>
        <div class="list-box-content">
          <Rose v-if="currentIndex == 0" />
          <Fall v-if="currentIndex == 1" />
        </div>
      </div>
    </div>
  </div>
  <div class="black" v-if="showInfoPopup" @click="showInfoPopup = !showInfoPopup"></div>
  <div class="rule_box" v-if="showInfoPopup">
    <div class="close" @click="showInfoPopup = !showInfoPopup"></div>
    <div class="content">
      <div class="content-item" v-for="(item, index) in newList">
        <div class="number">{{ index + 1 }}</div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store/index.js'
import { publiceNotice } from '@/api/common/index.js'
import { getInfo } from '@/api/info'
import { dispatchCustomEvent } from '@/utils'
import Rose from './component/rose.vue'
import Fall from './component/fall.vue'
const userStore = useUserStore()
const mainStore = useMainStore()
const isSign = ref(userStore.isSign)
const router = useRouter()
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const imgList = ref([])
const publiceNoticeFun = async () => {
  const res = await publiceNotice('ACTIVITY_NOTICE', 'HOME_ACTIVITY')
  const language = document.querySelector('html').getAttribute('language')
  imgList.value = res?.data.filter((item) => item.status == 0 && item.languageId == language)
}
const handleKeFu = () => {
  dispatchCustomEvent('event_serviceChange')
}
const handleImg = (item) => {
  if (item.noticeContent && item.noticeContent !== '<p><br></p>') {
    router.push(`/broadcastDetails?id=${detail.noticeId}`)
  } else {
    if (item.detailUrl.substr(0, 4) == 'http') {
      window.open(item.detailUrl)
    }
  }
}
const currentIndex = ref(0)
const handleIndex = (index) => {
  currentIndex.value = index
}
const isRed = ref(false)
const showInfoPopup = ref(false)
const newList = ref([])
onMounted(() => {
  publiceNoticeFun()
  if (isSign.value) {
    getInfo().then((res) => {
      if (res.code == '200' && res.rows.length > 0) {
        isRed.value = res.rows?.some((item) => item.type == 1 && item.status == 0)
        newList.value = res.rows
        showInfoPopup.value = true
      } else {
        isRed.value = false
        showInfoPopup.value = false
      }
    })
  } else {
    isRed.value = false
  }
})
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .nav-bar {
    width: 100%;
    height: 44px;
    background: #000;
    border-bottom-color: rgb(238, 238, 238);
    z-index: 9;
    .nav-bar-header {
      position: fixed;
      top: 0;
      padding-left: 10px;
      padding-right: 10px;
      height: 44px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      .nav-bar {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .nav-bar-avatar {
          width: 31px;
          height: 31px;
          border-radius: 50%;
          margin-right: 10px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .nav-bar-search {
          flex: 1;
          height: 31px;
          padding-left: 10px;
          padding-right: 2px;
          box-sizing: border-box;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border: 1px solid rgba(186, 236, 87, 1);
          img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
          }
          input {
            flex: 1;
          }
          .nav-bar-search-button {
            font-size: 12px;
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 55px;
            height: 23px;
            background: linear-gradient(90deg, #baec57 0%, #b2e752 100%);
            border-radius: 12px 12px 12px 12px;
            cursor: pointer;
          }
        }
        .nav-bar-button {
          margin-left: 10px;
          width: 70px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          img {
            width: 22px;
            height: 22px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .main {
    padding: 0 10px;
    padding-bottom: 70px;
    .swiper_wrap {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
    }
    .menu {
      width: 100%;
      height: auto;
      padding: 20px 0;
      box-sizing: border-box;
      display: flex;
      align-items: flex-start;
      &-item {
        width: 25%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        .imgBox {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 5px;
          img {
            width: 30px;
            height: 30px;
          }
        }
        span {
          color: rgba(255, 255, 255, 1);
          font-size: 12px;
        }
      }
    }
    .list-box {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      padding: 15px;
      .list-box-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .list-box-header-item {
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
          margin-right: 10px;
          cursor: pointer;
        }
        .active {
          color: rgba(186, 236, 87, 1);
        }
      }
    }
  }
}
.black {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.rule_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url('../../assets/img/popup.png') no-repeat center center;
  background-size: 100% 100%;
  width: 340px;
  height: 260px;
  z-index: 101;
  .content {
    position: absolute;
    top: 92px;
    left: 4px;
    right: 0;
    bottom: 0;
    width: 98%;
    border-radius: 20px;
    height: 63%;
    padding: 20px;
    color: #fff;
    overflow-y: auto;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .number {
        font-size: 12px;
        margin-right: 10px;
      }
    }
  }
  .close {
    position: absolute;
    top: 8px;
    right: 1px;
    width: 20px;
    height: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
