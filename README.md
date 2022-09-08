# jest-demo
jest use demo

### start
```script
pnpm test // jest 会默认去找目录下所有的 *.test.js 文件（jest定的格式类型）
pnpm coverage // 查看该工程下代码的测试覆盖率，可通过终端或者浏览器打开 /coverage/lcov-report/index.html 查看结果
```

### 测试覆盖率指标说明
- %stmts是语句覆盖率（statement coverage）：是不是每个语句都执行了？
- %Branch分支覆盖率（branch coverage）：是不是每个if代码块都执行了？
- %Funcs函数覆盖率（function coverage）：是不是每个函数都调用了？
- %Lines行覆盖率（line coverage）：是不是每一行都执行了？