<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavBar from './component/CustomNavBar.vue'
import HotPanel from './component/HotPanel.vue'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
const bannerList = ref<BannerItem[]>([])
import categoryPanel from './component/categoryPanel.vue'
import type { XtxGuessInstance } from '@/types/components'
import PageSkeleton from './component/PageSkeleton.vue'
import { useGuessList } from '@/composables/index'
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
const HotList = ref<HotItem[]>([])
//获取热门
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  HotList.value = res.result
}
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])

  isLoading.value = false
})

const { guessRef, onScrolltolower } = useGuessList()

const isTrigerred = ref(false)
const onRefresherrefresh = async () => {
  isTrigerred.value = true
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  isTrigerred.value = false
}
const isLoading = ref(false)
</script>

<template>
  <CustomNavBar />
  <scroll-view
    refresher-enabled
    @scrolltolower="onScrolltolower"
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTrigerred"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类 -->
      <categoryPanel :list="categoryList" />
      <!-- 推荐专区 -->
      <HotPanel :list="HotList" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home {
  flex: 1;
}
</style>
