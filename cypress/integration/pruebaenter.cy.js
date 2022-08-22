describe('visitar titulo', () => {
    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://www.google.com/')
      cy.wait(3000)
cy.get("[name='q']").type("cypres io {enter}")

    })
  })