<template>
  <v-list class="list" >
      <v-subheader><h2>Results</h2></v-subheader>
      <v-subheader v-if="results.length <= 0"><h3>None</h3></v-subheader>
      <v-list-item-group
        v-if="results.length > 0"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in results"
          :key="i"
        >
          <result-item v-bind:resultInfo="item" > </result-item>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</template>

<style>
  .list{
    max-width: 70%;
  }

</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import ResultItem from '../components/ResultItem.vue'


export default {
  components: {
    Logo,
    VuetifyLogo,
    ResultItem
  },

  // data: () => ({
  //     selectedItem: -1,
  // }),

  computed: {
     results() {
      return this.$store.state.searchResults.list
    }
  },


  
}
</script>
