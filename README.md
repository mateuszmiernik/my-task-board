> ⚠️ This project is under active development. The app is not yet fully functional.

## 🚀 Live Demo

The application is fully deployed and available online:

*   **Frontend (User Interface):** [my-task-board-nine.vercel.app](https://my-task-board-nine.vercel.app)
*   **Backend (REST API URL):** [my-task-board-tj0n.onrender.com](https://my-task-board-tj0n.onrender.com) *(Note: Accessing the root URL directly returns a 404 error, as the backend only serves specific `/api` endpoints)*


## 🛠️ Tech Stack & Infrastructure

This project is built using a Monorepo structure, dividing the application into two main parts:

### 💻 Frontend (Folder `/frontend`)
*   **Hosting:** [Vercel](https://vercel.com) (Automated continuous deployment from the `main` branch)
*   **Stack:** React + Vite, JavaScript, Tailwind CSS

### ⚙️ Backend (Folder `/backend`)
*   **Hosting:** [Render](https://render.com) (Web Service running Node.js)
*   **Stack:** Node.js, Express.js

### 🗄️ Database
*   **Provider:** [MongoDB Atlas](https://mongodb.com) (Cloud NoSQL Database)
*   **ODM:** Mongoose for data modeling and seamless connection
