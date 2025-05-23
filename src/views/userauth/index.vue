<template>
  <div>
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
                t="1747825997144"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="22723"
                width="30"
                height="30"
              >
                <path
                  d="M330.666667 512c0-14.933333 4.266667-29.866667 14.933333-40.533333l234.666667-277.33333399c23.466667-27.733333 64-29.866667 89.6-8.53333301 27.733333 23.466667 29.866667 64 8.53333299 89.6L477.866667 512l200.53333299 236.8c23.466667 27.733333 19.19999999 68.266667-8.53333299 89.6-27.733333 23.466667-68.266667 19.19999999-89.6-8.53333301l-234.666667-277.33333399c-10.666667-10.666667-14.933333-25.6-14.933333-40.533333z"
                  fill="#ffffff"
                  p-id="22724"
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
              <span>实名认证</span>
            </span>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              width: 4.6875rem;
              justify-content: flex-end;
              align-items: center;
            "
          ></div>
        </div>
      </div>
    </div>

    <div style="margin: 35px 10px 0 10px">
      <div style="display: flex; align-items: center; justify-content: space-between">
        <div>国籍</div>

        <div class="optionNationality" @click="showBottom2 = true">
          <span class="optionNationality-text">
            {{ current == 'zh' ? action.chineseName : action.englishName }}
          </span>
          <!--          <span class="optionNationality-text">中国</span>-->
          <div>
            <svg
              t="1747924804750"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9044"
              width="12"
              height="12"
            >
              <path
                d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432c9.6-12.8 9.6-25.6 0-35.2z"
                fill="#BAEC57"
                p-id="9045"
              ></path>
            </svg>
          </div>
        </div>

        <div>认证方式</div>

        <div class="optionNationality fui-dropdown__menu" @click="handleShowPopoverNum()">
          <!--          <span class="optionNationality-text">{{ current == 'zh' ? action.chineseName : action.englishName }}</span>-->
          <span class="optionNationality-text">{{ formData.title }}</span>
          <div>
            <svg
              t="1747924804750"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9044"
              width="12"
              height="12"
            >
              <path
                d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432c9.6-12.8 9.6-25.6 0-35.2z"
                fill="#BAEC57"
                p-id="9045"
              ></path>
            </svg>
          </div>

          <div
            :class="
              showPopoverNum
                ? 'fui-dropdown__menu-list fui-ddm__down fui-ddm__down-show'
                : 'fui-dropdown__menu-list fui-ddm__down'
            "
          >
            <div class="element">
              <div
                class="element-list"
                :class="formData.title === item.name ? 'elect' : ''"
                v-for="item in certificate"
                :key="item.type"
                @click="close(item)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="message">
        <div class="message-list">
          <div>姓名：</div>
          <!--          <div>请输入真实姓名</div>-->
          <input
            v-model.trim="formData.userName"
            type="text"
            maxlength="140"
            enterkeyhint="done"
            autocomplete="off"
            style="text-align: right"
            placeholder="请输入真实姓名"
          />
        </div>
        <div class="message-list">
          <div>{{ formData.title || '身份证' }}：</div>
          <input
            v-model.trim="formData.number"
            type="text"
            maxlength="140"
            enterkeyhint="done"
            autocomplete="off"
            style="text-align: right"
            placeholder="请输入"
          />
        </div>
      </div>

      <div class="upd">
        <div style="font-weight: 500; font-size: 16px; color: #ffffff">请上传身份证照片</div>
        <van-uploader v-model="fileList1" :after-read="afterRead1" class="upd-list">
          <img
            v-if="fileList1.length == 0"
            style="width: 36px; height: 36px"
            src="@/assets/img/Frame.png"
          />
          <div v-if="fileList1.length == 0" class="text">上传证件照正面</div>
        </van-uploader>
        <van-uploader v-model="fileList2" :after-read="afterRead2" class="upd-list">
          <img
            v-if="fileList2.length == 0"
            style="width: 36px; height: 36px"
            src="@/assets/img/Frame.png"
          />
          <div v-if="fileList2.length == 0" class="text">上传证件照反面</div>
        </van-uploader>
        <van-uploader v-model="fileList3" :after-read="afterRead3" class="upd-list">
          <img
            v-if="fileList3.length == 0"
            style="width: 36px; height: 36px"
            src="@/assets/img/Frame.png"
          />
          <div v-if="fileList3.length == 0" class="text">上传手持证件照</div>
        </van-uploader>
      </div>
    </div>

    <div class="btn" @click="submit">提交认证</div>
  </div>
  <PhonePopup :showBottom="showBottom2" @close="handleClose" />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user'
