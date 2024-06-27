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
Cypress.Commands.add('insertNum1', ()=>{
    cy.fixture("input").then((el) => {
        cy.get(el.input1).type(3);
    })
})
Cypress.Commands.add('insertNum2', ()=>{
    cy.fixture("input").then((el) => { 
        cy.get(el.input2).type(5)
       
    })

})
Cypress.Commands.add('sum', ()=>{
    cy.fixture("input").then((el) => { 
        cy.get(el.submit).click()   
    
    })

})
Cypress.Commands.add('displaySum', ()=>{
    cy.fixture("input").then((el) => {   
        cy.get(el.display2).should('be.visible')
        cy.get(el.display2).should('have.text',8)
    })
})

