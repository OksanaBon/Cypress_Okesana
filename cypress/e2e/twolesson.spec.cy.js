/// <reference types ='Cypress' />
newFunction();  

function newFunction() {
it("Using gat with find an", () => {
    cy.visit("https://next.privat24.ua/deposit"),
        cy.get('tbody').find('td').find('div').find("button").eq('0')

});
it.only("Using gat with find an", () => {
    cy.viewport(1000, 650)
    cy.visit("https://docs.cypress.io/api/commands/eq"),
        // cy.get('div').find('ul').find('li').find('a').eq(43)
        cy.get('.col.col--3').find('ul').find('li').find('a').eq(0)
        // cy.get('ul').find('li').find('a').eq(43)
        //dimon
        //jj
});
}
