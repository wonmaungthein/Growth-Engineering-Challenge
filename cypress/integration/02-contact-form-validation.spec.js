
// /// <reference types="Cypress" />
// // Check that form validation works on the contact page (/contact/), 
// // but please avoid submitting any data. 

// describe('Contact form validation', () => {
//     it('should visit to the contact page', () => {
//         cy.visit('http://www.growthengineering.co.uk/contact/')
//         cy.get('div.hbspt-form')
//         cy.get('form').eq(0).within(($form) => {
//             cy.get('input[id="firstname-904e0350-5c3a-43a2-aa4c-434b02d38da6"]').type('Fake first Name')
//                 .clear()
//                 .should('have.value', '')
//             cy.get('input[id="lastname-904e0350-5c3a-43a2-aa4c-434b02d38da6"]').type('Fake last Name').clear()
//                 .should('have.value', '')
//             cy.get('input[id="email-904e0350-5c3a-43a2-aa4c-434b02d38da6"]').type('Fake email@gmail.com').clear()
//                 .should('have.value', '')
//             cy.get('textarea[id="what_s_your_goal_-904e0350-5c3a-43a2-aa4c-434b02d38da6"]').type('Here is the question I would like to ask.. :)').clear()
//                 .should('have.value', '')
//             cy.get('input.hs-button').click()
//         })
//     })
// })
