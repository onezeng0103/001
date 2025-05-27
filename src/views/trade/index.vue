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
              {{t('fundAmount')}}
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
          <template v-if="isEye">
            {{ availableBalance }}
          </template>
          <template v-else>
            <span>****</span>
          </template>
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
      <div class="trade-tab-item" @click="router.push('/flash')">{{t('flashContract')}}</div>
      <div class="trade-tab-item" @click="router.push('/contract')">{{t('contractTrade')}}</div>
      <div class="trade-tab-item active">{{t('spotTrade')}}</div>
      <!-- <div class="trade-tab-item" @click="router.push('/flashOption')">{{t('optionTrade')}}</div>
      <div class="trade-tab-item" @click="router.push('/floworder')">{{t('followTrade')}}</div> -->
    </div>
    <div class="trade-tip">
      <div class="trade-tip-left">
        <img src="../../assets/img/31.png" alt="" />
        <div class="text">
          <div class="text-title">{{t('institutionalCooperation')}}</div>
          <div class="text-desc">{{t('institutionalCooperationDesc')}}</div>
        </div>
      </div>
      <div class="trade-tip-right" @click="router.push('/proxy')">{{t('goTo')}}</div>
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
          <div
            class="trade-main-top-right-item"
            :class="{ active: form.type === '0' }"
            @click="form.type = '0'"
          >
            {{t('buy1')}}
          </div>
          <div
            class="trade-main-top-right-item"
            :class="{ active: form.type === '1' }"
            @click="form.type = '1'"
          >
            {{t('sell1')}}
          </div>
        </div>
      </div>
      <div class="trade-main-tip">
        <div class="trade-main-tip-item">
          <div class="trade-main-tip-item-name">{{t('price')}}</div>
          <div class="trade-main-tip-item-symbol">{{ coinInfo.baseCoinUpperCase }}</div>
        </div>
        <div class="trade-main-tip-item">
          <div class="trade-main-tip-item-name">{{t('volume')}}</div>
          <div class="trade-main-tip-item-symbol">
            {{
              coinInfo.customizeFlag === 2
                ? matchText(coinInfo.showSymbol, '/USDT')
                : coinInfo.coinUpperCase
            }}
          </div>
        </div>
      </div>
      <Handicap :coinInfo="coinInfo" @set-trade-price="setTradePrice" />
      <div class="trade-main-tab">
        <div
          v-for="item in delegateTypeList"
          :key="item.value"
          class="trade-main-tab-item"
          :class="{ actives: item.value === form.delegateType }"
          @click="checkedDelegateType(item)"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="trade-main-slider">
        <van-slider
          active-color="var(--primary-border)"
          inactive-color="var(--regular-color)"
          button-size="16"
          v-model="form.slider"
          @change="sliderChange"
        />
      </div>
      <template v-if="form.delegateType == 0">
        <div class="trade-main-input">
          <input
            type="text"
            v-model="form.price"
            :placeholder="`${t('turnover')}(${coinInfo.baseCoinUpperCase})`"
            maxlength="140"
          />
          <span>USDT</span>
        </div>
        <div class="trade-main-input">
          <input
            type="text"
            v-model="form.count"
            :placeholder="`${t('quantity')}(${
              coinInfo.customizeFlag === 2
                ? matchText(coinInfo.showSymbol, '/USDT')
                : coinInfo.coin.toUpperCase()
            })`"
            maxlength="140"
          />
          <span>
            {{
              coinInfo.customizeFlag === 2
                ? matchText(coinInfo.showSymbol, '/USDT')
                : coinInfo.coin.toUpperCase()
            }}
          </span>
        </div>
      </template>
      <div class="trade-main-input">
        <input
          type="number"
          v-model="form.turnover"
          @input="turnoverChange"
          :placeholder="`${t('turnover')}(${coinInfo.baseCoinUpperCase})`"
          maxlength="140"
        />
      </div>
      <div class="trade-main-btn">
        <div class="btn" @click="submit">
          <span v-if="form.type == 0">{{t('buy1')}}</span>
          <span v-else>{{t('sell1')}}</span>
          <span v-if="coinInfo.customizeFlag == 2">
            {{ coinInfo.showSymbol.replace('/USDT', '') }}
          </span>
          <span>{{ coinInfo.coinUpperCase }}</span>
        </div>
      </div>
    </div>
    <OrderBox ref="orderListBoxRef" :coinInfo="coinInfo" />
  </div>
  <LeftPopup :showLeft="showLeft" @close="showLeft = false" />
</template>
<script setup>
import { useMainStore } from '@/store'
import { useUserStore } from '@/store/user'
import { useTradeStore } from '@/store/trade'
import { useRouter, useRoute } from 'vue-router'
import { submitOrderCurrencyApi } from '@/api/trade'
import { showToast } from 'vant'
import { _div, _mul, _toFixed, priceFormat } from '@/utils/decimal'
import Handicap from './component/handicap.vue'
import LeftPopup from './component/leftPopup.vue'
import OrderBox from './component/orderBox.vue'
import { useI18n } from 'vue-i18n'
const mainStore = useMainStore()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const tradeStore = useTradeStore()
const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const form = reactive({
  type: '0',
  delegateType: 1
})
const { asset } = storeToRefs(userStore)
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
// 币种开盘价等

const coinPriceInfo = computed(() => {
  return tradeStore.allCoinPriceInfo[coinInfo.value.coin] || {}
})
/**
 * 设置交易价格
 */
const setTradePrice = (val) => {
  if (form.delegateType == 0) {
    // 限价触发
    form.price = priceFormat(val)
    priceChange(form.price)
  }
}
/**
 * 滑块监听
 */
const sliderChange = (val) => {
  val = val / 100
  let tempPrice = 0
  if (form.delegateType == 0) {
    // 限价
    tempPrice = form.price
  } else if (form.delegateType == 1) {
    // 市价
    tempPrice = coinPriceInfo.value.close
  }
  if (Number(tempPrice)) {
    if (form.delegateType == 1 && form.type == 1) {
      // 市价&&卖出
      form.count = _mul(availableBalance.value, val)
    } else if (form.delegateType == 0 && form.type == 1) {
      // 限价&&卖出
      form.count = _mul(availableBalance.value, val)
      form.turnover = _toFixed(_mul(form.count, tempPrice))
    } else {
      // (市价&&买入)||(限价&&买入)
      form.count = _mul(_div(availableBalance.value, tempPrice), val)
      form.turnover = _toFixed(_mul(form.count, tempPrice))
    }
  }
}
/**
 * 成交金额监听
 */
const turnoverChange = () => {
  let val = form.turnover
  if (Number(val) > Number(availableBalance.value)) {
    // 输入金额大于可用余额
    form.turnover = availableBalance.value
    val = availableBalance.value
  }
  let tempPrice = 0
  if (form.delegateType == 0) {
    // 限价
    tempPrice = form.price
  } else if (form.delegateType == 1) {
    // 市价
    tempPrice = coinPriceInfo.value.close
  }
  // 根据成交额 价格 计算数量
  if (Number(tempPrice)) {
    form.count = _div(val, tempPrice)
    form.slider = parseInt(_mul(_div(val, availableBalance.value), 100))
  }
}
const orderListBoxRef = ref(null)
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
)
// 重置表单
const restForm = () => {
  let tempForm = {
    ...form,
    price: '', // 价格
    count: '', // 数量
    turnover: '', // 成交金额
    slider: 0 // 滑块
  }
  Object.assign(form, tempForm) //复制tempForm到form
}
const delegateTypeList = [
  { label: t('marketOrder'), value: '1' },
  { label: t('limitOrder'), value: '0' }
]
// 当前选中交易价格类型：限价/市价
const currentDelegateType = ref({})
// 切换限价/市价
const checkedDelegateType = (item) => {
  console.log(item.value !== form.delegateType)
  if (item.value !== form.delegateType) {
    form.delegateType = item.value
    currentDelegateType.value = item
    console.log(form.delegateType)
  }
  restForm()
}
checkedDelegateType(delegateTypeList[0])
/**
 * 提交表单
 */
const submit = async () => {
  let msg = false
  if (form.delegateType == 1 && form.type == 1) {
    // 市价&&卖出
    if (!form.count) {
      msg = t('pleaseInputQuantity')
    } else if (form.count > availableBalance.value) {
      msg = t('insufficientBalance')
    }
  } else if (form.delegateType == 0 && form.type == 1) {
    // 限价&&卖出
    if (!form.price) {
      msg = t('pleaseInputPrice')
    } else if (!form.count) {
      msg = t('pleaseInputQuantity')
    } else if (form.count > availableBalance.value) {
      msg = t('insufficientBalance')
    }
  } else {
    // (市价&&买入)||(限价&&买入)
    if (!form.turnover) {
      msg = t('pleaseInputTurnover')
    } else if (form.turnover <= 0) {
      msg = t('turnoverIsNotCorrect')
    } else if (form.turnover > availableBalance.value) {
      msg = t('insufficientBalance')
    }
  }
  if (msg) {
    showToast(msg)
    return
  }
  let params = {
    symbol: coinInfo.value.coin, //交易币种(e.g btc)
    coin: coinInfo.value.baseCoin, //结算币种(usdt)
    delegateTotal: form.count, //委托总量
    delegatePrice: form.price, //委托价格
    delegateValue: form.turnover, //委托价值
    delegateType: form.delegateType, //委托类型（0限价1市价）
    type: form.type //（0买入1卖出）
  }
  const res = await submitOrderCurrencyApi(params)
  // 购买成功
  if (res.code == 200) {
    userStore.getUserInfo()
    showToast(res.msg)
    restForm()
    // 刷新
    orderListBoxRef.value.refresh()
  } else {
    showToast(res.msg)
  }
}
onMounted(() => {
  init()
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
    justify-content: space-around;
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
      /* margin-right: 30px; */
    }
    .active {
      color: var(--primary-border);
    }
  }
  &-tip {
    margin-top: 15px;
    margin-bottom: 15px;
    background: var(--primary-border);
    box-shadow: inset 0px -4px 4px 0px var(--secondary-border);
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
        color: var(--regular-color);
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
      color: var(--regular-color);
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
        display: flex;
        align-items: center;

        background: var(--regular-background);
        border-radius: 18px 18px 18px 18px;
        &-item {
          font-size: 10px;
          color: var(--primary-color);
          display: flex;
          padding: 3px 7px;
          align-items: center;
          justify-content: center;
        }
        .active {
          background: var(--primary-border);
          border-radius: 18px 18px 18px 18px;
          padding: 3px 7px;
          color: var(--regular-color);
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
        color: var(--primary-color);
        &-name {
          font-size: 12px;
        }
        &-symbol {
          margin-left: 5px;
          font-size: 10px;
        }
      }
    }
    &-tab {
      margin-top: 15px;
      border: 1px solid var(--primary-background);
      border-left: none;
      border-right: none;
      padding: 8px 16px;
      display: flex;
      &-item {
        margin-right: 30px;
        font-size: 13px;
        color: var(--secondary-color);
      }
      .actives {
        color: var(--primary-color);
      }
    }
    &-slider {
      margin: 15px 0;
    }
    &-input {
      margin-bottom: 15px;
      height: 40px;
      width: 100%;
      border: 1px solid var(--primary-border);
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
    &-btn {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      .btn {
        text-align: center;
        width: 80%;
        height: 29px;
        display: flex;
        align-items: center;
        color: var(--regular-color);
        justify-content: center;
        background: linear-gradient(
          306deg,
          var(--primary-border) 0%,
          var(--secondary-background) 100%
        );
        border-radius: 15px 15px 15px 15px;
      }
    }
  }
}
</style>
