

# About

This is a calculator app built using HTML/Javascript/CSS and Java.

# Setup

## Client

The client app uses plain HTML, JS, and CSS with no external Javascript frameworks like React. To ensure compatibility across browsers, I used a build tool called Vite which allows for me to use various features such as ES modules and automatic refresh during the development phase.

To initialize the client app, open a terminal in this directory. Type the following commands:

```sh
cd client
npm install
echo "VITE_API_URL='http://localhost:8080'" > .env
```

To view the app locally, type the following commands into terminal from the client directory:

```sh
npm run build
npm run preview
```

