<template>
  <div class="flash">
    <div class="flash-top">
      <div class="flash-top-left">
        <div class="flash-top-left-info">
          <div class="flash-top-left-info-profile">
            <img :src="path" alt="" />
          </div>
          <div class="flash-top-left-info-price">
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
                    d="M801.2 570.4l-0.1-0.1c-0.2-0.4-0.5-0.7-0.8-1.1 40.1-25.4 79.1-56.7 116.8-93.7 13.7-13.5 14.5-36.9 1.7-51.5-12.1-13.8-31.9-14.6-44.9-1.8-151.6 149-319.9 192.7-500.7 130.1-75.3-26.1-137.8-66.3-176.9-95.5-18.7-14-34.1-26.8-45.5-36.8-13.2-11.7-32.3-10.3-43.9 3.2l-1.2 1.4 1.1-1.3c-13.1 15.2-11.6 39.4 3.2 52.5 26.5 23.5 71.7 59.8 130.7 93.3-0.1 0.2-0.2 0.3-0.4 0.5-0.1 0.1-0.2 0.3-0.3 0.4-0.4 0.6-0.8 1.1-1.2 1.7l-0.1 0.1c-0.3 0.5-0.7 1.1-1 1.7-0.1 0.2-0.2 0.3-0.3 0.5-0.3 0.6-0.7 1.3-1 1.9l-51.8 115.6c-1.8 4-2.7 8.2-2.8 12.4v1.6c0.1 3.6 0.8 7.2 2.1 10.5 0.3 0.7 0.6 1.5 0.9 2.2 0.3 0.7 0.7 1.4 1 2 0.2 0.4 0.5 0.9 0.8 1.3 3.2 5.2 8 9.6 14.1 12.3 0.5 0.2 1 0.4 1.6 0.7 0.2 0.1 0.3 0.1 0.5 0.2 0.4 0.1 0.7 0.3 1.1 0.4 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0.1 0.5 0.1 0.7 0.2 0.3 0.1 0.6 0.2 0.9 0.2 0.2 0.1 0.5 0.1 0.7 0.1 0.3 0.1 0.6 0.1 0.9 0.2 0.2 0 0.5 0.1 0.7 0.1 0.3 0 0.6 0.1 0.9 0.1h2.2c0.6 0 1.2 0 1.8-0.1h0.2c0.7 0 1.3-0.1 2-0.2 0.2 0 0.3 0 0.5-0.1 0.6-0.1 1.1-0.2 1.7-0.3 0.1 0 0.2 0 0.3-0.1 0.7-0.1 1.3-0.3 1.9-0.5 0.2 0 0.3-0.1 0.4-0.1 0.5-0.2 1.1-0.3 1.6-0.5 0.1 0 0.2-0.1 0.4-0.1 0.6-0.2 1.2-0.5 1.9-0.8 0.1-0.1 0.3-0.1 0.4-0.2 0.5-0.2 1-0.5 1.5-0.8 0.1-0.1 0.2-0.1 0.3-0.2 0.5-0.3 1-0.6 1.4-1 0.1-0.1 0.2-0.2 0.4-0.3 0.5-0.4 1.1-0.8 1.6-1.3 0.1-0.1 0.2-0.2 0.3-0.2 0.4-0.4 0.9-0.8 1.3-1.2 0.1-0.1 0.2-0.2 0.4-0.3 0.5-0.5 0.9-1 1.4-1.5l0.2-0.2c0.4-0.5 0.8-0.9 1.2-1.4 0.1-0.1 0.2-0.3 0.3-0.4 0.4-0.6 0.8-1.1 1.2-1.7l0.1-0.1c0.3-0.5 0.7-1.1 1-1.7 0.1-0.2 0.2-0.3 0.3-0.5 0.3-0.6 0.7-1.3 1-1.9l16.1-35.8 35.8-79.8c0.7-1.5 1.2-3 1.6-4.5 17.4 7.9 35.7 15.4 54.7 22.1 14 4.9 28.1 9.3 42 13L369.9 776c-0.1 0.6-0.2 1.2-0.2 1.8-0.8 7.3 1 14.4 4.7 20.3l1.2 1.8 0.9 1.2c0.6 0.8 1.3 1.6 2 2.3l1.1 1.1c4.5 4.2 10.2 7.2 16.8 8.3 0.8 0.1 1.6 0.2 2.3 0.3h0.5c0.8 0.1 1.5 0.1 2.3 0.1h1.4c0.4 0 0.9 0 1.3-0.1h0.2c0.5 0 1-0.1 1.5-0.2 0.2 0 0.3 0 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.6-0.1 0.3-0.1 0.6-0.1 0.9-0.2 0.2 0 0.4-0.1 0.6-0.1 0.3-0.1 0.6-0.1 0.8-0.2 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.2 0.5-0.2 0.3-0.1 0.6-0.3 0.9-0.4 0.2-0.1 0.3-0.2 0.5-0.2 0.4-0.2 0.8-0.4 1.1-0.6 0.1 0 0.1-0.1 0.2-0.1 0.4-0.2 0.8-0.5 1.2-0.8 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.5-0.4 0.8-0.6 0.2-0.1 0.3-0.3 0.5-0.4 0.2-0.2 0.5-0.4 0.7-0.5 0.2-0.1 0.3-0.3 0.5-0.4l0.6-0.6c0.2-0.1 0.3-0.3 0.5-0.4l0.6-0.6 0.4-0.4c0.2-0.2 0.4-0.4 0.6-0.7l0.4-0.4c0.2-0.2 0.4-0.5 0.6-0.7 0.1-0.1 0.2-0.3 0.3-0.4 0.3-0.4 0.6-0.7 0.8-1.1l0.1-0.1c0.3-0.4 0.6-0.8 0.8-1.2 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.3-0.6 0.5-0.9 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.3 0.3-0.5 0.4-0.8l0.3-0.6c0.1-0.3 0.3-0.5 0.4-0.8l0.3-0.6c0.1-0.3 0.2-0.5 0.3-0.8 0.1-0.2 0.2-0.4 0.2-0.6 0.1-0.3 0.2-0.6 0.3-0.8 0.1-0.2 0.1-0.4 0.2-0.6l0.3-0.9c0.1-0.2 0.1-0.4 0.2-0.6 0.1-0.3 0.2-0.7 0.2-1 0-0.2 0.1-0.3 0.1-0.5l0.3-1.5 23.1-140.6c24.4 3.6 48.8 5.4 72.9 5.4 13.2 0 26.3-0.5 39.4-1.6l18.4 111.9 4 24.4 0.3 1.5c0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.2 0.7 0.2 1 0.1 0.2 0.1 0.4 0.2 0.6l0.3 0.9c0.1 0.2 0.1 0.4 0.2 0.6 0.1 0.3 0.2 0.6 0.3 0.8 0.1 0.2 0.2 0.4 0.2 0.6 0.1 0.3 0.2 0.5 0.3 0.8l0.3 0.6c0.1 0.3 0.2 0.5 0.4 0.8l0.3 0.6c0.1 0.3 0.3 0.5 0.4 0.8 0.1 0.2 0.2 0.3 0.3 0.5 0.2 0.3 0.3 0.6 0.5 0.9 0.1 0.1 0.2 0.3 0.2 0.4 0.3 0.4 0.5 0.8 0.8 1.2v0.1c0.3 0.4 0.5 0.8 0.8 1.1 0.1 0.1 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.5 0.6 0.8l0.4 0.4c0.2 0.2 0.4 0.4 0.6 0.7l0.4 0.4 0.6 0.6 0.4 0.4 0.6 0.6c0.2 0.1 0.3 0.3 0.5 0.4 0.2 0.2 0.4 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.2 0.2 0.5 0.4 0.7 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.2 0.5 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.4 0.3 0.8 0.5 1.2 0.8 0 0 0.1 0 0.1 0.1 0.4 0.2 0.8 0.4 1.1 0.6 0.1 0.1 0.3 0.1 0.4 0.2 0.3 0.1 0.6 0.3 0.9 0.4 0.2 0.1 0.4 0.2 0.5 0.2 0.3 0.1 0.5 0.2 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.2 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.8 0.2 0.2 0.1 0.4 0.1 0.6 0.1 0.3 0.1 0.6 0.1 0.9 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.3 0.1 0.5 0.1 0.5 0.1 1 0.1 1.5 0.2h0.2c0.4 0 0.9 0.1 1.3 0.1H622.4c0.8 0 1.5 0 2.3-0.1h0.5c0.8-0.1 1.6-0.2 2.3-0.3 9.3-1.5 16.9-6.9 21.7-14.2 0.8-1.3 1.6-2.6 2.2-4 0.4-0.9 0.8-1.9 1.2-2.9 0.5-1.5 0.9-3 1.2-4.5s0.5-3.1 0.5-4.7v-1.6c0-1.1-0.1-2.2-0.2-3.2-0.1-0.5-0.1-1.1-0.2-1.6L631.7 640c38.5-8.4 76.2-21.7 113.1-39.7 0.1 0.2 0.1 0.3 0.2 0.5l51.8 115.6c0.3 0.7 0.6 1.3 1 1.9 0.1 0.2 0.2 0.3 0.3 0.5 0.3 0.6 0.6 1.1 1 1.7l0.1 0.1c0.4 0.6 0.8 1.2 1.2 1.7 0.1 0.1 0.2 0.3 0.3 0.4 0.4 0.5 0.8 1 1.1 1.4l0.2 0.2c0.5 0.5 0.9 1 1.4 1.5 0.1 0.1 0.2 0.2 0.4 0.3 0.4 0.4 0.9 0.8 1.3 1.2 0.1 0.1 0.2 0.2 0.3 0.2 0.5 0.4 1 0.9 1.6 1.3 0.1 0.1 0.2 0.2 0.4 0.3 0.5 0.3 0.9 0.7 1.4 1 0.1 0.1 0.2 0.1 0.3 0.2 0.6 0.4 1.1 0.7 1.7 1 0.1 0.1 0.2 0.1 0.4 0.2 0.5 0.3 1 0.5 1.5 0.8 0.1 0.1 0.3 0.1 0.4 0.2 0.6 0.3 1.2 0.5 1.9 0.8 0.1 0 0.2 0.1 0.4 0.1 0.5 0.2 1.1 0.4 1.6 0.5 0.2 0 0.3 0.1 0.5 0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.1 0 0.2 0 0.3 0.1 0.6 0.1 1.1 0.2 1.7 0.3 0.2 0 0.3 0.1 0.5 0.1 0.7 0.1 1.3 0.2 2 0.2h0.2c0.6 0 1.2 0.1 1.8 0.1h2.2c0.3 0 0.6 0 0.9-0.1 0.2 0 0.5 0 0.7-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.5-0.1 0.7-0.1 0.3 0 0.6-0.1 0.9-0.2 0.2 0 0.5-0.1 0.7-0.1 0.3-0.1 0.6-0.1 0.9-0.2 0.2-0.1 0.5-0.1 0.7-0.2 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.4-0.1 0.7-0.2 1.1-0.4 0.2-0.1 0.3-0.1 0.5-0.2 0.5-0.2 1-0.4 1.6-0.7 16.1-7.2 23.3-26.2 16.1-42.3l-51.8-115.6c-0.3-0.7-0.6-1.3-1-1.9-0.1-0.2-0.2-0.3-0.3-0.5-0.4-0.5-0.7-1.1-1.1-1.7z"
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
        <div class="flash-top-left-price">
          <template v-if="isEye">
            {{ availableBalance }}
            <span style="font-size: 12px">USDT</span>
          </template>
          <template v-else>
            <span style="font-size: 12px">****</span>
          </template>
        </div>
      </div>
      <div class="flash-top-right"></div>
    </div>
    <div class="flash-tab">
      <div class="flash-tab-item" @click="router.push('/trade')">现货交易</div>
      <div class="flash-tab-item" @click="router.push('/contract')">合约交易</div>
      <div class="flash-tab-item active">秒合约</div>
      <div class="flash-tab-item" @click="router.push('/flashOption')">期权交易</div>
      <div class="flash-tab-item" @click="router.push('/floworder')">跟单交易</div>
    </div>
    <div class="flash-tip">
      <div class="flash-tip-left">
        <img src="../../assets/img/31.png" alt="" />
        <div class="text">
          <div class="text-title">智能代投</div>
