<template>
  <div class="proxy">
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
              <span>机构合作专区</span>
            </span>
          </div>
          <div
            @click="router.push('/proxy/records')"
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
              color: var(--secondary-color);
            "
          >
            交易记录
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="info">
        <div class="title">
          <div class="text">资产金额</div>
          <div class="text" @click="router.push('/proxy/earnings')">收益记录</div>
        </div>
        <div class="price">
          <div class="top">
            <template v-if="isEye">
              {{ _numberWithCommas(availableBalance) }}
            </template>
            <template v-else>******</template>
            <div class="eye">
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
          <div class="total">
            <div class="left">
              <div class="total-item">
                今日收益
                <template v-if="isEye">
                  <span>{{ userInfo?.todayAmountEarn.toFixed(2) }}</span>
                </template>
                <template v-else>******</template>
              </div>
              <div class="total-item">
                累计收益
                <template v-if="isEye">
                  <span>{{ userInfo?.totalAmountEarn?.toFixed(2) }}</span>
                </template>
                <template v-else>******</template>
              </div>
            </div>
            <div class="right">
              跟投天数
              <template v-if="isEye">
                <span>{{ info?.totalNum || 0 }}</span>
              </template>
              <template v-else>******</template>
            </div>
          </div>
        </div>
      </div>
      <div class="management">
        <div>机构跟投中心</div>
        <template v-if="projectList.length > 0">
          <div class="box">
            <div class="box-item" v-for="(item, index) in projectList" :key="index">
              <div class="box-item-top">
                <div class="box-item-top-left">
                  <div class="active">
                    <img :src="item.icon" alt="" />
                  </div>
                  <div class="name">{{ item.title }}</div>
                </div>
                <div class="box-item-top-right">
                  <div class="price">{{ _numberWithCommas(item.limitMin) }}</div>
                  <div class="text">最低跟投金额</div>
                </div>
              </div>
              <div class="box-item-main">
                <div>
                  机构保证金
                  <span>{{ _numberWithCommas(8000000) }}</span>
                </div>
                <div>
                  机构分润比例
                  <span>{{ userInfo?.levelRate * 100 }}%</span>
                </div>
                <div>
                  预估收益率
                  <span>{{ item.oddsMinShow }}%-{{ item.oddsMaxShow }}%</span>
                </div>
              </div>
              <div class="box-item-btn">
                <div class="btn" @click="handleProxy(item)">一键跟投</div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <NoData />
        </template>
      </div>
      <div class="advertisement">
        <div class="advertisement-top">
          <div class="advertisement-top-left">
            <img src="../../assets/img/27.png" alt="" />
            <div class="text">低风险精选产品</div>
          </div>
          <div class="advertisement-top-right">
            <div class="text"></div>
          </div>
        </div>
        <div class="advertisement-tip">
          AI大数据赋能+机构专业操盘+多重风控，为用户打造省心、安全、稳健的收益模型
        </div>
        <div class="advertisement-btn">
          <div class="advertisement-btn-item">
            <div class="icon">
              <img src="../../assets/img/28.png" alt="" />
            </div>
            <div class="text">保本付息</div>
          </div>
          <div class="advertisement-btn-item">
            <div class="icon">
              <img src="../../assets/img/29.png" alt="" />
            </div>
            <div class="text">智能决策</div>
          </div>
          <div class="advertisement-btn-item">
            <div class="icon">
              <img src="../../assets/img/30.png" alt="" />
            </div>
            <div class="text">多重风控</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="black" v-if="showCenter"></div>
  <div class="rule_box" v-if="showCenter">
    <div class="logo">
      <img src="../../assets/img/robot.png" alt="" />
    </div>
    <div class="close" @click="showCenter = !showCenter">
      <img src="../../assets/img/close.png" alt="" />
    </div>
    <div class="content">
      <div class="content-title">请输入口令</div>
      <div class="content-tip">
        <span>智能</span>
        跟投已开启安全验证，请输入6位数字口令完成身份确认。
      </div>
      <div class="content-input">
        <van-password-input
          :value="codeList"
          :length="6"
          :mask="false"
          :gutter="10"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
      </div>
      <div class="content-btn" @click="handleConfirmCode">确认</div>
      <div class="content-text">请输入6位数字口令完成身份确认</div>
    </div>
  </div>

  <!-- 数字键盘 -->
  <van-number-keyboard
    :show="showKeyboard"
    :maxlength="6"
    @blur="showKeyboard = false"
    @input="onInput"
    @delete="onDelete"
    @close="showKeyboard = false"
  />

  <van-popup v-model:show="showBottom" round position="bottom">
    <div style="display: flex; align-items: center; justify-content: space-between">
      <div></div>
      <div style="font-size: 14px">跟投设置</div>
      <div>
        <svg
          @click="showBottom = !showBottom"
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
    <div
      style="display: flex; align-items: center; justify-content: space-between; margin-top: 20px"
    >
      <img
        :src="info.icon"
        alt=""
        style="width: 36px; height: 36px; border-radius: 50%; margin-right: 20px"
      />
      <div style="flex: 1; display: flex; align-items: center; justify-content: space-between">
        <div style="display: flex; align-items: center; flex-direction: column">
          <div>{{ userInfo?.totalNum || 0 }}</div>
          <div style="font-size: 12px; color: var(--secondary-color); margin-top: 5px">
            跟投天数
          </div>
        </div>
        <div style="display: flex; align-items: center; flex-direction: column">
          <div>{{ userInfo.yesterdayAmountEarn }}</div>
          <div style="font-size: 12px; color: var(--secondary-color); margin-top: 5px">
            昨日收益
          </div>
        </div>
        <div style="display: flex; align-items: center; flex-direction: column">
          <div>{{ userInfo.totalAmountEarn?.toFixed(2) }}</div>
          <div style="font-size: 12px; color: var(--secondary-color); margin-top: 5px">
            累计收益
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        background: var(--primary-color);
        border-radius: 9px 9px 9px 9px;
        padding: 10px 15px;
        margin-top: 20px;
      "
    >
      <div style="display: flex; align-items: center; justify-content: space-between">
        <div style="color: var(--primary-background); font-weight: 500; font-size: 16px">金额</div>
        <div style="color: var(--regular-background); font-size: 12px">
          可用{{ availableBalance }} USDT
        </div>
      </div>

      <div class="input-box">
        <img style="height: 36px; width: 36px" src="../../assets/img/dollar.png" alt="" />
        <input
          v-model.trim="price"
          type="number"
          maxlength="140"
          :placeholder="info.limitMin ? '最小' + info.limitMin : ''"
          style="color: var(--primary-background) !important"
        />
      </div>
      <div
        style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px"
      >
        <div
          :class="currentIndex == index ? 'boxActive' : ''"
          style="
            width: 20%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: var(--primary-color);
            border-radius: 6px;
          "
          v-for="(item, index) in proportionList"
          :key="item"
          @click="handleCurrentIndex(item, index)"
        >
          {{ item }}%
        </div>
      </div>
    </div>
    <div class="btn2" @click="submit">确认</div>
  </van-popup>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user/index'
