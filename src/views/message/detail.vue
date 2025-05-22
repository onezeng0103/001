<template>
  <div class="detail">
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
                color: #fff;
                font-weight: 500;
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              <span>{{ data.title }}</span>
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
    <div class="container">
      <div class="item">
        <div class="message-box">
          <div v-html="data.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { haveRead } from '@/api/info'
const route = useRoute()
const router = useRouter()
const data = reactive(JSON.parse(decodeURI(route.query.data)))
const handleRead = async (id) => {
  let params = `ids=${id}`
  await haveRead(params)
}
onMounted(() => {
  console.log(data)
  if (data.type == 1 && data.status == 0) {
    handleRead(data.id)
  }
})
</script>
<style lang="scss" scoped>
.detail {
  .container {
    width: 100%;
    height: auto;
    padding: 15px;
    margin-top: 0;
    .item {
      width: 100%;
      height: auto;
      margin-bottom: 15px;
      .message-box {
        margin-top: 12px;
        width: 100%;
        height: auto;
        padding: 15px;
        background: rgba(255, 255, 255, 0.07);
        border-radius: 8px;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>
