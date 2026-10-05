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
}
