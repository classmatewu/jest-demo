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

### 测试分类
- 单元测试：单元可以是一个模块、函数、组件、API等独立的功能
  - TDD：测试驱动开发，先写单元测试，在开发代码
  - BDD：行为驱动开发，先开发代码，再写单元测试
- 集成测试：单元测试过去独立，有些覆盖不到需要集成测试
- E2E：端到端测试
- 压力测试：对 API 等进行压测