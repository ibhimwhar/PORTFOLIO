### Feel Free To Update This README.md At Anytime

# 🧑‍💻 Ibhimwhar — Full Stack Developer | Frontend Specialist | Problem Solver

Welcome to my developer showcase!  
This repository is dedicated to highlighting my technical ability, coding standards, and real project experience using modern web development tools.

---

## 🚀 About Me

Hi, I'm **Ibhimwhar**, a passionate developer focused on building fast, responsive, and clean web applications. I love turning ideas into real, usable products with:

✅ Clean, scalable code  
✅ Modern tech stacks  
✅ Pixel-perfect UI/UX  
✅ Performance-focused builds  
✅ Maintainable and organized project structure  

---

## 💡 What I Build

- ⚡ Interactive websites with React + TypeScript  
- 🛒 Full-stack MERN e-commerce platforms  
- 🌗 Dark/Light mode UI systems with global state  
- 🗂️ Reusable, scalable components using Tailwind CSS  
- 🔒 Authentication systems (JWT, Express, MongoDB)  
- 📱 Responsive, mobile-first designs  
- 💬 Real-time chat applications (Socket.io)  
- 🛠️ APIs with Express & MongoDB  

---

## 🛠️ Tech Stack

| Frontend        | Backend           | Tools / Other   |
|-----------------|------------------|-----------------|
| React (Vite)    | Node.js (Express) | Git & GitHub    |
| TypeScript      | MongoDB (Mongoose)| Figma / Design  |
| Tailwind CSS    | REST APIs         | VSCode / Terminal|
| Lucide-React    | JWT Authentication| Postman / Testing|
| React Router    | CORS / Middleware | Netlify / Vercel|
| Zustand / Context| MongoDB Atlas    | Yarn / NPM      |

---

## 🌍 Links & Projects

### 🌐 Portfolio Website

- **Live**: [https://ibhimwhar-portfolio.vercel.app](https://ibhimwhar-portfolio.vercel.app)  
- **Repo**: [https://github.com/ibhimwhar/portfolio](https://github.com/ibhimwhar/portfolio)  
- _React, TypeScript, Tailwind, Dark Mode System, Responsive, Animated Header_  

---

### 🛒 Full MERN E-Commerce

- **Live**: [https://ibhimwhar-store.netlify.app](https://ibhimwhar-store.netlify.app)  
- **Repo**: [https://github.com/ibhimwhar/mern-ecommerce](https://github.com/ibhimwhar/mern-ecommerce)  
- _Full authentication, product management, cart system, responsive UI, Express API_  

---

### 💬 Real-time Chat App

- **Live**: [https://ibhimwhar-chat.vercel.app](https://ibhimwhar-chat.vercel.app)  
- **Repo**: [https://github.com/ibhimwhar/chat-app](https://github.com/ibhimwhar/chat-app)  
- _Socket.io, Express, real-time messages, responsive layout, localStorage for theme_  

---

### 🧮 BizNest (Business Simulator Game)

- **Repo**: [https://github.com/ibhimwhar/biznest](https://github.com/ibhimwhar/biznest)  
- _WIP: Simulated business game with React, Express API, real earnings logic_  

---

## 📸 Project Screenshots

### Portfolio Website (Light & Dark Mode)

| Light Mode                           | Dark Mode                            |
|--------------------------------------|---------------------------------------|
| ![Light Mode Screenshot](./screenshots/portfolio-light.png) | ![Dark Mode Screenshot](./screenshots/portfolio-dark.png) |

---

### E-Commerce App (Product Listing & Cart)

| Products Page                        | Cart System                           |
|--------------------------------------|---------------------------------------|
| ![Products](./screenshots/store-products.png) | ![Cart](./screenshots/store-cart.png) |

---

### Chat App (Real-Time Messaging)

| Chat Screen                          | Mobile Friendly                       |
|--------------------------------------|---------------------------------------|
| ![Chat](./screenshots/chat-desktop.png) | ![Mobile Chat](./screenshots/chat-mobile.png) |

---

## 📂 My Coding Standards

✅ Strict TypeScript usage  
✅ Functional, reusable components  
✅ Separation of concerns (API logic vs UI logic)  
✅ Proper state management (Zustand, Context)  
✅ LocalStorage for persistence (theme, auth tokens)  
✅ Organized file structure  
✅ Accessibility considerations  
✅ Mobile-first responsive layouts  
✅ Minimal, clean UI with Tailwind  
✅ Performance optimizations (Vite, lazy-loading)  

---

## 🛠️ Example Code Snippet: Dark/Light Mode Context

```tsx
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

---

## ✅ Notes for You:

- You can edit the project links with your real Netlify/Vercel deploys.  
- Screenshot images go in a `screenshots` folder in your repo.  
- You can remove or add more sections like "Testimonials", "Learning Goals" etc if you want to flex more.  
- This structure looks *very* clean to recruiters, collaborators, or potential clients.  

---

**Want me to generate this whole structure as files ready to paste in your project?** Just say "yes, generate it."