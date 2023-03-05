context('DEMO TEST ELEMENTS', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
      cy.get('h5:contains("Elements")').click()
    })

    it('.type() - type into a some text element', () => {
        cy.get('span:contains("Text Box")').click()
        cy.get('#userName').should('be.visible').type('qa Automation')
        cy.get('#userEmail').type('qatestauo@email.com').should('have.value', 'qatestauo@email.com')
      })
    it('.checkbox() - check box element', () => {
        cy.get('span:contains("Check Box")').click()
        cy.get('.rct-checkbox').should('be.visible')
      })  
})