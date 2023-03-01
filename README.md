# Frontend Mentor

My solutions to various challenges from [Frontend Mentor](https://www.frontendmentor.io/).
My purpose for this project is to learn more about SolidJS and to practice my CSS skills.
I want to learn more about different tools and technoligies for implementing CSS like TailwindCSS, CSS Modules, and CSS in JS.

If you're looking at the structure of the project, you might notice that I have most of my components organized into their own folders with an `index.tsx` file. This is called a [barrel](https://youtu.be/b0IZo2Aho9Y?t=223). I like to use this pattern because it makes it easier to import components from other files. It also makes the file strucutre look cleaner IMO.

Site is deployed for free on Netlify! <https://solid-mentor.netlify.app>

[![Netlify Status](https://api.netlify.com/api/v1/badges/bbd7062b-3e8e-4ebf-bb5a-20b11cf542bd/deploy-status)](https://app.netlify.com/sites/solid-mentor/deploys?branch=production)

## ✅ Getting Started

### ⚛️ Dependencies, Prerequisites, and Installation

* [NodeJS](https://nodejs.org/en/)
* [Pnpm](https://pnpm.io/)
* [Vite](https://vitejs.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [SolidJS](https://www.solidjs.com/)
* [Solid Router](https://github.com/solidjs/solid-router)

1. Clone the repo
1. Install dependencies with `pnpm install`. Regular npm should also work.
1. Run `pnpm dev` to start the dev server.

## 🥊 Challenges

If it's crossed out it means I've completed it. If it doesn't have a folder it means I haven't started it yet.

* ~~[QR Code Component](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H)~~
* ~~[Order Summary Component](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)~~
* [Single Price Grid Component](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc)

## 🧑‍💻 Authors

* Me - [Github](https://github.com/Brian-Pob) - [Twitter](https://twitter.com/brianmpdotdev) - [LinkedIn](https://www.linkedin.com/in/Brian-Pob/)

## 🪪 License

Whatever Frontend Mentor uses lol.

## 👏 Acknowledgments

* README template from [DomPizzie](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

## 📔 Journal

### 2023-03-01

Tried to use GPG keys. Not going well

### 2023-02-27

So I was able to refactor the project into an SPA with Solid Router. I was able to get around issues with CSS variables in the document root by assigning the variables inside a class that is used by the `<main>` tag in each challenge. What I want to do next is make the app more modular by moving the components into a common components folder so that each challenge can reuse the same component code. The only difference will be where the styles are located. I am experimenting with CSS Modules and later on I also want to try TailwindCSS and CSS in JS.

### 2023-02-24

An attempt to do something cool was made. I tried to make my app an SPA with Solid Router and have each route load a different set of styles. I knew that this would be ideal with a multi page app but I didn't realize it would be so difficult with an SPA. I realized that an app with this structure would not scale well with having to manage so many different style sets. I guess I learned a lot about what not to do `¯\_(ツ)_/¯`
