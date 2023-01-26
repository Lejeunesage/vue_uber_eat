<template>
    <div class="restaurant--card">
        <div :style="changeBackground" class="restaurant--image">

        </div>
        <div class="restaurant--information">
            <div class="top">
                <p class="name">
                    {{info_restaurant.name}}
                </p>
                <p class="note">
                   
                    <span>{{info_restaurant.note}}</span>
                </p>
            </div>
            <p class="time">
                {{info_restaurant.drive_time}}
            </p>

        </div>

    </div>
</template>

<script>
//IMPORT
import { computed } from "vue";
// import { setgroups } from 'process';
// import { log } from 'console';


export default {
  name:"RestaurantCard",
  props:{
    info_restaurant: Object,
  },
  setup(props){

    const changeBackground = computed(() =>{
        return{
            backgroundImage: `url(${props.info_restaurant.image})`
        }
    })

    //return
    return{
        changeBackground
    }

  }
    
}
</script>

<style scoped lang="scss">
.restaurant--card{
    width: 100%;
    height: 30vh;
    box-shadow: 0 0 10px black;
    padding: 1rem;
    transition: 0.5s;

    &:hover{
        transform: scale(1.02);
        transition: all ease-in-out .5s;
    }

    p{
        margin: 0;
    }

    .restaurant--image{
        background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
        height: 70%;
        background-size: cover;
        background-position: center;
        border-radius: 10px;

    }

    .restaurant--information{
        .top{
            margin: 10px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .note{
                background-color:  #ff8000;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 30px;
                width: 40px;
                font-style: 0.8rem;
                border-radius: 50%;
            }
        }
        .name{
            color: black;
            font-size: 2rem;
        }
        .time{
            font-size: 1rem;
            color: black;
        }
    }
}
</style>