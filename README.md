# react-virtuoso 虚拟列表 Demo

## 简介

演示如何用 [react-virtuoso](https://virtuoso.dev/) 的 `<Virtuoso />` 组件快速接入虚拟滚动，并对比**固定行高**与**变高自动测量**两种模式。

## 快速开始

### 环境要求

- Node.js 18+
- pnpm

### 运行

```bash
cd typescript-react-virtuoso-virtual-list-demo
pnpm install
pnpm run dev
```

## 注意事项

- `Virtuoso` 会自己维护滚动容器与可见区间，接入成本低于 headless 方案。
- 变高模式依赖运行时测量，首次滚动时可能出现轻微高度修正。

## 教程

### 1. 为什么选 react-virtuoso

它提供完整组件 API，适合聊天流、Feed、表格等复杂场景。固定列表只需 `totalCount + itemContent`；变高列表甚至不用传 `fixedItemHeight`。

### 2. demo 原理

- 固定模式：传 `fixedItemHeight={44}`，库按统一高度计算偏移。
- 变高模式：不传 `fixedItemHeight`，每行 DOM 渲染后由库测量真实高度。
- `rangeChanged` 回调暴露当前可见索引，便于调试。

### 3. 关键代码

```tsx
<Virtuoso
  totalCount={10000}
  fixedItemHeight={44}
  rangeChanged={({ startIndex, endIndex }) => ...}
  itemContent={(index) => <Row index={index} />}
/>
```

## 操作

1. 默认固定行高模式，快速滚动观察流畅度。
2. 打开「变高模式」，注意每 5 行的摘要行更高。
3. 观察面板中的可见索引如何随滚动变化。
