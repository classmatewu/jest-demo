/**
 * 快照测试：通过保存快照，然后前后对比快照的方式，来测试一些不变的数据（配置、UI（html、css等）等）
 */

 import { getConfig } from '../src/example'

 // 第一次运行后，会在当前目录下生成 __snapshots__ 文件夹，连即保存了各个快照测试样例保存的快照，后续再 test 就会进行前后对比
 test('测试配置文件有没有更改', () => {
   expect(getConfig()).toMatchSnapshot() // 保存快照
 })