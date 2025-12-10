import * as t from "https://deno.land/std/testing/asserts.ts";
import { EXT } from "./EXT.js";

Deno.test("get", () => {
  t.assertEquals(EXT.get("a.jpg"), "jpg");
  t.assertEquals(EXT.get("a.JPG"), "jpg");
  t.assertEquals(EXT.get("a.txt"), "txt");
  t.assertEquals(EXT.get("a.b.txt"), "txt");
  t.assertEquals(EXT.get("a"), "");
});
Deno.test("set", () => {
  t.assertEquals(EXT.set("a.txt", "bin"), "a.bin");
  t.assertEquals(EXT.set("a", "json"), "a.json");
});
