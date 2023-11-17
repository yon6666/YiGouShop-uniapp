import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

type hotParams = PageParams & { subType?: string }
export const getHotRecommendAPI = (url: string, data?: hotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
