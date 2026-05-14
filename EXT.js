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
  static remove(fn) {
    const ext = EXT.get(fn);
    if (!ext) return fn;
    return fn.substring(0, fn.length - (ext.length + 1));
  }
}
