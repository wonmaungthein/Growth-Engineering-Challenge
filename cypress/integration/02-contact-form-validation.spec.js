
// /// <reference types="Cypress" />
/**
 * This test suite will test the second challenge "Scenario2" - Contact form validation behaviour
 */

describe('Contact form validation', () => {
    describe('Name input', () => {
        before(() => {
            cy.visit('http://www.growthengineering.co.uk/contact/')
        })

        it('should validate if the first name is empty', () => {
            cy.get('input[name="firstname"]').first()
                .focus().blur()

            cy.get('.hs-error-msgs label').contains('Please complete this required field.')
                .should('be.visible')

        })
        it('should validate if the last name is empty', () => {
            cy.get('input[name="firstname"]').first().type('Won')
            cy.get('input[name="lastname"]').first().focus().blur()

            cy.get('.hs_lastname label')
                .should('contain', 'Please complete this required field.')
        })
    })

    describe('Email input validation', () => {
        it('should check if email input is empty', () => {
            cy.get('input[name="firstname"]').first().type('Won')
            cy.get('input[name="lastname"]').first().type('Maung')
            cy.get('input[name="email"]').first().clear().focus().blur()

            cy.get('.hs_email .hs-error-msgs label').contains('Please complete this required field.')
                .should('be.visible')


            cy.get('.hs_email label')
                .should('contain', 'Please complete this required field.')

            cy.get('.hs_email label')
                .should('not.contain', 'Email must be formatted correctly.')
        })


        it('should check if email input is valid', () => {
            cy.get('input[name="firstname"]').first().type('Won').blur()
            cy.get('input[name="lastname"]').first().type('Maung').blur()
            cy.get('input[name="email"]').first().type('wrongemail').blur()

            cy.get('.hs_email label')
                .should('contain', 'Email must be formatted correctly.')
        })
    })

    describe('Message input validation', () => {
        it('should check if How Can We Help textarea is empty', () => {

            cy.get('textarea[name="what_s_your_goal_"]').first().focus().blur()
            cy.get('.hs_what_s_your_goal_ label')
                .should('contain', 'Please complete this required field.')
        })
    })

    describe('Form submit validation', () => {
        it('should validate on trying to submit', () => {
            cy.get('input[type="submit"]').eq(0)
                .click()
            cy.get('.hs_error_rollup > .hs-error-msgs > li > label')
                .should('contain', 'Please complete all required fields.')
        })
    })
})
