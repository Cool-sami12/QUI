Feature: Testing Simple Forms


    A user should be able to access a simple form 

     Scenario: A user should be able to access a simple form 
        Given I launch the SeleniumDemo site
        When I click on simple form menu 
        When I select a simple form
        When I insert a text into the message box
        And I click on the showmessage button
        Then I should see the text displayed in the message box


    Scenario: A user should be able to get the sum of two values 
        

