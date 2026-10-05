export class BasicInteractionPage {
  visitHomePage() {
    cy.visit(Cypress.expose('BASE_URL'));
    return this;
  }

  verifyBrandText() {
    cy.get('.navbar-brand').should('contain', 'UITAP');
    return this;
  }

  clickButtonLink() {
    cy.get(':nth-child(2) > :nth-child(3) > h3 > a').click();
    return this;
  }

  verifyButtonIsPrimary() {
    cy.get('#badButton').should('have.class', 'btn-primary');
    return this;
  }

  triggerRealButtonClick() {
    cy.get('#badButton').realClick();
    return this;
  }

  verifyButtonIsSuccess() {
    cy.get('#badButton').should('have.class', 'btn-success');
    return this;
  }

  clickUpdatingButtonLink() {
    cy.get(':nth-child(2) > :nth-child(4) > h3 > a').click();
    return this;
  }

  verifyUpdatingButtonDefaultValue() {
    cy.get('#updatingButton').should('have.text', "Button That Should Change it's Name Based on Input Value");
    return this;
  }

  typeNewButtonName(value: string) {
    cy.get('#newButtonName').type(value);
    return this;
  }

  clickUpdatingButton() {
    cy.get('#updatingButton').click();
    return this;
  }

  verifyUpdatingButtonValue(value: string) {
    cy.get('#updatingButton').should('have.text', value);
    return this;
  }

  clickClearInputLink() {
    cy.get(':nth-child(7) > :nth-child(2) > h3 > a').click();
    return this;
  }

  verifyClearInputValue(selector: string, value: string) {
    cy.get(selector).should('have.value', value);
    return this;
  }

  clearInput(selector: string) {
    cy.get(selector).clear();
    return this;
  }

  verifyClearInputEmpty(selector: string) {
    cy.get(selector).should('have.value', '');
    return this;
  }

  verifyClearContentEditableValue(value: string) {
    cy.get('#clearContentEditable').should('have.text', value);
    return this;
  }

  clearContentEditable() {
    cy.get('#clearContentEditable').clear();
    return this;
  }

  verifyClearContentEditableEmpty() {
    cy.get('#clearContentEditable').should('have.text', '');
    return this;
  }

  verifyClearStatusMessage() {
    cy.get('#opstatus').should('have.text', 'All fields are cleared!');
    return this;
  }

  clickSelectLink() {
    cy.get(':nth-child(8) > :nth-child(1) > h3 > a').click();
    return this;
  }

  selectLanguage(value: string) {
    cy.get('#selectLanguage').select(value);
    return this;
  }

  verifyLanguageStatus(value: string) {
    cy.get('#statusLanguage').should('include.text', value);
    return this;
  }

  selectCity(value: string) {
    cy.get('#selectCity').select(value);
    return this;
  }

  verifyCityStatus(value: string) {
    cy.get('#statusCity').should('include.text', value);
    return this;
  }

  selectProduct(value: string) {
    cy.get('#selectProduct').select(value);
    return this;
  }

  verifyProductStatus(value: string) {
    cy.get('#statusProduct').should('include.text', value);
    return this;
  }

  selectColors(values: string[]) {
    cy.get('#selectColors').select(values);
    return this;
  }

  verifyColorsStatus(value: string) {
    cy.get('#statusColors').should('include.text', value);
    return this;
  }

  selectFruits(values: string[]) {
    cy.get('#selectFruits').select(values);
    return this;
  }

  verifyFruitsStatus(value: string) {
    cy.get('#statusFruits').should('include.text', value);
    return this;
  }
}
