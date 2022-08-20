Feature: task2 page

    Feature task2 page will work depending on the user.

    Scenario: Add to cart
        Given A user opens a website
        When I click on the signUp
        And I logged in by providing the valid credentials
        And I click on the Cat link on the welcome page
        And I select the persian cat 
        And I add the persian cat the cart by clicking the Add to Cart button
        And I click on the Proceed to checkout button
        And I click on the confirm button 
        Then the cat is successfully added to my cart
        