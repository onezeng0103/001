<template>
  <div class="wallet">
    <div class="wallet-tip">
      <div class="info">
        <div class="active">
          <img :src="path" alt="" />
          <div class="name">
            <div class="title">
              {{ userInfo?.user?.loginName }}
              <div class="box">
                <template v-if="advancedAuth == null || advancedAuth == 0">{{ t('notAuth') }}</template>
                <template v-if="advancedAuth == 1">{{ t('auth') }}</template>
                <template v-if="advancedAuth == 3">{{ t('audit') }}</template>
                <template v-if="advancedAuth == 2">{{ t('auditFailed') }}</template>
              </div>
            </div>
            <div class="price">
              {{t('assetAmount')}}
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
        <div class="certification" @click="router.push('/userauth')">
          <img v-if="advancedAuth == 1" src="../../assets/img/certified.png" alt="" />
          <img v-else src="../../assets/img/certified2.png" alt="" />
          实名认证
        </div>
      </div>
      <div class="total">
        <template v-if="isEye">
          {{ _numberWithCommas(allSum) }}
        </template>
        <template v-else>******</template>
      </div>
      <div class="assets">
        <div class="assets-item" v-if="tabList.find((item) => item.name === '理财资产')">
          <div class="name">{{t('financialAssets')}}</div>
          <div class="price">
            <template v-if="isEye">
              {{ _numberWithCommas(financSum) }}
            </template>
            <template v-else>******</template>
          </div>
        </div>
        <div class="assets-item" v-if="tabList.find((item) => item.name === '平台资产')">
          <div class="name">{{t('availableBalance')}}</div>
          <div class="price">
            <template v-if="isEye">
              {{ _numberWithCommas(platformSum) }}
            </template>
            <template v-else>******</template>
          </div>
        </div>
        <div class="assets-item" v-if="tabList.find((item) => item.name === '合约资产')">
          <div class="name">{{t('contractAssets')}}</div>
          <div class="price">
            <template v-if="isEye">
              {{ _numberWithCommas(contractSum) }}
            </template>
            <template v-else>******</template>
          </div>
        </div>
        <div class="assets-item">
          <div class="name">{{t('frozenAmount')}}</div>
          <div class="price">
            <template v-if="isEye">
              {{ _numberWithCommas(zhanyong) }}
            </template>
            <template v-else>******</template>
          </div>
        </div>
      </div>
    </div>

    <div class="function">
      <div class="function-item" @click="router.push('/recharge')">
        <div class="icon">
          <img src="../../assets/img/11.png" />
        </div>
        <div class="name">{{t('recharge1')}}</div>
      </div>
      <div class="function-item" @click="router.push('/withdraw')">
        <div class="icon">
          <img src="../../assets/img/12.png" />
        </div>
        <div class="name">{{t('withdraw1')}}</div>
      </div>
      <div class="function-item" @click="router.push('/flashExchange')">
        <div class="icon">
          <img src="../../assets/img/13.png" />
        </div>
        <div class="name">{{t('flashExchange')}}</div>
      </div>
      <div class="function-item" @click="router.push('/exchange')">
        <div class="icon">
          <img src="../../assets/img/14.png" />
        </div>
        <div class="name">{{t('transfer')}}</div>
      </div>
    </div>
    <van-collapse v-model="activeNames" :border="false">
      <van-collapse-item name="safety">
        <template #title>
          <div style="display: flex; align-items: center">
            <img src="../../assets/img/15.png" height="20px" alt="" />
            <span style="margin-left: 5px; color: var(--primary-color); font-size: 15px">
              {{t('safetyCenter')}}
            </span>
          </div>
        </template>
        <div
          v-for="(item, index) in list"
          :key="index"
          style="margin-bottom: 15px"
          @click="handleClick(item.link)"
        >
          <div style="display: flex; align-items: center; justify-content: space-between">
            <div style="display: flex; align-items: center">
              <img :src="item.icon" height="20px" alt="" />
              <span style="margin-left: 15px; color: var(--primary-color); font-size: 15px">
                {{ item.title }}
              </span>
            </div>

            <div>
              <svg
                t="1748260427853"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4161"
                width="15"
                height="15"
              >
                <path
                  d="M704 512c0-8.288-3.232-15.776-8.4-21.456l0.08-0.064-320-352-0.08 0.08A31.76 31.76 0 0 0 352 128a32 32 0 0 0-32 32c0 8.288 3.232 15.76 8.4 21.456l-0.08 0.08L628.752 512 328.32 842.464l0.08 0.08A31.776 31.776 0 0 0 320 864a32 32 0 0 0 32 32 31.84 31.84 0 0 0 23.6-10.544l0.08 0.08 320-352-0.08-0.08c5.168-5.68 8.4-13.168 8.4-21.456z"
                  fill="#969799"
                  p-id="4162"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item
        v-for="(item, index) in moreList"
        :key="index"
        :name="index"
        :readonly="true"
        @click="handleMore(item)"
      >
        <template #title>
          <div style="display: flex; align-items: center">
            <img :src="item.icon" height="20px" alt="" />
            <span style="margin-left: 5px; color: var(--primary-color); font-size: 15px">
              {{ item.title }}
            </span>
          </div>
        </template>
        <template #right-icon>
          <svg
            t="1748260427853"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4161"
            width="15"
            height="15"
          >
            <path
              d="M704 512c0-8.288-3.232-15.776-8.4-21.456l0.08-0.064-320-352-0.08 0.08A31.76 31.76 0 0 0 352 128a32 32 0 0 0-32 32c0 8.288 3.232 15.76 8.4 21.456l-0.08 0.08L628.752 512 328.32 842.464l0.08 0.08A31.776 31.776 0 0 0 320 864a32 32 0 0 0 32 32 31.84 31.84 0 0 0 23.6-10.544l0.08 0.08 320-352-0.08-0.08c5.168-5.68 8.4-13.168 8.4-21.456z"
              fill="#969799"
              p-id="4162"
            ></path>
          </svg>
        </template>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user/index'
