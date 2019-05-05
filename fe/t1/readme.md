## 实现CSS布局

## 基本要求

一个div垂直居中
其距离屏幕左右两边各10px
其高度始终是宽度的50%

div中有文本'A'
其font—size:20px
文本水平垂直居中


## 实现代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>CSS布局</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    html,
    body {
      height: 100%;
      width: 100%;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .wrapper {
      margin: 0 10px;
      width: 100%;
    }

    .text {
      background-color: #000;
      color: #fff;

      width: 100%;

      position: relative;
      padding: 25% 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text span {
      position: absolute;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="text">
      <span>A</span>
    </div>
  </div>
</body>

</html>
```