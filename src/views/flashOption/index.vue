<template>
  <div class="trade">
    <div class="trade-top">
      <div class="trade-top-left">
        <div class="trade-top-left-info">
          <div class="trade-top-left-info-profile">
            <img :src="path" alt="" />
          </div>
          <div class="trade-top-left-info-price">
            <div class="name">{{ userInfo?.user?.loginName }}</div>
            <div class="text">
              资金金额
              <div class="eys">
                <svg
                  @click="isEye = !isEye"
                  v-if="!isEye"
                  t="1747823302565"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="21623"
                  width="15"
                  height="15"
                >
                  <path
                    d="M801.2 570.4l-0.1-0.1c-0.2-0.4-0.5-0.7-0.8-1.1 40.1-25.4 79.1-56.7 116.8-93.7 13.7-13.5 14.5-36.9 1.7-51.5-12.1-13.8-31.9-14.6-44.9-1.8-151.6 149-319.9 192.7-500.7 130.1-75.3-26.1-137.8-66.3-176.9-95.5-18.7-14-34.1-26.8-45.5-36.8-13.2-11.7-32.3-10.3-43.9 3.2l-1.2 1.4 1.1-1.3c-13.1 15.2-11.6 39.4 3.2 52.5 26.5 23.5 71.7 59.8 130.7 93.3-0.1 0.2-0.2 0.3-0.4 0.5-0.1 0.1-0.2 0.3-0.3 0.4-0.4 0.6-0.8 1.1-1.2 1.7l-0.1 0.1c-0.3 0.5-0.7 1.1-1 1.7-0.1 0.2-0.2 0.3-0.3 0.5-0.3 0.6-0.7 1.3-1 1.9l-51.8 115.6c-1.8 4-2.7 8.2-2.8 12.4v1.6c0.1 3.6 0.8 7.2 2.1 10.5 0.3 0.7 0.6 1.5 0.9 2.2 0.3 0.7 0.7 1.4 1 2 0.2 0.4 0.5 0.9 0.8 1.3 3.2 5.2 8 9.6 14.1 12.3 0.5 0.2 1 0.4 1.6 0.7 0.2 0.1 0.3 0.1 0.5 0.2 0.4 0.1 0.7 0.3 1.1 0.4 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0.1 0.5 0.1 0.7 0.2 0.3 0.1 0.6 0.2 0.9 0.2 0.2 0.1 0.5 0.1 0.7 0.1 0.3 0.1 0.6 0.1 0.9 0.2 0.2 0 0.5 0.1 0.7 0.1 0.3 0 0.6 0.1 0.9 0.1 0.2 0 0.5 0 0.7 0.1 0.3 0 0.6 0.1 0.9 0.1h2.2c0.6 0 1.2 0 1.8-0.1h0.2c0.7 0 1.3-0.1 2-0.2 0.2 0 0.3 0 0.5-0.1 0.6-0.1 1.1-0.2 1.7-0.3 0.1 0 0.2 0 0.3-0.1 0.7-0.1 1.3-0.3 1.9-0.5 0.2 0 0.3-0.1 0.4-0.1 0.5-0.2 1.1-0.3 1.6-0.5 0.1 0 0.2-0.1 0.4-0.1 0.6-0.2 1.2-0.5 1.9-0.8 0.1-0.1 0.3-0.1 0.4-0.2 0.5-0.2 1-0.5 1.5-0.8 0.1-0.1 0.2-0.1 0.4-0.2 0.6-0.3 1.2-0.7 1.7-1 0.1-0.1 0.2-0.1 0.3-0.2 0.5-0.3 1-0.6 1.4-1 0.1-0.1 0.2-0.2 0.4-0.3 0.5-0.4 1.1-0.8 1.6-1.3 0.1-0.1 0.2-0.2 0.3-0.2 0.4-0.4 0.9-0.8 1.3-1.2 0.1-0.1 0.2-0.2 0.4-0.3 0.5-0.5 0.9-1 1.4-1.5l0.2-0.2c0.4-0.5 0.8-0.9 1.2-1.4 0.1-0.1 0.2-0.3 0.3-0.4 0.4-0.6 0.8-1.1 1.2-1.7l0.1-0.1c0.3-0.5 0.7-1.1 1-1.7 0.1-0.2 0.2-0.3 0.3-0.5 0.3-0.6 0.7-1.3 1-1.9l16.1-35.8 35.8-79.8c0.7-1.5 1.2-3 1.6-4.5 17.4 7.9 35.7 15.4 54.7 22.1 14 4.9 28.1 9.3 42 13L369.9 776c-0.1 0.6-0.2 1.2-0.2 1.8-0.8 7.3 1 14.4 4.7 20.3l1.2 1.8 0.9 1.2c0.6 0.8 1.3 1.6 2 2.3l1.1 1.1c4.5 4.2 10.2 7.2 16.8 8.3 0.8 0.1 1.6 0.2 2.3 0.3h0.5c0.8 0.1 1.5 0.1 2.3 0.1h1.4c0.4 0 0.9 0 1.3-0.1h0.2c0.5 0 1-0.1 1.5-0.2 0.2 0 0.3 0 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.6-0.1 0.3-0.1 0.6-0.1 0.9-0.2 0.2 0 0.4-0.1 0.6-0.1 0.3-0.1 0.6-0.1 0.8-0.2 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.2 0.5-0.2 0.3-0.1 0.6-0.3 0.9-0.4 0.2-0.1 0.3-0.2 0.5-0.2 0.4-0.2 0.8-0.4 1.1-0.6 0.1 0 0.1-0.1 0.2-0.1 0.4-0.2 0.8-0.5 1.2-0.8 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.5-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.3 0.2-0.2 0.5-0.4 0.7-0.5 0.2-0.1 0.3-0.3 0.5-0.4 0.2-0.2 0.4-0.4 0.7-0.5 0.2-0.1 0.3-0.3 0.5-0.4l0.6-0.6c0.2-0.1 0.3-0.3 0.5-0.4l0.6-0.6 0.4-0.4c0.2-0.2 0.4-0.4 0.6-0.7l0.4-0.4c0.2-0.2 0.4-0.5 0.6-0.7 0.1-0.1 0.2-0.3 0.3-0.4 0.3-0.4 0.6-0.7 0.8-1.1l0.1-0.1c0.3-0.4 0.6-0.8 0.8-1.2 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.3-0.6 0.5-0.9 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.3 0.3-0.5 0.4-0.8l0.3-0.6c0.1-0.3 0.3-0.5 0.4-0.8l0.3-0.6c0.1-0.3 0.2-0.5 0.3-0.8 0.1-0.2 0.2-0.4 0.2-0.6 0.1-0.3 0.2-0.6 0.3-0.8 0.1-0.2 0.1-0.4 0.2-0.6l0.3-0.9c0.1-0.2 0.1-0.4 0.2-0.6 0.1-0.3 0.2-0.7 0.2-1 0-0.2 0.1-0.3 0.1-0.5l0.3-1.5 23.1-140.6c24.4 3.6 48.8 5.4 72.9 5.4 13.2 0 26.3-0.5 39.4-1.6l18.4 111.9 4 24.4 0.3 1.5c0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.2 0.7 0.2 1 0.1 0.2 0.1 0.4 0.2 0.6l0.3 0.9c0.1 0.2 0.1 0.4 0.2 0.6 0.1 0.3 0.2 0.6 0.3 0.8 0.1 0.2 0.2 0.4 0.2 0.6 0.1 0.3 0.2 0.5 0.3 0.8l0.3 0.6c0.1 0.3 0.2 0.5 0.4 0.8l0.3 0.6c0.1 0.3 0.3 0.5 0.4 0.8 0.1 0.2 0.2 0.3 0.3 0.5 0.2 0.3 0.3 0.6 0.5 0.9 0.1 0.1 0.2 0.3 0.2 0.4 0.3 0.4 0.5 0.8 0.8 1.2v0.1c0.3 0.4 0.5 0.8 0.8 1.1 0.1 0.1 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.5 0.6 0.8l0.4 0.4c0.2 0.2 0.4 0.4 0.6 0.7l0.4 0.4 0.6 0.6 0.4 0.4 0.6 0.6c0.2 0.1 0.3 0.3 0.5 0.4 0.2 0.2 0.4 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.2 0.2 0.5 0.4 0.7 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.2 0.5 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.4 0.3 0.8 0.5 1.2 0.8 0 0 0.1 0 0.1 0.1 0.4 0.2 0.8 0.4 1.1 0.6 0.1 0.1 0.3 0.1 0.4 0.2 0.3 0.1 0.6 0.3 0.9 0.4 0.2 0.1 0.4 0.2 0.5 0.2 0.3 0.1 0.5 0.2 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.2 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.8 0.2 0.2 0.1 0.4 0.1 0.6 0.1 0.3 0.1 0.6 0.1 0.9 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.3 0.1 0.5 0.1 0.5 0.1 1 0.1 1.5 0.2h0.2c0.4 0 0.9 0.1 1.3 0.1H622.4c0.8 0 1.5 0 2.3-0.1h0.5c0.8-0.1 1.6-0.2 2.3-0.3 9.3-1.5 16.9-6.9 21.7-14.2 0.8-1.3 1.6-2.6 2.2-4 0.4-0.9 0.8-1.9 1.2-2.9 0.5-1.5 0.9-3 1.2-4.5s0.5-3.1 0.5-4.7v-1.6c0-1.1-0.1-2.2-0.2-3.2-0.1-0.5-0.1-1.1-0.2-1.6L631.7 640c38.5-8.4 76.2-21.7 113.1-39.7 0.1 0.2 0.1 0.3 0.2 0.5l51.8 115.6c0.3 0.7 0.6 1.3 1 1.9 0.1 0.2 0.2 0.3 0.3 0.5 0.3 0.6 0.6 1.1 1 1.7l0.1 0.1c0.4 0.6 0.8 1.2 1.2 1.7 0.1 0.1 0.2 0.3 0.3 0.4 0.4 0.5 0.8 1 1.1 1.4l0.2 0.2c0.5 0.5 0.9 1 1.4 1.5 0.1 0.1 0.2 0.2 0.4 0.3 0.4 0.4 0.9 0.8 1.3 1.2 0.1 0.1 0.2 0.2 0.3 0.2 0.5 0.4 1 0.9 1.6 1.3 0.1 0.1 0.2 0.2 0.4 0.3 0.5 0.3 0.9 0.7 1.4 1 0.1 0.1 0.2 0.1 0.3 0.2 0.6 0.4 1.1 0.7 1.7 1 0.1 0.1 0.2 0.1 0.4 0.2 0.5 0.3 1 0.5 1.5 0.8 0.1 0.1 0.3 0.1 0.4 0.2 0.6 0.3 1.2 0.5 1.9 0.8 0.1 0 0.2 0.1 0.4 0.1 0.5 0.2 1.1 0.4 1.6 0.5 0.2 0 0.3 0.1 0.5 0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.1 0 0.2 0 0.3 0.1 0.6 0.1 1.1 0.2 1.7 0.3 0.2 0 0.3 0.1 0.5 0.1 0.7 0.1 1.3 0.2 2 0.2h0.2c0.6 0 1.2 0.1 1.8 0.1h2.2c0.3 0 0.6 0 0.9-0.1 0.2 0 0.5 0 0.7-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.5-0.1 0.7-0.1 0.3 0 0.6-0.1 0.9-0.2 0.2 0 0.5-0.1 0.7-0.1 0.3-0.1 0.6-0.1 0.9-0.2 0.2-0.1 0.5-0.1 0.7-0.2 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.4-0.1 0.7-0.2 1.1-0.4 0.2-0.1 0.3-0.1 0.5-0.2 0.5-0.2 1-0.4 1.6-0.7 16.1-7.2 23.3-26.2 16.1-42.3l-51.8-115.6c-0.3-0.7-0.6-1.3-1-1.9-0.1-0.2-0.2-0.3-0.3-0.5-0.4-0.5-0.7-1.1-1.1-1.7z"
                    p-id="21624"
                    fill="#999999"
                  ></path>
                </svg>
                <svg
                  v-else
                  @click="isEye = !isEye"
                  t="1747823189861"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="20574"
                  width="15"
                  height="15"
                >
                  <path
                    d="M512 279.272727c171.985455 0 328.610909 162.909091 388.421818 232.727273-59.810909 69.818182-216.436364 232.727273-388.421818 232.727273S183.389091 581.818182 123.578182 512c59.810909-69.818182 216.436364-232.727273 388.421818-232.727273m0-69.818182C298.589091 209.454545 117.76 407.970909 56.785455 483.374545a44.916364 44.916364 0 0 0 0 57.25091C117.76 616.029091 298.589091 814.545455 512 814.545455s394.24-198.516364 455.214545-273.92a44.916364 44.916364 0 0 0 0-57.25091C906.24 407.970909 725.410909 209.454545 512 209.454545z"
                    fill="#999999"
                    p-id="20575"
                  ></path>
                  <path
                    d="M512 442.181818a69.818182 69.818182 0 1 1-69.818182 69.818182 69.818182 69.818182 0 0 1 69.818182-69.818182m0-69.818182a139.636364 139.636364 0 1 0 139.636364 139.636364 139.636364 139.636364 0 0 0-139.636364-139.636364z"
                    fill="#999999"
                    p-id="20576"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="trade-top-left-price">
          {{ availableBalance }}
          <span v-if="form.type == 0" style="font-size: 12px">USDT</span>
          <span v-else style="font-size: 12px">
            {{
              coinInfo.customizeFlag === 2
                ? matchText(coinInfo.showSymbol, '/USDT')
                : coinInfo.coin?.toUpperCase()
            }}
          </span>
        </div>
      </div>
      <div class="trade-top-right"></div>
    </div>
    <div class="trade-tab">
      <div class="trade-tab-item" @click="router.push('/trade')">现货交易</div>
      <div class="trade-tab-item" @click="router.push('/contract')">合约交易</div>
      <div class="trade-tab-item" @click="router.push('/flash')">秒合约</div>
      <div class="trade-tab-item active">期权交易</div>
      <div class="trade-tab-item" @click="router.push('/floworder')">跟单交易</div>
    </div>
    <div class="trade-tip">
      <div class="trade-tip-left">
        <img src="../../assets/img/31.png" alt="" />
        <div class="text">
          <div class="text-title">机构合作专区</div>
          <div class="text-desc">保本付息 智能决策 多重风控</div>
        </div>
      </div>
      <div class="trade-tip-right" @click="router.push('/proxy')">立即前往</div>
    </div>
    <div class="trade-main">
      <div class="trade-main-top">
        <div class="trade-main-top-left" @click="showLeft = true">
          <img class="icon" :src="coinInfo.logo" alt="" />
          <span class="name">{{ coinInfo.showSymbol }}</span>
          <svg
            t="1747901232386"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="28887"
            width="7"
            height="7"
          >
            <path
              d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
              fill="#c4eb6e"
              p-id="28888"
            ></path>
          </svg>
        </div>
        <div class="trade-main-top-right">
          {{ currentTime }}
        </div>
      </div>
      <TradeOptionContract :coinInfo="coinInfo" />
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          color: var(--secondary-color);
          font-size: 12px;
          font-weight: 500;
        "
      >
        <div>下单中</div>
        <div style="color: var(--primary-color)">{{ timeRangeCountdown.split('/')[0] }}</div>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          color: var(--secondary-color);
          font-size: 12px;
          font-weight: 500;
        "
      >
        <div>剩余时间</div>
        <div style="color: var(--primary-color)">{{ timeRangeCountdown.split('/')[1] }}</div>
      </div>
      <div class="link"></div>
      <div style="display: flex; align-items: center; justify-content: space-between">
        <div style="color: var(--primary-color); font-size: 12px">快速交易</div>
        <div style="color: var(--secondary-color); font-size: 10px">
          可用余额 {{ availableBalance }}
          <span style="margin-left: 2px">USDT</span>
        </div>
      </div>
      <div class="input-box">
        <input v-model="orderAmount" type="text" placeholder="请输入数量" />
        <span style="color: var(--secondary-color); font-size: 12px">最大</span>
      </div>
      <el-slider
        size="small"
        v-model="userBalance"
        @input="onSliderChange"
        style="margin-top: 10px"
        :format-tooltip="(e) => e + '%'"
      ></el-slider>
    </div>
    <div class="trade-orderBox">
      <div class="trade-orderBox-tab">
        <div
          class="trade-orderBox-tab-item"
          :class="currentEntruset == 0 ? 'active' : ''"
          @click="switchingEntrust(0)"
        >
          当前订单
        </div>
        <div
          class="trade-orderBox-tab-item"
          :class="currentEntruset == 1 ? 'active' : ''"
          @click="switchingEntrust(1)"
        >
          历史订单
        </div>
      </div>
      <div class="trade-orderBox-list">
        <template v-if="historyNewList?.length > 0">
          <div
            class="trade-orderBox-list-item"
            v-for="(item, index) in historyNewList"
            :key="index"
          >
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="display: flex; align-items: center">
                <div
                  v-if="!item.betContent"
                  style="
                    padding: 2px 5px;
                    background: rgba(23, 172, 0, 1);
                    border-radius: 5px;
                    font-size: 10px;
                    margin-right: 5px;
                    color: #000;
                  "
                >
                  上涨
                </div>
                <div
                  v-else
                  style="
                    padding: 2px 5px;
                    background: rgba(255, 100, 100, 1);
                    border-radius: 5px;
                    font-size: 10px;
                    margin-right: 5px;
                    color: #000;
                  "
                >
                  下跌
                </div>
                <div>
                  {{ item.symbol?.toUpperCase() }}
                </div>
              </div>

              <div v-if="currentEntruset == 1">
                <div v-if="item.openResult == 1">输</div>
                <div v-else>赢</div>
              </div>
            </div>
            <div style="font-size: 10px; color: var(--secondary-color); margin-top: 10px">
              {{ item.createTime }}
            </div>
            <div class="trade-orderBox-list-item-coll">
              <div>期权编号</div>
              <div class="trade-orderBox-list-item-coll-price">
                {{ item.orderNo }}
              </div>
            </div>
            <div class="trade-orderBox-list-item-coll">
              <div>预测周期</div>
              <div class="trade-orderBox-list-item-coll-price">
                {{ item.type }}sec({{ item.openTime }})
              </div>
            </div>
            <div class="trade-orderBox-list-item-coll">
              <div>交易金额(USDT)</div>
              <div class="trade-orderBox-list-item-coll-price">
                {{ item.betAmount }}
              </div>
            </div>
            <div class="trade-orderBox-list-item-coll">
              <div>委托价格(USDT)</div>
              <div class="trade-orderBox-list-item-coll-price">
                {{ item.openPrice }}
              </div>
            </div>
            <template v-if="currentEntruser === 1">
              <div class="trade-orderBox-list-item-coll">
                <div>平仓价格</div>
                <div class="trade-orderBox-list-item-coll-price">
                  {{ item.closePrice }}
                </div>
              </div>
              <div class="trade-orderBox-list-item-coll">
                <div>收益(USDT)</div>
                <div class="trade-orderBox-list-item-coll-price">
                  {{ item.rewardAmount }}
                </div>
              </div>
              <div class="trade-orderBox-list-item-coll">
                <div>手续费(USDT)</div>
                <div class="trade-orderBox-list-item-coll-price">
                  {{ item.feeAmount }}
                </div>
              </div>
            </template>
            <div class="line"></div>
          </div>
        </template>
        <template v-else>
          <NoData />
        </template>
      </div>
    </div>
    <div class="btn">
      <div class="fall" @click="showBtn(1)">看跌</div>
      <div class="rose" @click="showBtn(0)">看涨</div>
    </div>
  </div>
  <LeftPopup
    :showLeft="showLeft"
    @close="showLeft = false"
    @handleGetOptionIssue="handleGetOptionIssue"
  />
  <van-popup v-model:show="showCenter" round style="width: 80%" :close-on-click-overlay="false">
    <div style="display: flex; flex-direction: column; align-items: center">
      <div
        v-if="!countdownCompleted"
        style="font-weight: 700; font-size: 20px; line-height: 24px; color: #000"
      >
        下单成功
      </div>
      <template v-else>
        <div
          v-if="orderAmount.openResult == 1"
          style="
            height: 40px;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            border-radius: 48px;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 16px;
            padding-right: 16px;
            justify-content: center;
            align-items: center;
            display: flex;
            min-width: 83px;
            box-sizing: border-box;
            background: rgb(23, 172, 0);
          "
        >
          赢
        </div>
        <div
          v-else
          style="
            height: 40px;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            border-radius: 48px;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 16px;
            padding-right: 16px;
            justify-content: center;
            align-items: center;
            display: flex;
            min-width: 83px;
            box-sizing: border-box;
            background: rgb(255, 100, 100);
          "
        >
          输
        </div>
      </template>
      <div style="display: flex; margin-top: 20px">
        <div
          style="
            border-radius: 6px;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 62px;
            display: flex;
            font-weight: 700;
            font-size: 40px;
            line-height: 24px;
            background-color: var(--secondary-color);
          "
        >
          {{ countdownDisplay[0] }}
        </div>
        <div
          style="
            margin-left: 4px;
            border-radius: 6px;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 62px;
            display: flex;
            font-weight: 700;
            font-size: 40px;
            line-height: 24px;
            background-color: var(--secondary-color);
          "
        >
          {{ countdownDisplay[1] }}
        </div>
        <div
          style="
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 62px;
            display: flex;
            font-weight: 700;
            font-size: 40px;
          "
        >
          :
        </div>
        <div
          style="
            border-radius: 6px;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 62px;
            display: flex;
            font-weight: 700;
            font-size: 40px;
            line-height: 24px;
            background-color: var(--secondary-color);
          "
        >
          {{ countdownDisplay[2] }}
        </div>
        <div
          style="
            margin-left: 4px;
            border-radius: 6px;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 62px;
            display: flex;
            font-weight: 700;
            font-size: 40px;
            line-height: 24px;
            background-color: var(--secondary-color);
          "
        >
          {{ countdownDisplay[3] }}
        </div>
      </div>
      <div style="font-weight: 400; font-size: 14px; line-height: 20px; margin-top: 8px">
        剩余时间
      </div>
      <div style="margin-top: 24px">
        <div
          style="display: flex; justify-content: space-between; align-items: center; width: 284px"
        >
          <div
            style="
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 16px;
              color: var(--secondary-color);
            "
          >
            预测方向
          </div>
          <div
            v-if="!orderResult.betContent"
            style="
              padding: 4px 4px;
              background: rgb(23, 172, 0);
              border-radius: 3px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            上涨
          </div>
          <div
            style="
              padding: 4px 4px;
              background: rgb(255, 100, 100);
              border-radius: 3px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            v-else
          >
            下跌
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 284px;
            margin-top: 8px;
          "
        >
          <div
            style="
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 16px;
              color: var(--secondary-color);
            "
          >
            交易金额(USDT)
          </div>
          <div style="font-size: 13px; font-style: normal; font-weight: 700; line-height: 16px">
            {{ orderResult.betAmount }}
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 284px;
            margin-top: 8px;
          "
        >
          <div
            style="
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 16px;
              color: var(--secondary-color);
            "
          >
            盈利金额(USDT)
          </div>
          <div style="font-size: 13px; font-style: normal; font-weight: 700; line-height: 16px">
            {{ orderResult.rewardAmount }}
          </div>
        </div>
      </div>
      <div
        @click="clickClose"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 40px;
          margin-top: 24px;
          border-width: 0px;
          border-color: transparent;
          border-radius: 21px;
          font-size: 16px;
          color: #000;
          background: linear-gradient(
            306deg,
            var(--primary-border) 0%,
            var(--secondary-background) 100%
          );
        "
      >
        关闭
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import { useMainStore } from '@/store'
import { useUserStore } from '@/store/user'
import { useTradeStore } from '@/store/trade'
import { useRouter, useRoute } from 'vue-router'
import { showToast } from 'vant'
import { submitOption, getOrderList } from '@/api/option.js'
import { getOptionIssueList, getOptionCurrentIssue } from '@/api/option.js'
import {
  timeRangeCountdown,
  updateTimeRangeCountdown,
  currentTimeSpace
} from '@/utils/timeRangeCountdown.js'
import { _div, _mul, _toFixed } from '@/utils/decimal'
import LeftPopup from './component/leftPopup.vue'
import TradeOptionContract from './component/tradeOptionContract.vue'
import dayjs from 'dayjs'
import durationPlugin from 'dayjs/plugin/duration'

