import { http } from '@/utils/http'
import type { AddressParams, AddressItem } from '@/types/address'

export const postMemberAddressApI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

//获取收货地址列表
export const getMemberAddressApI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

//获取收货地址详情
//@param id 收货地址 id
export const getMemberAddressByIdApI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}
//修改收货地址
export const putMemberAddressByIdApI = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

//删除收货地址
export const deleteMemberAddressApI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
