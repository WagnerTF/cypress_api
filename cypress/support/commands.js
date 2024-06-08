// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST', // Use o método HTTP correto
        url: '/signin', // A URL correta
        body: {
            // Dados para a criação da conta
            email: user,
            redirecionar: false,
            senha: passwd
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            Cypress.env('token', token)
            return token
            
        })
})

Cypress.Commands.add('resetRest', (user, passwd) => {
    cy.getToken('wf@w', '123').then(token => {
        cy.request({
            method: 'GET',
            url: '/reset', 
            headers: { Authorization: `JWT ${token}` },
            
        }).its('status').should('be.equal', 200)
    })
})

Cypress.Commands.add('getContaByName', name => {
    cy.getToken('wf@w', '123').then(token => {  
    cy.request({
            method: 'GET',
            url: '/contas', 
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: name
            }
        }).then(res => {
            return res.body[0].id
        })
    })
})

Cypress.Commands.overwrite('request', (originalFn, ...options) => {
    if (options.length === 1) {
        if (Cypress.env('token')) {
            console.log(options)
            options[0].headers = {
                Authorization: `JWT ${Cypress.env('token')}`
            }
        }
    }

    return originalFn(...options)
})