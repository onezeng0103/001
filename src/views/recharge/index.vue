<template>
  <div class="recharge">
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
              <span>选择充币方式</span>
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
    <div class="recharge-main">
      <div class="recharge-main-item" @click="router.push('/recharge/method')">
        <div style="display: flex; align-items: center">
          <div>
            <img
              style="width: 22px; height: 22px; border-radius: 50%"
              src="../../assets/img/32.png"
              alt=""
            />
          </div>
          <div style="margin-left: 10px">
            <div style="color: var(--primary-color); font-size: 14px">充币</div>
            <div style="color: var(--secondary-color); font-size: 12px">
              从链上钱包或交易所转入数字货币
            </div>
          </div>
        </div>
        <div>
          <svg
            t="1748071959491"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1480"
            width="15"
            height="15"
          >
            <path
              d="M707.61856 495.14624l-357.5296-357.5296c-9.30816-9.30688-24.40064-9.30688-33.70752 0-9.30816 9.30816-9.30816 24.40064 0 33.7088L657.056 512 316.38144 852.67456c-9.30816 9.30688-9.30816 24.40064 0 33.7088 4.65408 4.65536 10.75328 6.98112 16.85376 6.98112 6.10048 0 12.19968-2.32576 16.85376-6.98112l357.5296-357.5296C716.92672 519.5456 716.92672 504.4544 707.61856 495.14624z"
              p-id="1481"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>
      <div class="recharge-main-item">
        <div style="display: flex; align-items: center">
          <div>
            <img
              style="width: 22px; height: 22px; border-radius: 50%"
              src="../../assets/img/33.png"
              alt=""
            />
          </div>
          <div style="margin-left: 10px">
            <div style="color: var(--primary-color); font-size: 14px">C2C交易</div>
            <div style="color: var(--secondary-color); font-size: 12px">
              灵活选择 100+付款方式，0 手续费
            </div>
          </div>
        </div>
        <div>
          <svg
            t="1748071959491"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1480"
            width="15"
            height="15"
          >
            <path
              d="M707.61856 495.14624l-357.5296-357.5296c-9.30816-9.30688-24.40064-9.30688-33.70752 0-9.30816 9.30816-9.30816 24.40064 0 33.7088L657.056 512 316.38144 852.67456c-9.30816 9.30688-9.30816 24.40064 0 33.7088 4.65408 4.65536 10.75328 6.98112 16.85376 6.98112 6.10048 0 12.19968-2.32576 16.85376-6.98112l357.5296-357.5296C716.92672 519.5456 716.92672 504.4544 707.61856 495.14624z"
              p-id="1481"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="scss" scoped>
.recharge {
  &-main {
    padding: 15px;
    &-item {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
