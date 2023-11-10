<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavBar from './component/CustomNavBar.vue'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'
const bannerList = ref<BannerItem[]>([])
import categoryPanel from './component/categoryPanel.vue'
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res)
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

onLoad(() => {
  getHomeBannerData(), getHomeCategoryData()
})
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
  <categoryPanel :list="categoryList" />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
