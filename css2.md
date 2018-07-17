### 一个元素分两层，上层文字，下层盒模型；浮动提升半个层级

### 视口、初始包含快、html、body

### 滚动条

1. 浏览器默认的滚动条是在视口上的，只有视口上的滚动条可以移动初始化包含块
2. html或body中只有有一个设置了overflow:scroll，则这个滚动条最终都是出现在视口上的
3. html和body都设置overflow，则html上的会影响视口，body上的只会影响body本身

### 绝对定位盒子的特性

1. 宽高有内容撑开
2. 水平方向上：left+right+width+padding +margin=包含块padding区域的尺寸
   水平方向上：top+bottom+height+padding +margin=包含块padding区域的尺寸
