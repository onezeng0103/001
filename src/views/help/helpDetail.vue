<template>
  <div class="setting">
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
              <span>{{ t('helpCenter') }}</span>
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
    <uni-view class="container-box" style="margin-top: 1rem">
      <div class="content" v-if="currentHtml">
        <div class="title">{{ questionDetail.question }}</div>
        <div class="time">{{ questionDetail.createTime }}</div>
        <div class="itemDetailObj" v-html="currentHtml"></div>
      </div>
      <NoData v-else />
    </uni-view>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { getHelpcenterDetail } from '@/api/help/index'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const currentHtml = ref('')
const questionDetail = ref({})
onMounted(async () => {
  if (route.params.id) {
    try {
      const res = await getHelpcenterDetail(route.params.id)
      if (res.code === 200) {
        questionDetail.value = res.data
        currentHtml.value = res.data.content
      }
    } catch (error) {
      console.log(error)
    }
  }
})
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  font-weight: bold;
  color: var(--ex-font-color6);
  padding: 15px;
}
.time {
  padding: 0 15px;
  font-size: 14px;
  color: var(--ex-font-color8);
}
:deep(.content) {
  .itemDetailObj {
    font-size: 14px;
    padding: 15px;
    color: var(--ex-default-font-color);
    line-height: 1.4;
  }
  strong {
    font-weight: bold;
  }
  img {
    margin: 15px 0;
    width: 100%;
    object-fit: contain;
  }
}
</style>
