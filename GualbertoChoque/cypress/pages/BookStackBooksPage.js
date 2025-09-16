class BookStackBooksPage {
  visitBooks() {
    cy.visit("https://demo.bookstackapp.com/books");
  }

  assertTitleIsBooks() {
    // El h1 principal suele contener “Books”
    cy.get("h1, .content-header h1")
      .should("be.visible")
      .and("have.text", "Books");
    // Alternativa tolerante a espacios/casos:
    // cy.contains('h1, .content-header h1', /^Books$/i).should('be.visible');
  }
}

module.exports = new BookStackBooksPage();
