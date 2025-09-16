class AdminPage {
  visitUsers() {
    cy.visit('/admin/users/');
  }

  clickAddUser() {
    cy.get('a[href="/admin/users/new"]', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  fillUserForm({ firstName, lastName, email, username, password }) {
    cy.get('#sylius_admin_admin_user_firstName', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(firstName);

    cy.get('#sylius_admin_admin_user_lastName', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(lastName);

    cy.get('#sylius_admin_admin_user_email', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(email);

    cy.get('#sylius_admin_admin_user_username', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(username);

    cy.get('#sylius_admin_admin_user_plainPassword', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(password);
  }

  saveUser() {
    // Click en el botón submit del formulario correcto
    cy.get('button[type="submit"][form="sylius_admin_admin_user"]', { timeout: 10000 })
      .should('be.visible')
      .click();

    // La demo redirige a productos, así que volvemos a la lista de usuarios
    cy.visit('/admin/users/');
    cy.log('Formulario enviado y redirigido a usuarios para verificar el nuevo usuario');
  }

  checkUserListed(username) {
    // Esperar que la tabla de usuarios esté visible y buscar el username
    cy.get('table', { timeout: 10000 })
      .should('be.visible')
      .contains('td', username)
      .should('exist');
  }
}

export default AdminPage;