import { storeToRefs } from 'pinia'
import { _numberWithCommas } from '@/utils/public'
import { getUserInfoApi, getProjectListApi, getCreateOrderApi } from '@/api/proxy'
import { showToast } from 'vant'
import dayjs from 'dayjs'
const router = useRouter()
const userStore = useUserStore()
const { asset } = storeToRefs(userStore)
const availableBalance = computed(() => {
  return (
    asset.value.filter((item) => {
      return item.symbol === 'usdt'
    })[0].availableAmount + ''
  )
})
const isEye = ref(true)
const userInfo = ref()
const projectList = ref([])
const showBottom = ref(false)
const showCenter = ref(false)
const info = ref()
const codeList = ref('')
const showKeyboard = ref(false)
const handleProxy = (item) => {
  info.value = item
  if (info.value?.limitCode == 'code') {
    showBottom.value = true
  } else {
    showCenter.value = true
  }
}

const price = ref()
const now = ref(dayjs())
const inTime = computed(() => {
  const startTime = dayjs(info.value.startTime)
  const endTime = dayjs(info.value.endTime)
  return now.value.isAfter(startTime) && now.value.isBefore(endTime)
})
watch(codeList, (newVal) => {
  if (newVal.length == 6) {
    showKeyboard.value = false
  }
})
// 处理数字键盘输入
const onInput = (value) => {
  if (codeList.value.length < 6) {
    codeList.value += value
  }
}

