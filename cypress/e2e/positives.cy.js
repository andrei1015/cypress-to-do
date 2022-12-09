import { faker } from '@faker-js/faker';

import * as page from '../locators.json'

const randomText = faker.color.human()
const editedRandomText = faker.animal.cat()

describe('empty spec', () => {
  before(() => {
    cy.visit('')
  })

  it('create a task', () => {
    cy.get(page.input).type(randomText)
    cy.get(page.input).should('have.value', randomText)
    cy.get(page.input).type('{enter}')

    cy.get(page.list).should('contain', randomText)
  })

  it('edit a task', () => {
    cy.get(page.task).dblclick()
    cy.get(page.task).should('have.class', 'editing')

    cy.get(page.taskEditable).clear().type(editedRandomText + '{enter}')
    cy.get(page.list).should('contain', editedRandomText)
  })

  it('complete a task', () => {
    cy.get(page.checkbox).click()
    cy.get(page.checkbox).parents('li').should('have.class', 'completed')
  })
  
  it('delete a task', () => {
    cy.get(page.deleteButton).invoke('show').click()
    cy.get(page.list).should('not.exist')
  })
})
