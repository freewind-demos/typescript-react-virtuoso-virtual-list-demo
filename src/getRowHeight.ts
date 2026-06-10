// 根据索引生成变高行高，演示 Virtuoso 对动态高度的支持。
export const getRowHeight = (index: number) => {
  // 每 5 行出现一个更高的“摘要行”。
  if (index % 5 === 0) {
    return 72
  }
  // 普通行使用基础高度。
  return 44
}

// 把 Virtuoso 的 rangeChanged 结果格式化成展示文案。
export const formatVirtuosoRange = (startIndex: number, endIndex: number) =>
  `${startIndex} ~ ${endIndex}`
