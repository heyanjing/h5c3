## 页面中元素都有一个隐含的属性Block Formatting Context，简称BFC

+ 开启后有特点如下
  1. 父元素的垂直外边距不会和子元素重叠
  2. 不会被浮动元素遮盖
  3. 可以包含浮动的子元素
+ 如何开启
  1. 设置元素浮动
  2. 设置元素绝对定位
  3. 设置元素为inline-bolck
  4. 将元素的overflow设置为一个非visible的值

# 浮动和绝对定位可以使元素脱离文档流，脱离文档流后的元素都是块元素，该元素的宽高默认由内容撑开

## 背景相关的样式不会被继承

## 不同选择器选中同一元素并设置相同样式时的优先级

> 1. 内联样式：**1000**
> 2. id选择器：**100**
> 3. 类和伪类选择器：**10**
> 4. 元素选择器：**1**
> 5. 多种选择器时，需要将多种选择器的优先级相加后再比较;如果选择器的优先级相同，使用靠后的

## font-size和em的关系

1. 1em=1font-size,字体大小20px，2em=40px;

## 盒子模型的特点

+ 块元素
  1. 块元素的width和height指的是块元素的内容区大小,背景在块元素的大小范围（内容区+内边距+边框）内都有效
  2. 块元素的margin设置上或左时，会移动当前块元素的位置；设置右和下时会移动相邻的其他块元素;
  3. [垂直且相邻的块元素]()外边距重叠,取最大值
     1. 所谓的外边距重叠指兄弟元素之间的相邻外边距会取最大值而不是取和
     2. 如果父子元素的垂直外边距相邻了，则子元素的外边距会设置给父元素
     3. 解决外边距重叠.clearfix:before{ content : ""; display : table;}
+ 内联元素
  1. 内联元素设置width和height无效
  2. 可以设置内边距，但是只有左右会影响布局(相邻的其他元素会移动)，上下不会影响布局(相邻的其他元素不会移动)
  3. 只能设置左右外边距

## 文档流的特点

+ 块元素
  1. 块元素在文档流中会独占一行，块元素会自上向下排列
  2. 块元素在文档流中默认是父元素的100%
  3. 块元素在文档流中的高度默认被内容撑开
+ 内联元素
  1. 内联元素在文档流中会占自身的大小，会默认从左向右排列，如果一行中不足以容纳所有的内联元素，则换到下一行继续自左向右
  2. 内联元素在文档流中宽度和高度默认都被内容撑开

## 浮动的特点

> 1. 浮动后元素会立即脱离文档流，它下面的元素会立即向上移动；注意移动上来的元素的文字不会被遮挡，类似于文字环绕；
> 2. 浮动后元素会尽量像页面的左上或右上漂浮，直到遇到父元素的边框或者其他的浮动元素
> 3. 浮动元素的上边是未浮动的块元素时，则浮动元素不会超过块元素
> 4. 一行上有多个浮动元素时，如果宽度不够时，后面的浮动元素会自动换至下一行；同时后面的浮动元素不会超过前面一个浮动元素所在的行
> 5. 内联元素浮动后就成为块元素了，[如果块元素没有指定宽高，则它的宽高由内容决定]()
> 6. clear可以清除其他浮动的兄弟元素对自己的影响

## 高度塌陷

> 1. 在文档流中，父元素未设置高度时，默认高度是由子元素决定的。但是当为子元素设置浮动后，子元素脱离文档流后就会造成父元素的高度塌陷，同时由于父元素的高度塌陷了，则父元素的其他兄弟元素就会向上移动
> 2. 解决方法:
> > 1. 给父元素添加overflow:hidden开启BFC;
> > 2.  .clearfix:after { content : ""; display : block; clear: both; }

## position的特点，可以通过z-index修改元素的层级，父元素的层级再高也不会遮挡子元素

+ relative
  1. 相对定位是相对于元素在文档流中[原来的位置]()进行定位
  2. 相对定位是不会脱离文档流的（元素移动了，但是元素原来的位置还是会存在，其他元素不会占用）
  3. 相对定位会使元素的层级提升
  4. 相对定位不会改变元素的性质，块还是块，内联还是内联
+ absolute
  1. 绝对定位是相对于离他最近的开启了定位的祖先元素进行定位的，如果所有祖先元素都没有开启定位时，则相对于初始包含快进行定位；[一般情况开启了子元素的绝对定位都会同时开启父元素的相对定位]()
  2. 绝对定位会脱离文档流
  3. 绝对定位会使元素的层级提升
  4. 绝对定位会改变元素的性质，内联变成块元素，[如果块元素没有指定宽高，则它的宽高由内容决定]()
+ fixed
  1. 固定定位是相对于视口进行定位
  2. 固定定位会脱离文档流
  3. 固定定位会使元素的层级提升
  4. 固定定位会改变元素的性质，内联变成块元素，[如果块元素没有指定宽高，则它的宽高由内容决定]()
  5. [固定定位不会随视口的滚动条滚动而滚动]()

## 一般情况下制定了背景图片时也会同时设置背景颜色,background-attachment使用的话一般也用于body元素上，且fixed这个值是的圆点位置是视口的左上角

## frameset不能够和body出现在同一个页面中

