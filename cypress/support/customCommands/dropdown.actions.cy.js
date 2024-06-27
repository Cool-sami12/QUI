Cypress.Commands.add('clickDMenuForm', ()=>{
    cy.fixture("dropdown").then((el) => {
        cy.get(el.menu).click();
    })
})
Cypress.Commands.add('clickDropdownMenu', ()=>{
    cy.fixture("dropdown").then((el) => {
      cy.get(el.dropdown).click()
    })
})
Cypress.Commands.add('selectADay', ()=>{
    cy.fixture("dropdown").then((el) => {
        cy.get(el.listbutton).select('Wednesday',{force: true})
    })
})
Cypress.Commands.add('ViewDay', ()=>{
    cy.fixture("dropdown").then((el) => {
        cy.get(el.displaybox).should('be.visible')
    })
})
Cypress.Commands.add('SelectMultiple', ()=>{
    cy.fixture("dropdown").then((el) => {
        cy.get(el.elementlist).select(['Texas','New York']) 
    })

})
Cypress.Commands.add('firstButton', ()=>{
    cy.fixture("dropdown").then((el) => {
        cy.get(el.firstselectedButton).click()
        
    })

})
Cypress.Commands.add('otherButton', ()=>{
    cy.fixture("dropdown").then((el) => {
        //cy.get(el.displaymsg).should('have.text','Texas')
        cy.get(el.allselectedButton).click()
        //cy.get(el.displaymsg).should('have.text','New York')
   
    })

})
Cypress.Commands.add('DisplayMsg', ()=>{
    cy.fixture("dropdown").then((el) => {
        cy.get(el.displaymsg).should('be.visible')
        //cy.get(el.displaymsg).should('have.text','Texas')
    })

})

