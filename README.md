# mini-magicui

## 安装

```bash
$ npm install mini-magic --save
```

## 使用

在页面json中文件中进行注册，如share组件的注册如下所示：

```json
{
  "usingComponents": {
    "share": "mini-magicui/es/share/index",
  }
}
```

在axml文件中进行调用：
```html
<share name="" des="" icon="" shareList="[]" pageUrl=""></share>
```