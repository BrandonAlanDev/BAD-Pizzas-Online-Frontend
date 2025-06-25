# 🍕 Pizza Online - Next.js + Prisma App

## 👋 Welcome

Hi! I'm **Brandon Alan Carabajal**, and this is a sample project built with **Next.js**, **Prisma ORM**, **MySQL**, and **Tailwind CSS**. It demonstrates a full-stack web application with:

- 🧾 **JWT Authentication**
- 👨‍🍳 Role-based access (Admin & Client)
- 🧑‍💼 Admin dashboard
- 🛍️ Client storefront (pizza browsing, ordering, etc.)
- 💾 Secure backend using server actions & database validation

---

## 🛠️ Stack Used

- **Framework**: [Next.js (App Router)](https://nextjs.org)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: MySQL
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: JWT + HTTPOnly Secure Cookies

---

## 🚀 Getting Started

Clone repo:

```bash
git clone https://github.com/BrandonAlanDev/BAD-Pizzas-Online-Frontend.git
cd BAD-Pizzas-Online-Frontend
```
Install dependencies:
```bash
npm install
```

Create your .env file and add your database connection:
DATABASE_URL="mysql://user:password@localhost:3306/pizzadb"
JWT_SECRET="yoursecretkey"


Run database migrations and generate Prisma client:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start the development server:
```bash
npm run dev
```
Open http://localhost:3000 to see the app.