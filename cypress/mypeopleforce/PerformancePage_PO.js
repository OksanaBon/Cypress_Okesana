class PerformancePage_PO {
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
  visitOneOnOnePage() {
    cy.visit("performance/one_on_ones");
  }

  visitObjectivesPage() {
    cy.visit("/performance/objectives");
  }

  createObjective(objectiveName, startDate, endDate) {
    cy.getCyDataId("objective_new_button").click();
    cy.ensureTyped("#objective_title", objectiveName, "input");

    cy.getCyDataId("objective_owner_id_select")
      .click()
      .find('input[type="search"]')
      .type(Cypress.env("profile_name"));
    cy.contains(Cypress.env("profile_name")).click({ force: true });

    cy.get("#objective_objective_type").should("have.value", "company");
    cy.get("#new_objective > *  #starts_on").type(`${startDate} - ${endDate}`, {
      force: true,
    });
    cy.get('button[form = "new_objective"]').click({ force: true });

    cy.contains("h2", objectiveName);
  }

  findObjective(objectiveName) {
    cy.get('input[form="new_criteria"]').first().type(objectiveName);
  }

  createObjectiveKeyResult(keyResultName) {
    cy.getCyDataId("objective_key_result_add_action").click();
    cy.ensureModalIsShown();
    cy.ensureTyped("#objective_key_result_name", keyResultName, "input");
    cy.get('button[form="new_objective_key_result"]').click();
    cy.ensureModalIsHidden();
    cy.contains(keyResultName).should("be.visible");
  }

  editObjectiveKeyResult() {
    cy.get('div[x-show="hovered"]').invoke("removeAttr", "style");
    cy.getCyDataId("object_key_result_edit_action").click();
  }

  deleteOneOnOne() {
    cy.getCyDataId("one-on-one_actions").click();
    cy.getCyDataId("one-on-one_delete_action").click();
    cy.mockDialogYesResult();
  }

  visitKPI() {
    cy.visit("performance/key_performance_indicators");
  }
}

export default PerformancePage_PO;
