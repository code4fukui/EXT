import * as t from "https://deno.land/std/testing/asserts.ts";
import { EXT } from "./EXT.js";

Deno.test("get", () => {
  t.assertEquals(EXT.get("a.jpg"), "jpg");
  t.assertEquals(EXT.get("a.JPG"), "jpg");
  t.assertEquals(EXT.get("a.txt"), "txt");
  t.assertEquals(EXT.get("a.b.txt"), "txt");
  t.assertEquals(EXT.get("a"), "");
});
Deno.test("replace", () => {
  t.assertEquals(EXT.replace("a.txt", "bin"), "a.bin");
  t.assertEquals(EXT.replace("a", "json"), "a.json");
});
