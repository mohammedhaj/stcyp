import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="@cypress-audit/lighthouse" />
Given("A user opens a website", () => {
  cy.visit("https://jpetstore.tricentis.com/jpetstore/actions/Catalog.action"),
  cy.lighthouse(
    {
      performance: 10,
      accessibility: 10,
      'best-practices': 10,
      seo: 10,
    },
    {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config('viewportWidth'),
        height: Cypress.config('viewportHeight'),
        deviceScaleRatio: 1,
      },
    },
  )
 });

  
When("I click on the signUp", () => {
  cy.contains(/sign.in/i).click()
 
});
And("I logged in by providing the valid credentials", () => {
  cy.get('input[name="username"]').type('j2ee')
  cy.get('input[name="password"]').clear().type('j2ee')
  cy.get('input[name="signon"]').click()
});
And("I click on the Cat link on the welcome page", () => {
  cy.get('#WelcomeContent').should('contain', 'Welcome ABC!')
  cy.get('div#SidebarContent a').eq(2).click()
});
And("I select the persian cat", () => {
  cy.get('div[id="Catalog"] h2').should('contain','Cats')
  cy.get('table tbody tr:nth-child(3) td a').click()
});
And("I add the persian cat the cart by clicking the Add to Cart button", () => {
  cy.get('div[id="Catalog"]').should('contain', 'Persian')
  cy.get('div#Catalog table tbody tr:nth-child(2) td:nth-child(5) a').should('contain','Add to Cart').click()
  
});
And("I click on the Proceed to checkout button", () => {
  cy.get('div[id="Cart"] h2').should('contain', 'Shopping Cart')
  cy.get('a[href="/jpetstore/actions/Order.action?newOrderForm="]').should('contain', 'Proceed to Checkout').click()
});
And("I click on the confirm button", () => {
  cy.get('input[name="newOrder"]').should('contain', 'Continue').click()
  cy.get('a[href="/jpetstore/actions/Order.action?newOrder=&confirmed=true"]').should('contain', 'Confirm').click()
});
Then("the cat is successfully added to my cart", () => {
  cy.get('div#Content ul li').should('contain', 'Thank you, your order has been submitted.')
  
}
);