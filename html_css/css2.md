### 视口、初始包含快、html、body

### [盒子与盒子的排列是以盒子的边界margin为界限的]()

### 滚动条

1. 浏览器默认的滚动条是在视口上的，只有视口上的滚动条可以移动初始化包含块
2. html或body中只有有一个设置了overflow:scroll，则这个滚动条最终都是出现在视口上的
3. html和body都设置overflow，则html上的会影响视口，body上的只会影响body本身

### 绝对定位盒子的特性

1. 宽高有内容撑开
2. 水平方向上：left+right+width+padding+margin=包含块padding区域的尺寸(width+padding)
   水平方向上：top+bottom+height+padding+margin=包含块padding区域的尺寸(height+padding)

### 概念

+ 定位参照于谁来定位
  1. 相对定位：元素本身的位置
  2. 没有定位：包含块
  3. 绝对定位：包含块（如果祖先元素中存在定位元素，则包含块就是离他最近的定位的祖先元素；如果没有，包含块就是初始包含快）
  4. 固定定位：视口
+ 什么是初始包含快 是一个视口大小的矩形，不等于视口
+ 默认值
  1. left top right bottom width height 默认值auto(不可继承)
  2. margin padding 默认值0
  3. border-width
     默认值medium相当于3px(必须具备border-style属性，该默认值才会生效)
+ 百分比参照于谁
  1. width margin padding left:包含块的width
  2. height top:包含块的height
+ 只有在浮动时考虑元素分分两层的问题（上层文字，下层盒模型），同时浮动提升半个层级

### 字体

1. font-size默认16px，最小12px
2. 处理文本时，建议把行高设置得比字体大
3. 行高的百分比参照字体大小
4. 超出文本省略号white-space: nowrap;overflow: hidden;text-overflow:
   ellipsis;display: block
