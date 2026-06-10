// 引入 React server 渲染，测试环境不需要真实浏览器。
import { renderToStaticMarkup } from 'react-dom/server'
// 引入 Vitest 断言与测试函数。
import { expect, test } from 'vitest'
// 引入待测页面。
import { App } from './App'

// 验证页面骨架能正常渲染。
test('renders virtuoso demo shell', () => {
  expect(renderToStaticMarkup(<App />)).toMatchInlineSnapshot(`"<main class="container"><h1>react-virtuoso 虚拟列表</h1><p>用高层组件 <code>Virtuoso</code> 托管虚拟滚动；固定行高走 <code>fixedItemHeight</code>， 变高列表交给库自动测量，无需手写占位与绝对定位。</p><article><header>控制面板</header><label><input type="checkbox" role="switch"/>启用变高模式（每 5 行一条更高的摘要行）</label><p>数据总量：<strong>10,000</strong> · 当前可见索引：<strong>0 ~ 0</strong> · 行高策略：<strong>44px 固定</strong></p></article><div data-testid="virtuoso-scroller" data-virtuoso-scroller="true" style="height:440px;outline:none;overflow-y:auto;position:relative;-webkit-overflow-scrolling:touch;border:1px solid var(--pico-muted-border-color);border-radius:var(--pico-border-radius)" tabindex="0"><div data-viewport-type="element" style="height:100%;position:absolute;top:0;width:100%"><div data-testid="virtuoso-item-list" style="box-sizing:border-box;margin-top:0;padding-bottom:0;padding-top:0"></div></div></div></main>"`)
})
