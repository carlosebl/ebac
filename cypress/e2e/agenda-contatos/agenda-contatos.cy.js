/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve testar inclusão de novo contato', () => {
        cy.get('input[type="text"]').type('Carlos Leite')
        cy.get('input[type="email"]').type('carlosleite@teste.com')
        cy.get('input[type="tel"]').type('51 987654321')
        cy.get('.adicionar').click(() => {
            expect('.sc-eDDNvR cTVgex li').contain('Carlos Leite')
        })
    })

    it('Deve testar edição de contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').type('.br')
        cy.get('.alterar').click(() => {
            expect('.sc-eDDNvR cTVgex li').contain('.br')
        })
    })

    it('Deve testar remoção de contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click(() => {
            expect('.sc-eDDNvR cTVgex li').not.contain('Carlos Leite')
        })
    })
})