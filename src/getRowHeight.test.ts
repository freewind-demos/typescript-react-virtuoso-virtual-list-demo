// 引入 Vitest 断言与测试函数。
import { expect, test } from 'vitest'
// 引入待测纯函数。
import { formatVirtuosoRange, getRowHeight } from './getRowHeight'

// 验证普通行高度。
test('returns base height for normal rows', () => {
  expect(getRowHeight(1)).toMatchInlineSnapshot(`44`)
})

// 验证摘要行高度。
test('returns taller height for summary rows', () => {
  expect(getRowHeight(10)).toMatchInlineSnapshot(`72`)
})

// 验证区间文案格式化。
test('formats virtuoso visible range', () => {
  expect(formatVirtuosoRange(12, 28)).toMatchInlineSnapshot(`"12 ~ 28"`)
})
