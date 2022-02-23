// cypress/integration/login.spec.js
describe('cart', () => {
    beforeEach(() => {
      visitLoginPage()
    })
  
    it('A user adds a product to the cart', () => {
      loginWith('standard_user', 'secret_sauce')
      cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
  
    //expect(cy.contains('Products')).to.exist
    })

    it('A user remove a product to the cart', () => {
        loginWith('standard_user', 'secret_sauce')
        cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[id="remove-sauce-labs-backpack"]').click()
    
    //expect(cy.contains('Products')).to.exist
    })

  })

  
  const visitLoginPage = () => {
    cy.visit('https://www.saucedemo.com/')
  }
  
  const loginWith = (username, password) => {
    cy.get('[id="user-name"]').type(username)
    cy.get('[id="password"]').type(password)
    cy.get('[id="login-button"]').click()
  }