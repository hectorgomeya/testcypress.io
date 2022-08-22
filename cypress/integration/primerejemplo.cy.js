/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Primer Reto  ", () =>{

    it(" ", () =>{
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.wait(1000)
        cy.get("#wsf-1-label-51-row-3").should("be.visible").click()
      //  cy.get("#menu-item-249").should("be.visible").click()

    })



})//Cierre de describe