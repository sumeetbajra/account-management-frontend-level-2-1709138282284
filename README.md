# Personal Task Tracker

## Overview

This document provides instructions for creating a web application for tracking daily tasks. The application will allow users to add tasks with titles and descriptions, mark tasks as important, complete tasks, and filter tasks to show only the important ones. This coding challenge aims to assess your skills in Vue.js, Vuex, Ant Design Vue (antd), TypeScript, Vite, unit testing with Jest, clean code practices, ES6, and SASS.

## Getting Started

1. **Setup Your Development Environment**
   - Ensure you have Node.js installed on your computer.
   - Install and configure Vue 3 and Vite by following the official documentation.
   - Initialize a new Vue project using Vite.

2. **Add Required Dependencies**
   - Run the following commands to add necessary libraries:
     ```bash
     npm install vue@next vuex@next ant-design-vue@next typescript jest sass
     ```

3. **Configure TypeScript**
   - Make sure to configure your `tsconfig.json` for Vue 3 and Jest compatibility.
   - Use ES6 syntax for better code structure and readability.

4. **Setup the Project Structure**
   - Organize your project into folders for components, stores (Vuex), styles (SASS), and tests.

## Task Implementation

### 1. Create the Task Interface
Define a TypeScript interface `Task` in a new file within the `src/models` directory. This interface should have the following properties:
   - `title`: string
   - `description`: string
   - `important`: boolean

### 2. Vuex Store Setup
In the `src/store` directory, setup a new Vuex store with state containing an array of `Task` objects. Implement actions for adding a task, completing a task, and filtering tasks based on their importance.

### 3. Task Component
Create a Vue component for displaying a task. This component should accept a `Task` object as a prop and display the task's title, description, and an indicator if it's marked as important (use the `data-important` attribute for Cypress tests). Include a button to mark the task as complete, which should dispatch an action to the Vuex store.

### 4. Main App Component
In your main App component:
   - Use Ant Design Vue (antd) components where possible for UI elements.
   - Include an "Add Task" button (`data-test="add-task-button"`) that opens a modal for adding a new task. The modal should have inputs for the task's title (`data-test="task-title-input"`), description (`data-test="task-description-input"`), and a checkbox for marking the task as important (`data-test="task-important-checkbox"`).
   - Display a list of tasks, each rendered using the Task component created earlier.
   - Implement a button (`data-test="filter-important-button"`) to toggle the display of only important tasks.

### 5. Styling
Use SASS to style your components. Ensure your application is visually appealing and the UI components are well-structured.

### 6. Unit Testing with Jest
Write unit tests for your components and Vuex store actions. Ensure your tests cover critical functionalities of the application.

### 7. End-to-End Testing
The provided Cypress tests will validate the functionality of your application. Ensure your application passes all the tests by following the specifications and data-test attributes mentioned above.

## Build and Test
- Run `npm run build` to build your project.
- Use Jest for unit testing. Run `npm run test:unit` to execute your unit tests.
- Use Cypress for end-to-end testing. Ensure your application is running, and then execute the Cypress tests to validate functionality.

## Submission
- Make sure your code is clean, well-commented, and follows best practices.
- Submit your project as a zip file or a link to a repository containing all the necessary files to run and test your application.

Good luck with your coding challenge!