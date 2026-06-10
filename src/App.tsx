// 引入 React 类型与 hooks。
import { type FC, useState } from 'react'
// 引入 Virtuoso 虚拟列表组件。
import { Virtuoso } from 'react-virtuoso'
// 引入行高与区间格式化工具。
import { formatVirtuosoRange, getRowHeight } from './getRowHeight'

// 演示数据总量。
const TOTAL_COUNT = 10_000
// 列表视口高度。
const VIEWPORT_HEIGHT = 440
// 固定行高模式下的统一高度。
const FIXED_ITEM_HEIGHT = 44

// 根据索引生成行文案。
const buildRowLabel = (index: number, variableHeight: boolean) => {
  if (variableHeight && index % 5 === 0) {
    return `第 ${index + 1} 行 · 摘要行（Virtuoso 自动测量高度）`
  }
  return `第 ${index + 1} 行 · react-virtuoso 托管虚拟滚动`
}

// 行容器样式。
const buildRowStyle = (index: number, variableHeight: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: variableHeight ? getRowHeight(index) : FIXED_ITEM_HEIGHT,
  padding: variableHeight && index % 5 === 0 ? '0.75rem 1rem' : '0 1rem',
  borderBottom: '1px solid var(--pico-muted-border-color)',
  background: index % 2 === 0 ? 'var(--pico-card-background-color)' : 'transparent',
  boxSizing: 'border-box' as const,
})

// 页面主组件：展示 react-virtuoso 的固定高与变高两种模式。
export const App: FC = () => {
  // 是否启用变高模式。
  const [variableHeight, setVariableHeight] = useState(false)
  // Virtuoso 当前可见索引区间。
  const [visibleRange, setVisibleRange] = useState('0 ~ 0')

  return (
    <main className="container">
      <h1>react-virtuoso 虚拟列表</h1>
      <p>
        用高层组件 <code>Virtuoso</code> 托管虚拟滚动；固定行高走 <code>fixedItemHeight</code>，
        变高列表交给库自动测量，无需手写占位与绝对定位。
      </p>

      <article>
        <header>控制面板</header>
        <label>
          <input
            type="checkbox"
            role="switch"
            checked={variableHeight}
            onChange={(event) => setVariableHeight(event.target.checked)}
          />
          启用变高模式（每 5 行一条更高的摘要行）
        </label>
        <p>
          数据总量：<strong>{TOTAL_COUNT.toLocaleString()}</strong>
          {' · '}
          当前可见索引：<strong>{visibleRange}</strong>
          {' · '}
          行高策略：
          <strong>{variableHeight ? '动态测量' : `${FIXED_ITEM_HEIGHT}px 固定`}</strong>
        </p>
      </article>

      <Virtuoso
        style={{
          height: VIEWPORT_HEIGHT,
          border: '1px solid var(--pico-muted-border-color)',
          borderRadius: 'var(--pico-border-radius)',
        }}
        totalCount={TOTAL_COUNT}
        fixedItemHeight={variableHeight ? undefined : FIXED_ITEM_HEIGHT}
        rangeChanged={({ startIndex, endIndex }) => {
          setVisibleRange(formatVirtuosoRange(startIndex, endIndex))
        }}
        itemContent={(index) => (
          <div style={buildRowStyle(index, variableHeight)}>
            {buildRowLabel(index, variableHeight)}
          </div>
        )}
      />
    </main>
  )
}
