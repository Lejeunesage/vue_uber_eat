<template>
  
<div class="restaurant--row">
    
    <div class="wrapper--card">

        <RouterLink class="row--link" v-for="(restaurant, index) in three_restaurant" :key="index"   :to="{ name: 'restaurant-show', params: { name: restaurant.name}}">
            <RestaurantCard :info_restaurant="restaurant"  :three_restaurant="data"/>
        </RouterLink>
       
    </div>
</div>
  
</template>

<script >
import RestaurantCard from "./RestaurantCard.vue";

    export default {
        name: "RestaurantRow",
        components:{
            RestaurantCard,
        },
        props:{
            three_restaurant: Array
        }
    }
</script>

<style scoped lang="scss">
    .restaurant--row{
        margin-block: 5rem ;
      

       .title{
            font-size: 2rem;
        }
        .wrapper--card{
            display: flex;
            align-items: center;
            justify-content: space-around;
            
            .row--link{
                // display: flex;
                width: 30%;
                text-decoration: none;


            }
        }
    }

</style>