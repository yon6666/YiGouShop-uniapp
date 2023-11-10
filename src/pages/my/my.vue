<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'
import { http } from '@/utils/http'
const memberStore = useMemberStore()

const getData = async () => {
  const request = await http<string[]>({
    url: '/member/profile',
    method: 'GET',
    header: {},
  })
  // console.log('请求成功', request)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '12345',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()" size="mini" plain type="warn">ceshi</button>
  </view>
</template>

<style lang="scss">
//
</style>
