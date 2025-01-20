# Socially

**Socially** is a social networking website, much like Twitter, where you can connect with others by sharing your thoughts and pictures. You can follow users, interact with posts by liking or commenting, and explore the vibrant community.

---

## 🚀 Features

- **Post Creation**: Share your thoughts or pictures with the community.
- **User Interaction**: Like and comment on posts from other users.
- **Follow System**: Follow users to see their updates on your feed.
- **Responsive Design**: Optimized for all screen sizes for seamless usage.
- **Authentication**: Secure login and signup using Clerk.
- **Dark Mode**: Enjoy the application in light or dark mode.
- **Media Uploads**: Effortlessly upload and share pictures.
- **Real-Time Notifications**: Get instant updates for likes, comments, and follows.

---

## 🛠 Tech Stack

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS, Shadcn UI
- **Authentication**: Clerk
- **Backend**: Prisma ORM, PostgreSQL
- **Utilities**: Uploadthing, Lucide-react, React Hot Toast
- **Dev Tools**: TypeScript, ESLint, PostCSS

---

## 📦 Installation

Follow these steps to set up the project locally:

1. Fork this repo
2. Clone the repo locally:
```bash
   git clone https://github.com/your-username/socially.git
```
3. Navigate to the project directory:
```bash
cd socially
```
4. Install dependencies
```bash
npm install
```
5. Update environment variables in a .env (in root directory) file for Clerk, Prisma, Uploadthing, and database configurations.
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_TOKEN=
```
6. Start the development server
```bash
npm run dev
```
7. Open the browser and visit: 
http://localhost:3000

