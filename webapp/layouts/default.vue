<template>
  <v-app>

    <v-app-bar
      fixed
      app
      elevate-on-scroll
    >
      <v-toolbar-title class="title"  v-text="title"/> 
      <v-text-field 
        v-model="search" 
        append-icon="mdi-magnify"
        solo 
        dense
        rounded
        clearable
        hide-details
        label="Search"
        class="searchBar"
        @click:append="getResults(search)"
        @keydown.enter="getResults(search)"
        >
      </v-text-field>
      <v-spacer />
    </v-app-bar>
    
    <v-main>
      <v-container class="container">
        <nuxt searchResults="results"/>
      </v-container>
    </v-main>

    <v-footer
      fixed
      app
    >
      <div class="footNote">
        Data Sourced From: 
        <v-img
          class="imgF"
          max-height= "5%"
          max-width="15%"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        >
        </v-img>
      </div>
    </v-footer>
  </v-app>
</template>

<style>
  .title{
    margin-right: 19%;
  }

  .imgF{
    margin-left: 2%;
  }

  .footNote{
    display: flex;
    margin-left: 87%;
  }


  .container {
    margin-right: 23%;
    margin-left: 23%;
  }
</style>

<script>
import axios from "axios"

export default {
  data: () => ({
    fixed: false,
    isResult: false,
    title: 'Movie Finder',
    search: "",
  }),

  methods: {
    async getResults (search) {
      const url = "http://localhost:3000/api/movies?search="
      const {data} = await axios.get(url + search.replace(/ /g, "+"))
      this.$store.commit('searchResults/set', data)
    }
  }

}
</script>
