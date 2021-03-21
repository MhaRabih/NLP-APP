import { handleSubmit } from "../src/client/js/formHandler";
describe("Testing submition", () => {
  test("Is handleSubmit defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});