// 处理删除
const onDelete = () => {
  codeList.value = codeList.value.slice(0, -1)
}

// 处理确认按钮
const handleConfirmCode = () => {
  const limitLevelIds = info.value.limitLevelIds.split(',').join('') //1,2,3,4,5,6
  console.log(limitLevelIds, codeList.value)
  if (codeList.value.length < 6) {
    showToast('请输入完整的6位口令')
    return
  }
  if (limitLevelIds == codeList.value) {
    showToast('口令验证成功')
    showCenter.value = false
    showBottom.value = true
    codeList.value = ''
  } else {
    showToast('口令验证失败')
  }
}
const submit = () => {
  if (price.value) {
    if (!inTime.value) {
      showToast('不在时间内')
      return
    }
    const levelId = userInfo.value.levelId
    const limitLevelIds = info.value.limitLevelIds
    if (!limitLevelIds.includes(levelId)) {
      showToast('vip等级不足')
      return
    }
    if (price.value > info.value.limitMax) {
      showToast('金额大于最大金额' + info.value.limitMax)
      return
    }
    if (price.value > availableBalance.value) {
      showToast('金额大于可用余额' + availableBalance.value)
      return
    }
    if (price.value < info.value.limitMin) {
      showToast('金额小于最小金额' + info.value.limitMin)
      return
    }
    const data = {
      amount: price.value,
      brokerNo: info.value.brokerNo
    }
    getCreateOrderApi(data)
      .then((res) => {
        if (res.code == 200) {
          showToast('跟投成功')
          price.value = ''
          showBottom.value = false
        } else {
          showToast(res.msg)
        }
      })
      .catch((err) => {})
  } else {
    showToast('请输入固定金额')
  }
}
const proportionList = [1, 25, 75, 100]
const currentIndex = ref(null)
const handleCurrentIndex = (item, index) => {
  currentIndex.value = index
  price.value = availableBalance.value * (item / 100)
}
onMounted(() => {
  getUserInfoApi().then((res) => {
    userInfo.value = res.data
  })
  getProjectListApi().then((res) => {
    projectList.value = res.data
  })
})
</script>

