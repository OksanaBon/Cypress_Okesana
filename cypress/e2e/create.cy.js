

it('',() => {
  cy.visit('https://oksanabondar.stage-81y92gtmor.peopleforce.io/')
  cy.get('[id="user_email"]').type('ksushenkabondar@gmail.com')
  cy.get('[id="user_password"]').type('tester11')
  cy.contains('Sign in').click();
  cy.visit("https://oksanabondar.stage-81y92gtmor.peopleforce.io/employees/list") 
  cy.get ('[data-cy="employee_view_action"]:first').click()
  
})


  

