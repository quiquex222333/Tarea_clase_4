const BookStackLogin = require("../pages/BookStackLoginPage");
const BookStackBooks = require("../pages/BookStackBooksPage");

describe("BookStack Demo - Login y verificación de Books", () => {
  beforeEach(() => {
    cy.fixture("bookstack_user").as("user");
  });

  it('loguea con credenciales demo y verifica título "Books"', function () {
    // 1) Login
    BookStackLogin.visitLogin();
    BookStackLogin.loginAs(this.user);

    // 2) Navegar a /books
    BookStackBooks.visitBooks();

    // 3) Verificar título
    BookStackBooks.assertTitleIsBooks();
  });
});