import { useMainStore } from '@/store'
import { _numberWithCommas } from '@/utils/public'
import { _add } from '@/utils/decimal'
import { priceFormat } from '@/utils/decimal.js'
import { getFinanceAmountApi } from '@/api/common/index.js'
import { signOut } from '@/api/user'
import router from '@/router'
import { showToast } from 'vant'
import { dispatchCustomEvent } from '@/utils'

const mainStore = useMainStore()
const userStore = useUserStore()
const { t } = useI18n()
const { userInfo } = storeToRefs(userStore)
const path = computed(() => {
  let tempPath = mainStore.getLogoList?.logo || mainStore.getLogoList?.logoD
  return tempPath
})
const advancedAuth = computed(() => {
  return userInfo.value.detail?.auditStatusAdvanced
})
const isEye = ref(true)
const getIsMock = computed(() => userStore.userInfo.user?.type === '2')
const tabList = computed(() => {
  let list = mainStore.getAssetsTabList.filter((item) => {
    console.log('iten', item)
    if (!item.isOpen) return false
    item.name == '平台资产' && (item.keyStr = t('platformAssets')) && (item.key = 'Overview')
    item.name == '理财资产' && (item.keyStr = t('financialAssets')) && (item.key = 'Money')
    item.name == '合约资产' && (item.keyStr = t('contractAssets')) && (item.key = 'Contract')
    return true
  })
  if (getIsMock.value) {
    list.splice(2, 1)
  }
  return list.sort((a, b) => a.sort - b.sort)
})
// 用户余额信息
const { asset } = storeToRefs(userStore)
const getDetail = (item) => {
  let obj = {}
  obj['keyong'] = priceFormat(item.availableAmount)
  obj['zhanyong'] = priceFormat(item.occupiedAmount)

  obj['zhehe'] = priceFormat(item.exchageAmount)
  if (item.symbol == 'usdt') {
    obj['icon'] = 'usdt'
    obj['loge'] = item.loge
    obj['title'] = 'USDT'
  } else {
    obj['loge'] = item.loge
    obj['title'] = item.symbol?.replace('usdt', '').trim().toLocaleUpperCase()
    obj['icon'] = item.symbol?.replace('usdt', '').trim()
  }
  return obj
}
//获取平台资产信息
const getPlatform = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    if (item.type == 1) {
      list.push(getDetail(item))
    }
  })

  return list
})
//计算平台余额
const platformSum = computed(() => {
  let sum = 0
  for (let i = 0; i < getPlatform.value.length; i++) {
    sum += Number(getPlatform.value[i].zhehe)
  }
  return priceFormat(sum)
})
//获取理财资产信息
const getFinanc = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    if (item.type == 2) {
      list.push(getDetail(item))
    }
  })
  return list
})
//计算理财余额
const financSum = computed(() => {
  let sum = 0
  for (let i = 0; i < getFinanc.value.length; i++) {
    sum += Number(getFinanc.value[i].zhehe)
  }
  return priceFormat(sum)
})
//获取合约资产信息
const getContarct = computed(() => {
  let list = []
  asset.value.forEach((item, index) => {
    if (item.type == 3) {
      list.push(getDetail(item))
    }
  })
  return list
})
//计算合约余额
const contractSum = computed(() => {
  let sum = 0
  for (let i = 0; i < getContarct.value.length; i++) {
    sum += Number(getContarct.value[i].zhehe)
  }
  return priceFormat(sum)
})
const zhanyong = ref()
// 计算所有余额
const allSum = computed(() => {
  return priceFormat(
    Number(platformSum.value) + Number(financSum.value) + Number(contractSum.value)
  )
})
const activeNames = ref([])
const list = ref([
  {
    title: t('changePassword'),
    icon: new URL('../../assets/img/16.png', import.meta.url).href,
    link: '/changePassword'
  },
  {
    title: t('bindWithdrawPassword'),
    icon: new URL('../../assets/img/17.png', import.meta.url).href,
    link: '/fund-password'
  },
  {
    title: t('bindWithdrawAddress'),
    icon: new URL('../../assets/img/18.png', import.meta.url).href,
    link: '/withdrawDeposit'
  },
  {
    title: t('bindPhoneNumber'),
    icon: new URL('../../assets/img/19.png', import.meta.url).href,
    link: ''
  },
  {
    title: t('bindEmail1'),
    icon: new URL('../../assets/img/20.png', import.meta.url).href,
    link: '/emailAuthentication'
  }
])
const moreList = ref([
  {
    title: t('cashflow'),
    icon: new URL('../../assets/img/cashflow.png', import.meta.url).href,
    link: '/cashflow',
    key: 'cashflow'
  },
  {
    title: t('onlineService'),
    icon: new URL('../../assets/img/22.png', import.meta.url).href,
    link: '',
    key: 'onlineService'
  },
  {
    title: t('serviceTerms'),
    icon: new URL('../../assets/img/23.png', import.meta.url).href,
    link: '/termService',
    key: 'serviceTerms'
  },
  {
    title: t('helpCenter'),
    icon: new URL('../../assets/img/help.png', import.meta.url).href,
    link: '/help',
    key: 'help'
  },
  {
    title: t('aboutUs'),
    icon: new URL('../../assets/img/24.png', import.meta.url).href,
    link: '/about',
    key: 'aboutUs'
  },
  {
    title: t('switchLanguage'),
    icon: new URL('../../assets/img/25.png', import.meta.url).href,
    link: '/langList',
    key: 'switchLanguage'
  },
  {
    title: t('appDownload'),
    icon: new URL('../../assets/img/21.png', import.meta.url).href,
    link: '/download',
    key: 'appDownload'
  },
  {
    title: t('logout'),
    icon: new URL('../../assets/img/26.png', import.meta.url).href,
    link: '',
    key: 'logout'
  }
])
const handleMore = (item) => {
  console.log('zhixing')
  if (item.key == 'logout') {
    signOut()
      .then((res) => {
        if (res.code == '200') {
          showToast(t('logoutSuccess'))
          userStore.signOut()
          router.replace('/')
          handleClose()
          isSign.value = false
          setTimeout(() => location.reload(), 10)
        } else {
          showToast(res.msg)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  } else if (item.key == 'onlineService') {
    dispatchCustomEvent('event_serviceChange')
  } else {
    router.push(item.link)
  }
}
const handleClick = (link) => {
  if (link) {
    router.push(link)
  }
}
const getImgSrc = (name) => {
  return new URL(`../../assets/img/${name}.png`, import.meta.url).href
}
onMounted(() => {
  getFinanceAmountApi().then((res) => {
    zhanyong.value = priceFormat(res.data.financial + res.data.pledge)
  })
})
</script>
<style scoped lang="scss">
.wallet {
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 60px;
  &-tip {
    background: var(--regular-background);
    border-radius: 8px 8px 8px 8px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    color: var(--secondary-color);
  }
  .info {
    position: relative;
    .active {
      display: flex;
      img {
        width: 43px;
        height: 43px;
        border-radius: 50%;
      }
      .name {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          display: flex;
          align-items: center;
          color: var(--primary-color);
          font-size: 15px;
          .box {
            margin-left: 10px;
            padding: 2px;
            border-radius: 2px 2px 2px 2px;
            border: 1px solid var(--primary-border);
            font-size: 10px;
          }
        }
        .price {
          margin-top: 5px;
          display: flex;
          align-items: center;
          color: var(--secondary-color);
          font-size: 12px;
          margin-right: 10px;
          .eys {
            display: flex;
            align-items: center;
            margin-left: 10px;
          }
        }
      }
    }
    .certification {
      position: absolute;
      top: 20px;
      right: 0px;
      display: flex;
      align-items: center;
      padding: 5px;
      border-radius: 6px 6px 6px 6px;
      border: 1px solid var(--primary-border);
      font-size: 10px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  .total {
    font-size: 20px;
    font-weight: 800;
    margin-top: 10px;
  }
  .assets {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
    .name {
      font-size: 15px;
    }
    .price {
      margin-top: 5px;
      color: var(--secondary-color);
      font-size: 15px;
    }
  }
  .function {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    background: var(--regular-background);
    border-radius: 8px 8px 8px 8px;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        width: 22px;
        height: 22px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: 15px;
        margin-top: 5px;
      }
    }
  }
  :deep(.van-cell) {
    border: none;
    background: var(--regular-background);

    &:after {
      border-bottom: 0 !important;
    }
  }
  :deep(.van-collapse-item__content) {
    background: var(--regular-background);
    padding: 0 16px 10px;
  }
  .van-collapse {
    border-radius: 8px 8px 8px 8px;
    overflow: hidden;
  }
  .van-collapse-item--border:after {
    border-top: 0;
  }
}
</style>
