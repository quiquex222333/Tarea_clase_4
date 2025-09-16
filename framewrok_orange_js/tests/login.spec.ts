
// tests/login.spec.ts
import { test, expect } from "../fixtures/test-fixtures";
import { config } from "../utils/config";

test.describe("OrangeHRM - Login", () => {
  test("Login exitoso con credenciales válidas", async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(config.username, config.password);

    expect(await loginPage.isLoggedIn()).toBeTruthy();
  });

  test("Login falla con credenciales inválidas", async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login("usuario_no", "pass_no");

    const err = await loginPage.getErrorMessageText();
    // La app muestra "Invalid credentials" (o algo semejante), si no ajustar el texto
    expect(err.toLowerCase()).toContain("invalid");
  });
});
