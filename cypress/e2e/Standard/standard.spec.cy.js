import {Given ,When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given(/^I launch the SeleniumDemo site$/, () => {
	cy.launchApp()
});

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
