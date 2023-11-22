/// <reference types ="cypress" />
import { qase } from "cypress-qase-reporter/dist/mocha";
import { faker } from "@faker-js/faker";
import PerformancePage_PO from "../../../support/pageObjects/performance/PerformancePage_PO";

const performancePage_PO = new PerformancePage_PO();
let mockString;

beforeEach(() => {
    mockString = faker.random.words(2);
    cy.loginWithSession(Cypress.env("username"), Cypress.env("password"));
    performancePage_PO.visitKPI();
  });

describe("Actions with KPI", () => {
  qase(
    879,
    it("Should be possible to ctreate KPI", () => {
      cy.contains("New KPI").click();
      cy.get('#key_performance_indicator_title').type('New KPI');
      cy.get('button[form="new_key_performance_indicator"]').click();
    })
  );
});
  qase(271,
    it.only ("Should be highlight the empty required fields", () =>{
      performanceKPIsPage_PO.openNewKPIForm()
      performanceKPIsPage_PO.clearOwner()
      cy.get('.department').click()
      //cy.get('[type="department"]').click()
      cy.get('button[form="new_key_performance_indicator"]').click()

    }))
});