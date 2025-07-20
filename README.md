# 🌟 TaskMate

TaskMate is a vibrant and intuitive to-do list application designed for seamless task management.

## ✨ Features

- **Multi-user support** with JWT-based authentication.
- **Task creation and management** through interactive modals.
- **Advanced sorting and filtering** options for organizing tasks.
- An **admin panel** for user and task administration.

## 🚀 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (TypeScript, App Router)
- **UI:** [Mantine UI](https://mantine.dev/)
- **Backend:** [Cloudflare Workers](https://workers.cloudflare.com/)
- **Database:** [Cloudflare D1](https://developers.cloudflare.com/d1/)
- **Deployment:** [OpenNext](https://opennext.js.org/)
- **Monorepo:** [Turborepo](https://turbo.build/)

## 🛠️ Setup on Ubuntu

1.  **Update package list:**
    ```bash
    sudo apt update
    ```

2.  **Install Node.js and npm:**
    ```bash
    sudo apt install nodejs npm
    ```

3.  **Install project dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    turbo run dev
    ```
