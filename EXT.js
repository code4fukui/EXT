export class EXT {
  static get(fn) {
    const n = fn.lastIndexOf(".");
    if (n < 0) return "";
    return fn.substring(n + 1).toLowerCase();
  }
  static set(fn, ext) {
    const n = fn.lastIndexOf(".");
    if (n < 0) return fn + "." + ext;
    return fn.substring(0, n + 1) + ext;
  }
}