dayjs.extend(durationPlugin)

const mainStore = useMainStore()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const tradeStore = useTradeStore()
const router = useRouter()
const route = useRoute()
const timeSpace = ref([])
const form = reactive({
  type: '0',
  delegateType: 1
})
let interval = null
const { asset } = storeToRefs(userStore)
const userBalance = ref(0)
const orderAmount = ref(undefined)
const countdownCompleted = ref(false)
const orderResult = ref({})

const onSliderChange = () => {
  orderAmount.value = _toFixed(((userBalance.value / 100) * availableBalance.value).toFixed(0), 0)
}
const availableBalance = computed(() => {
  let tempValue = 0
  if (asset.value.length) {
    if (form.type == '0') {
      tempValue = asset.value.filter((item) => item.symbol === 'usdt')[0]?.availableAmount || 0
    } else {
      tempValue =
        asset.value.filter((item) => item.symbol === coinInfo.value.coin)[0]?.availableAmount || 0
    }
  }
  return tempValue
})
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const isEye = ref(true)
const coinInfo = ref({})
const showLeft = ref(false)
const currentTime = ref('')
const fetchOptionCurrentIssue = () => {
  getOptionCurrentIssue(
    coinInfo.value.coin,
    currentTimeSpace.value.optionId,
    currentTimeSpace.value.period
  ).then((res) => {
    const timestamp = res.data?.serverTimeStamp
    // console.log(timestamp, dayjs().valueOf(), timestamp - dayjs().valueOf());
  })
}
const handleGetOptionIssue = async () => {
  await getOptionIssueList(coinInfo.value.coin).then((res) => {
    timeSpace.value = res.data
    currentTimeSpace.value = res.data[0] || {}
  })
  fetchOptionCurrentIssue()
}
const countdownDisplay = ref('0000')
const showCenter = ref(false)
const clickClose = () => {
  showCenter.value = false
  countdownDisplay.value = '0000'
}
watch(showCenter, (open) => {
  console.log('open', open)
  if (!open) {
    countdownDisplay.value = '0000'
    interval && clearInterval(interval)
  }
})
const updateTime = () => {
  currentTime.value = dayjs().format('MM-DD HH:mm:ss')
}
// 初始化展示币种信息
const init = () => {
  if (route.query.symbol) {
    coinInfo.value = tradeStore.spotCoinList.filter((item, index) => {
      return item.coin === route.query.symbol
    })[0]
    if (!coinInfo.value) {
      coinInfo.value = tradeStore.spotCoinList[0]
    }
  } else {
    coinInfo.value = tradeStore.spotCoinList[0]
  }
}

