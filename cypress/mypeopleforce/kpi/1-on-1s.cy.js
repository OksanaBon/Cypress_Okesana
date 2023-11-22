/// <reference types ="cypress" />

import { qase } from "cypress-qase-reporter/dist/mocha";
import dayjs from "dayjs";
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
import { faker } from "@faker-js/faker";

import PerformancePage_PO from "../../../support/pageObjects/performance/PerformancePage_PO";
const performancePage_PO = new PerformancePage_PO();
const date = dayjs
  .utc()
  .subtract(1, "hour")
  .format(Cypress.env("dateFormatWithTime"));
const futureDate = dayjs
  .utc()
  .add(1, "day")
  .format(Cypress.env("dateFormatWithTime"));
const чcleardate = "null"

let mockString;

beforeEach(() => {
  mockString = faker.lorem.lines(1);
  cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
  performancePage_PO.visitOneOnOnePage();
});

describe("Functionality on the 1-on-1s page", () => {
  qase(
    419,
    it("Should be possible to create 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        date 
      );
    })
  );
  qase(
    420,
    it.only("Should be possible to create 1-on-1 with Draft status", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        cleardate);
        cy.getCyDataId("one-on-one_state_badge_content").should("be.visible").contains("Draftig");
    })
  );
  qase(
    427,
    it("Should be possible to delete 1-on-1", () => {
      cy.get("td:nth-child(1)").first().click();
      cy.wait(500);
      cy.get("#one-on-one-user-header-actions").should("be.visible");
      cy.get("#one-on-one-user-header-actions").click();
      cy.getCyDataId("one-on-one_delete_action").click();
      cy.mockDialogYesResult();

      cy.get("h1").should("contain", " 1-on-1s");
    })
  );

  qase(
    428,
    it("Should be possible to complete 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        date
      );
      cy.getCyDataId("one-on-one_talking_point_add_action").as(
        "AddTalkingPoint"
      );

      cy.getCyDataId("one-on-one_action_item_add_action").as("AddActionItem");
      cy.getCyDataId("one-on-one_template_load_action").as("LoadFromTemplate");
      cy.getCyDataId("one-on-one_complete_action").click();
      cy.getCyDataId("one-on-one_state_badge_content")
        .should("exist")
        .and("be.visible")
        .and("contain", "Completed");
      cy.getCyDataId("one-on-one_schedule_action")
        .should("exist")
        .and("be.visible");
      cy.getCyDataId("one_on_one_one_on_one_type_id_select")
        .children()
        .first()
        .should("be.disabled");
      cy.get("@AddTalkingPoint").should("not.exist");
      cy.get("@AddActionItem").should("not.exist");
      cy.get("@LoadFromTemplate").should("not.exist");
      cy.get('input[role="switch"]').should("exist").and("not.be.checked");
    })
  );

  qase(
    429,
    it("Should not be possible to complete 1-on-1 before starting", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.getCyDataId("one-on-one_complete_action").should(
        "have.class",
        "btn btn-primary disabled"
      );
      cy.getCyDataId("one-on-one_complete_action")
        .trigger("mouseover")
        .should("have.attr", "aria-describedby");
    })
  );

  qase(
    438,
    it("Should be possible to edit scheduled time of 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        date
      );
      cy.get("#one_on_one_starts_at").should("be.visible").clear();
      cy.get("#one_on_one_starts_at").type(futureDate, { force: true });
      cy.applyControlChanges();
      cy.get("#one_on_one_starts_at").should("have.value", `${futureDate}`);
    })
  );

  qase(
    461,
    it("Should be possible to add type of 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        date
      );
      cy.getCyDataId("one_on_one_one_on_one_type_id_select")
        .find("input")
        .should("be.visible")
        .first()
        .click({ force: true });
      cy.get('div[title="Regular"]').should("be.visible").click();
      cy.getCyDataId("one_on_one_one_on_one_type_id_select")
        .find("input")
        .first()
        .should("have.attr", "title", "Regular");
    })
  );

  qase(
    [432, 510],
    it("Should be possible to add/delete talking points to 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        date
      );
      cy.getCyDataId("one-on-one_talking_point_add_action").click();
      cy.get('[id ^= "one_on_one_talking_point_body_container_"]')
        .find('div[spellcheck="true"]')
        .type(mockString);
      cy.get('button[form="new_one_on_one_talking_point"]').click();
      cy.get("#one_on_one_talking_point_completed").should("have.length", 1);
      cy.get('div[id ^= "one_on_one_talking_point_"]')
        .first()
        .trigger("mouseover");
      cy.getCyDataId("one-on-one_talking_point_delete_action").click({
        force: true,
      });
      cy.mockDialogYesResult();
      cy.contains(mockString).should("not.exist");
    })
  );

  qase(
    454,
    it("Should be possible to add talking points from a template to 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        date
      );
      cy.getCyDataId("one-on-one_template_load_action").click();
      cy.ensureModalIsShown();
      cy.get('a[href *= "templates/"]').first().click();
      cy.contains("Use template").should("be.visible").click();
      cy.ensureModalIsHidden();
      cy.get('[id ^= "one_on_one_talking_point"]').should(
        "have.length.greaterThan",
        1
      );
      performancePage_PO.deleteOneOnOne();
    })
  );

  qase(
    [462, 725],
    it("Should be possible to add/delete action items to 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.getCyDataId("one-on-one_action_item_add_action")
        .should("be.visible")
        .click();
      cy.get('[id ^= "one_on_one_action_item_body_container_"]')
        .find('div[spellcheck="true"]')
        .type(mockString);
      cy.get('button[form="new_one_on_one_action_item"]').click();
      cy.get('[id^="action_items_one_on_one"]')
        .find('div[id^="one_on_one_action_item"]')
        .should("have.length", 1);
      cy.contains(mockString);
      cy.wait(500);
      cy.get('div[id ^= "one_on_one_action_item_"]')
        .last()
        .trigger("mouseover");
      cy.getCyDataId("one-on-one_action_item_delete_action").last().click({
        force: true,
      });
      cy.mockDialogYesResult();
      cy.contains(mockString).should("not.exist");
    })
  );

  qase(
    746,
    it("Should have ability to hide private action items in 1-on-1 for sharing screen and printing", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.getCyDataId("one-on-one_action_item_add_action")
        .should("be.visible")
        .click();
      cy.getCyDataId("one-on-one_action_item_add_action").should("not.exist");
      cy.get('[id ^= "one_on_one_action_item_body_container_"]')
        .should("be.visible")
        .find('div[spellcheck="true"]')
        .type(mockString);
      cy.get("#one_on_one_action_item_private")
        .check()
        .should("be.checked")
        .and(
          "have.css",
          "background-color",
          Cypress.env("acc_secondary_color")
        );
      cy.get('button[form="new_one_on_one_action_item"]').click();
      cy.getCyDataId("one-on-one_action_item_cancel_action")
        .should("exist")
        .click();
      cy.contains(mockString).should("exist");
      cy.getCyDataId("one-on-one_action_item_private_icon_content").should(
        "exist"
      );
      cy.get('[id^="one_on_one_talking_point_body_container_"]').should(
        "not.exist"
      );
      cy.getCyDataId("one-on-one_private_items_toggle_action")
        .find('input[role="switch"]')
        .check()
        .should("be.checked")
        .and(
          "have.css",
          "background-color",
          Cypress.env("acc_secondary_color")
        );
      cy.contains(mockString).should("not.exist");
      cy.getCyDataId("one-on-one_private_items_toggle_action")
        .find('input[role="switch"]')
        .uncheck()
        .should("not.be.checked")
        .and(
          "not.have.css",
          "background-color",
          Cypress.env("acc_secondary_color")
        );
      cy.contains(mockString).should("exist");
      cy.get('div[id ^= "one_on_one_action_item_"]')
        .first()
        .trigger("mouseover");
      cy.getCyDataId("one-on-one_action_item_delete_action").last().click({
        force: true,
      });
      cy.mockDialogYesResult();
      cy.contains(mockString).should("not.exist");
    })
  );

  qase(
    746,
    it("Should have ability to hide private talking points in 1-on-1 for sharing screen and printing", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.getCyDataId("one-on-one_talking_point_add_action").click();
      cy.getCyDataId("one-on-one_talking_point_add_action").should("not.exist");
      cy.get('[id ^= "one_on_one_talking_point_body_container_"]')
        .should("be.visible")
        .find('div[spellcheck="true"]')
        .type(mockString);
      cy.get("#one_on_one_talking_point_private")
        .check()
        .should("be.checked")
        .and(
          "have.css",
          "background-color",
          Cypress.env("acc_secondary_color")
        );
      cy.get('button[form="new_one_on_one_talking_point"]').click();
      cy.getCyDataId("one-on-one_talking_point_cancel_action").click();
      cy.contains(mockString);
      cy.getCyDataId("one-on-one_talking_point_private_icon_content").should(
        "exist"
      );
      cy.get('[id^="one_on_one_talking_point_body_container_"]').should(
        "not.exist"
      );
      cy.getCyDataId("one-on-one_private_items_toggle_action")
        .find('input[role="switch"]')
        .check()
        .should("be.checked")
        .and(
          "have.css",
          "background-color",
          Cypress.env("acc_secondary_color")
        );
      cy.contains(mockString).should("not.exist");
      cy.getCyDataId("one-on-one_private_items_toggle_action")
        .find('input[role="switch"]')
        .uncheck()
        .should("not.be.checked")
        .and(
          "not.have.css",
          "background-color",
          Cypress.env("acc_secondary_color")
        );
      cy.contains(mockString).should("exist").and("be.visible");
      performancePage_PO.deleteOneOnOne();
    })
  );

  qase(
    525,
    it("Should be possible to add private notes", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.get('[id^="one_on_one_private_notes_container_"]')
        .should("be.visible")
        .find('div[spellcheck="true"]')
        .type(mockString);
      cy.url().then((url) => {
        cy.intercept({
          method: "POST",
          url: url,
        }).as("postNote");

        cy.applyControlChanges();
        cy.wait("@postNote").its("response.statusCode").should("eq", 200);
      });
      cy.reload();
      cy.contains(mockString).should("exist").and("be.visible");
    })
  );

  qase(
    524,
    it("Should be possible to add shared notes", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.get('[id^="one_on_one_shared_notes_container_"]')
        .should("be.visible")
        .find('div[spellcheck="true"]')
        .type(mockString);
      cy.applyControlChanges();
      cy.reload();
      cy.contains(mockString).should("exist");
    })
  );

  qase(
    593,
    it("Should not be possible to submit talking point with no content", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.getCyDataId("one-on-one_talking_point_add_action").click();
      cy.get('button[form="new_one_on_one_talking_point"]').click();
      cy.get("#one_on_one_talking_point_completed").should("not.exist");
      cy.get('button[form="new_one_on_one_talking_point"]').should("exist");
      cy.getCyDataId("one-on-one_talking_point_cancel_action").should("exist");
    })
  );

  qase(
    594,
    it("Should not be possible to submit action item with no content", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        futureDate
      );
      cy.getCyDataId("one-on-one_action_item_add_action")
        .should("be.visible")
        .click();
      cy.get('button[form="new_one_on_one_action_item"]').click();
      cy.get('[id^="action_items_one_on_one"]')
        .find('div[id^="one_on_one_action_item"]')
        .should("not.exist");
      cy.get('button[form="new_one_on_one_action_item"]').click();
      cy.getCyDataId("one-on-one_action_item_cancel_action").should("exist");
    })
  );

  qase(
    [528, 682],
    it("Should be possible to add/delete comments to 1-on-1", () => {
      performancePage_PO.createOneOnOne(
        Cypress.env("employee_profile_name"),
        date
      );
      cy.get("#one_on_one_comment_editor")
        .find('div[spellcheck="true"]')
        .type(mockString);
      cy.get('button[form="new_comment"]').click();
      cy.contains(mockString);
      cy.getCyDataId("comment_actions").should("exist").click();
      cy.getCyDataId("comment_delete_action").click();
      cy.mockDialogYesResult();
      cy.contains(mockString).should("not.exist");
    })
  );
});
