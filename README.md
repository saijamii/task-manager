# Task Management App

A simple Task Management application built with Next.js

## Features

- Add new tasks with title, priority, and description.
- Edit existing tasks.
- Delete tasks.
- Toggle the completion status of tasks.
- Sort tasks by priority (High, Medium, Low).

## Sorting Tasks by Priority

A Object of priority levels to numeric values is created

const customOrder = {
High: 1,
Medium: 2,
Low: 3,
};

Array.sort() method is used to for sorting based on the numeric values

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v12 or later)
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saijamii/task-manager.git
   ```

    

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**
   
    ```bash
    npm run dev
    ```

