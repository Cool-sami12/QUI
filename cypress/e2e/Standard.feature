Feature: Testing Simple Forms


    A user should be able to access a simple form  a

     Scenario: A user should be able to access a simple form 
        When I click on simple form menu 
        When I select a simple form
        When I insert a text into the message box
        And I click on the showmessage button
        Then I should see the text displayed in the message box

        When I insert the first number
        And I  Insert the second number
        And I click on the Submit button
        Then I should see the total sum of two values


    Scenario: A user should be able to select any day of the week and multiple states listed 
        When I click on Select dropdown menu
        When I select a day of the week
        Then I should see the day of the week selected
       
        When I select multiple state
        When I click on the First selected Button 
        Then I should the first state
        When I click on the Get All selected Button
        Then I should see all other states selected


    Scenario: A user should be able to click an alert button and view the alert message
        When I click on the Alert menu
        When I click on the Bootstrap alert submenu 
        And I click on Success Button
        Then I should see the success Message 

        When I click on the Normal Success Button
        Then I should see the Normal success Message
        When I click on the close icon 
        Then The Message should be closed

    
    Scenario: A user should be able to launch the modal site and click a button to launch a modal
        When I click on the Modal menu
        When I click on the Bootstrap modal sub menu
        And I click on the launch Modal button 
        Then A modal should be displayed
        When I click on close button 
        Then The modal should be closed
        When I click on save changes
        Then the page should be reloaded

        When I click on the second modal button  
        And I click on the Modal button inside it
        Then A modal should be displayed in the second modal
        When I click on close button inside the second modal
        Then The modal should be closed inside the second modal
        When I click on save changes inside the second modal
        Then the page should be reloaded inside the second modal
    


        

