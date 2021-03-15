# Movie-Lookup

built with

<div align="left">
  <div style="display: flex;">
    <img height="40" src="/webapp/static/v.png" style="vertical-align: top;" />
    <img height="40" src="https://nuxtjs.org/logos/nuxt-emoji@2x.png" />
    <img height="40" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />
    <img height="40" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" />
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

  I modeled the frontend using, IMBD, TMDB, and Google search result pages as reference for designing the general layout for the site. I when initially created the boilerplate I installed a material component library called Vuetify.js be able to streamline the design while maintaining professional UI/UX standards using a design language, materuial, familiar to many potiential users. A few things I really like about Vuetify is that it works very easily out of the box, with great documentation online. It also has great mobile breakpoints that dynamically work with `v-bind` in a component's props for sizing. One thing I don't like is how every component in the library is prepended with `v-`. When I saw this at first, I had a hard time distinguishing what was coming from vuetify and what were built-in features from Vue such as `v-for`, `v-bind`, `v-model`, etc. Maybe thats just me being a rookie. I think the library still needs some work on some of their components however, I think it has the makings to be just as great as React's material-UI(I love it).

  ### Backend

  I built the backend using `npx express-generator` to give a scaffolding for the backend. I am pretty familiar with Node.js and I built out a RESTful API for my frontend to access even though there is currently one endpoint. I reused a template I have used in past projects to get up and running quickly. Here is a link to swagger doc, documenting the API `/movies`endpoint I created:

  https://app.swaggerhub.com/apis/weltypeter/Movie-Finder/1.0.0

  I also created unit tests to give full coverage of the `/movies` endpoint using mocha, a testing framework, and chai, a package allowing that simplifies assertions. I have used Jest in the past to create tests for my react applications. Mocha is nice and simple, for a first time user like me. However, I could not get axios to play nice with mocha, but ended up using an npm package called request that worked fine.

  ## Potiential Future Features

  - build a home page similar to Google's with just a search bar
  - route result pages like Google does with includeing the search query in the address bar
  - make use of the pagination on the `search/movies` endpoint from TMDB's API and display 20 results for a page and create a feature to click on the next page as a query in the addressbar, similar to clicking the next page on Google search results. 
  - create an "I'm Feeling Lucky" feature that uses the `/movies/discover` endpoint from TMDB's API and choose a random page from the results to route to.
  - create a formatted single page to route to that displays more information about a single movie when clicking on a search result. This would correspond to using `/movies/:id` endpoint from TMDB's API.

  ## Screenshots of the Webapp Running

  Currently when the app starts up it displays a searchbar in the appbar of the app and a Results list with `None`. However,begin typing in a movie into the search bar and press enter or the mangifying glass to begin a search.

  <div align="left">
  <div style="display: flex;">
    <img height="100" src="/screenshots/noResultsDesktop.png"  />
    <img height="100" src="/screenshots/ResultsDesktop.png"  />
    <img height="100" src="/screenshots/noResultsMobile.png"  />
    <img height="100" src="/screenshots/ResultsMobile.png"  />
  </div>
</div>

