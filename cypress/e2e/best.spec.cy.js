describe('template spec', () => {

  let msg = "i love cypress";
  let num1 = 2;
  let num2 = 3;
  let sum = num1 + num2;
  
  let selectedDay = 'Wednesday'; 
  beforeEach(() => {
    cy.visit('/')
    })

  it('Simple forms', () => {

    cy.fixture("input").then((el) => {
      cy.get(el.menu).click();
      cy.get(el.simpleform).click();
      cy.get(el.h3text).should('be.visible');
      cy.get(el.messagebox).type(msg);
      cy.get(el.messagebutton).click();
      cy.get(el.displaybox).should('have.text', msg);

      cy.get(el.input1).type(num1);
      cy.get(el.input2).type(num2)
      cy.get(el.submit).click()   
      cy.get(el.display2).should('be.visible')
      cy.get(el.display2).should('have.text',sum)


    
    })
  })
  it('dropdown',()=>{
    cy.fixture("dropdown").then((el) =>{
      cy.get(el.menu).click()
      cy.get(el.dropdown).click()
      cy.get(el.listbutton).select(selectedDay,{force: true})
      //cy.get(el.displaybox).should('have.text','Day selected :-'+''+ selectedDay)

      cy.get(el.elementlist).select(['Texas','New York'])
      cy.get(el.firstselectedButton).click()
      //cy.get(el.displaymsg).should('have.text','Texas')
      cy.get(el.allselectedButton).click()
      //cy.get(el.displaymsg).should('have.text','New York')

    })

  })
  it('alerts',()=>{
    cy.fixture("alerts").then((el) =>{
      cy.get(el.menu).click()
      cy.get(el.link).click()
      cy.get(el.buttonSuccess).click()
      cy.get(el.successMsg).should('be.visible')
      cy.get(el.normalButton).click()
      cy.get(el.normalMsg).should('be.visible')
      cy.get(el.close).click()
      cy.get(el.normalMsg).should('not.be.visible')
    })

  })

  it('modals',()=>{
    cy.fixture("modal").then((el) =>{
      cy.get(el.menu).click()
      cy.get(el.modal).click()
      cy.get(el.singleButton).click()
      cy.get(el.title).should('be.visible')
      cy.get(el.content).should('be.visible')
      cy.get(el.closebutton).click()
      cy.get(el.singleButton).click()
      cy.get(el.savebutton).click()

      cy.get(el.mutiplebutton).click()
      cy.get(el.firstTitle).should('be.visible')
      cy.get(el.firstBody).should('be.visible')
      cy.get(el.closebutton1).click()
      cy.get(el.mutiplebutton).click()
      cy.get(el.savebutton1).click()

      cy.get(el.mutiplebutton).click()
      cy.get(el.launchButton).click()
      cy.get(el.secondTitle).should('be.visible')
      cy.get(el.secondBody).should('be.visible')
      cy.get(el.closeButton2).click()
      cy.get(el.launchButton).click()
      cy.get(el.saveButton2).click()
    })

  })
})