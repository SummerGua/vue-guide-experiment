# Vue Tour

## Launch this app

1. `pnpm i`
2. `pnpm run lint`
3. `pnpm run dev`

## 思路

0. 根据id找dom，获得它的长、宽、左、右
1. 在body里添加一个div，设置transition:all、绝对定位，往app里添加禁止？
2. 遍历config数组，调整左、上、长、宽
3. 自动滚动页面

用户如何使用：
在 tour.ts 中

```typescript
import { createTour }  from '@summergua/tour'

const config = {
  // 在到达该路由后、页面加载完毕触发
  route: '/',
  // 使用localStorage去记忆用户是否曾经完成过
  once: true,
  // 不出现跳过按钮
  allowSkip: false,
  // 步骤
  step: [
    {
      element: document.querySelector('.tour-step-1')
      text: '第一步'
    },
    {
      element: document.querySelector('.tour-step-2')
      text: '第二步'
    }
  ],
  // 开始和结束的回调
  start: () => {console.log('start')},
  end: () => {console.log('done')},
  change () => {console.log('next')}
}

const tour = createTour(config)
export const tour
```

在main.ts中

```typescript
import { tour } from './tour.ts';

Vue.use();
const app = createApp(App);
app.use(tour);
```
