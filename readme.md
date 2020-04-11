# 说明文档

## ID

卞雨喆 18307110428



## Github 地址和 Github Pages 地址

https://github.com/VioletBian/Project1

https://VioletBian.github.io/Project1/



## 项目完成情况

所有需求全部完成了。



## Bonus完成情况和解决方法

### 图片裁剪

**1.<img>形式图片**

外包裹元素block或flex显示，固定宽高。（此处也应用响应式）

内容物中央对齐，保证能把中央部分裁出来。

```css
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 2000px) {
                    margin: 0.698% 0.571%;
                    width: 32.14vw;
                    height: 27vw;
                }

```

内img根据外层宽高百分百放缩，在保证原图比例的前提下使用`object-fit:cover`实现溢出部分裁剪。 

```css
width: 100%;
height: 100%;
object-fit:cover; 

```

**2. bkg形式图片**

道理相同，细节有变化。

上述的里、外两部分代码写在同一个元素（如<li>)下，仍然响应式固定框大小，改为对background-size/repeat/position/orgin/clip的定义。具体如下：



```css
    @media (min-width: 2000px) {
        margin: 0.698% 0.571%;
        width: 32.14%;
        height: 27vw;
    }
    background-size:100% 100%;
    background-repeat: no-repeat;
   
    background-position: center;
    background-origin: content-box;
    background-clip:border-box;
    background-size: cover;
```



### 响应式设计

以下所有响应式都已基本迎合了开发者调试工具中大宽屏——小型手机（宽屏/电脑/平板/手机）的全部类型。

1. 导航栏矢量图随设备大小放缩，导航栏高度（相应的上边距）分四中大小计算，使其恒等于框的总高。
   1. 悬浮图标和页脚图片也是响应式缩放。
2. 所有图片都有响应式缩放。
3. 需要调整的文字有响应式大小改变。
4. 所有内容区/边距等数值都是响应式+百分比的，保证宽屏时边距大、小屏节约空间。
5. 在*首页、浏览、搜索*等<u>多行多列图片/条目</u>展示时，根据不同的型号分四种调整了**行列数和边距大小**（如首页3 * 2——2 * 3—— 窄边距 2* 3 —— 1 * 6）
6. 浏览在小屏幕时<u>不宜有侧边栏</u>，因此将侧边栏改为小屏时的上方block，另外制作了**收起/展开悬浮按钮**（有转动效果呢233）便于用于迅速定位到信息位置，省去下滑麻烦。
   1. 搜索页的筛选输入也同样有悬浮按钮可收起、展开。
7. 上传页中因上传图片的长度区别，通过js使页脚在<u>页面高度小于/大于窗口高度</u>时均在合适位置。
8. <u>图片+省略</u>号描述的所有条目，根据屏幕大小响应式设计了**行数的不同**，使阅读的效率更高。



### 界面美观

选择恐惧症在经历了“帮我看看这俩导航配色哪个好看”惨遭6：6票平票后，决定加入“导航栏换肤”功能，配合js修改导航栏底色+svg矢量图的外线条黑白色，成功解救了自己^_^



## 你对 PJ 1 和本⻔课程的意⻅和建议

老师和助教们辛苦啦！

老师讲得很细致，但是对于考试的重难点仍不太清楚，只有偶尔打卡时的一两道table题聊以慰藉（？）

希望可以多点题目做做，前端知识点太细碎，慌期末.jpg

lab的内容对我pj的外观设计很有启发。希望lab的任务点描述可以再明确一些~# Project1
