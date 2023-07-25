# CSS画形状之画三角形
### 利用边框border属性

```html
<div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="top"></div>
    <div class="bottom"></div>
</div>
```

```css
/*基础css*/
body {
    display: flex;
}
.left,
.right,
.top,
.bottom {
    width: 0;
    height: 0;
}
```


### 左边三角形

```css
.left {
    border-left: 10px solid #000;

    border-right: 10px solid transparent;
    border-top: 100px solid transparent;
    border-bottom: 100px solid transparent;
}
```

### 右边三角形

```css
.left {
    border-right: 10px solid #000;

    border-left: 10px solid transparent;
    border-top: 100px solid transparent;
    border-bottom: 100px solid transparent;
}
```

### 上边三角形

```css
.left {
    border-top: 100px solid #000;
    
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 100px solid transparent;
}
```

### 下边三角形

```css
.left {
    border-bottom: 100px solid #000;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 100px solid transparent;
}
```
