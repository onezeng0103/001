<template>
  <div class="search">
<<<<<<< HEAD
    <div class="search-main">
      <div style="display: flex; align-items: center">
        <div class="input">
          <img
            src="../../../src/assets/img/search.png"
            alt="search"
            style="height: 20px; width: 20px; margin-right: 4px"
          />
          <input
            type="search"
            maxlength="140"
            enterkeyhint="search"
            class="uni-input-input"
            autocomplete="off"
            v-model="searchValue"
            @input="inputSearch"
            placeholder="请输入"
            style="height: 32px; width: 100%"
          />
        </div>
        <div @click="router.back()">取消</div>
      </div>

      <div style="margin-top: 20px">
        <div style="margin-bottom: 15px; font-size: 15px">热门搜寻</div>
        <div class="lists">
          <template v-if="currentCoinList?.length > 0">
            <div
              class="items"
              @click="router.push(`/flash?symbol=${item.coin}`)"
              v-for="(item, index) in currentCoinList"
              :key="index"
            >
              <div style="display: flex; align-items: center">
                <div style="font-size: 14px; margin-right: 4px">{{ item.coin?.toUpperCase() }}</div>
                <div style="font-size: 12px; color: #a0a0a0">/ USDT</div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end">
                <div
                  :class="
                    _isRFD(
                      tradeStore.allCoinPriceInfo[item.coin]?.openPrice,
                      tradeStore.allCoinPriceInfo[item.coin]?.close
                    )
                  "
                  style="font-size: 14px; color: #4d9eb1"
                >
                  {{ priceFormat(tradeStore.allCoinPriceInfo[item.coin]?.close) }}
                </div>
                <div class="rise">
                  <div
                    :class="
                      _isRFD(
                        tradeStore.allCoinPriceInfo[item.coin]?.openPrice,
                        tradeStore.allCoinPriceInfo[item.coin]?.close
                      )
                    "
                    style="font-size: 12px; color: #4d9eb1"
                  >
                    {{ tradeStore.allCoinPriceInfo[item.coin]?.priceChangePercent }}%
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <no-data />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import { useTradeStore } from '@/store/trade'
import { filterKeyWord } from '@/utils/filters'
import { priceFormat } from '@/utils/decimal.js'
import { _isRFD } from '@/utils/public'
import { setCollect } from '@/api/trade/index.js'

const router = useRouter()
const tradeStore = useTradeStore()
const currentCoinList = ref([])
const searchValue = ref('')
const inputSearch = () => {
  currentCoinList.value = filterKeyWord(tradeStore.secondContractCoinList, searchValue.value)
}
const handleClick = (item) => {
  if (item.isCollect == 1) {
    return
  }
  setCollect({
    coin: item.coin,
    icon: item.logo
  }).then((res) => {
    showToast(res.msg)
    tradeStore.getCoinList()
  })
}
onMounted(() => {
  currentCoinList.value = tradeStore.secondContractCoinList
})
</script>

=======
    <div class="search-main">1123123</div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
<style lang="scss" scoped>
.search {
  &-main {
    padding: 15px;
<<<<<<< HEAD

    .lists {
      .items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        //background-color: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        padding: 5px 10px;
        margin-bottom: 7px;
      }
    }

    .input {
      flex: 1;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 34px;
      margin-right: 10px;
      padding: 0 7px;
      display: flex;
      align-items: center;
    }
  }
}
.price_down {
  color: #ea4337 !important;
}
.rise .price_down::before {
  content: '-';
  padding-right: 2px;
  display: inline-block;
}
.rise .price_up::before {
  content: '+';
  padding-right: 2px;
  display: inline-block;
}
=======
  }
}
>>>>>>> d36d63934f35538ff7fd7111385951028443f0d8
</style>
