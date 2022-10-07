import { get } from '@/utils/http'
 
export const query = params => get('/demo',params)