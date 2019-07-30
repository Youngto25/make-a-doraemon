# make-a-doraemon
## 描述
哆啦A梦的制作过程。<br>
技术栈：HTML5 ES6

## 效果
![效果图](https://github.com/Youngto25/make-a-doraemon/blob/master/image/xxx.jpg)
- 动态生成哆啦A梦
- 可以调整生成速率
- 移动端适配

## 核心代码

### 如何动态生成
#### 声明code
```
let code = `哆啦A梦的样式`
```
#### 声明函数writeCode
利用setTimeout实现setInterval，通过按钮改变interval的值来改变innerHTML的加载速率。
通过substring来逐步加载code。
当结束按钮被点击时，wirte值被改变，跳出定时器，不再进行递归。
```
let interval = 5
let write = true

function writeCode(code){
  let domCode = document.querySelector('#code')
  let styleTag = document.querySelector('#styleTag')
  let n = 0
  setTimeout(function x(){
    if(!write) return
    n += 1
    domCode.innerHTML = code.substring(0,n)
    styleTag.innerHTML = code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if(n>=code.length) return
    setTimeout(x,interval)
  },interval)
}

writeCode(code)
```

### 移动端的适配方法
当刚被加载时，调用change()函数，clientWidht大于等于800时，使用样式default，否则使用phone。
监听window的resize事件，一旦被触发，则调用change()函数。
```
change()
window.addEventListener('resize',change)
function change(){
  if(document.documentElement.clientWidth >= 800){
    document.querySelector('link').href = './default.css'
  }else{
    document.querySelector('link').href = './phone.css'
  }
}
```
