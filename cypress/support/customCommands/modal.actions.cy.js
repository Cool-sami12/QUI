Cypress.Commands.add('clickMMenuForm', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.menu).click();
    })
})
Cypress.Commands.add('clickModalMenu', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.modal).click()
    })
})
Cypress.Commands.add('launchModal', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.singleButton).click()
    })
})

Cypress.Commands.add('displayModal', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.title).should('be.visible')
        cy.get(el.content).should('be.visible')
    })
})

Cypress.Commands.add('closeModal', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.closebutton).click()

    })
})
Cypress.Commands.add('confirmModal', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.title).should('not.be.visible')
        cy.get(el.content).should('not.be.visible')
    })
})

Cypress.Commands.add('OpenModal', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.singleButton).click()
    })
})
Cypress.Commands.add('Savechanges', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.savebutton).click()
    })
})
Cypress.Commands.add('Multiplebutton', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.mutiplebutton).click()
    })
})
Cypress.Commands.add('LaunchMbutton', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.launchButton).click()
    })
})
Cypress.Commands.add('DisplaySecondModal', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.secondTitle).should('be.visible')
      cy.get(el.secondBody).should('be.visible')
      
    })
})
Cypress.Commands.add('closeButton2', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.closeButton2).click()
      
    })
})
Cypress.Commands.add('HideSecondModal', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.secondTitle).should('not.be.visible')
      cy.get(el.secondBody).should('not.be.visible')
      
    })
})
Cypress.Commands.add('SaveButton2', ()=>{
    cy.fixture("modal").then((el) => {
        cy.get(el.saveButton2).click()
      
    })
})

    