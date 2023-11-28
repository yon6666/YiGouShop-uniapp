import { http } from '@/utils/http'
import type { AddressParams, AddressItem } from '@/types/address'

export const postMemberAddressApI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

//获取收货地址
export const getMemberAddressApI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
