class BookStackBooksPage {
  visitBooks() {
    cy.visit("https://demo.bookstackapp.com/books");
    cy.location("pathname").should("include", "/books");
  }
  assertTitleIsBooks() {
    cy.contains("h1, .content-header h1", /^Buoks$/i).should("be.visible");
  }
}
module.exports = new BookStackBooksPage();
