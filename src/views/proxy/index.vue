<template>
  <div class="proxy">
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
              <span>代投</span>
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
              color: rgba(153, 153, 153, 1);
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
              代投天数
              <template v-if="isEye">
                <span>{{ info?.totalNum || 0 }}</span>
              </template>
              <template v-else>******</template>
            </div>
          </div>
        </div>
      </div>
      <div class="management">
        <div>资产管理</div>
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
                  <div class="text">最低代投金额</div>
                </div>
              </div>
              <div class="box-item-main">
                <div>
                  代投保证金
                  <span>{{ _numberWithCommas(item.bail) }}</span>
                </div>
                <div>
                  分润比例
                  <span>{{ userInfo?.levelRate * 100 }}%</span>
                </div>
                <div>
                  日收益率
                  <span>{{ item.oddsMinShow }}%-{{ item.oddsMaxShow }}%</span>
                </div>
              </div>
              <div class="box-item-btn">
                <div class="btn" @click="handleProxy(item)">一键代投</div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <NoData2 />
        </template>
      </div>
      <div class="advertisement">
        <div class="advertisement-top">
          <div class="advertisement-top-left">
            <img src="../../assets/img/11.png" alt="" />
            <div class="text">AI智能代投</div>
          </div>
          <div class="advertisement-top-right">
            <div class="text">智能推荐</div>
          </div>
        </div>
        <div class="advertisement-tip">
          智能分析市场趋势，实时监控价格波动，自动执行最优代投策略
        </div>
        <div class="advertisement-btn">
          <div class="advertisement-btn-item">
            <div class="icon">
              <img src="../../assets/img/10.png" alt="" />
            </div>
            <div class="text">智能预测</div>
          </div>
          <div class="advertisement-btn-item">
            <div class="icon">
              <img src="../../assets/img/10.png" alt="" />
            </div>
            <div class="text">自动代投</div>
          </div>
          <div class="advertisement-btn-item">
            <div class="icon">
              <img src="../../assets/img/10.png" alt="" />
            </div>
            <div class="text">风控管理</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-popup v-model:show="showBottom" round position="bottom">
    <div style="display: flex; align-items: center; justify-content: flex-end">
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
    <div
      style="display: flex; align-items: center; justify-content: space-between; margin-top: 20px"
    >
      <div style="display: flex; align-items: center; flex-direction: column">
        <div>{{ userInfo?.totalNum || 0 }}</div>
        <div style="font-size: 12px; color: #999999; margin-top: 5px">代投天数</div>
      </div>
      <div style="display: flex; align-items: center; flex-direction: column">
        <div>{{ userInfo.yesterdayAmountEarn }}</div>
        <div style="font-size: 12px; color: #999999; margin-top: 5px">昨日收益</div>
      </div>
      <div style="display: flex; align-items: center; flex-direction: column">
        <div>{{ userInfo.totalAmountEarn?.toFixed(2) }}</div>
        <div style="font-size: 12px; color: #999999; margin-top: 5px">累计收益</div>
      </div>
    </div>
    <div style="margin-top: 20px; color: #000000; font-weight: 500; font-size: 16px">固定金额</div>
    <div class="input-box" style="background: #f5f5f5">
      <input
        v-model.trim="price"
        type="number"
        maxlength="140"
        :placeholder="info.limitMin ? '最小' + info.limitMin : ''"
        style="color: #000000 !important"
      />
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
const info = ref()
const handleProxy = (item) => {
  info.value = item
  showBottom.value = true
}
const price = ref()
const now = ref(dayjs())
const inTime = computed(() => {
  const startTime = dayjs(info.value.startTime)
  const endTime = dayjs(info.value.endTime)
  return now.value.isAfter(startTime) && now.value.isBefore(endTime)
})
const submit = () => {
  if (price.value) {
    if (!inTime.value) {
      showToast('不在shi j')
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
          showToast('代投成功')
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
onMounted(() => {
  getUserInfoApi().then((res) => {
    userInfo.value = res.data
  })
  getProjectListApi().then((res) => {
    projectList.value = res.data
    console.log(projectList.value)
  })
})
</script>

<style lang="scss" scoped>
.proxy {
  .main {
    padding: 0 10px;
    .info {
      padding: 20px 10px;
      background: rgba(255, 255, 255, 0.07);
      border-radius: 8px 8px 8px 8px;
      margin-bottom: 15px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text {
          color: #999999;
          font-size: 12px;
        }
      }
      .price {
        margin-top: 10px;
        .top {
          font-weight: 600;
          font-size: 20px;
          color: #ffffff;
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
              color: #999999;
              font-size: 12px;
              span {
                margin-left: 5px;
              }
            }
          }
          .right {
            color: #999999;
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
        background: rgba(255, 255, 255, 0.07);
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
                color: #fff;
              }
            }
            &-right {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              .price {
                color: rgba(255, 255, 255, 1);
                font-size: 16px;
              }
              .text {
                color: rgba(153, 153, 153, 1);
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
            color: rgba(153, 153, 153, 1);
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
              background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
              border-radius: 15px 15px 15px 15px;
              margin-top: 20px;
              font-size: 14px;
              color: #000;
            }
          }
        }
      }
    }
    .advertisement {
      margin-top: 15px;
      padding: 20px 10px;
      background: rgba(255, 255, 255, 0.07);
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
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
          }
        }
        &-right {
          .text {
            color: rgba(153, 153, 153, 1);
            font-size: 10px;
          }
        }
      }
      &-tip {
        font-size: 10px;
        color: rgba(153, 153, 153, 1);
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
          border: 1px solid rgba(186, 236, 87, 1);
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
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}
.van-popup {
  background: #fff !important;
  padding: 30px;
  color: #000;
}
.input-box {
  margin-top: 15px;
  height: 46px;
  border-radius: 10px;
  padding: 0px 18px;
  display: flex;
  align-items: center;
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
</style>
