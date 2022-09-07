/**
 * mock 数据对API进行测试，拦截请求，劫持改写 API 返回数据
 */

 import axios from 'axios'
 import { axiosData } from '../src/example'
 jest.mock('axios') // 劫持 axios 请求
 
 test('测试请求接口', async () => {
   axios.get.mockResolvedValue({ data: 'hello' }) // 返回假数据 { data: 'hello' } 用于测试
   await axiosData().then(data => {
     expect(data).toEqual({ data: 'hello' })
   })
 })