import { storageDict } from '@/config/dict'
import { uploadImg } from '@/api/common/index.js'
import { uploadKYC } from '@/api/user'
import PhonePopup from '@/components/phonePopup/index.vue'
const showPopoverNum = ref(false) //弹窗

const handleShowPopoverNum = () => {
  showPopoverNum.value = !showPopoverNum.value
}

const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const current = ref(localStorage.getItem(storageDict.LANGUAGE))
const formData = ref({
  userName: '',
  title: '',
  type: '',
  number: ''
})
const action = ref({})
const certificate = [
  { name: '身份证', type: 1 }, //身份证
  { name: '护照', type: 2 }, //护照
  { name: '驾驶证', type: 3 } //驾驶证
]
const showBottom = ref(false)
const close = (value) => {
  if (value) {
    formData.value.type = value.type
    formData.value.title = value.name
  }
  showBottom.value = false
}

const showBottom2 = ref(false)
const handleClose = (value) => {
  if (value) {
    action.value = value
  }
  showBottom2.value = false
}
const fileList1 = ref([])
const afterRead1 = (file) => {
  file.status = 'uploading'
  let formData = new FormData()
  formData.append('file', file.file)
  uploadImg(formData).then((res) => {
    res = res.data
    if (res.code == '200') {
      file.res = res.data.url
      file.status = 'success'
    } else {
      showToast(res.msg)
      fileList1.value = []
    }
  })
}
const fileList2 = ref([])
const afterRead2 = (file) => {
  file.status = 'uploading'
  let formData = new FormData()
  formData.append('file', file.file)
  uploadImg(formData).then((res) => {
    res = res.data
    if (res.code == '200') {
      file.res = res.data.url
      file.status = 'success'
    } else {
      showToast(res.msg)
      fileList2.value = []
    }
  })
}
const fileList3 = ref([])
const afterRead3 = (file) => {
  file.status = 'uploading'
  let formData = new FormData()
  formData.append('file', file.file)
  uploadImg(formData).then((res) => {
    res = res.data
    if (res.code == '200') {
      file.res = res.data.url
      file.status = 'success'
    } else {
      showToast(res.msg)
      fileList3.value = []
    }
  })
}
const submit = () => {
  if (!formData.value.userName) {
    showToast('请填写姓名')
    return
  }
  if (!formData.value.title) {
    showToast('请选择证件类型')
    return
  }
  if (!formData.value.number) {
    showToast('请输入证件号')
    return
  }
  if (!action.value?.englishName) {
    showToast('请选择居住国家')
    return
  }
  if (fileList1.value.length == 0) {
    showToast('请上传证件正面')
    return
  }
  if (fileList2.value.length == 0) {
    showToast('请上传证件背面')
    return
  }
  if (fileList3.value.length == 0) {
    showToast('请上传手持证件照')
    return
  }
  const file1 = fileList1.value[0] || {}
  let filePath1 = file1.res
  const file2 = fileList2.value[0] || {}
  let filePath2 = file2.res
  const file3 = fileList3.value[0] || {}
  let filePath3 = file3.res
  if (file1.status != 'success' || file2.status != 'success') {
    showToast('图片上传中')
    return
  }
  if (file3.status != 'success') {
    showToast('图片上传中')
    return
  }
  let params = `realName=${formData.value.userName}&idCard=${formData.value.number}&flag=2&frontUrl=${filePath1}&backUrl=${filePath2}&country=${action.value.englishName}&handelUrl=${filePath3}&cardType=${formData.value?.type}`
  uploadKYC(params).then((res) => {
    if (res.code == '200') {
      showToast('提交成功，请等待...')
      router.push('/')
    } else {
      showToast(res.msg)
    }
  })
}
</script>

<style lang="scss" scoped>
.element {
  background: #121212;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid rgba(186, 236, 87, 0.26);
  padding: 10px 0;
  margin-top: 5px;

  .element-list {
    width: 119px;
    height: 29px;
    border-radius: 2px 2px 2px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    color: #999999;
  }

  .elect {
    background: #baec57;
    color: #000000;
  }
}

