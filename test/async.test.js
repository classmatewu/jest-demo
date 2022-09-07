/**
 * 可用于测试 API
 */

import { fetchData } from '../src/example'

test('测试 async await', async () => {
  const res = await fetchData()
  expect(res?.data?.[0]?.location).toBe("保留地址")
})

test('测试 Promise', () => {
  return fetchData().then(res => {
    expect(res?.data?.[0]?.location).toBe("保留地址")
  })
})