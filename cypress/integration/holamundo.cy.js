describe('visitar google', () => {
    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://testingqarvn.com.es/datos-personales/')
      cy.wait(3000)

      cy.get('#wsf-1-field-21').type('Rofriyo')
      cy.wait(800)

            cy.get('#wsf-1-field-22').type('QA')
            cy.wait(800)

            cy.get('#wsf-1-field-23').type('QA@qa.es')
            cy.wait(800)

            cy.get('#wsf-1-field-24').type('123456789')
            cy.wait(800)

            cy.get('#wsf-1-field-28').type('calle verde 123')
            cy.wait(800)

            cy.get('#wsf-1-field-27').click()



    })
  })