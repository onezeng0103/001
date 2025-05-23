<template>
  <div class="contract">
    <div class="contract-top">
      <div class="contract-top-left">
        <div class="contract-top-left-info">
          <div class="contract-top-left-info-profile">
            <img :src="path" alt="" />
          </div>
          <div class="contract-top-left-info-price">
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
        <div class="contract-top-left-price">
          <template v-if="isEye">
            {{ availableBalance }}
          </template>
          <template v-else>****</template>

          <span style="font-size: 12px">USDT</span>
        </div>
      </div>
      <div class="contract-top-right"></div>
    </div>
    <div class="contract-tab">
      <div class="contract-tab-item" @click="router.push('/trade')">现货交易</div>
      <div class="contract-tab-item active">合约交易</div>
      <div class="contract-tab-item" @click="router.push('/flash')">秒合约</div>
      <div class="contract-tab-item">期权交易</div>
    </div>
    <div class="contract-tip">
      <div class="contract-tip-left">
        <img src="../../assets/img/31.png" alt="" />
        <div class="text">
          <div class="text-title">智能代投</div>
          <div class="text-desc">定期利率低于活期</div>
        </div>
      </div>
      <div class="contract-tip-right" @click="router.push('/proxy')">立即前往</div>
    </div>
    <div class="contract-main">
      <div class="contract-main-top">
        <div class="contract-main-top-left" @click="showLeft = true">
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
      </div>
      <div class="contract-main-tip">
        <div class="contract-main-tip-item">
          <div class="contract-main-tip-item-name">价格</div>
          <div class="contract-main-tip-item-symbol">{{ coinInfo.baseCoinUpperCase }}</div>
        </div>
        <div class="contract-main-tip-item">
          <div class="contract-main-tip-item-name">成交量</div>
          <div class="contract-main-tip-item-symbol">
            {{
              coinInfo.customizeFlag === 2
                ? matchText(coinInfo.showSymbol, '/USDT')
                : coinInfo.coinUpperCase
            }}
          </div>
        </div>
      </div>
      <div class="data-list">
        <div class="data-list-item" v-for="(item, index) in rows" :key="`asks${index}`">
          <div
            class="bg-box bg-green"
            :style="`width:${_toFixed(
              _mul(_div(asksList[index]?.count || 0, maxBidCount), 100),
              2
            )}%;`"
          ></div>
          <span class="font-10 font-weight">
            {{ priceFormat(asksList[index]?.price) }}
          </span>
          <span class="font-10 font-weight color-black">
            {{ countFormat(asksList[index]?.count) }}
          </span>
        </div>
      </div>
      <div class="data-center">
        <span class="font-14 font-weight price_up">
          {{ priceFormat(tradeDetailInfo?.close) }}
        </span>
        <div class="flex align-center">
          <span class="font-10 font-weight color-gray">≈$</span>
          <spa class="font-10 color-black pl-5">{{ tradeDetailInfo?.close }}</spa>
        </div>
      </div>
      <div class="data-list">
        <div class="data-list-item" v-for="(item, index) in rows" :key="`bids${index}`">
          <div
            class="bg-box bg-red"
            :style="`width:${_toFixed(
              _mul(_div(bidsList[index]?.count || 0, maxBidCount), 100),
              2
            )}%;`"
          ></div>
          <span class="font-10 font-weight">
            {{ priceFormat(bidsList[index]?.price) }}
          </span>
          <span class="font-10 font-weight color-black">
            {{ countFormat(bidsList[index]?.count) }}
          </span>
        </div>
      </div>
      <div class="leverage">
        <div
          class="leverage-item"
          @click="selectNum(item)"
          :class="item.name === transactionNum ? 'active' : ''"
          v-for="(item, index) in numList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="contract-main-tab">
        <div
          :class="transactionLabel === 1 ? 'actives' : ''"
          class="contract-main-tab-item"
          @click="onSelect(1)"
        >
          市价委托
        </div>
        <div
          :class="transactionLabel === 0 ? 'actives' : ''"
          class="contract-main-tab-item"
          @click="onSelect(0)"
        >
          限价委托
        </div>
      </div>
      <div class="contract-main-input" v-if="!transactionLabel">
        <input type="number" v-model.trim="delegatePrice" :placeholder="`价格`" maxlength="140" />
      </div>
      <div class="contract-main-input">
        <input
          type="number"
          v-model.trim="delegateTotal"
          :placeholder="`数量(手)`"
          maxlength="140"
        />
      </div>
      <div>
        <div
          class="slider-box"
          style="padding: 0 10px; height: 30px; margin-top: 20px; position: relative"
        >
          <van-slider
            active-color="#c4eb6e"
            inactive-color="#232323"
            button-size="16"
            v-model="sliderValue"
          />
          <div
            :style="{
              top: '15px',
              left: '4px',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignOIems: 'center',
              justifyContent: 'space-between',
              position: 'absolute'
            }"
          >
            <span class="font-10 app-font" :class="sliderValue >= 0 ? 'color-black' : ''">0%</span>
            <span class="font-10 app-font" :class="sliderValue >= 25 ? 'color-black' : ''">
              25%
            </span>
            <span class="font-10 app-font" :class="sliderValue >= 50 ? 'color-black' : ''">
              50%
            </span>
            <span class="font-10 app-font" :class="sliderValue >= 75 ? 'color-black' : ''">
              75%
            </span>
            <span class="font-10 app-font" :class="sliderValue >= 100 ? 'color-black' : ''">
              100%
            </span>
          </div>
        </div>
      </div>
      <div
        style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px"
      >
        <div style="display: flex; flex-direction: column; align-items: center">
          <div style="color: #fff; font-size: 14px">
            {{ bearableValue ? _toFixed(bearableValue, 4) : 0 }}
            {{
              coinInfo.customizeFlag === 2
                ? matchText(coinInfo.showSymbol, '/USDT')
                : coinInfo.coin?.toUpperCase()
            }}
          </div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 10px; margin-top: 5px">可空开</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center">
          <div style="color: #fff; font-size: 14px">{{ _toFixed(marginValue, 4) }} USDT</div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 10px; margin-top: 5px">保证金</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center">
          <div style="color: #fff; font-size: 14px">
            {{ coinInfo.shareNumber }}
            {{
              coinInfo.customizeFlag === 2
                ? matchText(coinInfo.showSymbol, '/USDT')
                : coinInfo.coin?.toUpperCase()
            }}
            / {{ t('number') }}
          </div>
          <div style="color: rgba(153, 153, 153, 1); font-size: 10px; margin-top: 5px">
            合约面值
          </div>
        </div>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          justify-content: space-between;
        "
      >
        <div class="btn1" @click="buyOrSell(0)">买入(做多)</div>
        <div class="btn2" @click="buyOrSell(1)">卖出(空开)</div>
      </div>
    </div>
    <div class="contract-orderBox">
      <div class="contract-orderBox-tab">
        <div
          class="contract-orderBox-tab-item"
          v-for="item in tabList"
          :key="item.value"
          @click="handleCurrentIndex(item.value)"
          :class="currentIndex === item.value ? 'active' : ''"
        >
          {{ item.label }}
        </div>
      </div>
      <!-- 当前持仓 -->
      <div v-if="currentIndex === 0">
        <template v-if="historyList?.length > 0" v-for="(item, index) in historyList" :key="index">
          <EntrustOrderItem
            :item="item"
            :availableBalance="availableBalance"
            @updateList="getHistoryList"
            @updateUser="updateUser"
            @openAdjustmentMargin="openAdjustmentMargin"
            @openTermination="openTermination"
          />
        </template>
        <template v-else>
          <NoData />
        </template>
      </div>
      <!-- 委托订单 -->
      <div v-if="currentIndex === 1">
        <template v-if="orderArr?.length > 0" v-for="(item, index) in orderArr" :key="index">
          <div
            style="
              width: 100%;
              height: auto;
              padding: 12px 0;
              box-sizing: border-box;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            "
          >
            <div
              style="
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 12px;
              "
            >
              <div style="display: flex; align-items: center; justify-content: flex-start">
                <div
                  style="
                    background-color: rgb(186, 236, 87);
                    font-size: 10px;
                    color: #000;
                    border-radius: 5px;
                    padding: 2px 5px;
                    margin-right: 5px;
                  "
                >
                  <span>
                    {{ !item?.type ? t('goingLong') : t('openBlank') }}
                  </span>
                </div>
                <span>
                  {{ item?.showCoin ? item?.showCoin : item?.symbol.toUpperCase() + '/USDT' }}
                </span>
                <div style="font-size: 10px; margin-left: 5px">{{ item?.leverage }}X</div>
              </div>
              <div
                style="
                  background-color: rgb(186, 236, 87);
                  font-size: 10px;
                  color: #000;
                  border-radius: 5px;
                  padding: 2px 5px;
                  margin-right: 5px;
                "
                @click="currentDelegation(item.id)"
              >
                <span>{{ t('cancelOrder') }}</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('time') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{
                  _timeFormat(
                    item.params?.delegateTime || item.delegateTime,
                    'DD/MM/YYYY HH:mm',
                    true
                  )
                }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('delegatesTotal') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{ item.delegateTotal }}
                {{ item.showCoin ? matchText(item.showCoin, '/USDT') : item.symbol.toUpperCase() }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('orderPrice') }}
              </div>
              <div style="color: #fff; font-size: 12px">{{ item.delegatePrice }} USDT</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('dealNum') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{ item.dealNum ? item.dealNum : '0' }}
                {{ item.showCoin ? matchText(item.showCoin, '/USDT') : item.symbol.toUpperCase() }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('averagePrice') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{ item.dealPrice ? item.dealPrice : '---' }}
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <NoData />
        </template>
      </div>
      <!-- 止盈止损 -->
      <div v-if="currentIndex === 2">
        <template
          v-if="contractLossArr?.length > 0"
          v-for="(item, index) in contractLossArr"
          :key="index"
        >
          <div
            style="
              width: 100%;
              height: auto;
              padding: 12px 0;
              box-sizing: border-box;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            "
          >
            <div
              style="
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 12px;
              "
            >
              <div style="display: flex; align-items: center; justify-content: flex-start">
                <div
                  style="
                    background-color: rgb(186, 236, 87);
                    font-size: 10px;
                    color: #000;
                    border-radius: 5px;
                    padding: 2px 5px;
                    margin-right: 5px;
                  "
                >
                  <span>
                    {{ !item?.type ? t('goingLong') : t('openBlank') }}
                  </span>
                </div>
                <span>
                  {{ item?.showCoin ? item?.showCoin : item?.symbol.toUpperCase() + '/USDT' }}
                </span>
                <div style="font-size: 10px; margin-left: 5px">{{ item?.leverage }}X</div>
              </div>
              <div
                style="
                  background-color: rgb(186, 236, 87);
                  font-size: 10px;
                  color: #000;
                  border-radius: 5px;
                  padding: 2px 5px;
                  margin-right: 5px;
                "
                @click="stoplossBullshit(item.id)"
              >
                <span>{{ t('cancelOrder') }}</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('commissionTime') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{
                  _timeFormat(item.params?.createTime || item.createTime, 'DD/MM/YYYY HH:mm', true)
                }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('commissionType') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{ item.lossType ? t('stopLoss') : t('stopProfit') }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('delegatesTotal') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{ item.lossType ? item.loseNumber : item.earnNumber }}
                {{ item.showCoin ? item.showCoin : item.symbol.toUpperCase() }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('orderPrice') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{
                  item.delegateType ? t('marketPriceDelegate') : item.loseDelegatePrice + ' USDT'
                }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('triggerPrice') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{ item.lossType ? item.losePrice : item.earnPrice }}
                USDT
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <NoData />
        </template>
      </div>
      <!-- 历史订单 -->
      <div v-if="currentIndex === 3">
        <template
          v-if="historyOrderList?.length > 0"
          v-for="(item, index) in historyOrderList"
          :key="index"
        >
          <div
            style="
              width: 100%;
              height: auto;
              padding: 12px 0;
              box-sizing: border-box;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            "
          >
            <div
              style="
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 12px;
              "
            >
              <div style="display: flex; align-items: center; justify-content: flex-start">
                <div
                  style="
                    background-color: rgb(186, 236, 87);
                    font-size: 10px;
                    color: #000;
                    border-radius: 5px;
                    padding: 2px 5px;
                    margin-right: 5px;
                  "
                >
                  <span>
                    {{ !item?.type ? t('goingLong') : t('openBlank') }}
                  </span>
                </div>
                <span>
                  {{ item?.showCoin ? item?.showCoin : item?.symbol.toUpperCase() + '/USDT' }}
                </span>
                <div style="font-size: 10px; margin-left: 5px">{{ item?.leverage }}X</div>
              </div>
              <div style="font-size: 10px; color: #000">
                <span>{{ item.status ? t('closeTheDeal') : t('waitingForCompletion') }}</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('delegatesTotal') }}
              </div>
              <div style="color: #fff; font-size: 12px">
                {{ item.openNum }}
                {{ item.showCoin ? matchText(item.showCoin, '/USDT') : item.symbol.toUpperCase() }}
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('orderValue') }}
              </div>
              <div style="color: #fff; font-size: 12px">{{ item.entrustmentValue }} USDT</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('orderPrice') }}
              </div>
              <div style="color: #fff; font-size: 12px">{{ item.openPrice }} USDT</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('closePrice') }}
              </div>
              <div style="color: #fff; font-size: 12px">{{ item.dealPrice }} USDT</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('yield') }}
              </div>
              <div style="color: #fff; font-size: 12px">{{ yieldHisValue(item) }}%</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between">
              <div style="font-size: 12px; color: rgb(153, 153, 153)">
                {{ t('income') }}
              </div>
              <div style="color: #fff; font-size: 12px">{{ _toFixed(item.earn, 4) }} USDT</div>
            </div>
          </div>
        </template>
        <template v-else>
          <NoData />
        </template>
      </div>
    </div>
  </div>
  <LeftPopup :showLeft="showLeft" @close="closeLeft" />
  <AdjustmentMargin
    :info="info"
    :adjustmentMarginBtn="adjustmentMarginBtn"
    :availableBalance="availableBalance"
    @close="closeAdjustmentMargin"
    @updateList="getHistoryList"
    @updateUser="updateUser"
  />
  <Termination
    :info="info"
    :type="type"
    :terminationBtn="terminationBtn"
    @close="closeTermination"
    @updateList="getHistoryList"
    @updateUser="updateUser"
  />
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { showToast, showLoadingToast } from 'vant'
import _ from 'lodash'
import PubSub from 'pubsub-js'
import { useTradeStore } from '@/store/trade'
import { useMainStore } from '@/store'
import {
  submitUcontract,
  contractHistoryList,
  orderList,
  canCelOrder,
  contractLossList,
  cancelLoss
} from '@/api/trade/index'
import { useUserStore } from '@/store/user/index'
import { socketDict } from '@/config/dict'
import { _add, _div, _mul, _sub, _toFixed, countFormat, priceFormat } from '@/utils/decimal'
import { matchText } from '@/utils/filters'
import { _isRFDE, _timeFormat } from '@/utils/public'
import LeftPopup from './component/leftPopup.vue'
// import OverOpenPopup from './component/overopenPopup.vue'
import EntrustOrderItem from './component/entrustOrderItem.vue'
import AdjustmentMargin from './component/adjustmentMargin.vue'
import Termination from './component/termination.vue'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const mainStore = useMainStore()
const tradeStore = useTradeStore()
const userStore = useUserStore()
const { asset } = storeToRefs(userStore)
const showLeft = ref(false)
const adjustmentMarginBtn = ref(false)
const isEye = ref(true)
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const openAdjustmentMargin = (value) => {
  info.value = value
  adjustmentMarginBtn.value = true
}
const closeAdjustmentMargin = () => {
  adjustmentMarginBtn.value = false
}
const terminationBtn = ref(false)
const type = ref(0)
const openTermination = (value, t) => {
  type.value = t
  info.value = value
  terminationBtn.value = true
}
const closeTermination = () => {
  terminationBtn.value = false
}
const info = ref({})
const overOpenBtn = ref(false)
const closeOverOpen = () => {
  overOpenBtn.value = false
}
// 当前币种信息
let coinInfo = ref({})
const closeLeft = () => {
  showLeft.value = false
}
const coinPriceInfo = computed(() => {
  return tradeStore.allCoinPriceInfo[coinInfo.value.coin] || {}
})
const delegateTotal = ref('') // 数量（市价/限价）
const delegatePrice = ref('') // 价格（限价）
const sliderValue = ref(0) //滑动
//可用余额
const isShow = computed(() => {
  const arr = Object.keys(asset.value)
  const aa = arr[arr.length - 1]
  return asset.value[aa]
})
const availableBalance = computed(() => {
  var cur = asset.value.filter((item) => {
    return item.type === 3
  })

  if (cur.length > 0) {
    return cur[0].availableAmount
  } else {
    return ''
  }
})
const marginValue = ref('0') //保证金

/**
 * 市价/限价委托
 */
const showPopover = ref(false) // 委托类型
const transactionLabel = ref(1) // 市价  1  限价 0
const handleShowPopover = () => {
  if (showPopoverNum.value) {
    showPopoverNum.value = false
  }
  if (showDepthPopup.value) {
    showDepthPopup.value = false
  }
  showPopover.value = !showPopover.value
}
const onSelect = (item) => {
  transactionLabel.value = item
  showPopover.value = false
  delegateTotal.value = ''
  delegatePrice.value = ''
  sliderValue.value = 0
}
// 限价委托：设置交易价格
const setTradePrice = (val) => {
  delegatePrice.value = !transactionLabel.value ? val : ''
}
const contractObj = ref({}) // 币种对象
/**
 * 杠杆倍数
 */
const showPopoverNum = ref(false) //弹窗
const transactionNum = ref(null) //倍数
const numList = ref([]) //杠杆下拉
const handleShowPopoverNum = () => {
  if (showPopover.value) {
    showPopover.value = false
  }
  if (showDepthPopup.value) {
    showDepthPopup.value = false
  }
  showPopoverNum.value = !showPopoverNum.value
}
// 切换杠杆倍数
const selectNum = (item) => {
  transactionNum.value = item.name
  showPopoverNum.value = false
}
// 切换币种：重置价格、数量，杠杆变化
watch(
  () => coinInfo.value.coin,
  (n) => {
    delegateTotal.value = ''
    setTradePrice()
    if (tradeStore.contractCoinList.length) {
      numList.value = []
      transactionNum.value = ''
      let newcoin = {}
      tradeStore.contractCoinList.forEach((element) => {
        if (element.coin === n) {
          contractObj.value = element
          newcoin = element
          return
        }
      })
      if (newcoin?.leverage) {
        newcoin.leverage.split(',').forEach((ele) => {
          numList.value.push({
            name: ele + 'X',
            id: ele
          })
        })
      }
      transactionNum.value = numList.value[0].name
    }
  }
)
watch(
  () => sliderValue.value,
  (n) => {
    let priceNew
    if (transactionLabel.value) {
      // 市价委托
      priceNew = coinPriceInfo.value.close
    } else {
      // 限价委托
      priceNew = delegatePrice.value
    }
    if (!priceNew) {
      sliderValue.value = 0
      return
    }
    let numberSlider
    if (['das'].includes(__config._APP_ENV)) {
      // 可用余额/合约面值
      // availableBalance/shareNumber
      numberSlider = _div(availableBalance.value, coinInfo.value.shareNumber)
    } else {
      // 可用余额*杠杆倍数/可用余额市价或输入价格/合约面值
      // availableBalance*transactionNum/priceNew/shareNumber
      numberSlider = _div(
        _div(
          _mul(
            availableBalance.value,
            transactionNum.value.substr(0, transactionNum.value.length - 1)
          ),
          priceNew
        ),
        coinInfo.value.shareNumber
      )
    }
    // 向下取整
    delegateTotal.value = Math.floor(_mul(numberSlider, _div(n, 100)))
  }
)
watch(
  () => delegateTotal.value,
  (n) => {
    if (n) {
      const regex = /^[1-9]\d*$/
      if (!regex.test(n)) {
        return showToast(t('quantityCanOnlyBeEnteredAsAnInteger'))
      } else {
        var typeId = ''
        numList.value.forEach((element) => {
          if (element.name === transactionNum.value) {
            return (typeId = element.id)
          }
        })

        marginValue.value = _toFixed(
          _div(_mul(_mul(coinPriceInfo.value.close, n), contractObj.value.shareNumber), typeId),
          6
        )
      }
    } else {
      marginValue.value = '0'
    }
  }
)
// 监听价格
watch(
  () => delegatePrice.value,
  (n) => {
    if (n) {
      if (!/^[1-9]\d*(\.\d{1,6})?$|^0(\.\d{1,6})?$/.test(n) || Number(n) === 0) {
        return showToast(t('pleaseEnterAtMost6DecimalPlacesGreaterThan0'))
      }
    } else {
      sliderValue.value = 0
      delegateTotal.value = ''
    }
  }
)
// 监听杠杆倍数
watch(
  () => transactionNum.value,
  (n) => {
    const CurN = n.substr(0, n.length - 1)
    let priceNew
    if (transactionLabel.value) {
      priceNew = coinPriceInfo.value.close
    } else {
      priceNew = delegatePrice.value
    }
    if (!priceNew) {
      sliderValue.value = 0
      return
    }
    let numberSlider = _div(
      _div(_mul(availableBalance.value, CurN), priceNew),
      coinInfo.value.shareNumber
    )
    // 向下取整
    delegateTotal.value = Math.floor(_mul(numberSlider, _div(sliderValue.value, 100)))
  }
)
// 可开空=可用/价格*杠杆倍数
// das可开空=合约面值*手/价格*杠杆
const bearableValue = computed(() => {
  let price = transactionLabel.value ? coinPriceInfo.value.close : delegatePrice.value
  if (price) {
    var typeId = ''
    numList.value.forEach((element) => {
      if (element.name === transactionNum.value) {
        return (typeId = element.id)
      }
    })
    let result
    if (['das'].includes(__config._APP_ENV)) {
      result = _mul(_div(_mul(delegateTotal.value, contractObj.value.shareNumber), price), typeId)
    } else {
      result = _mul(_div(availableBalance.value, price), typeId)
    }
    return result
  } else {
    return 0
  }
})
/**
 * 买入/卖出按钮
 */

const buyOrSell = (type) => {
  // 杠杆倍数
  var typeId = ''
  numList.value.forEach((element) => {
    if (element.name === transactionNum.value) {
      return (typeId = element.id)
    }
  })
  let data = {
    symbol: coinInfo.value.coin, //币种
    leverage: typeId, //杠杆倍数
    delegatePrice: transactionLabel.value ? coinPriceInfo.value.close : delegatePrice.value, //价格
    delegateTotal: delegateTotal.value, //数量
    type: type, //0买入 1卖出
    delegateType: transactionLabel.value //委托类型0市价 1限价
  }
  if (
    !/^[1-9]\d*(\.\d{1,6})?$|^0(\.\d{1,6})?$/.test(data.delegatePrice) ||
    Number(data.delegatePrice) === 0
  ) {
    return showToast(t('pleaseEnterAtMost6DecimalPlacesGreaterThan0'))
  }
  if (!/^[1-9]\d*$/.test(data.delegateTotal)) {
    return showToast(t('quantityCanOnlyBeEnteredAsAnInteger'))
  }
  try {
    showLoadingToast({
      forbidClick: true,
      duration: 0
    })
    submitUcontract(data).then((res) => {
      if (res.code === 200) {
        showToast(t('operationSuccess'))
        // 刷新订单
        updateUser()
        getHistoryList()
      } else {
        showToast(res.msg)
      }
    })
  } catch (error) {
    console.log(error)
  }
}
const historyList = ref([])
const getHistoryList = async () => {
  let res = await contractHistoryList({ status: 0 })
  historyList.value = res.rows
  tabList.value[0].label = `${t('currentPosition')}(${historyList.value.length})`
}
const orderArr = ref([])
const getOrderList = async () => {
  let res = await orderList({ status: 0 })
  orderArr.value = res.rows
  tabList.value[1].label = `${t('commissionOrder')}(${orderArr.value.length})`
}
const contractLossArr = ref([])
const getContractLossList = async () => {
  let res = await contractLossList()
  contractLossArr.value = res.rows
  tabList.value[2].label = `${t('stopProfitAndStopLoss')}(${contractLossArr.value.length})`
}
const historyOrderList = ref([])
const getHistoryOrderList = async () => {
  let res = await contractHistoryList({ status: 1 })
  historyOrderList.value = res.rows
  tabList.value[3].label = `${t('historyOrders')}(${historyOrderList.value.length})`
}

const updateUser = () => {
  userStore.getUserInfo()
}
const rows = ref(4)

/**
 * 盘口显示类型
 */
const showDepthListDict = [
  { label: '0.00000001', value: 0, min: 0.00000001 },
  { label: '0.0000001', value: 1, min: 0.0000001 },
  { label: '0.000001', value: 2, min: 0.000001 },
  { label: '0.00001', value: 3, min: 0.00001 },
  { label: '0.0001', value: 4, min: 0.0001 },
  { label: '0.001', value: 5, min: 0.001 },
  { label: '0.01', value: 6, min: 0.01 },
  { label: '0.1', value: 7, min: 0.1 },
  { label: '1', value: 8, min: 10 },
  { label: '10', value: 9, min: 100 },
  { label: '100', value: 10, min: 1000 }
]
const showDepthList = ref([])
const showDepth = reactive({})
/**
 * 显示Popup变量
 */
const showDepthPopup = ref(false)
/**
 * 选中盘口显示类型
 */
const handleShowDepthPopup = () => {
  if (showPopover.value) {
    showPopover.value = false
  }
  if (showPopoverNum.value) {
    showPopoverNum.value = false
  }
  showDepthPopup.value = !showDepthPopup.value
}
const _checkedShowDepth = (item) => {
  if (item.value != showDepth.value) {
    Object.assign(showDepth, item)
  }
  showDepthPopup.value = false
}
// 监听路由展示对应币种信息
watch(
  () => route.query.symbol,
  (val) => {
    coinInfo.value = tradeStore.contractCoinList.filter((item, index) => {
      return item.coin === val
    })[0]
  },
  {
    deep: true
  }
)
// 最大卖出数量
const maxAskCount = ref(0)
// 最大买入数量
const maxBidCount = ref(0)
/**
 * 买入列表
 */
const bidsList = reactive([])
/**
 * 卖出列表
 */
const asksList = reactive([])
// 生成 区间 随机整数
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
/**
 * 获取最小单位值
 */
function getIntegerPart(number) {
  var integerPart = Math.floor(number) // 获取整数部分
  let temp = Math.pow(10, integerPart.toString().length - 1)
  if (integerPart < 10) {
    temp = Math.pow(10, 5 - number.toString().split('.')[1]?.length)
  }
  return temp
}
/**
 * 根据当前价格随机成交量
 */
const getMockDataList = () => {
  setTimeout(getMockDataListThrottle, getRandomInteger(900, 1600))

  let price = tradeDetailInfo.value?.close
  let coefficient = 1 / getIntegerPart(price)
  let aggregationFactor = showDepth?.min
  let countFactor = aggregationFactor * 1000
  if (price < 1000) {
    countFactor = aggregationFactor * 10 ** (`${price}`.length - 1)
  }

  if (!price || !Number(aggregationFactor)) {
    maxAskCount.value = 0
    maxBidCount.value = 0
    Object.assign(
      asksList,
      asksList.map((elem) => {
        elem.close = 0
        elem.count = 0
        return elem
      })
    )
    Object.assign(
      bidsList,
      asksList.map((elem) => {
        elem.price = 0
        elem.count = 0
        return elem
      })
    )
    return
  }
  // 生成数量 大 -> 小
  let tempAsksList = []
  let tempBidsList = []
  let hashCount = _mul(_mul(Math.random(), coefficient), countFactor)
  if (price < 10) {
    hashCount = _mul(_mul(Math.random(), coefficient), countFactor)
  }

  for (let i = 1; i <= rows.value; i++) {
    let randomCount = _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient)
    let tempObj = {
      price: _add(_add(price, i * aggregationFactor), 0),
      count: randomCount
    }
    tempAsksList.push(tempObj)
    tempAsksList = tempAsksList.sort((a, b) => a.price - b.price)
  }

  for (let i = 1; i <= rows.value; i++) {
    let randomCount = _mul(Math.random(), hashCount) + _mul(Math.random(), coefficient)

    let tempObj = {
      price: _sub(_sub(price, i * aggregationFactor), 0),
      count: randomCount
    }
    tempBidsList.push(tempObj)
    tempBidsList = tempBidsList.sort((a, b) => b.price - a.price)
  }
  maxAskCount.value = Math.max(...tempAsksList.filter((e, i) => i < rows.value).map((e) => e.count))
  maxBidCount.value = Math.max(...tempBidsList.filter((e, i) => i < rows.value).map((e) => e.count))
  Object.assign(asksList, tempAsksList)
  Object.assign(bidsList, tempBidsList)
}
/**
 * 交易详情数据
 */
const tradeDetailInfo = computed(() => tradeStore.allCoinPriceInfo[coinInfo.value.coin])

watch(
  () => coinInfo.value.coin,
  () => {
    if (tradeDetailInfo.value?.close > 0) {
      showDepthList.value = showDepthListDict
        .filter((elem) => elem.min * 30 < tradeDetailInfo.value.close)
        .slice(-4)
      Object.assign(showDepth, showDepthList.value[0])
      getMockDataListThrottle()
    }
  }
)
/**
 * 更新数据 限流
 */
const getMockDataListThrottle = _.throttle(() => {
  getMockDataList()
}, 1000)

const subKey = PubSub.subscribe(socketDict.DETAIL, (key, data) => {
  if (data.symbol && data.symbol == coinInfo.coin) {
    if (tradeDetailInfo.value.close && showDepthList.value.length) {
      getMockDataListThrottle()
    } else {
      showDepthList.value = showDepthListDict
        .filter((elem) => elem.min * 30 < tradeDetailInfo.value.close)
        .slice(-4)
      Object.assign(showDepth, showDepthList.value[0])
      getMockDataList()
    }
  }
})
onUnmounted(() => {
  subKey && PubSub.unsubscribe(subKey)
})
// 初始化展示币种信息
const init = () => {
  if (route.query.symbol) {
    coinInfo.value = tradeStore.contractCoinList.filter((item, index) => {
      return item.coin === route.query.symbol
    })[0]
    if (!coinInfo.value) {
      coinInfo.value = tradeStore.contractCoinList[0]
    }
  } else {
    coinInfo.value = tradeStore.contractCoinList[0]
  }
  getHistoryList()
  getOrderList()
  getContractLossList()
  getHistoryOrderList()
}
const tabList = ref([
  { label: `${t('currentPosition')}(0)`, value: 0 },
  { label: `${t('commissionOrder')}(0)`, value: 1 },
  { label: `${t('stopProfitAndStopLoss')}`, value: 2 },
  { label: `${t('historyOrders')}(0)`, value: 3 }
])
const currentIndex = ref(0)
const handleCurrentIndex = (index) => {
  if (index === 0) {
    getHistoryList()
  } else if (index === 1) {
    getOrderList()
  } else if (index === 2) {
    getContractLossList()
  } else if (index === 3) {
    getHistoryOrderList()
  }
  currentIndex.value = index
}
const stoplossBullshit = async (id) => {
  try {
    const res = await cancelLoss(id)
    if (res.code === 200) {
      showToast(t('cancelSuccess'))
      getContractLossList()
    } else {
      showToast(res.msg)
    }
  } catch (error) {}
}
const currentDelegation = async (id) => {
  try {
    const res = await canCelOrder(id)
    if (res.code === 200) {
      showToast(t('cancelSuccess'))
      getOrderList()
    } else {
      showToast(res.msg)
    }
  } catch (error) {}
}
const yieldHisValue = (item) => {
  let price = _mul(_div(item.earn, item.adjustAmount), 100)
  // rxce 收益率=收益/保证金/杠杆
  if (['rxce'].includes(__config._APP_ENV)) {
    price = _div(price, item.leverage)
  } else if (['das1'].includes(__config._APP_ENV)) {
    // 收益率=收益/委托价值/杠杆
    price = _mul(_div(_div(item.earn, item.entrustmentValue), item.leverage), 100)
  }
  return _toFixed(price, 4)
}
onMounted(() => {
  init()
})
</script>
<style lang="scss" scoped>
.contract {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-item {
      font-size: 14px;
      color: rgba(153, 153, 153, 1);
    }
    .active {
      color: rgba(186, 236, 87, 1);
    }
  }
  &-tip {
    margin-top: 15px;
    background: #baec57;
    box-shadow: inset 0px -4px 4px 0px #d7ff89;
    border-radius: 10px 10px 10px 10px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      display: flex;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
        margin-right: 10px;
      }
      .text {
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
      &-right {
        display: flex;
        align-items: center;

        background: rgba(255, 255, 255, 0.07);
        border-radius: 18px 18px 18px 18px;
        &-item {
          font-size: 10px;
          color: #fff;
          display: flex;
          padding: 3px 7px;
          align-items: center;
          justify-content: center;
        }
        .active {
          background: #baec57;
          border-radius: 18px 18px 18px 18px;
          padding: 3px 7px;
          color: #000;
        }
      }
    }
    &-tip {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      &-item {
        margin-top: 15px;
        display: flex;
        align-items: end;
        color: #fff;
        &-name {
          font-size: 12px;
        }
        &-symbol {
          margin-left: 5px;
          font-size: 10px;
        }
      }
    }
    .data-list {
      width: 100%;
      &-item {
        width: 100%;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        .bg-box {
          width: 100%;
          height: 24px;
          transition: all 0.5s linear;
          opacity: 0.7;
          position: absolute;
          right: 0;
        }
      }
    }
    .data-center {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      span {
        display: inline-block;
      }
      .font-14 {
        font-size: 14px;
      }
      .font-10 {
        font-size: 10px;
      }
    }
    .leverage {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      &-item {
        width: 40px;
        height: 20px;
        border-radius: 12px;
        font-size: 10px;
        color: rgba(153, 153, 153, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        color: #000;
        background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
      }
    }
    &-tab {
      margin-top: 15px;
      border: 1px solid #222222;
      border-left: none;
      border-right: none;
      padding: 8px 16px;
      display: flex;
      &-item {
        margin-right: 30px;
        font-size: 13px;
        color: rgba(153, 153, 153, 1);
      }
      .actives {
        color: #fff;
      }
    }
    &-input {
      margin-bottom: 15px;
      height: 40px;
      width: 100%;
      border: 1px solid rgb(186, 236, 87);
      border-radius: 10px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
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
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
        margin-right: 10px;
      }
      .active {
        color: #fff;
      }
    }
  }
}
.btn1 {
  margin-top: 15px;
  border-radius: 14px;
  width: 40%;
  height: 35px;
  background-color: rgb(23, 172, 0);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn2 {
  margin-top: 15px;
  border-radius: 14px;
  width: 40%;
  height: 35px;
  background-color: rgb(255, 100, 100);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-red {
  background-color: #ff5c51;
}
.bg-green {
  background-color: #35ad7a;
}
.color-black {
  color: rgb(186, 236, 87);
}
</style>
