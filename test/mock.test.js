/**
 * 1. mock api 请求：对API进行测试拦截请求，劫持改写 API 返回数据
 * 2. mock 函数
 */

 import axios from 'axios'
 import { axiosData, runFn } from '../src/example'
 jest.mock('axios') // 劫持 axios 请求
 
 // mock api 请求返回值
 test('测试请求接口', async () => {
    axios.get.mockResolvedValue({ data: 'hello' }) // 返回假数据 { data: 'hello' } 用于测试
    await axiosData().then(data => {
      expect(data).toEqual({ data: 'hello' })
    })
 })

 // mock 函数
 test('函数被调用了', () => {
    const fn = jest.fn() // mock fn
    runFn(fn) // 调用函数

    expect(fn).toHaveBeenCalled() // 期望fn被调用了
    expect(fn).toHaveBeenLastCalledWith('fn runned') // 函数fn被调用时的参数是否符合
})