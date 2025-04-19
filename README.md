# 🐦 TweetNest — A Simple RESTful Tweets App

**TweetNest** is a lightweight Express.js application that simulates a microblogging platform. It allows users to create, view, edit, and delete tweet-like posts with hashtags — all in memory, making it a great RESTful practice project for beginners learning Node.js and Express.

---

## 🚀 Features

- 📝 Create a tweet (username, message, hashtags)
- 📜 List all tweets
- 🔍 View a specific tweet by ID
- ✏️ Edit tweet content and hashtags
- ❌ Delete tweets
- 🌐 Uses EJS for dynamic HTML rendering
- 🔄 Supports method overriding for PATCH/DELETE via HTML forms

---

## 📁 Folder Structure (Expected)

```
.
├── script.js            # Main server logic
├── package.json         # Project metadata & dependencies
├── views/               # EJS templates (create manually)
│   └── tweet/
│       ├── index.ejs
│       ├── new.ejs
│       ├── show.ejs
│       └── update.ejs
```

> _Note: You’ll need to create the EJS view files in the `/views/tweet` directory to fully utilize the rendering routes._

---

## 🧰 Built With

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Method-Override](https://www.npmjs.com/package/method-override)
- [Nodemon](https://www.npmjs.com/package/nodemon) – For dev

---

## 💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/DevOlabode/tweetnest.git
```
```bash
cd tweetnest
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
nodemon script.js
```

Server will start on: [http://localhost:3000](http://localhost:3000)

---

## 📬 API Endpoints

| Method | Route              | Description              |
|--------|--------------------|--------------------------|
| GET    | `/tweets`          | List all tweets          |
| GET    | `/tweets/new`      | Form to create a tweet   |
| POST   | `/tweets`          | Create a new tweet       |
| GET    | `/tweets/:id`      | View a specific tweet    |
| GET    | `/tweets/:id/edit` | Form to edit a tweet     |
| PATCH  | `/tweets/:id`      | Update a tweet           |
| DELETE | `/tweets/:id`      | Delete a tweet           |

---

## ✍️ Example Tweet Object

```js
{
  username: "Didi",
  tweet: "Why do I open the fridge 10 times like something new is gonna appear??",
  hashtags: "#funny #relatable",
  id: "some-uuid"
}
```

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

[ISC](https://opensource.org/licenses/ISC)
