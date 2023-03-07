// const { should } = require('chai');

it ('Should', () =>{
cy.visit ('https://next.privat24.ua/mobile');
cy.wait(3000);
cy.get('[data-qa-node="amount"]').clear()
.type(100.00)
.should('have.value', 100.00)
})

it ('Expect', () =>{
    cy.visit ('https://next.privat24.ua/mobile');
    cy.wait(3000);
    cy.get('[data-qa-node="amount"]').clear()
    .type(100.00).then ( input => {
        expect(input).to.have.value(100.00)

    })
})
it ('Check def stan UA', () =>{
    cy.visit ('https://next.privat24.ua/deposit/?lang=en');
    cy.wait(3000);
    cy.get('[data-qa-value="UAH"]')
    .should('be.checked')
})
it ('Check def stan UA', () =>{
    cy.visit ('https://next.privat24.ua/deposit/?lang=en');
    cy.contains('My deposit')
    .trigger('mouseover')
    .get('#archiveDeposits')
    .should('be.visible')
})
it ('Check correct attribut', () =>{
    cy.visit ('https://next.privat24.ua/?lang=en');
    cy.contains('Show cards')
    .should('have.attr', 'type')
    .and('match', /button/)

})
it.only('Check is correct url', () =>{
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.url()
    .should('eq','https://next.privat24.ua/?lang=en')

})
