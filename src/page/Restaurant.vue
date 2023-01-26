 <template>
  <div class="main">
    <div class="restaurant--shop">
      <h1>
        {{ restaurant.name}}
      </h1>
     <div class="img">
        <img :src="restaurant.image " alt="restaurant_image">
     </div>
      <div class="paragraph">
        <p>{{ restaurant.drive_time }}</p>
        <p>
          <span>
            {{ restaurant.note }}
          </span>
        </p>
      </div>

      <div class="description">
        <p>

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sunt velit distinctio eius. A delectus magnam, magni sapiente, harum earum quasi eligendi architecto quod quos repudiandae animi esse in quidem. A delectus magnam, magni sapiente, harum earum quasi eligendi architecto quod quos repudiandae animi esse in quidem.
        </p>
      </div>
      <RouterLink :to= "{ name: 'home' }"> 
        <button class="back">Retour</button>
      </RouterLink>
    </div>
  </div>




 </template>
 
 <script>

import { info } from '../BDD'
import { useRoute } from 'vue-router'

 export default {
  name: 'Restaurant',
    setup (){

      const route = useRoute();
      const restaurant = info.find( (restaurant)=> restaurant.name === route.params.name)
       

  
      return {
        restaurant
      }
      
     
    }
}
 </script>
 
 <style scoped lang="scss">
 .main{
  display: flex;
  justify-content: center;
  align-items: center;


  .restaurant--shop  {

    text-align: center;
    box-shadow: -2px 2px 2px black;
    padding: 20px 50px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.247);

    .img{
      width: 300px;
      height: 200px;

      img{
        width: 100%;
        height: 100%;
        border-bottom-right-radius: 50px ;
        border-top-left-radius: 50px ;
      }
    }

    .paragraph{
      display: flex;
      justify-content: space-between;

      p{
        font-size: large;

        span{
          background-color: orange;
          padding: 10px;
          border-radius: 50px;
          color: white;
        }
      }
    }

    .description{
      width: 300px;
      margin: 0 auto;
      p{
        text-align: justify;
        font-size: 16px;
        line-height: 1.5;
      }
    }
    
  }

  .back{
    padding: 0.5rem 2rem;
    background-color: orange;
    border: none;
    border-radius: 50px;
    color: white;
    text-align: right;
    box-shadow: -2px 2px 2px black;

    &:hover{
      background-color: darkorange;
    }
  }
 }


 </style>