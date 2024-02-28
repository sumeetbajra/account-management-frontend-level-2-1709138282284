
describe('Personal Task Tracker - Daily Tasks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User can add a task with a title, description, and mark it as important', () => {
    const taskTitle = "Cypress Test Task"
    const taskDescription = "This is a task to test adding a task feature."
    cy.get('[data-test="add-task-button"]').click()
    cy.get('[data-test="task-title-input"]').type(taskTitle)
    cy.get('[data-test="task-description-input"]').type(taskDescription)
    cy.get('[data-test="task-important-checkbox"]').check()
    cy.get('[data-test="save-task-button"]').click()
    cy.get(`[data-test="task"]`).contains(taskTitle).parent().as('taskComponent')
    cy.get('@taskComponent').should('contain', taskTitle)
    cy.get('@taskComponent').should('have.attr', 'data-important', 'true')
  })

  it('User can complete a task and it disappears from the list', () => {
    const taskTitle = "Complete Me"
    cy.get('[data-test="add-task-button"]').click()
    cy.get('[data-test="task-title-input"]').type(taskTitle)
    cy.get('[data-test="save-task-button"]').click()
    cy.get('[data-test="task"]').contains(taskTitle).parent().find('[data-test="task-complete-button"]').click()
    cy.get('[data-test="task"]').contains(taskTitle).should('not.exist')
  })

  it('User can filter tasks to only show important ones', () => {
    const importantTaskTitle = "Important Task"
    const normalTaskTitle = "Normal Task"
    // Add an important task
    cy.get('[data-test="add-task-button"]').click()
    cy.get('[data-test="task-title-input"]').type(importantTaskTitle)
    cy.get('[data-test="task-important-checkbox"]').check()
    cy.get('[data-test="save-task-button"]').click()
    // Add a normal task
    cy.get('[data-test="add-task-button"]').click()
    cy.get('[data-test="task-title-input"]').type(normalTaskTitle)
    cy.get('[data-test="save-task-button"]').click()
    // Activate important filter
    cy.get('[data-test="filter-important-button"]').click()
    cy.get('[data-test="task"]').contains(importantTaskTitle).should('exist')
    cy.get('[data-test="task"]').contains(normalTaskTitle).should('not.exist')
  })
})