<<<<<<< HEAD
          <div class="text-desc">智能分析市场趋势，实时监控价格波动，自动执行最优代投策略</div>
=======
          <div class="text-desc">定期利率低于活期</div>
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
        </div>
      </div>
      <div class="flash-tip-right" @click="router.push('/proxy')">立即前往</div>
    </div>
    <div class="flash-main">
      <div class="flash-main-top">
        <div class="flash-main-top-left" @click="showLeft = true">
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
        <div class="flash-main-top-right"></div>
      </div>
      <Candlestick :coinInfo="coinInfo" type="secondContract" />
    </div>
    <div class="flash-orderBox">
      <div class="flash-orderBox-tab">
        <div
          class="flash-orderBox-tab-item"
          @click="switchingEntrust(0)"
          :class="currentEntruset == 0 ? 'active' : ''"
        >
          <span>进行中</span>
        </div>
        <div
          class="flash-orderBox-tab-item"
          @click="switchingEntrust(1)"
          :class="currentEntruset == 1 ? 'active' : ''"
        >
          <span>历史记录</span>
        </div>
      </div>
      <div class="flash-orderBox-list">
        <template v-if="currentEntruset === 0">
          <template v-if="historyNewList.length > 0">
            <div v-for="itemHistroy in historyNewList" :key="itemHistroy.userId">
              <div style="display: flex; align-items: center; justify-content: space-between">
                <div style="display: flex; align-items: center">
                  <div
                    v-if="Number(itemHistroy.betContent)"
                    style="
                      padding: 2px 5px;
                      background: rgba(23, 172, 0, 1);
                      border-radius: 5px;
                      font-size: 10px;
                      margin-right: 5px;
                      color: #000;
                    "
                  >
                    看涨
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
                    看跌
                  </div>
                  <div>
                    {{
                      itemHistroy.showCoin
                        ? itemHistroy.showCoin
                        : itemHistroy.coinSymbol.toUpperCase() +
                          '/' +
                          itemHistroy.baseSymbol.toUpperCase()
                    }}-{{ itemHistroy.type }}s
                  </div>
                </div>
              </div>
              <div style="font-size: 10px; color: rgb(153, 153, 153); margin-top: 10px">
                {{ itemHistroy?.createTime }}
              </div>
              <div class="flash-orderBox-list-item">
                <div>开单金额</div>
                <div class="flash-orderBox-list-item-price">{{ itemHistroy.openPrice }}USDT</div>
              </div>
              <div class="flash-orderBox-list-item">
                <div>收益率</div>
                <div class="flash-orderBox-list-item-price">{{ itemHistroy.rate * 100 }}%</div>
              </div>
              <div class="flash-orderBox-list-item">
                <div>收益</div>
                <div class="flash-orderBox-list-item-price">
                  {{
                    formatExpectedProfit(
                      Number(itemHistroy.betContent),
                      itemHistroy.openPrice,
                      tradeStore.allCoinPriceInfo[itemHistroy.coinSymbol].close,
                      itemHistroy.betAmount,
                      itemHistroy.rate
                    )
                  }}
                  {{ itemHistroy.baseSymbol ? itemHistroy.baseSymbol.toUpperCase() : '' }}
                </div>
              </div>
              <div class="flash-orderBox-list-item">
                <div>
                  <span style="color: rgb(186, 236, 87)">
                    {{ formatTime(itemHistroy.countdown) }}
                  </span>
                </div>
                <div style="width: calc(100% - 60px)">
                  <div style="width: 100%; display: flex; flex-direction: row; align-items: center">
                    <div
                      style="
                        height: 3.5px;
                        border-radius: 3.5px;
                        background: #f5f5f5;
                        width: 100%;
                        transform: translateZ(0);
                        flex: 1;
                        position: relative;
                        overflow: hidden;
                      "
                    >
                      <div
                        class="fun-progress_bar"
                        :style="{
                          background: 'rgb(186, 236, 87)',
                          transitionDuration: '0.025s',
                          transform: `translate3d(-${calculateProgress(itemHistroy)}%, 0px, 0px)`
                        }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </template>
          <template v-else>
            <NoData />
          </template>
        </template>
        <template v-if="currentEntruset === 1">
          <template v-if="historyNewList.length > 0">
            <div
              v-for="itemHistroy in historyNewList"
              @click="handleShowCenter(itemHistroy)"
              :key="itemHistroy.userId"
            >
              <div style="display: flex; align-items: center; justify-content: space-between">
                <div style="display: flex; align-items: center">
                  <div
                    v-if="Number(itemHistroy.betContent)"
                    style="
                      padding: 2px 5px;
                      background: rgba(23, 172, 0, 1);
                      border-radius: 5px;
                      font-size: 10px;
                      margin-right: 5px;
                      color: #000;
                    "
                  >
                    看涨
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
                    看跌
                  </div>
                  <div>
                    {{
                      itemHistroy.showCoin
                        ? itemHistroy.showCoin
                        : itemHistroy.coinSymbol.toUpperCase() +
                          '/' +
                          itemHistroy.baseSymbol.toUpperCase()
                    }}-{{ itemHistroy.type }}s
                  </div>
                </div>
              </div>
              <div style="font-size: 10px; color: rgb(153, 153, 153); margin-top: 10px">
                {{ returnTime(itemHistroy?.createTime) }}
              </div>
              <div class="flash-orderBox-list-item">
                <div>开单币种</div>
                <div class="flash-orderBox-list-item-price">
                  {{
                    itemHistroy.showCoin
                      ? itemHistroy.showCoin
                      : itemHistroy.coinSymbol.toUpperCase() +
                        '/' +
                        itemHistroy.baseSymbol.toUpperCase()
                  }}
                </div>
              </div>
              <div class="flash-orderBox-list-item">
                <div>收益率</div>
                <div class="flash-orderBox-list-item-price">{{ itemHistroy.rate * 100 }}%</div>
              </div>
              <div class="flash-orderBox-list-item">
                <div>盈亏</div>
                <div class="flash-orderBox-list-item-price">
                  {{ profitAndloss(itemHistroy.betAmount, itemHistroy.rewardAmount) }}
                  {{ itemHistroy.baseSymbol ? itemHistroy.baseSymbol.toUpperCase() : '' }}
                </div>
              </div>
              <div class="line"></div>
            </div>
          </template>
          <template v-else>
            <NoData />
          </template>
        </template>
      </div>
    </div>
    <div class="flash-btn">
      <div class="fall" @click="showBtn(0)">看跌</div>
      <div class="rose" @click="showBtn(1)">看涨</div>
    </div>
  </div>
  <LeftPopup :showLeft="showLeft" @close="showLeft = false" />
  <van-popup v-model:show="showOrder" round position="bottom">
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div></div>
      <div style="font-size: 14px">购买（{{ coinInfo.showSymbol }}）</div>
      <div>
        <svg
          @click="showOrder = !showOrder"
          t="1747853459405"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1494"
          width="24"
          height="24"
        >
          <path
            d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
            p-id="1495"
            fill="#000"
          ></path>
        </svg>
      </div>
    </div>
    <div class="box">
      <div class="cycle">
        <div class="cycle-title">交割周期</div>
        <div class="cycle-box">
          <div
            :class="['cycle-box-item', cycleIndex === index && 'tagBtn-selected']"
            v-for="(item, index) in cycleList"
            :key="index"
            @click="onClickTab(index)"
          >
            <div>{{ getItemPeriod(item) }}</div>
            <div>收益{{ _mul(item.odds, 100) }}%</div>
          </div>
        </div>
      </div>
      <div class="cycle">
        <div class="cycle-title">购买数量</div>
        <div class="input-box">
          <img style="height: 36px; width: 36px" src="../../assets/img/dollar.png" alt="" />
          <input
            v-model.trim="quantity"
            type="number"
            maxlength="140"
            :placeholder="`${t(`least`, ['ebc', 'aams'])} ${
              ['aams'].includes(_getConfig('_APP_ENV'))
                ? 100
                : cycleObj && cycleObj.minAmount
                  ? cycleObj.minAmount
                  : 0
            } ${['aams'].includes(_getConfig('_APP_ENV')) ? 'USD' : 'USDT'}`"
            style="color: #000000 !important"
          />
        </div>
        <div
          style="
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-flow: wrap;
            justify-content: space-between;
          "
        >
          <div
            v-for="(item, index) in quantityList"
            @click="chooseNums(item.name)"
            :class="
              selectAll
                ? item.name === all
                  ? 'color-white'
                  : 'color-gray'
                : Number(quantity) === Number(item.name)
                  ? 'color-white'
                  : 'color-gray'
            "
            style="
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: calc(25% - 10px);
              height: 30px;
              margin-top: 10px;
              border-radius: 8px;
              background-color: rgb(240, 240, 240);
            "
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: center">
        <div class="btn2" @click="determine">立即购买</div>
      </div>
    </div>
  </van-popup>
  <van-dialog
    v-model:show="showMessage"
    :message="message"
    :title="t('system_tip')"
    :confirmButtonText="t('confirm')"
    :cancelButtonText="t('cancel')"
    show-cancel-button
  ></van-dialog>
  <van-popup v-model:show="showCenter" round>
    <div style="width: 300px; height: auto; display: flex; flex-direction: column">
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px"
      >
        <div></div>
        <div style="font-size: 14px">
          {{
            centerData.showCoin
              ? centerData.showCoin
              : centerData.coinSymbol.toUpperCase() + '/' + centerData.baseSymbol.toUpperCase()
          }}
        </div>
        <div>
          <svg
            @click="showCenter = !showCenter"
            t="1747853459405"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1494"
            width="24"
            height="24"
          >
            <path
              d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
              p-id="1495"
              fill="#000"
            ></path>
          </svg>
        </div>
      </div>
      <div style="color: rgba(153, 153, 153, 1); font-size: 12px; margin-top: 10px">
        {{ centerData.createTime }}
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px"
      >
        <div style="color: rgba(153, 153, 153, 1); font-size: 12px">开单方向</div>
        <div style="color: #000; font-size: 12px">
          <template v-if="Number(centerData.betContent)">看涨</template>
          <template v-else>看跌</template>
        </div>
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px"
      >
        <div style="color: rgba(153, 153, 153, 1); font-size: 12px">盈亏</div>
        <div style="color: #000; font-size: 12px">
          {{ profitAndloss(centerData.betAmount, centerData.rewardAmount) }}
          {{ centerData.baseSymbol ? centerData.baseSymbol.toUpperCase() : '' }}
        </div>
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px"
      >
        <div style="color: rgba(153, 153, 153, 1); font-size: 12px">开单价/结算价</div>
        <div style="color: #000; font-size: 12px">
          {{ centerData.openPrice }} / {{ centerData.closePrice }}
        </div>
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px"
      >
        <div style="color: rgba(153, 153, 153, 1); font-size: 12px">开单价币种</div>
        <div style="color: #000; font-size: 12px">
          {{
            centerData.showCoin
              ? centerData.showCoin
              : centerData.coinSymbol.toUpperCase() + '/' + centerData.baseSymbol.toUpperCase()
          }}
        </div>
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px"
      >
        <div style="color: rgba(153, 153, 153, 1); font-size: 12px">收益率</div>
        <div style="color: #000; font-size: 12px">{{ centerData.rate * 100 }} %</div>
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px"
      >
        <div style="color: rgba(153, 153, 153, 1); font-size: 12px">本期结果</div>
        <div style="color: #000; font-size: 12px">
          {{ getType(profitAndloss(centerData.betAmount, centerData.rewardAmount)) }}
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import dayjs from 'dayjs'
import { useRoute, useRouter } from 'vue-router'
import { useTradeStore } from '@/store/trade'
import { useMainStore } from '@/store'
import { priceFormat } from '@/utils/decimal.js'
import Candlestick from './component/candlestick.vue'
import LeftPopup from './component/leftPopup.vue'
import { useUserStore } from '@/store/user/index'
import { _mul, _toFixed } from '@/utils/decimal'
import { useI18n } from 'vue-i18n'
import { DIFF_FREEZE_ASSETS } from '@/config/index'
import {
  createSecondContractOrder,
  getPeriodList,
  secondContractOrderselectOrderList
} from '@/api/trade/index'
import { _timeFormat } from '@/utils/public'
import { formatExpectedProfit, formatTime, profitAndloss } from '@/utils/filters'

const { t } = useI18n()
const userStore = useUserStore()
const mainStore = useMainStore()
const { asset, userInfo } = storeToRefs(userStore)
const tradeStore = useTradeStore()
const $route = useRoute()
const router = useRouter()
const isEye = ref(true)
const showLeft = ref(false)
const showTotal = ref(false)
const firstNum = ref(0)
const secondNum = ref(0)
const earnTotal = ref(0)
const coinInfo = ref({})
const showOrder = ref(false)
const searchName = ref('')
const currentList = ref(tradeStore.secondContractCoinList)
const cycleList = ref([]) // 周期列表
const cycleObj = ref({})
const quantity = ref('')
const titleFlag = ref(1)
const cycleIndex = ref(0)
const currentRate = ref(0) // 倒计时
const selectAll = ref(false)
const showMessage = ref(false)
const message = ref('')
const historyList = ref([])
const historyNewList = ref([])
const currentEntruset = ref(0) // 委托状态 0 进行中 1 完成
const all = ref(t(`all`, ['ebc']))
const availableBalance = computed(() => {
  let tempValue = 0
  if (asset.value.length) {
    tempValue = asset.value.filter((item) => item.symbol === 'usdt')[0]?.availableAmount || 0
  }
  return tempValue
})
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const coinPriceInfo = computed(() => {
  return tradeStore.allCoinPriceInfo[coinInfo.value.coin] || {}
})

function calculateProgress(item) {
  const totalTime = item.time // 总时长为 10 秒
  const progress = (item.countdown / totalTime) * 100
  return progress
}
// 监听路由展示对应币种信息
watch(
  () => $route.query.symbol,
  (val) => {
    coinInfo.value = tradeStore.spotCoinList.filter((item) => {
      return item.coin === val
    })[0]
  },
  {
    deep: true
  }
)
const assetDetails = computed(() => {
  let list = []
  //[{icon: 'usdt', title: 'USDT', keyong: 100, zhanyong: 100, zhehe: 100}]
  asset.value.forEach((item) => {
    // 之前两块多平台判断逻辑是一样的 -> 精简合并
    let obj = {}
    obj['keyong'] = priceFormat(item.availableAmount)
    // rxce冻结金额=占用+冻结
    if (DIFF_FREEZE_ASSETS.includes(__config._APP_ENV)) {
      let temp = 0
      if (freezeList.value) {
        freezeList.value.forEach((itm) => {
          if (itm.coin == item.symbol && item.type == 1) {
            temp = itm.price
          }
        })
      }
      obj['zhanyong'] = priceFormat(_add(item.occupiedAmount, temp))
    } else {
      obj['zhanyong'] = priceFormat(item.occupiedAmount)
    }
    obj['zhehe'] = priceFormat(item.exchageAmount)
    if (item.symbol == 'usdt') {
      obj['icon'] = 'usdt'
      obj['loge'] = item.loge
      obj['title'] = 'USDT'
      list.unshift(obj)
    } else {
      obj['loge'] = item.loge
      obj['title'] = item.symbol?.replace('usdt', '').trim().toLocaleUpperCase()
      obj['icon'] = item.symbol?.replace('usdt', '').trim()
      list.push(obj)
    }
  })
  return list
})

// 计算账户余额
const amountSum = computed(() => {
  let sum = 0
  for (let i = 0; i < assetDetails.value.length; i++) {
    sum += Number(assetDetails.value[i].zhehe)
  }
  return sum.toLocaleString()
})

const _getConfig = (key) => {
  let value = ''
  if (key) {
    value = window.__config[key] || ''
  }
  return value
}
const quantityList = ref([
  {
    name: '100',
    show: true
  },
  {
    name: '500',
    show: true
  },
  {
    name: '1000',
    show: true
  },
  {
    name: '2000',
    show: true
  },
  {
    name: '5000',
    show: true
  },
  {
    name: '10000',
    show: true
  },
  {
    name: '20000',
    show: true
  },
  // 全部
  {
    name: all.value,
    show: true
  }
])
const getType = (value) => {
  if (value > 0) {
    return t('profits')
  } else if (value < 0) {
    return t('loss')
  } else {
    return t('flat')
  }
}

const showBtn = (e) => {
  availableBalance.value =
    asset.value.filter((item) => {
      return item.symbol === 'usdt'
    })[0].availableAmount + ''
  quantity.value = ''
  titleFlag.value = e // 1涨 0 跌
  showOrder.value = true
  cycleIndex.value = 0
  currentRate.value = 0
  selectAll.value = false
  getCycleList()
}

const getItemPeriod = (item) => {
  if (item.period >= 3600) {
    return item.period / 3600 + 'h'
  } else {
    return item.period + 's'
  }
}

const fifterTimeDown = (data) => {
  if (data.length > 0) {
    if (!currentEntruset.value) {
      data.forEach((element, i) => {
        if (element.time <= 0) {
          data.splice(i, 1)
        }
      })
    }
    return data
  } else {
    return data
  }
}
const currentDate = ref(dayjs().format('YYYY-MM-DD'))
const getList = async (status) => {
  const res = await secondContractOrderselectOrderList({ status: status })
  if (res.code === 200) {
    const result = res.data
    if (status) {
      secondNum.value = result.filter((item) => item.createTime.includes(currentDate.value)).length
      earnTotal.value = result.reduce((accumulator, currentValue) => {
        if (currentValue.createTime.includes(currentDate.value)) {
          return (
            accumulator + Number(profitAndloss(currentValue.betAmount, currentValue.rewardAmount))
          )
        } else {
          return accumulator
        }
      }, 0)
    } else {
      firstNum.value = result.length
    }
    historyList.value = fifterTimeDown(result)
    historyNewList.value = historyList.value

    if (!status) {
      historyNewList.value.forEach((item) => {
        item.countdown = item.time ? item.time : 0
        item.flag = true
        item.isUpdate = false

        watchEffect(() => {
          if (item.countdown >= 0) {
            item.isUpdate = true
            setTimeout(() => {
              item.countdown--
            }, 1000)
          } else {
            if (!currentEntruset.value && item.countdown !== 0 && item.flag) {
              getList(currentEntruset.value)
              if (item.isUpdate) {
                item.isUpdate = false
                getNumber(1)
                getList(currentEntruset.value)
              }
            }
          }
        })
      })
    }
  } else {
  }
}

const onClickTab = (index) => {
  cycleIndex.value = index
  cycleObj.value = cycleList.value[index]
}

const getCycleList = async () => {
  try {
    const res = await getPeriodList({ secondId: coinInfo.value.id })
    console.log('res', res)
    if (res.code === 200) {
      cycleList.value = res.data
      console.log('cycleList', cycleList.value)
      cycleObj.value = cycleList.value[0]
    }
  } catch (error) {
    console.log(error)
  }
}

const initVoinInfo = () => {
  if ($route.query.symbol) {
    coinInfo.value = tradeStore.secondContractCoinList.filter((item, index) => {
      return item.coin === $route.query.symbol
    })[0]
    if (!coinInfo.value) {
      coinInfo.value = tradeStore.secondContractCoinList[0]
    }
  } else {
    coinInfo.value = tradeStore.secondContractCoinList[0]
  }
}
const showCenter = ref(false)
const centerData = ref({})
const handleShowCenter = (value) => {
  centerData.value = value
  showCenter.value = true
}
const returnTime = (time) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  console.log('timeZone', timeZone)
  const timePart = time.split(' ')[1]
  return timePart.split(':').slice(0, 2).join(':')
}
onMounted(() => {
  initVoinInfo()
  if (['gmdoin'].includes(__config._APP_ENV)) {
    quantityList.value = [
      {
        name: '100',
        show: true
      },
      {
        name: '5000',
        show: true
      },
      {
        name: '20000',
        show: true
      },
      {
        name: '50000',
        show: true
      },
      {
        name: '100000',
        show: true
      },
      {
        name: '200000',
        show: true
      },
      {
        show: false
      },
      // 全部
      {
        name: all.value,
        show: true
      }
    ]
  } else if (['gmtoin'].includes(__config._APP_ENV)) {
    quantityList.value = [
      {
        name: '100',
        show: true
      },
      {
        name: '5000',
        show: true
      },
      {
        name: '20000',
        show: true
      },
      {
        name: '50000',
        show: true
      },
      {
        name: '100000',
        show: true
      },
      {
        name: '200000',
        show: true
      },
      {
        name: '500000',
        show: true
      },
      // 全部
      {
        name: all.value,
        show: true
      }
    ]
  } else if (['bitfly'].includes(__config._APP_ENV)) {
    quantityList.value = [
      {
        name: '200',
        show: true
      },
      {
        name: '500',
        show: true
      },
      {
        name: '1000',
        show: true
      },
      {
        name: '5000',
        show: true
      },
      {
        name: '10000',
        show: true
      },
      {
        name: '50000',
        show: true
      },
      {
        name: '100000',
        show: true
      },
      // 全部
      {
        name: all.value,
        show: true
      }
    ]
  } else if (['rxce'].includes(__config._APP_ENV)) {
    quantityList.value = [
      {
        name: '100',
        show: true
      },
      {
        name: '300',
        show: true
      },
      {
        name: '500',
        show: true
      },
      {
        name: '1000',
        show: true
      },
      {
        name: '2000',
        show: true
      },
      {
        name: '3000',
        show: true
      },
      {
        name: '5000',
        show: true
      },
      {
        name: '10000',
        show: true
      },
      // 全部
      {
        name: all.value,
        show: true
      }
    ]
  } else if (['trustwallet', 'gatedefi'].includes(__config._APP_ENV)) {
    quantityList.value = [
      {
        name: '500',
        show: true
      },
      {
        name: '1000',
        show: true
      },
      {
        name: '1500',
        show: true
      },
      {
        name: '2000',
        show: true
      },
      {
        name: '3000',
        show: true
      },
      {
        name: '4000',
        show: true
      },
      {
        name: '5000',
        show: true
      },
      // 全部
      {
        name: all.value,
        show: true
      }
    ]
  } else if (['hfm2'].includes(__config._APP_ENV)) {
    quantityList.value = [
      {
        name: '100',
        show: true
      },
      {
        name: '500',
        show: true
      },
      {
        name: '1000',
        show: true
      },
      {
        name: '2000',
        show: true
      },
      {
        name: '8000',
        show: true
      },
      {
        name: '10000',
        show: true
      },
      {
        name: '15000',
        show: true
      },
      // 全部
      {
        name: all.value,
        show: true
      }
    ]
  }
  getList(0)
  getNumber(1)
})

const chooseNums = (e) => {
  if (e === all.value) {
    quantity.value = availableBalance.value
    selectAll.value = true
  } else {
    quantity.value = e
    selectAll.value = false
  }
}

const determine = async () => {
  if (Number(quantity.value) < cycleObj.value.minAmount) {
    // 最少输入
    showOrder.value = false
    showMessage.value = true
    message.value = `${t(`minimum_input`)} ${cycleObj.value.minAmount} USDT`
    return
  }
  if (Number(quantity.value) > cycleObj.value.maxAmount) {
    showOrder.value = false
    showMessage.value = true
    message.value = `${t(`Maximum_input`)} ${cycleObj.value.maxAmount} USDT`
    return
  }
  if (Number(quantity.value) > availableBalance.value) {
    showOrder.value = false
    showMessage.value = true
    message.value = t(`Input_amount_exceeds`)
    return
  }
  let data = {
    betContent: titleFlag.value,
    betAmount: quantity.value,
    openPrice: coinPriceInfo.value.close,
    openTime: new Date().getTime(),
    symbol: coinInfo.value.symbol,
    coinSymbol: coinInfo.value.coin,
    baseSymbol: 'usdt',
    periodId: cycleObj.value.id
  }

  try {
    const res = await createSecondContractOrder(data)
    if (res.code === 200) {
      showOrder.value = false
      showMessage.value = true
      message.value = t('order_success')
      updateList()
    } else {
      showOrder.value = false
      showMessage.value = true
      message.value = res.msg
    }
  } catch (error) {
    console.log(error)
  }
}

const getNumber = async (status) => {
  try {
    const res = await secondContractOrderselectOrderList({ status: status })
    if (res.code === 200) {
      const result = res.data
      if (status) {
        secondNum.value = result.length
        earnTotal.value = result.reduce((accumulator, currentValue) => {
          return (
            accumulator + Number(profitAndloss(currentValue.betAmount, currentValue.rewardAmount))
          )
        }, 0)
      } else {
        firstNum.value = result.length
      }
    }
  } catch (error) {
    console.log(error)
  }
}

const switchingEntrust = (e) => {
  currentEntruset.value = e
  historyNewList.value = []
  getList(e)
}

const updateList = () => {
  historyNewList.value = []
  getList(currentEntruset.value)
}
</script>
<style lang="scss" scoped>
.flash {
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
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            margin-bottom: 4px;
          }
          .text {
            display: flex;
            align-items: center;
            color: rgba(153, 153, 153, 1);
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
        color: #fff;
        margin-top: 10px;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      align-items: end;
      &-price {
        font-size: 18px;
        color: rgba(186, 236, 87, 1);
      }
      &-text {
        margin-top: 20px;
        color: rgba(153, 153, 153, 1);
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
    background: rgba(255, 255, 255, 0.07);
    border-radius: 29px 29px 29px 29px;
    border: 1px solid rgba(186, 236, 87, 0.26);
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
      color: rgba(153, 153, 153, 1);
      cursor: pointer;
      flex-shrink: 0;
      margin-right: 30px;
    }
    .active {
      color: rgba(186, 236, 87, 1);
    }
  }
  &-tip {
<<<<<<< HEAD
    margin-bottom: 15px;
=======
    margin-top: 15px;
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
    background: #baec57;
    box-shadow: inset 0px -4px 4px 0px #d7ff89;
    border-radius: 10px 10px 10px 10px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
<<<<<<< HEAD
      flex: 1;
=======
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
      display: flex;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
        margin-right: 10px;
      }
      .text {
<<<<<<< HEAD
        flex: 1;
=======
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
        color: #000;
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
      border: 1px solid #000000;
      padding: 4px 11px;
      font-size: 12px;
      color: #000;
    }
  }
  &-main {
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.07);
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
          color: rgba(153, 153, 153, 1);
        }
        svg {
          margin-left: 5px;
        }
      }
    }
  }
  &-orderBox {
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 8px 8px 8px 8px;
    padding: 14px;
    &-tab {
      display: flex;
      align-items: center;
      &-item {
        color: rgb(153, 153, 153);
        margin-right: 10px;
      }
      .active {
        color: #fff;
      }
    }
    &-list {
      margin-top: 10px;
      &-item {
        font-size: 12px;
        color: rgb(153, 153, 153);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        &-price {
          color: #fff;
        }
      }
      .line {
        margin: 10px 0;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
  &-btn {
    position: fixed;
    bottom: 10px;
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
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fall {
      border-radius: 14px;
      width: 40%;
      height: 35px;
      background-color: rgba(255, 100, 100, 1);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.van-popup {
  background: #fff !important;
  padding: 15px;
  color: #000;
}
.box {
  background: rgb(251, 251, 251);
  border-radius: 9px;
  padding: 10px 15px;
  margin-top: 20px;
  .cycle {
    margin-top: 15px;
    &-title {
      font-size: 14px;
      color: #000;
      margin-bottom: 10px;
    }
    .input-box {
      margin-top: 15px;
      height: 46px;
      border-radius: 10px;
      display: flex;
      align-items: center;
    }
    &-box {
      overflow-x: auto;
      white-space: nowrap;
      padding-bottom: 5px;
      /* 隐藏滚动条 */
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 和 Edge */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari 和 Opera */
      }
      &-item {
        display: inline-block;
        width: 120px;
        height: auto;
        background-color: rgb(240, 240, 240);
        border-radius: 8px;
        padding: 10px;
        text-align: center;
        box-sizing: border-box;
        margin-right: 10px;
        vertical-align: top;
        white-space: normal;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .tagBtn-selected {
    background: rgb(0, 0, 0) !important;
    color: rgb(186, 236, 87) !important;
  }
}
.color-white {
  background: rgba(0, 0, 0, 1) !important;
  color: rgba(186, 236, 87, 1) !important;
}
.color-gray {
  background: rgba(240, 240, 240, 1) !important;
  color: #000 !important;
}
.btn2 {
  margin-top: 30px;
  width: 347px;
  height: 41px;
  background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
  border-radius: 21px 21px 21px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
.fun-progress_bar {
  width: 100%;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translate3d(-100%, 0, 0);
  transition-delay: 0s;
  transition-property: transform;
  transition-timing-function: linear;
  transition-duration: 0s;
}
</style>
