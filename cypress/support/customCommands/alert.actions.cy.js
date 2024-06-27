Cypress.Commands.add('clickAMenuForm', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.menu).click();
    })
})
Cypress.Commands.add('clickAlertMenu', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.link).click()
    })
})
Cypress.Commands.add('SuccessButton', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.buttonSuccess).click()
    })
})
Cypress.Commands.add('SuccessMsg', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.successMsg).should('be.visible')
    })
})
Cypress.Commands.add('NormalButton', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.normalButton).click()

    })
})
Cypress.Commands.add('NormalMsg', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.normalMsg).should('be.visible')
    })
})
Cypress.Commands.add('closeButton', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.close).click()
        
    })
})
Cypress.Commands.add('NormalMsgHidden', ()=>{
    cy.fixture("alerts").then((el) => {
        cy.get(el.normalMsg).should('not.be.visible')
    })
})