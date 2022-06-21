# vue-ch-ui 组件库

### 说明
**该项目vue组件库,webpack多组件单独打包js,使用gulp打包sass并压缩**

### 组件文档
https://hchen318.github.io/vue-ch-ui/

### 安装
```
npm i vue-ch-ui
```

### 引入组件库
> 在 main.js 中引入组件库

```javascript
// 全部引入
import 'vue-ch-ui/dist/css/index.css'
import VueComponents from "vue-ch-ui";
Vue.use(VueComponents);

// 按需引入
import 'vue-ch-ui/dist/css/demo.css'
import { Demo } from "vue-ch-ui";
Vue.use(Demo);

```

Copyright (c) 2021-present zack