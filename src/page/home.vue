<template>
  <div class="home">
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="Logo-UberEAT"  srcset="">
        <div class="wrapper--input">
            <input v-model="user_search_restaurant" type="text"  placeholder="De quoi vous avez envie?">

            <div class="search">
                <div  v-for="(restaurant, index) in search_restaurant" :key="index" class="container--restaurant--search">
                    <!-- <router-link :to="'/restaurant/'+ restaurant.name"> -->
                    <router-link class="restaurant--link" :to="{ name: 'restaurant-show', params: { name: restaurant.name}}">
                            <div class="wrapper--img">
                                <img :src="restaurant.image" alt="" srcset="">
                            </div>
                            <p>{{ restaurant.name }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="bannier"></div>
    <RestaurantRow v-for="(data, index) in data_restaurant" :key="index" :three_restaurant="data"/>

 
   
</div>
</template>

<script>

//IMPORT
import RestaurantRow from "../components/RestaurantRow.vue";
import { info } from "../BDD.js";
import { onMounted, ref, watch } from "vue";
// import { count } from "console";

//COMPONENTS
export default {
    name: "HomePage",
    components:{
        RestaurantRow,
    },
    setup(){
      
         class Restaurant{
            constructor (name, note, image, drive_time) {
                this.name = name;
                this.note = note;
                this.image = image;
                this.drive_time = drive_time;
            }

        }
            let data_restaurant = ref([]);
            let all_restaurant =  [];
            
            const makeDataRestaurant = () => {
                
                let three_restaurant = [];

                for (const restaurant of info) {
                    const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time, );

                    // make all restaurnt array

                    all_restaurant.push(new_restaurant);

                    if (three_restaurant.length === 2) {
                        three_restaurant.push(new_restaurant);
                        data_restaurant.value.push(three_restaurant);
                        three_restaurant = [];
                    }else{
                        three_restaurant.push(new_restaurant);
                    }
                }
            }

            //User search restaurant
            let user_search_restaurant = ref('');
            let search_restaurant = ref([]);

            watch(user_search_restaurant, new_value =>{
                let regex = RegExp(new_value.toLocaleLowerCase().trim());
                let new_search_restaurant = all_restaurant.filter(
                    restaurant => regex.test(restaurant.name.toLocaleLowerCase())
                );

                let search = document.querySelector('.search');

                if (new_value == 0) {
                    search.style.display = "none";
                }else{
                    search.style.display = "block";
                }
            
                //S'il n'y a rien dans le champs renvoie un tableau vide donc n'affiche rien si non affiche l'élément correspandant à la valeur saisie dans le champs.

                new_value == 0 ?  search_restaurant.value =[] : search_restaurant.value = new_search_restaurant;
            })

            onMounted(makeDataRestaurant);
            //return
            return{
                data_restaurant,
                user_search_restaurant,
                search_restaurant,
            }
    }


}
</script>

<style lang="scss" scoped>


.home{

    .header{
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 200px;
        }

        .wrapper--input{
            position: relative;
        

            input{
                background-color: #f6f6f6;
                border: none;
                height: 40px;
                width: 300px;
                outline: none;
                padding-left: 15px;

            }

            .search{
                position:absolute;
                top: 100%;
                width: 100%;
                height: 400px;
                background-color: #ffffff;
                box-shadow: 0 0 2px black;
                overflow-y: scroll;
                display: none;

            
                .container--restaurant--search{
                  

                    .restaurant--link{
                        display: flex;
                        align-items: center;
                        padding: 10px;
                       
                        text-decoration: none;

                        &:hover{
                            background: #f6f6f6;
                        }
    
                        .wrapper--img{
                            height: 50px;
                            width: 50px;
                            margin-right: 25px;
                            border-radius: 50%;
                            overflow: hidden;
    
                            img{
                                height: 100%;
                                width: auto;
                            }
                        }
                    }

                }


            }
        }
        
    }

    .bannier{
        height: 180px;
        width: 100%;
        background-image: url(../assets/Eats_Desktop.svg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
       
    }
}
</style>