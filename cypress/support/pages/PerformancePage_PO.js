export class PerformancePage_PO {
    createOneOnOne(name, date) {
      cy.getCyDataId("one-on-one_new_action").click();
      cy.ensureModalIsShown();
      cy.wait(500);
      cy.getCyDataId("one_on_one_user_id_select")
        .click()
        .find('input[type="search"]')
        .last()
        .type(name);
      cy.contains('[data-cy ^= "one_on_one_user_id_select_"]', name)
        .should("be.visible")
        .click({ force: true });
      cy.get("#one_on_one_starts_at").clear().type(date);
      cy.get('button[form = "new_one_on_one"]').click();
      cy.ensureModalIsHidden();
      cy.get("h2").should("be.visible").wait(500);
    }
  }

  export default PerformancePage_PO;

