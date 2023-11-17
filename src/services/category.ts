import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'
//分类列表
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
