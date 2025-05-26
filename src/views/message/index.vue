<template>
  <div class="message">
    <div style="height: 44px">
      <div
        style="
          background: var(--primary-background);
          border-bottom-color: var(--placeholder-color);
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
                t="1747892392635"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="27855"
                width="25"
                height="25"
              >
                <path
                  d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
                  fill="#ffffff"
                  p-id="27856"
                ></path>
              </svg>
            </span>
          </div>
          <div style="text-transform: capitalize">
            <span
              style="
                font-size: 16px;
                color: var(--primary-color);
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
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      padding: 15px;
      margin-bottom: 20px;
      &-title {
        font-size: 14px;
        color: var(--primary-color);
      }
    }
  }
}
</style>
