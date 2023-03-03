newFunction();  

function newFunction() {
    it("By ID", () => {
        cy.visit("http://www.facebook.com/"),
            cy.get("#email");
    });

    it("By class", () => {
        cy.visit("https://docs.cypress.io/guides/references/configuration"),
            cy.get(".DocSearch-Button-Placeholder");
    });

    it("By class", () => {
        cy.visit("https://docs.cypress.io/guides/references/configuration"),
            cy.get("nav");
    });

    it("By Tag Value", () => {
        cy.visit("http://www.facebook.com/"),
            cy.get('[name= "pass"]');
    });
    it("By Different Tag Value", () => {
        cy.visit("http://www.facebook.com/"),
            cy.get('[data-testid="open-registration-form-button"][role="button"]');
    });
    it("By Different Types", () => {
        cy.visit("http://www.facebook.com/"),
            cy.get('button[value="1"][type="submit"]');
    });
    it("By Conteins name", () => {
        cy.visit("https://next.privat24.ua/"),
            cy.get('[class^="root_H7mhoVTubu"]');
    });
}
