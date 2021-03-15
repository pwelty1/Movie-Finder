<template>
    <v-card
        elevation="6"
        class="card"
        dense
    >
        <v-img
            class="img"
            v-if="resultInfo.poster_image_url !== null"
            v-bind:src="resultInfo.poster_image_url"
        ></v-img>
        <v-img
            class="img"
            v-if="resultInfo.poster_image_url === null"
            src="https://www.svgrepo.com/show/93632/movie.svg"
        ></v-img>
        <div class="infoContainer"> 
            <v-card-title class="cardTitle">
                {{ resultInfo.title }}
            </v-card-title>
            <v-card-subtitle class="cardSubtitle"> 
                ID: {{ resultInfo.movie_id }}
            </v-card-subtitle>
                <v-progress-circular
                    :rotate="-90"
                    :size="$vuetify.breakpoint.xs ? 110 : 140 "
                    :width="11"
                    :value="((parseInt(resultInfo.popularity_summary.split(' ')[0]) 
                    / parseInt(resultInfo.popularity_summary.split(' ')[3]))*100)"
                    color="primary"
                    align-content="center"
                >
                    <h4 class="popText">{{ resultInfo.popularity_summary }}</h4>
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

    .infoContainer{
        padding-left: 5%;
        padding-bottom: 2%;
    }

    .img{
        margin-left: 0%;
        max-height: 30%;
        max-width: 30%;
    }

    .popText{
        font-size: 70%;
    }

    @media(max-width: 600px){

        .card{
            width: 100%; 
        }
        .img{
            margin-left: 0%;
            max-height: 60%;
            max-width: 40%;
        }

        .cardTitle{
            font-size: 70%;
            word-break: normal
        }

        .cardSubtitle{
            font-size: 60%;
        }

        .popText{
            font-size: 50%;
        }
    }
</style>

<script>
export default {

    props: ['resultInfo']

}
</script>