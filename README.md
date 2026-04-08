# 🧠 Quizzical

A dynamic, mobile-responsive trivia application developed as a **Solo Project** for the Scrimba "Learn React" certification.

[🚀 Live Demo](https://quizzcal.vercel.app/) | [🎨 Figma Design](https://www.figma.com/design/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0-1&p=f&t=AvbSAkersipREsG4-0)

---

## 📖 Project Overview
The goal of this project was to demonstrate mastery of React fundamentals by transforming a static design into a data-driven application. I managed the entire development lifecycle, from API integration and state management logic to final deployment.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React (Functional Components, Hooks) |
| **API** | Open Trivia Database |
| **Styling** | CSS3 (Custom Media Queries) |
| **Utility Libs** | `he`, `react-confetti`, `react-use` |
| **Deployment** | Vercel |

---

## ✨ Key Features & Technical Wins

### 🎯 Custom Shuffle Logic
To ensure a fair gaming experience, I implemented a custom shuffle algorithm. This ensures the correct answer is randomized among options for every question, providing a fresh experience with every round.

### 🏆 Perfect Score Celebration
To enhance user engagement, I integrated `react-confetti`. A celebration is triggered by a logical check of the final score against the question count, providing rewarding feedback for a 5/5 score.

### 📱 Responsive Architecture
The app features a mobile-first design that handles long-form questions gracefully. I optimized the layout to ensure that content remains accessible and scrollable across all device sizes.

---

## 💡 Key Learnings
* **Data Sanitization:** Handling raw API data reinforced the importance of decoding HTML entities using the `he` library to ensure special characters render correctly.
* **Complex State Mapping:** Managing 5 questions—each with 4 independent states (unselected, selected, correct, incorrect)—deepened my understanding of `useState` and efficient object mapping within the React lifecycle.

---

## 🚀 Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/Chirchir-Dan/quizzical.git](https://github.com/Chirchir-Dan/quizzical.git)

2. **Install dependencies:**
        npm install

3. **Start dev server:**
        npm run dev

## 📝 Author
Daniel Kipkosgei

[GitHub](https://github.com/Chirchir-Dan)

[LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/daniel-kipkosgei-2ab84117b/)