.btn {
  margin: 40px 39px 30px 39px;
  padding: 11px 123px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  text-align: left;
  font-style: normal;
  text-transform: none;
  background: linear-gradient(306deg, #baec57 0%, #ffe414 100%);
  border-radius: 20px 20px 20px 20px;
}

.upd {
  .upd-list {
    margin-top: 15px;
    border-radius: 6px 6px 6px 6px;
    border: 1px dashed #baec57;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    :deep(.van-uploader__input-wrapper) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .text {
      margin-top: 15px;
      font-size: 14px;
      color: #999999;
    }
  }
}

.message {
  margin: 35px 0px;

  .message-list {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
}

.optionNationality {
  width: 112px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 8px 8px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 5px 0 5px;

  .optionNationality-text {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    //margin-right: 10px;
  }
}

//
.contract-body-top-left-cell {
  display: flex;
}

.cell-row {
  width: 13.5625rem;
  height: auto;
  margin-bottom: 0.46875rem;
  border: 0.0625rem solid transparent;
}

.select-box {
  width: 13.5625rem;
  height: 1.625rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
}

.slider-number {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 1.5625rem;
}

.scroll-view {
  background-color: var(--background-primary);
}

.not-data {
  display: flex;
  align-items: center;
  justify-content: center;

  .fui-empty__wrap {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

//
.fui-dropdown__menu {
  flex: 1;
  position: relative;
}

.fui-ddm__scroll {
  width: auto;
  flex: 1;
}

.fui-dropdown__menu-list {
  position: absolute;
  overflow: hidden;
  z-index: 992;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0.3125rem rgba(2, 4, 38, 0.05);
  opacity: 0;
}

.fui-ddm__down {
  transform-origin: 0 0;
  bottom: 0;
  transform: translate3d(0, 100%, 0) scaleY(0);
}

.fui-ddm__down-show {
  transform: translate3d(0, 100%, 0) scaleY(1);
  visibility: visible;
  opacity: 1;
}

.fui-ddm__up {
  transform-origin: 0 100%;
  top: 0;
  transform: translate3d(0, -100%, 0) scaleY(0);
}

.fui-ddm__up-show {
  transform: translate3d(0, -100%, 0) scaleY(1);
  visibility: visible;
  opacity: 1;
}

.fui-ddm__mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 990;
}

.fui-dropdown__menu-item {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  transform: scale(1) translateZ(0);
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  position: relative;
  cursor: pointer;
}

.fui-ddm__flex {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex: 1;
  flex-direction: row;
  align-items: center;
}

.fui-ddm__item-line {
  position: relative;
  border-bottom-width: 0;
}

.fui-ddm__item-line:after {
  content: '';
  position: absolute;
  border-bottom: 1px solid var(--fui-color-border, #eeeeee);
  transform: scaleY(0.5);
  transform-origin: 0 100%;
  bottom: 0;
  right: 0;
  left: 1rem;
  pointer-events: none;
}

.fui-dropdown__menu-item:active {
  background-color: var(--fui-bg-color-hover, rgba(0, 0, 0, 0.2)) !important;
}

.fui-ddm__reverse {
  justify-content: space-between;
  flex-direction: row-reverse;
}

.fui-ddm__checkbox {
  font-size: 0;
  color: rgba(0, 0, 0, 0);
  width: 1.25rem;
  height: 1.25rem;
  border-width: 1px;
  border-style: solid;
  display: inline-flex;
  box-sizing: border-box;
  border-radius: 50%;
  vertical-align: top;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.fui-ddm__checkbox-color {
  background: var(--fui-color-primary, #465cff) !important;
  border-color: var(--fui-color-primary, #465cff) !important;
}

.fui-is__checkmark {
  border-width: 0 !important;
  background-color: transparent !important;
}

.fui-ddm__checkmark {
  width: 0.625rem;
  height: 1.25rem;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: #fff;
  border-right-style: solid;
  border-right-width: 3px;
  border-right-color: #fff;
  box-sizing: border-box;
  transform: rotate(45deg) scale(0.5) translateZ(0);
  transform-origin: 54% 48%;
}

.fui-ddm__item-text {
  word-break: break-all;
  font-weight: 400;
}

.fui-ddm__text-pl {
  padding-left: 0.75rem;
}

.fui-ddm__text-pr {
  padding-right: 0.75rem;
}

.fui-ddm__icon-box {
  overflow: hidden;
  background-color: #f1f4fa;
  flex-shrink: 0;
}

.fui-ddm__icon-ml {
  margin-left: 0.75rem;
}

.fui-ddm__icon-mr {
  margin-right: 0.75rem;
}
</style>
