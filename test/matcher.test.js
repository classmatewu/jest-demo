/**
 * note 2022-09-06
 * test -> 测试块
 * expect -> 断言
 * toBe(引用相等)/toEqual(值相等)/... -> 匹配器(matcher)
 */


import { multiply } from '../src/example'

test('测试乘法', () => {
  expect(multiply(4, 2)).toBe(8)
})

test('测试对象是否相等', () => {
  const data = { name: 'zelinwu' }
  data['age'] = 18
  expect(data).toEqual({ name: 'zelinwu', age: 18 })
})

test('一些匹配器', () => {
  const n = null
  const isTrue = true
  const value = 3
  expect(n).toBeNull() // 只匹配 null
  expect(n).toBeDefined() // 只匹配 undefined
  expect(n).not.toBeUndefined() // 与 toBeUndefined 相反
  expect(isTrue).toBeTruthy() // 匹配任何 if 语句为真

  expect(value).toBeGreaterThan(2)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(3)
})