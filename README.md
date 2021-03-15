# Movie-Lookup

built with

<div align="center">
  <div style="display: flex;">
    <img src="/webapp/v.png" style="vertical-align: top;" />
    <img src="https://nuxtjs.org/logos/nuxt-emoji@2x.png" />
    <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />
  </div>
</div>

## webapp

### Build Setup

In the websapp directory, you can run:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## webservice

### Available Scripts

Note: before running the backend, you will need to provide your own config.json file inside the webservice directory. I provided a sampleConfig.json as a reference of what information you will need to put in your config.

In the webservice directory, you can run:

#### `npm run server`

runs the backend. It runs on [http://localhost:8080](http://localhost:8080)

The backend will reload if you make edits in the directory.<br />

#### `npm run server:debug`

runs the backend in development mode. It runs on [http://localhost:8080](http://localhost:8080)

The backend will reload if you make edits.<br />
You will also see any backend errors, using a package called debug, in the console.

#### `npm test`

Launches the test runner, using mocha as the testing framework and chai for assertions.

## What I Learned While Building This Project

### Frontend

First off, I was completely new to Nuxt.js before starting this project. Being familiar with React.js, I thought it was a little weird how Nuxt is a framework for Vue.js which is a frontend framework, in other words a framework for a framework. I had previously only used Vue in a previous web programming class. Putting that aside though, I was plesantly suprised when I started learning and using Nuxt. Here are some of the things I really liked:

 - Nuxt makes global state management very easy with the Store directory, as well the examples in the docs are easy to implement
 - Routing is built into the file structure, allowing for almost handsfree pape routing
 - Vue keeps local state management simple for components and pages with the Data attribute in the export default.
 - I like how declaring props and passing props for components seem relatively similar to React and easy.

 I think for starters having built-in global state management and page routing is huge. In React, there are couple of choices like redux or context for global state management, however most react developers try to avoid having to deal with global state if they can. Similarly, there is react-router and reach-router for React and possible other packages for routing that I am unfamiliar with. I personally like reach-router, its pretty easy to work with, however the fact that Nuxt does routing for you automatically in the pages directory is a huge plus. I enjoyed learning Nuxt and I am happy to keep working with it. I think for these two reasons alone makes Nuxt a really great choice for web developers looking for simple solutions to two problems as well as a driving force behind Vue's growing popularity.  

 Things I did in this project that helped me learn about the different features of Nuxt:

  - I figured out how to build a custom component (ResultItem.vue) and pass props to it
  - I learned how to use global state in Nuxt when I was figuring out how to pass data from my layout (default.vue) to a page (index.vue). The file searchResults.js in the Store directory made this possible.
  - I played around with built in routing by keeping in a template page (inspire.vue) when I used `npx create-nuxt-app`, if you decide to run the site the page is still reachable with http://localhost:3000/inspire. It definitely inspired me ;) 
  - I found a module @nuxtjs/proxy that helped me get around a same-origin CORS issue trying to reach my API endpoint on my localhost backend, that I configured this in the nuxt.config.js

  #### UI/UX

  I modeled the frontend using, IMBD, TMDB, and Google search result pages as reference for designing the general layout for the site. I when initially created the boilerplate I installed a material component library called Vuetify.js be able to streamline the design while maintaining professional UI/UX standards using a design language, materuial, familiar to many potiential users. A few things I really like about Vuetify is that it works very easily out of the box, with great documentation online. One thing I don't like is how every component in the library is prepended with `v-`. When I saw this at first, I had a hard time distinguishing what was coming from vuetify and what were built-in features from Vue such as `v-for`, `v-bind`, `v-model`, etc. Maybe thats just me being a rookie. I think the library still needs some work on some of their components however, I think it has the makings to be just as great as React's material-UI(I love it).

  ### Backend

