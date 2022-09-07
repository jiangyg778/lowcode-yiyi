1. 新增物料 src/material
   a.新建物料文件夹yi-xxx-material
   b.index.js 为具体的在画布上表现得元素内容
   c.meta.js 为物料的配置信息[回填到画布上的值,在配置信息的name里应指定其值为value]
   d.b和c创建完成之后,在material/index.js 导出物料配置信息和组件即可

2. 新增控制器 src/setter
   a.新建控制器文件夹 xxx-setter
   b.组件提供value和onChange和一些配置信息值
   c.创建完成之后,在setter/index.js 导出配置信息

3. 新增插件 src/plugins
   a.根据plugin所在的位置选择xxx-plugin文件夹
   b.配置信息通过skeleton.push加入即可
   c.plugin文件插入对应的store
   