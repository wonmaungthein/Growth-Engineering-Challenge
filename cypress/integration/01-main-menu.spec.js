/// <reference types="Cypress" />
/**
 * This test suite will test the first challenge "Scenario1" - Main menu behaviour
 */

describe('Main menu', () => {
    describe('Desktop', () => {
        beforeEach(() => {
            cy.viewport(1280, 768)
            cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
        })
        it('should link to Solution page', () => {
            cy.get('a.w-nav-anchor')
                .contains('Solutions').should('be.visible')
                .click()
                .url().should('include', 'academy-lms/')
        })
        it('should link to Learner Engagement page', () => {
            cy.get('a.w-nav-anchor')
                .contains('Learner Engagement').should('be.visible')
                .click()
                .url().should('include', '/employee-engagement/')
        })
        it('should link to Success stories page', () => {
            cy.get('a.w-nav-anchor')
                .contains('Success Stories').should('be.visible')
                .click()
                .url().should('include', '/our-clients/')
        })
        it('should link to Resources page', () => {
            cy.get('a.w-nav-anchor')
                .contains('Resources').should('be.visible')
                .click()
                .url().should('include', '/archives-awesome/')
        })
        it('should link to About us', () => {
            cy.get('a.w-nav-anchor')
                .contains('About Us').should('be.visible')
                .click()
                .url().should('include', '/about-growth-engineering/')
        })
        it('should link to Get intouch', () => {
            cy.get('a.w-nav-anchor')
                .contains('Get in Touch').should('be.visible')
                .click()
                .url().should('include', '/contact/')
        })
    })

    describe('Mobile Screen (iPhone 6)', () => {
        describe('clicking on burger menu', () => {
            before(() => {
                cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
                clickBurgerMenu()
            })
            it('should have a "Solutions" link', () => {
                cy.get('a.w-nav-anchor')
                    .contains('Solutions').should('be.visible')
            })
            it('should have a "Learner Engagement" link', () => {
                cy.get('a.w-nav-anchor')
                    .contains('Learner Engagement').should('be.visible')
            })
            it('should have a "Success Stories" link', () => {
                cy.get('a.w-nav-anchor')
                    .contains('Success Stories').should('be.visible')
            })
            it('should have a "Resources" link', () => {
                cy.get('a.w-nav-anchor')
                    .contains('Resources').should('be.visible')
            })
            it('should have a "About Us" link', () => {
                cy.get('a.w-nav-anchor')
                    .contains('About Us').should('be.visible')
            })
            it('should have a "Get in touch" link', () => {
                cy.get('a.w-nav-anchor')
                    .contains('Get in Touch').should('be.visible')
            })
        })

        describe('clicking on Solutions', () => {
            beforeEach(() => {
                cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
                clickBurgerMenu()
                cy.get('a.level_1')
                    .contains('Solutions').should('be.visible')
                    .click()
            })
            it('should link to The Academy LMS', () => {
                cy.get('a.level_2')
                    .contains('The Academy LMS').should('be.visible')
                    .click().url().should('include', '/academy-lms/')
            })
            it('should link to Genie - a Game-Based Content', () => {
                cy.get('a.level_2')
                    .contains('Genie – a Game-Based Content Authoring Tool').should('be.visible')
                    .click().url().should('include', '/genie-content-authoring-tool/')
            })
            it('should link to The Knowledge Arcade Mobile', () => {
                cy.get('a.level_2')
                    .contains('The Knowledge Arcade Mobile').should('be.visible')
                    .click().url().should('include', '/knowledge-arcade-learning-app/')
            })
            it('should link to Custom Online Learning', () => {
                cy.get('a.level_2')
                    .contains('Custom Online Learning')
                    .should('be.visible')
                    .click().url().should('include', '/elearning/')
            })
        })

        describe('clicking on Learner Engagement', () => {
            beforeEach(() => {
                cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
                clickBurgerMenu()
                cy.get('a.level_1')
                    .contains('Learner Engagement').should('be.visible')
                    .click()
            })
            it('should link to Gamification', () => {
                cy.get('a.level_2')
                    .contains('Gamification')
                    .should('be.visible')
                    .click().url().should('include', '/gamification/')
            })
            it('should link to Social Learning', () => {
                cy.get('a.level_2')
                    .contains('Social Learning')
                    .should('be.visible')
                    .click().url().should('include', '/social-learning/')
            })
            it('should link to Epic Meaning', () => {
                cy.get('a.level_2')
                    .contains('Epic Meaning')
                    .should('be.visible')
                    .click().url().should('include', '/epic-meaning/')
            })
            it('should link to Mobile Learning', () => {
                cy.get('a.level_2')
                    .contains('Mobile Learning')
                    .should('be.visible')
                    .click().url().should('include', '/mobile-learning/')
            })
        })

        describe('clicking on Success Stories', () => {
            beforeEach(() => {
                cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
                clickBurgerMenu()
                cy.get('a.level_1')
                    .contains('Success Stories').should('be.visible')
                    .click()
            })
            it('should link to Our Clients', () => {
                cy.get('a.level_2')
                    .contains('Our Clients')
                    .should('be.visible')
                    .click().url().should('include', '/our-clients/')
            })
            it('should link to Award-Winning', () => {
                cy.get('a.level_2')
                    .contains('Award-Winning')
                    .should('be.visible')
                    .click().url().should('include', '/awards/')
            })
        })

        describe('clicking on Resources', () => {
            beforeEach(() => {
                cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
                clickBurgerMenu()
                cy.get('a.level_1')
                    .contains('Resources').should('be.visible')
                    .click()
            })
            it('should link to GE TV', () => {
                cy.get('a.level_2')
                    .contains('GE TV')
                    .should('be.visible')
                    .click().url().should('include', '/ge-tv/')
            })
            it('should link to Downloads', () => {
                cy.get('a.level_2')
                    .contains('Downloads')
                    .should('be.visible')
                    .click().url().should('include', '/archives-awesome/')
            })
            it('should link to Blog', () => {
                cy.get('a.level_2')
                    .contains('Blog')
                    .should('be.visible')
                    .click().url().should('include', '/blog/')
            })
            it('should link to Webinars', () => {
                cy.get('a.level_2')
                    .contains('Webinars')
                    .should('be.visible')
                    .click().url().should('include', '/webinars/')
            })
        })

        describe('clicking on About Us', () => {
            beforeEach(() => {
                cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
                clickBurgerMenu()
                cy.get('a.level_1')
                    .contains('About Us').should('be.visible')
                    .click()
            })

            it('should link to Our Origin Story', () => {
                cy.get('a.level_2')
                    .contains('Our Origin Story')
                    .should('be.visible')
                    .click().url().should('include', '/about-growth-engineering/')
            })
            it('should link to Careers', () => {
                cy.get('a.level_2')
                    .contains('Careers')
                    .should('be.visible')
                    .click().url().should('include', '/growth-engineering-jobs/')
            })
            it('should link to GDPR', () => {
                cy.get('a.level_2')
                    .contains('GDPR')
                    .should('be.visible')
                    .click().url().should('include', '/gdpr/')
            })
        })

        describe('clicking on Get in Touch', () => {
            it('should link to Get in Touch', () => {
                cy.visit('http://www.growthengineering.co.uk/growth-engineering-jobs/')
                clickBurgerMenu()
                cy.get('a.level_1')
                    .contains('Get in Touch').should('be.visible')
                    .click()
                    .url().should('include', '/contact/')
            })
        })
    })
})

const clickBurgerMenu = () => {
    cy.get('nav.w-nav')
        .click()
}