import { faker } from '@faker-js/faker';

const input = "header input"
const list = "[class*=todo-list]"
const task = "[class*=todo-list] li"
const taskEditable = "[class*=todo-list] li input[class*=edit]"
const checkbox = "[class*=todo-list] li input[type=checkbox]"
const deleteButton = "[class*=todo-list] li button[class*=destroy]"

const randomText = faker.color.human()
const editedRandomText = faker.animal.cat()

describe('empty spec', () => {
  before(() => {
    cy.visit('')
  })

  it('create a task', () => {
    cy.get(input).type(randomText)
    cy.get(input).should('have.value', randomText)
    cy.get(input).type('{enter}')

    cy.get(list).should('contain', randomText)
  })

  it('edit a task', () => {
    cy.get(task).dblclick()
    cy.get(task).should('have.class', 'editing')

    cy.get(taskEditable).clear().type(editedRandomText + '{enter}')
    cy.get(list).should('contain', editedRandomText)
  })

  it('complete a task', () => {
    cy.get(checkbox).click()
    cy.get(checkbox).parents('li').should('have.class', 'completed')
  })
  
  it('delete a task', () => {
    cy.get(deleteButton).invoke('show').click()
  })
})
