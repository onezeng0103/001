<template>
  <div class="list-item" @click="handleClick">
    <div class="list-item-top">
      <div class="list-item-top-left">
        <div class="active">
          <img src="../../../assets/img/01.png" alt="" />
        </div>
        <div class="name">{{ item.traderName }}</div>
      </div>
      <div class="list-item-top-right">
        <div class="price">{{ item.followUser || 0 }}/{{ TRADER_SETTING.maxUserCount || 0 }}</div>
        <div class="text">当前跟随</div>
      </div>
    </div>
    <div class="list-item-main">
      <div>
        30天收益率
        <span>{{ item.profitRate30 }}%</span>
      </div>
      <div>
        30天收益
        <span>{{ item.profitAmount30 }}</span>
      </div>
      <div>
        14日胜率
        <span>{{ item.profitRate14 }}%</span>
      </div>
      <div>
        当前资金管理规模
        <span>{{ item.followAmount }}</span>
      </div>
      <div>
        最低跟随金额
        <span>{{ item.minFollowAmount }}</span>
      </div>
    </div>
    <div class="list-item-chart" ref="containerRef"></div>
    <div class="list-item-btn">
      <div class="btn" @click.stop="router.push(`/floworder/confirm/${item.id}`)">跟随</div>
    </div>
    <div class="list-item-link"></div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Highcharts from 'highcharts/highstock'
import { getTraderProfitApi } from '@/api/follow'
const { t } = useI18n()
const router = useRouter()
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  },
  TRADER_SETTING: {
    type: Object,
    default: () => {}
  }
})
const containerRef = ref()

const getTraderProfitRate = () => {
  getTraderProfitApi(props.item.id).then((res) => {
    let data = res.data.map((item) => item.rewardRate)
    Highcharts.chart(containerRef.value, {
      chart: {
        type: 'area', // 使用面积图实现轮廓效果
        backgroundColor: 'transparent', // 背景设置为黑色
        marginTop: 0,
        marginBottom: 20
      },
      title: {
        text: null // 不需要标题
      },
      xAxis: {
        lineColor: 'transparent', // 隐藏X轴线
        labels: {
          enabled: false // 隐藏X轴标签
        },
        tickWidth: 0 // 不显示刻度
      },
      yAxis: {
        gridLineColor: 'transparent', // 隐藏网格线
        title: {
          text: null // 不需要Y轴标题
        },
        labels: {
          enabled: false // 隐藏Y轴标签
        }
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, // 垂直方向渐变
            stops: [
              [0, 'rgba(186, 236, 87, 1)'], // 渐变起点颜色
              [1, 'rgba(255, 255, 255, 0)'] // 渐变终点颜色
            ]
          },
          lineColor: 'rgba(186, 236, 87, 1)', // 边框颜色
          lineWidth: 2, // 边框宽度
          marker: {
            enabled: false // 不显示点标记
          },
          states: {
            hover: {
              enabled: false // 移动到曲线时无特效
            }
          },
          step: 'center' // 创建阶梯状轮廓
        }
      },
      series: [
        {
          data, // 确保柱子连接到边缘
          showInLegend: false // 隐藏图例
        }
      ],
      credits: {
        enabled: false // 隐藏 Highcharts 水印
      }
    })
  })
}
const handleClick = () => {
  router.push(`/floworder/traderinfo/${props.item.id}`)
}
onMounted(() => {
  getTraderProfitRate()
})
</script>
<style lang="scss" scope>
.list-item {
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
  &-chart {
    margin-top: 10px;
    height: 100px;
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
      color: var(--primary-background);
    }
  }
  &-link {
    margin: 20px 0px;
    border: 1px solid var(--placeholder-color);
  }
}
</style>
