# kangnier
康尼尔合作项目

此项目前端组只负责前端页面布局，后台有专人负责。
网站适用：PC平台兼容IE9

网页内宽：1200像素

开发规格

注意：网站要兼容IE9不要使用CSS3选择器等不兼容IE9的东西。

圆角可以通过以下方式兼容
.box-radius {
  border-radius: 15px;
  behavior: url(border-radius.htc);
}
规范

目录结构

统一放置对应文件夹中
/ 
| ------- images / 
| | ---- / np / 
| | ---- / lh / 
| | ---- / gy / 
| | ---- / wj / 
| -------- css / 
| | ---- base.css默认样式
| | ---- index.css
| -------- js / 
| | ---- jquery.min.js 
| | ---- jquery.lazyload.min.js 
| | ---- swiper.min.js 
| -------- index.html 
| -------- about.html 
| 


命名规范

css文件如：文件名np-index.css 
类名如.np-banner＃np-nav（一定要有后代保护）

js文件如：文件名np-index.js 
错误window.onload = function（）{} 
正确$（function（）{}）|| window.addEventListener（'load'，function（）{}）
js文件引用统一放置在body结束之前

image文件文件名如：np-logo.png 
所有文件统一放置到自己的姓名简拼的文件夹下如图
/ np / np-logo.png 
图片/ np / np-copy.png

注释

必须添加注释并且注释结构清晰
<！ - #nav导航开始 - > 
<！ - #nav导航结束 - >

优化

小图标统一阿里巴巴矢量图标库
代码结构合理
任务分配

前端布局分配

[√]首页 龚岩 8:30 

[√]首页  王健 8:30 

[√]加盟案例  李欢   8:30 

[√]联系我们，康妮尔高效团队3，3级正式开幕，3级团队风采，头部尾部   南苹



