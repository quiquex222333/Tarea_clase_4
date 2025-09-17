const BookStackLogin = require("../pages/BookStackLoginPage");
const BookStackBooks = require("../pages/BookStackBooksPage");

describe("BookStack Demo - Login y verificación de Books", () => {
  beforeEach(function () {
    cy.fixture("bookstack_user").as("user"); // cypress/fixtures/bookstack_user.json
  });

  it('loguea con credenciales demo y verifica título "Books"', function () {
    BookStackLogin.visitLogin();
    BookStackLogin.loginAs(this.user);

    BookStackBooks.visitBooks();
    BookStackBooks.assertTitleIsBooks();
  });
});