<style lang="scss" scoped>
.proxy {
  .main {
    padding: 0 10px;
    .info {
      padding: 20px 10px;
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      margin-bottom: 15px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text {
          color: var(--secondary-color);
          font-size: 12px;
        }
      }
      .price {
        margin-top: 10px;
        .top {
          font-weight: 600;
          font-size: 20px;
          color: var(--primary-color);
          text-align: left;
          font-style: normal;
          text-transform: none;
          display: flex;
          align-items: center;
          .eye {
            margin-left: 10px;
          }
        }
        .total {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            .total-item {
              margin-bottom: 5px;
              color: var(--secondary-color);
              font-size: 12px;
              span {
                margin-left: 5px;
              }
            }
          }
          .right {
            color: var(--secondary-color);
            font-size: 12px;
            span {
              margin-left: 5px;
            }
          }
        }
      }
    }
    .management {
      .box {
        margin-top: 15px;
        padding: 20px 10px;
        background: var(--regular-background);
        border-radius: 8px 8px 8px 8px;
        &-item {
          &-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-left {
              display: flex;
              align-items: center;
              .active {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                }
              }
              .name {
                margin-left: 10px;
                font-size: 14px;
                color: var(--primary-color);
              }
            }
            &-right {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              .price {
                color: var(--primary-color);
                font-size: 16px;
              }
              .text {
                color: var(--secondary-color);
                font-size: 12px;
                margin-top: 5px;
              }
            }
          }
          &-main {
            margin-top: 15px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 20px;
            color: var(--secondary-color);
            font-size: 12px;
            & > *:nth-child(odd) {
              text-align: left; /* 奇数项左对齐 */
            }

            & > *:nth-child(even) {
              text-align: right; /* 偶数项右对齐 */
            }
            span {
              margin-left: 5px;
            }
          }
          &-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .btn {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              width: 80%;
              height: 29px;
              background: linear-gradient(
                306deg,
                var(--primary-border) 0%,
                var(--secondary-background) 100%
              );
              border-radius: 15px 15px 15px 15px;
              margin-top: 20px;
              font-size: 14px;
              color: var(--regular-color);
            }
          }
        }
      }
    }
    .advertisement {
      margin-top: 15px;
      padding: 20px 10px;
      background: var(--regular-background);
      border-radius: 8px 8px 8px 8px;
      &-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-left {
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
          .text {
            color: var(--primary-color);
            font-size: 12px;
          }
        }
        &-right {
          .text {
            color: var(--secondary-color);
            font-size: 10px;
          }
        }
      }
      &-tip {
        font-size: 10px;
        color: var(--secondary-color);
        margin-top: 10px;
      }
      &-btn {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        &-item {
          width: 100%;
          height: 100%;
          border-radius: 6px 6px 6px 6px;
          border: 1px solid var(--primary-border);
          padding: 16px 13px;
          display: flex;
          align-items: center;
          .icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            font-size: 10px;
            color: var(--primary-color);
          }
        }
      }
    }
  }
}
.van-popup {
  background: var(--primary-color) !important;
  padding: 15px;
  color: var(--regular-color);
}
.input-box {
  margin-top: 15px;
  height: 46px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.btn2 {
  margin-top: 30px;
  width: 347px;
  height: 41px;
  background: linear-gradient(306deg, var(--primary-border) 0%, var(--secondary-background) 100%);
  border-radius: 21px 21px 21px 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: var(--regular-color);
}
.boxActive {
  background: var(--primary-background) !important;
  color: var(--primary-border) !important;
}

.black {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
}
.rule_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 100% 100%;
  z-index: 10;
  background: linear-gradient(226deg, #2f391a 0%, var(--primary-background) 100%);
  border-radius: 22px 22px 22px 22px;
  width: 80%;
  height: auto;
  .logo {
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: 0;
    bottom: 0;
    width: 142px;
    height: 142px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .content {
    margin-top: 70px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content-title {
      font-size: 22px;
      color: var(--primary-colo);
    }
    .content-tip {
      margin-top: 5px;
      font-size: 16px;
      color: var(--primary-colo);
      span {
        color: var(--primary-border);
        font-size: 18px;
        margin-right: 5px;
      }
    }
    .content-input {
      width: 100%;
      margin-top: 20px;
    }
    .content-btn {
      margin-top: 20px;
      color: var(--regular-color);
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
        306deg,
        var(--primary-border) 0%,
        var(--secondary-background) 100%
      );
      border-radius: 6px 6px 6px 6px;
    }
    .content-text {
      color: var(--primary-border);
      margin-top: 15px;
      font-size: 12px;
    }
  }
}
:deep(.van-password-input) {
  margin: 0px;
  .van-password-input__item {
    border: 1px solid var(--primary-border);
    border-radius: 4px;
    background-color: transparent;
    color: var(--primary-colo);
  }
}
:deep(.van-key) {
  background: linear-gradient(306deg, var(--primary-border) 0%, var(--secondary-background) 100%);
  color: var(--regular-color);
}
</style>
