# es6-vue-practice
es6+vue的实践

启动命令：

```js
live-server --port=8080
```

如果没有安装，则全局安装：

```js
npm i -g live-server
```

项目目录

```

├── App
│   ├── index.js
│   ├── style.css
│   └── tpl.html
├── README.md
├── component
├── index.html
├── lib
│   ├── axios.js
│   ├── jquery.js
│   └── vue.js
├── main.js
├── page
│   └── index
│       ├── index.css
│       ├── index.js
│       └── tpl.html
└── src
    └── require.js

```

普通模块化依赖于:

```js
 import { a } from './index.js';
```

然后我自己实现了一个html加载和css加载 require.js
