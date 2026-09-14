describe('Basic interaction', () => {
	it('should be implemented', () => {
		cy.visit(Cypress.expose('BASE_URL'))
	})
})
