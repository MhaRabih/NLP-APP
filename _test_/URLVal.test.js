import { URLVal } from "../src/client/js/URLVal";
describe("Testing URL validation functionality", () => {
  test("Is URLVal defined", () => {
    expect(URLVal).toBeDefined();
  });

  test("Does valid URL return true", () => {
    expect(URLVal("https://translate.google.com.eg/")).toBeTruthy();
  });

  test("Making sure an invalid URL returns false", () => {
    expect(URLVal("MAHA")).toBeFalsy();
  });
});