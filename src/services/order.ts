//获取预付订单
import { http } from '@/utils/http'
export const getPrepayOrderAPI = () => {
  return http({
    method: 'GET',
    url: '/member/order/pre',
  })
}
