/// <reference types="Cypress" />
// This will test the first challenge "Scenario1".
describe('Scenario1 testing', () => {

    beforeEach(() => {
        cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
    })

    // it('should visit to the website', () => {
    //     cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
    // })

    const getDropDownMenu = () => {
        cy.get('nav.w-nav')
            .click()
    }

    const closeMenu = () => {
        cy.get('div.w-nav-icon').click()
    }

    // it('visit to the website and click the drop down menu button', () => {
    //     getDropDownMenu()
    // })

    it('find Solution tab, click and close Menu', () => {
        getDropDownMenu()
        cy.get('a.w-nav-anchor')
            .contains('Solutions').click()
        // cy.url().should('eq','http://www.growthengineering.co.uk/growth-engineering-jobs/')
        // cy.get('a.w-nav-anchor').contains('The Academy LMS').click()
        closeMenu()
    })

    it('find Learner Engagement tab, click and close Menu', () => {
        getDropDownMenu()
        cy.get('a.w-nav-anchor')
            .contains('Learner Engagement').click()
        // cy.get('a.w-nav-anchor').contains('Gamification').click()
        closeMenu()

    })
    it('find Success Stories tab , click and close Menu', () => {
        getDropDownMenu()
        cy.get('a.w-nav-anchor')
            .contains('Success Stories').click()
        // cy.get('a.w-nav-anchor').contains('Our Clients').click()
        closeMenu()

    })

    it('find Resources tab , click and close Menu', () => {
        getDropDownMenu()
        cy.get('a.w-nav-anchor')
            .contains('Resources').click()
        // cy.get('a.w-nav-anchor').contains('GE TV').click()
        closeMenu()

    })
    it('find About Us tab , click and close Menu', () => {
        getDropDownMenu()
        cy.get('a.w-nav-anchor')
            .contains('About Us').click()
        // cy.get('a.w-nav-anchor').contains('Our Origin Story').click()
        closeMenu()

    })

    it('find Get in Touch tab , click and close Menu', () => {
        getDropDownMenu()
        cy.get('a.w-nav-anchor')
            .contains('Get in Touch').click()
        // cy.get('a.w-nav-anchor').contains('Our Origin Story').click()
        // closeMenu()
    })

})
