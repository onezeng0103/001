<template>
  <div class="message">
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
            @click="router.back()"
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
              <span>站内信</span>
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
    <div class="message-content">
      <div
        class="message-content-item"
        v-for="item in list"
        :key="item.id"
        @click="handleDetail(item)"
        style="position: relative"
      >
        <div
          v-if="item.status == 0 && item.type == 1"
          style="position: absolute; top: 10px; right: 20px; color: #ea4337; font-size: 12px"
        >
          未读
        </div>
        <div class="message-content-item-title">
          <span>{{ item.title }}</span>
        </div>
        <div class="message-content-item-title" style="margin-top: 15px">
          <span>{{ item.createTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getInfo } from '@/api/info'
const router = useRouter()
const list = ref([])
onMounted(() => {
  getInfo().then((res) => {
    list.value = res.rows.sort((a, b) => new Date(b.createTime) - new Date(a.createTime))
  })
})
const handleDetail = (item) => {
  router.push({
    path: '/message/detail',
    query: { data: encodeURI(JSON.stringify(item)) }
  })
}
</script>

<style lang="scss" scoped>
.message {
  &-content {
    padding: 10px;
    &-item {
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      padding: 15px;
      margin-bottom: 20px;
      &-title {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
