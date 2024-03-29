<br>

<p align="center"><img src="https://softchef.github.io/oobe/assets/logo.png"></p>

<p align="center" style="font-size:2.5em">javascript view model library</p>

<p align="center">
    <a href="https://www.npmjs.com/package/packhouse"><img src="https://img.shields.io/npm/v/oobe.svg"></a>
</p>

***

## 概念

`oobe`(嗚比)是來自`vue`開發經驗所誕生的產物，目的是將資料轉換成基於async構成的model，降低非同步請求更好的程式編寫體驗。

### oobe是什麼意思？

#### Out-of-Box Experience

意旨`開箱即用`體驗，`oobe`將model用`container`封裝成獨立的個體，建立自己的驗證方法與語系，使定義好的model可以隨手打包自由穿梭在前後端中。

> 這是一個美好的想法，事實上也辦的到，但其實要仍要安裝其對應的依賴項是不得不的行為。

#### Out-of-Body Experience

意指`靈魂出竅`，針對表單操作中操作對象分離的模式，避免在update的表單中修改同一組model。

## 要點

### Sprite

`sprite`為`oobe`最小單位，也是最核心的建構子，負責定義結構與方法。

```js
let sprite = {
    body() {
        return {
            name: ''
        }
    }
}
```

### Container

`container`作用為封裝同系列的`sprite`，使其成為一個單位。

```js
let container = {
    sprites: {
        sprite
    }
}
```

### Core

`oobe`的運行需要一個core核心，其他組件都以註冊方式進行擴充，除了container外，core還擔任註冊rule與locale的責任。

> Rule是一個針對數值驗證的方法。

> Locale則是針對訊息語系的包裝。

```js
let oobe = new Oobe()

oobe.join('myFirstContainer', container)
oobe.addon({
    name: 'sc',
    rules: {
        string(value) {
            let type = this.$helper.getType(value)
            return type === 'string' ? true : this.$meg('$sc.not_a_number', { value })
        }
    },
    locales: {
        'zh-tw': {
            'not_a_number': '不是數字。'
        }
    }
})
```

## 安裝

### Browser

```html
<script src="https://softchef.github.io/oobe/dist/index.js"></script>
```

```js
const oobe = new Oobe()
```

### Node

```bash
npm i oobe
```

```js
let Oobe = require('oobe')
const oobe = new Oobe()
```

### Webpack

```bash
npm i oobe
```

```js
import Oobe from 'oobe'
const oobe = new Oobe()
```

## 環境支援

* 支援es2015的瀏覽器
* 支援nodejs環境


## 開始

下個章節將示範成功建立第一支model，[點此](./pages/getting_started.md)開始。

[npm-image]: https://img.shields.io/npm/v/oobe.svg
[npm-url]: https://npmjs.org/package/oobe
[logo]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACoCAYAAADjGgJuAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTIyVDEwOjE5OjA5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTIyVDEwOjE5OjA5KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNy0yMlQxMDoxOTowOSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMzg1OWYxNC1lODE3LTA0NGMtOTcwNy02YTk5MTZhZTFhM2MiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNGExYjRmNi0yYzc2LTA1NDAtYTMzYi1mZjE2YTQ4NGZkMGUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNGQ5ZGQ0ZC1lMTdiLWE0NDgtODllNi03NGQ3ZGZhY2M4OWMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0ZDlkZDRkLWUxN2ItYTQ0OC04OWU2LTc0ZDdkZmFjYzg5YyIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0yMlQxMDoxOTowOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMzg1OWYxNC1lODE3LTA0NGMtOTcwNy02YTk5MTZhZTFhM2MiIHN0RXZ0OndoZW49IjIwMTktMDctMjJUMTA6MTk6MDkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjgyMWU5Mzc5LWZhODktYTI0Ni1hNWYzLTY1NzZiYjBlMGJiNDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmyq+AIAACUZSURBVHic7Z15nFVl/cffs6EMM2wDDIvsigiKIgomuEtqmhiamlZa2WZW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