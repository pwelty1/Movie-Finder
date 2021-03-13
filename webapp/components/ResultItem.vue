<template>
    <v-card
        elevation="6"
        class="card"
        dense
    >
        <v-img
            class="img"
            min-height="100%"
            max-width="40%"
            v-if="resultInfo.poster_image_url !== null"
            v-bind:src="resultInfo.poster_image_url"
        ></v-img>
        <v-img
            class="img"
            min-height="100%"
            max-width="40%"
            v-if="resultInfo.poster_image_url === null"
            src="https://www.svgrepo.com/show/93632/movie.svg"
        ></v-img>
        <div class="infoContainer"> 
            <v-card-title class="cardTitle">
                {{ resultInfo.title }}
            </v-card-title>
            <v-card-subtitle> 
                ID: {{ resultInfo.movie_id }} 
            </v-card-subtitle>
                <v-progress-circular
                    :rotate="-90"
                    :size="180"
                    :width="15"
                    :value="((parseInt(resultInfo.popularity_summary.split(' ')[0]) 
                    / parseInt(resultInfo.popularity_summary.split(' ')[3]))*100)"
                    color="primary"
                    class="progress"
                    align-content="center"
                >
                    {{ resultInfo.popularity_summary }}
                </v-progress-circular>
        </div>

    </v-card>
</template>

<style>
    .card {
        display: flex;
        margin-bottom: 2.5%;
        margin-top: 2.5%;
        margin-right: auto;
        margin-left:auto;
        height: 95%;
        width: 90%;

    }

    .cardTitle {
        word-break: normal;
    }

    .infoContainer{
        padding-left: 5%;
        padding-bottom: 2%;
    }

    .img{
        margin-left: 0%;
    }
</style>

<script>
export default {
    props: ['resultInfo']

}
</script>