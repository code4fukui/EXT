# EXT - ファイル名拡張子ユーティリティ

## 使い方

```js
import { EXT } from "https://code4fukui.github.io/EXT/EXT.js";

const ext = EXT.get("a.jpg");
console.log(ext); // "jpg"
const fn2 = EXT.set("a.jpg", "png");
console.log(fn2); // "a.png"
const fn3 = EXT.remove("a.jpg");
console.log(fn3); // "a"
```

## 機能
- ファイル名から拡張子を取得
- ファイル名に新しい拡張子を設定

## ライセンス
MIT License