// 监听路由展示对应币种信息
watch(
  () => route.query.symbol,
  (val) => {
    coinInfo.value = tradeStore.spotCoinList.filter((item) => {
      return item.coin === val
    })[0]
  },
  {
    deep: true
  }
) /**看涨 0涨 1跌 */
const showBtn = (betContent) => {
  // 倒计时完成
  countdownCompleted.value = false

  if (!orderAmount.value || orderAmount.value < currentTimeSpace.value.minAmount) {
    return showToast(`下单金额不能小于${currentTimeSpace.value.minAmount}USDT`)
  }
  if (orderAmount.value > currentTimeSpace.value.maxAmount) {
    return showToast(`下单金额不能大于${currentTimeSpace.value.maxAmount}USDT`)
  }

  let data = {
    betContent,
    betAmount: orderAmount.value,
    periodId: currentTimeSpace.value.id
  }

  submitOption(data).then((res) => {
    if (res.code === 500) {
      showToast(res.msg)
    } else {
      orderResult.value = res.data

      const targetCloseTime = orderResult.value.closeTime
      const currentTime = dayjs()
      const closeTimeObj = dayjs(targetCloseTime).add(13, 'hour')

      const duration = dayjs.duration(closeTimeObj.diff(currentTime))
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      let initialDuration = dayjs.duration({ minutes, seconds })

      const countdown = () => {
        // 每秒更新一次倒计时
        interval = setInterval(() => {
          // 将剩余时间格式化为mm ss的形式
          const minutes = initialDuration.minutes()
          const seconds = initialDuration.seconds()
          const formattedTime = `${String(minutes).padStart(2, '0')}${String(seconds).padStart(
            2,
            '0'
          )}`
          countdownDisplay.value = formattedTime
          // 判断倒计时是否结束
          if (initialDuration.asSeconds() <= 0) {
            clearInterval(interval)
            countdownCompleted.value = true
          } else {
            // 减少1秒
            initialDuration = initialDuration.subtract(1, 'second')
          }
        }, 1000)
      }

      // 启动倒计时
      countdown()

      getOrderListApi()

      showCenter.value = true
      console.log('zhixing', showCenter.value)
      userBalance.value = 0
    }
  })
}
const getOrderListApi = () => {
  getOrderList({ isHistory: currentEntruset.value }).then((res) => {
    historyNewList.value = res.rows || []
    if (!currentEntruset.value) {
      if (historyNewList.value.length) {
        setTimeout(() => {
          getOrderListApi()
        }, 1000 * 3)
      }
    }
  })
}
const historyNewList = ref([])
const currentEntruset = ref(0)
// 获取委托
const firstNum = ref(0)
const secondNum = ref(0)
const switchingEntrust = (e) => {
  currentEntruset.value = e
  historyNewList.value = []
  getOrderListApi()
}
onMounted(async () => {
  init()
  await handleGetOptionIssue()
  updateTime()
  const updateTimeTimer = setInterval(updateTime, 1000)
  updateTimeRangeCountdown()
  const updateTimeRangeCountdownTimer = setInterval(updateTimeRangeCountdown, 1000)
  onUnmounted(() => {
    clearInterval(updateTimeTimer)
    clearInterval(updateTimeRangeCountdownTimer)
  })
})
</script>
<style lang="scss" scoped>
.trade {
  padding: 20px 10px 0px;
  padding-bottom: 80px;
  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      &-info {
        display: flex;
        align-items: center;
        &-profile {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        &-price {
          .name {
            color: var(--primary-color);
            font-size: 12px;
            margin-bottom: 4px;
          }
          .text {
            display: flex;
            align-items: center;
            color: var(--secondary-color);
            font-size: 12px;
            .eys {
              display: flex;
              align-items: center;
              margin-left: 5px;
            }
          }
        }
      }
      &-price {
        font-size: 20px;
        color: var(--primary-color);
        margin-top: 10px;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      align-items: end;
      &-price {
        font-size: 18px;
        color: var(--primary-border);
      }
      &-text {
        margin-top: 20px;
        color: var(--secondary-color);
        font-size: 10px;
        span {
          margin-left: 5px;
        }
      }
    }
  }
  &-tab {
    margin-top: 15px;
    padding: 18px;
    background: var(--regular-background);
    border-radius: 29px 29px 29px 29px;
    border: 1px solid var(--primary-border);
    width: auto;
    display: flex;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &-item {
      width: auto;
      font-size: 14px;
      color: var(--secondary-color);
      cursor: pointer;
      flex-shrink: 0;
      margin-right: 30px;
    }
    .active {
      color: var(--primary-border);
    }
  }
  &-tip {
    margin-top: 15px;
    margin-bottom: 15px;
    background: var(--primary-border);
    box-shadow: inset 0px -4px 4px 0px var(--secondary-background);
    border-radius: 10px 10px 10px 10px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      flex: 1;
      display: flex;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
        margin-right: 10px;
      }
      .text {
        flex: 1;
        color: var(--primary-background);
        &-title {
          font-size: 22px;
          font-weight: 900;
        }
        &-desc {
          font-size: 14px;
        }
      }
    }
    &-right {
      border-radius: 16px 16px 16px 16px;
      border: 1px solid var(--primary-background);
      padding: 4px 11px;
      font-size: 12px;
      color: var(--primary-background);
    }
  }
  &-main {
    margin-top: 15px;
    background: var(--regular-background);
    border-radius: 8px 8px 8px 8px;
    padding: 14px;
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-left {
        display: flex;
        align-items: center;
        .icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        .name {
          margin-left: 5px;
          font-size: 12px;
          color: var(--secondary-color);
        }
        svg {
          margin-left: 5px;
        }
      }
      &-right {
        color: var(--secondary-color);
        font-size: 12px;
      }
    }
    .link {
      width: 100%;
      height: 1px;
      background: var(--placeholder-color);
      margin: 10px 0;
    }
    .input-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      width: 100%;
      height: 28px;
      border-radius: 6px 6px 6px 6px;
      border: 1px solid var(--primary-border);
      padding: 0 10px;

      input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        margin-right: 10px;
        color: var(--primary-color);
      }
    }
  }
  &-orderBox {
    margin-top: 15px;
    background: var(--regular-background);
    border-radius: 8px 8px 8px 8px;
    padding: 14px;
    &-tab {
      display: flex;
      align-items: center;
      &-item {
        color: var(--secondary-color);
        margin-right: 10px;
      }
      .active {
        color: var(--primary-color);
      }
    }
    &-list {
      &-item {
        width: 100%;
        margin-top: 10px;
        &-coll {
          font-size: 12px;
          color: var(--secondary-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          &-price {
            color: var(--primary-color);
          }
        }
        .line {
          margin: 10px 0;
          width: 100%;
          height: 1px;
          background: var(--placeholder-color);
        }
      }
    }
  }
}
:deep(.el-slider__button) {
  border: 2px solid var(--primary-border);
}
:deep(.el-slider__bar) {
  background: var(--primary-border);
}
.btn {
  position: fixed;
  bottom: 70px;
  left: 0;
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .rose {
    border-radius: 14px;
    width: 40%;
    height: 35px;
    background-color: rgba(23, 172, 0, 1);
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fall {
    border-radius: 14px;
    width: 40%;
    height: 35px;
    background-color: rgba(255, 100, 100, 1);
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.van-popup {
  background: var(--primary-color) !important;
  padding: 15px;
  color: var(--primary-background);
}
</style>
