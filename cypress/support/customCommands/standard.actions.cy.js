Cypress.Commands.add('launchApp', ()=>{
    cy.visit('/')
})
Cypress.Commands.add('clickMenuForm', ()=>{
    cy.fixture("input").then((el) => {
        cy.get(el.menu).click();
    })
})
Cypress.Commands.add('clickSubMenu', ()=>{
    cy.fixture("input").then((el) => {
        cy.get(el.simpleform).click();
    })
})
Cypress.Commands.add('inputMsg', ()=>{
    cy.fixture("input").then((el) => {
        cy.get(el.h3text).should('be.visible');
        cy.get(el.messagebox).type("Cucumber is not my friend");
    })
})
Cypress.Commands.add('clickMessageButton', ()=>{
    cy.fixture("input").then((el) => {
        cy.get(el.messagebutton).click();
    })
})
Cypress.Commands.add('displayMessage', ()=>{
    cy.fixture("input").then((el) => {
        cy.get(el.displaybox).should('have.text', 'Cucumber is not my friend');
    })
})
Cypress.Commands.add('launchApp', ()=>{
    cy.visit('/')
})
Cypress.Commands.add('launchApp', ()=>{
    cy.visit('/')
})