// cypress/integration/login.spec.js
describe('login', () => {
  beforeEach(() => {
    visitLoginPage()
  })

  it('A user successfully logs in :', () => {
    loginWith('standard_user', 'secret_sauce')

    expect(cy.contains('Products')).to.exist
  })

  it('A user tries to log in with invalid credentials', () => {
    loginWith('standard_user_wrong', 'secret_sauce_wrong')

    expect(cy.contains('Epic sadface')).to.exist
  })

  it('A user logs out and returns to the login page', () => {
    loginWith('standard_user', 'secret_sauce')
    logout()

    expect(cy.contains('standard_user'))
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
const logout = () => {
  cy.get('[id="react-burger-menu-btn"]').click()
  cy.get('[id="logout_sidebar_link"]').click()
}