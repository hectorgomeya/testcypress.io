describe('visitar titulo', () => {
    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://testingqarvn.com.es')
      cy.title().should('eq','TestingQaRvn | Mundo del Testing')
      cy.wait(3000)
      cy.log('OK')


    })
  })