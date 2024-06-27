import {Before, Given ,When, Then } from '@badeball/cypress-cucumber-preprocessor'

Before(/^I launch the SeleniumDemo site$/, ()=>{
	cy.launchApp()
})

// Given(/^I launch the SeleniumDemo site$/, () => {
// 	cy.launchApp()
// });

When(/^I click on simple form menu$/, () => {
   cy.clickMenuForm()
});

When(/^I select a simple form$/, () => {
	cy.clickSubMenu()
});

When(/^I insert a text into the message box$/, () => {
	cy.inputMsg()
});

When(/^I click on the showmessage button$/, () => {
	cy.clickMessageButton()
});

Then(/^I should see the text displayed in the message box$/, () => {
	cy.displayMessage()
 });

When(/^I insert the first number$/, () => {
	cy.insertNum1()
});

When(/^I  Insert the second number$/, () => {
	cy.insertNum2()
});

When(/^I click on the Submit button$/, () => {
	cy.sum()
});

Then(/^I should see the total sum of two values$/, () => {
	cy.displaySum()
});



// Given(/^I launch the SeleniumDemo site$/, () => {
// 	cy.launchApp()
// });

When(/^I click on Select dropdown menu$/, () => {
	cy.clickDMenuForm()
	cy.clickDropdownMenu()
});

When(/^I select a day of the week$/, () => {
	cy.selectADay()
});

Then(/^I should see the day of the week selected$/, () => {
	cy.ViewDay()
});


When(/^I select multiple state$/, () => {
	cy.SelectMultiple()
});

When(/^I click on the First selected Button$/, () => {
	cy.firstButton()
});

Then(/^I should the first state$/, () => {
	cy.DisplayMsg()
});

When(/^I click on the Get All selected Button$/, () => {
	cy.otherButton()
});

Then(/^I should see all other states selected$/, () => {
	cy.DisplayMsg()
});


// Given(/^I launch the SeleniumDemo site$/, () => {
// 	cy.launchApp()
// });

When(/^I click on the Alert menu$/, () => {
	cy.clickAMenuForm()
});

When(/^I click on the Bootstrap alert submenu$/, () => {
	cy.clickAlertMenu()
});

When(/^I click on Success Button$/, () => {
	cy.SuccessButton()
});

Then(/^I should see the success Message$/, () => {
	cy.SuccessMsg()
});

When(/^I click on the Normal Success Button$/, () => {
	cy.NormalButton()
});

Then(/^I should see the Normal success Message$/, () => {
	cy.NormalMsg()
});

When(/^I click on the close icon$/, () => {
	cy.closeButton()
});

Then(/^The Message should be closed$/, () => {
	cy.NormalMsgHidden()
});


// Given(/^I launch the SeleniumDemo site$/, () => {
// 	cy.launchApp()
// });

When(/^I click on the Modal menu$/, () => {
	cy.clickMMenuForm()
});

When(/^I click on the Bootstrap modal sub menu$/, () => {
	cy.clickModalMenu()
});

When(/^I click on the launch Modal button$/, () => {
	cy.launchModal()
});

Then(/^A modal should be displayed$/, () => {
	cy.displayModal()
});

When(/^I click on close button$/, () => {
	cy.closeModal()
});

Then(/^The modal should be closed$/, () => {
	cy.confirmModal()
});

When(/^I click on save changes$/, () => {
	cy.OpenModal()
	cy.Savechanges()
});

Then(/^the page should be reloaded$/, () => {
	cy.confirmModal()
});

When(/^I click on the second modal button$/, () => {
	cy.Multiplebutton()
});

When(/^I click on the Modal button inside it$/, () => {
	cy.LaunchMbutton()
});

Then(/^A modal should be displayed in the second modal$/, () => {
	cy.DisplaySecondModal()
});

When(/^I click on close button inside the second modal$/, () => {
	cy.closeButton2()
});

Then(/^The modal should be closed inside the second modal$/, () => {
	cy.HideSecondModal()
});

When(/^I click on save changes inside the second modal$/, () => {
	cy.LaunchMbutton()
	cy.SaveButton2()

});

Then(/^the page should be reloaded inside the second modal$/, () => {
	cy.HideSecondModal()
});


