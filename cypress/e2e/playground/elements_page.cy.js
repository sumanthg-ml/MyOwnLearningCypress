context('DEMO TEST ELEMENTS', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
      cy.get('h5:contains("Elements")').click()
    })

    it('type() - type into a some text element', () => {
        cy.get('span:contains("Text Box")').click()
        cy.get('#userName').should('be.visible').type('qa Automation')
        cy.get('#userEmail').type('qatestauo@email.com').should('have.value', 'qatestauo@email.com')
      })
    it('checkbox() - check box element', () => {
        cy.get('span:contains("Check Box")').click()
        cy.get('.rct-checkbox').should('be.visible')
      })  
    it('radio button() - radio box element', () => {
        cy.get('span:contains("Radio Button")').click()
        cy.get('.mb-3').should('be.visible').should('have.text', 'Do you like the site?')
        cy.get('#yesRadio').should('be.visible').check().should('be.checked')
        cy.get('.text-success').should('have.text', 'Yes')
      })
    it('web tables() - web table element', () => {
        cy.get('span:contains("Web Tables")').click()
        cy.get('#addNewRecordButton').should('be.visible').should('have.text','Add').click()
        cy.get('#registration-form-modal').should('be.visible').should('have.text','Registration Form')
        cy.get('.close').click()
        cy.get('#searchBox').should('be.visible').type('Alden')
      })    
})
