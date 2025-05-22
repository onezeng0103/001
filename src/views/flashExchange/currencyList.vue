<template>
  <div>
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
            @click="handleClose(undefined)"
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
              <span>选择币种</span>
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

    <div style="margin: 10px 20px">币种名称</div>
    <div class="list">
      <div class="list-item" v-for="item in list" :key="item.coin" @click="handleClose(item)">
        <div style="display: flex; align-items: center">
          <img :src="item.icon" alt="" style="height: 28px; width: 28px" />
          <div>{{ item.coin?.toUpperCase() }}</div>
        </div>
        <div>
          <van-icon name="checked" color="#3070ec" size="20" v-if="info.coin == item.coin" />
          <van-icon name="checked" color="#444444" size="20" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showBottom: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array,
    default: []
  },
  info: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['close'])
const handleClose = (value) => {
  emits('close', value)
}
</script>

<style scoped lang="scss">
.list{
  margin: 0 10px;
  .list-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
  }
}
</style>
