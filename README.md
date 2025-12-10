# EXT - util for file name extension

## usage

```js
import { EXT } from "https://code4fukui.github.io/EXT/EXT.js";

const ext = EXT.get("a.jpg");
console.log(ext); // "jpg"
const fn2 = EXT.replace("a.jpg", "png");
console.log(fn2); // "a.png"
```
