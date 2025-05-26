<template>
  <div class="download">
    <div style="height: 44px">
      <div
        style="
          background: var(--primary-background);
          border-bottom-color: var(--regular-border);
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
              <span>下载中心</span>
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
              color: var(--secondary-color);
            "
          ></div>
        </div>
      </div>
    </div>

    <div class="download-main">
      <div class="title">世界首个区块链生态聚合产品</div>

      <div style="display: flex; justify-content: center">
        <img src="../../../src/assets/img/xiazai.png" alt="" style="height: 311px; width: 302px" />
      </div>

      <div class="list">
        <div class="item">
          <img src="../../../src/assets/img/qzxhcz.png" style="width: 19px; height: 19px" />
          <div style="margin-top: 9px">去中心化操作</div>
        </div>
        <div class="item">
          <img src="../../../src/assets/img/sjkx.png" style="width: 19px; height: 19px" />

          <div style="margin-top: 9px">数据可信</div>
        </div>
        <div class="item">
          <img src="../../../src/assets/img/jgbh.png" style="width: 19px; height: 19px" />

          <div style="margin-top: 9px">监管保护</div>
        </div>
        <div class="item">
          <img src="../../../src/assets/img/dyhfn.png" style="width: 19px; height: 19px" />

          <div style="margin-top: 9px">多样化赋能</div>
        </div>
      </div>

      <div class="buts">
        <div class="but" @click="handleClick(0)">
          <img
            src="../../../src/assets/img/az.png"
            alt=""
            style="width: 34px; height: 34px; margin: 0 10px"
          />
          Android
        </div>
        <div class="but"  @click="handleClick(0)">
          <img
            src="../../../src/assets/img/pg.png"
            alt=""
            style="width: 34px; height: 34px; margin: 0 9px"
          />
          APP Store
        </div>
      </div>

      <div style="position: relative">
        <img class="imgP" src="../../../src/assets/img/bj2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store/index.js'

const router = useRouter()
const mainStore = useMainStore()
/**
 * 下载列表
 */
const downLoadList = computed(() => {
  let data = []
  if (mainStore.getDownLoadList.length) {
    data = mainStore.getDownLoadList
      .map((item) => {
        return { icon: `${item.name}.png`, path: item.url, isOpen: item.isOpen }
      })
      .filter((item) => item.isOpen == 'true')
  }
  return data
})
const handleClick = (index) => {
  window.open(downLoadList.value[index]?.path)
}
</script>

<style lang="scss" scoped>
.download {
  height: 100vh;

  &-main {
    padding: 15px;
    height: 100%;

    background-image: url('../../../src/assets/img/bj1.png'); /* 替换为你自己的图片地址 */
    background-size: cover; /* 保持比例铺满整个屏幕 */
    background-repeat: no-repeat; /* 禁止平铺重复 */
    background-position: center; /* 图片居中对齐 */
    background-attachment: fixed; /* 可选：背景随页面固定不动 */

    .imgP {
      width: 100px;
      height: 100px;
      position: absolute;
      left: -15px;
      z-index: -1;
    }

    .title {
      font-family: 'DFZongYiW9-GB-Regular';
      font-size: 20px;
      margin-top: 40px;
      display: flex;
      justify-content: center;
    }

    .list {
      display: flex;
      justify-content: space-between;

      .item {
        width: 82px;
        height: 62px;
        font-size: 10px;

        background: var(--regular-background);
        border-radius: 8px 8px 8px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .buts {
      display: flex;
      justify-content: space-between;
      margin-top: 34px;

      .but {
        width: 146px;
        height: 44px;
        background: #ffffff;
        border-radius: 8px 8px 8px 8px;
        display: flex;
        font-weight: 500;
        font-size: 16px;
        color: #baec57;
        font-family: 'PingFang SC';
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
