<template>
  <div class="help">
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
              <span>帮助中心</span>
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
              color: rgba(153, 153, 153, 1);
            "
          ></div>
        </div>
      </div>
    </div>
    <div class="help-main">
      <template v-if="list?.length > 0">
        <div v-for="(item, index) in list" :key="index" style="margin-bottom: 20px">
          <div style="display: flex; align-items: center">
            <div style="width: 3px; height: 12px; margin-right: 10px; background: #fff"></div>
            {{ item.title }}
          </div>
          <div v-if="item.infoList?.length > 0">
            <div
              v-for="(items, indexs) in item.infoList"
              :key="indexs"
              @click="router.push(`helpDetail/${items.id}`)"
            >
              <div style="text-decoration: underline; padding: 10px">{{ items.question }}</div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <NoData />
      </template>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { getHelpcenter } from '@/api/help/index'
const router = useRouter()
const list = ref([])
const isShow = ref(false)
onMounted(async () => {
  try {
    const res = await getHelpcenter()
    if (res.code === 200) {
      list.value = res.data
      list.value.length === 0 ? (isShow.value = true) : (isShow.value = false)
    }
  } catch (error) {
    console.log(error)
  }
})
</script>
<style lang="scss" scoped>
.help {
  &-main {
    padding: 15px;
  }
}
</style>
