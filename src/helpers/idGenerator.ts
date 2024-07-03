import type { CustomComment } from '@/types/CustomComment'
import type { CustomPost } from '@/types/CustomPost'
type PropType = CustomComment[] | CustomPost[]

export const idGenerator = (arr: PropType) => {
  return arr[arr.length - 1]?.id + 1 || 1
}
