<template>
  <van-popup v-model:show="props.showBottom" position="bottom" :style="{ height: '100%' }">
    <div style="background-color: transparent">
      <div style="height: 667px">
        <div style="height: 44px">
          <div
            style="
              background: #000;
              border-bottom-color: rgb(238, 238, 238);
              padding-left: 8px;
              padding-right: 8px;
              z-index: 9;
              position: fixed;
              width: 100%;
              box-sizing: border-box;
              top: 0;
            "
          >
            <div style="height: 0px; width: 100%; box-sizing: border-box"></div>
            <div
              style="
                height: 44px;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                overflow: hidden;
              "
            >
              <div
                @click="handleClick"
                style="
                  display: flex;
                  flex-direction: row;
                  width: 4.6875rem;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <span style="cursor: pointer">
                  <svg
                    t="1747825997144"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="22723"
                    width="30"
                    height="30"
                  >
                    <path
                      d="M330.666667 512c0-14.933333 4.266667-29.866667 14.933333-40.533333l234.666667-277.33333399c23.466667-27.733333 64-29.866667 89.6-8.53333301 27.733333 23.466667 29.866667 64 8.53333299 89.6L477.866667 512l200.53333299 236.8c23.466667 27.733333 19.19999999 68.266667-8.53333299 89.6-27.733333 23.466667-68.266667 19.19999999-89.6-8.53333301l-234.666667-277.33333399c-10.666667-10.666667-14.933333-25.6-14.933333-40.533333z"
                      fill="#ffffff"
                      p-id="22724"
                    ></path>
                  </svg>
                </span>
              </div>
              <div style="text-transform: capitalize">
                <span
                  style="
                    font-size: 16px;
                    color: #fff;
                    font-weight: 500;
                    display: block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  "
                >
                  <span>国家</span>
                </span>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  width: 4.6875rem;
                  justify-content: flex-end;
                  align-items: center;
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="next-list light">
          <div class="next-search" style="top: 44px">
            <img class="next-search-img"  src="data:image/png;base64,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"
                draggable="false">
            </img>
            <uni-input class="next-input">
              <div class="uni-input-wrapper">
                <input
                  v-model="keyword"
                  @input="handleInputChange"
                  type="text"
                  placeholder="搜索"
                  class="uni-input-input"
                  autocomplete="off"
                />
              </div>
            </uni-input>
          </div>
          <div style="width: 100%; height: 59px"></div>
          <uni-scroll-view class="next-scroll-left">
            <div class="uni-scroll-view">
              <div class="uni-scroll-view" style="overflow: hidden auto">
                <div class="uni-scroll-view-content">
                  <template v-if="areaList.length">
                    <div class="left-list" v-for="(item, index) in areaList" :key="index">
                      <div id="itemA" class="left-item-title">{{ item.letter }}</div>
                      <div
                        @click="handleClick(items)"
                        class="left-item-card"
                        v-for="(items, indexs) in item.list"
                        :key="indexs"
                      >
                        <div class="left-item-card-info">
                          <div class="left-item-card-name">
                            {{ current == 'zh' ? items.chineseName : items.englishName }} +{{
                              items.phoneCode
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <NoData />
                  </template>
                </div>
              </div>
            </div>
          </uni-scroll-view>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { getAreaCode } from '@/api/user'
import { storageDict } from '@/config/dict'
const { t } = useI18n()
const current = ref(localStorage.getItem(storageDict.LANGUAGE))
const props = defineProps({
  showBottom: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['close'])
// 区号列表
const areaList = ref([])
// 获取区号
const codeList = () => {
  getAreaCode().then((res) => {
    if (res.code == '200') {
      let arr = res.data.map((item) => {
        item.list = item.data
        return item
      })
      areaList.value = arr
      originAreaList = JSON.parse(JSON.stringify(arr))
    }
  })
}

const keyword = ref('')
let originAreaList = []
const handleInputChange = (e) => {
  let val = e.target.value
  areaList.value = originAreaList
    .filter((item) => {
      item.list = item.data.filter((item1) => {
        return (
          item1.englishName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item1.chineseName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item1.phoneCode.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item1.countryCode.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
      })
      return item
    })
    .filter((item) => item.list.length)
}

const handleClick = (item) => {
  emits('close', item)
}
onMounted(() => {
  codeList()
})
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
  display: none;
}
.next-list {
  width: 100%;
  height: 100vh;
  background: rgba(255,255,255,0.07);
  box-sizing: border-box;
}
.next-list .next-search {
  width: 100%;
  height: auto;
  padding: 0.625rem 0.9375rem;
  box-sizing: border-box;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
}
.next-list .next-search .next-search-img {
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 2rem;
}
.next-list .next-search .next-input {
  width: 100%;
  height: 2.4375rem;
  padding: 0 0.625rem 0 2.625rem;
  box-sizing: border-box;
  background: rgba(255,255,255,0.07);
  border-radius: 10px;
  font-size: 0.875rem;
  color:rgba(153, 153, 153, 1);
  display: flex;
  align-items: center;
}
.next-list .next-search .next-placeholder {
  color: rgba(153, 153, 153, 1);
}
.next-list .next-scroll-left {
  height: 90%;
}
.next-list .next-scroll-left .left-list {
  height: auto;
}
.next-list .next-scroll-left .left-list .left-item-title {
  width: 100%;
  height: 1.875rem;
  padding: 0 0.75rem;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.875rem;
  font-size: 0.9375rem;
  color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.07);
}
.next-list .next-scroll-left .left-list .left-item-card {
  width: 100%;
  height: 2.5rem;
  padding: 0 0.9375rem;
  box-sizing: border-box;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.next-list .next-scroll-left .left-list .left-item-card .left-item-card-img {
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-gray-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--white);
}
.next-list .next-scroll-left .left-list .left-item-card .img-info {
  background: none;
  border: 0.03125rem solid var(--color-gray-bg);
}
.next-list .next-scroll-left .left-list .left-item-card .left-item-card-info {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.next-list .next-scroll-left .left-list .left-item-card .left-item-card-info .left-item-card-name {
  font-size: 0.875rem;
  line-height: 0.875rem;
  color: #fff;
}
.next-list .next-scroll-left .left-list .left-item-card .left-item-card-info .left-item-card-phone {
  margin-top: 0.4375rem;
  font-size: 0.875rem;
  line-height: 0.875rem;
  color: var(--color-subtext);
}
.next-list .next-scroll-right {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-47%);
  z-index: 999 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.next-list .next-scroll-right .next-scroll-right-top {
  width: 1rem;
  height: 1rem;
  margin-right: 0.4375rem;
  z-index: 999 !important;
}
.next-list .next-scroll-right .next-scroll-right-name {
  width: 1rem;
  padding-right: 0.4375rem;
  height: 0.875rem;
  font-size: 0.6875rem;
  color: var(--color-title-black);
  line-height: 0.6875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.next-list .next-scroll-right .next-scroll-right-select {
  padding: 0;
  margin-right: 0.4375rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background: var(--blue);
  color: var(--white);
}
.arCodePopupspan {
  width: 100%;
  background: var(--white);
}
</style>
