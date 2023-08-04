<template>
  <div class="py-10 md:py-160px bg-primary">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-proj gap-5 lg:gap-10 items-center mb-10">
        <span class="capitalize text-white whitespace-nowrap text-20 font-medium">Recent projects</span>
        <ul class="grid grid-cols-proj-auto text-8 md:text-12 text-white gap-1 md:gap-5">
          <li class="text-center cursor-pointer" @click="getOne">All Projects</li>
          <li class="text-center cursor-pointer" @click="getTwo">Power & Energy</li>
          <li class="text-center cursor-pointer" @click="getThree">Oil & Gas</li>
          <li class="text-center cursor-pointer" @click="getFour">Manufacturing & Industry</li>
          <li class="text-center cursor-pointer" @click="getFive">Residential & Commercial</li>
          <li class="text-center cursor-pointer" @click="getSix">Telecommunications</li>
        </ul>
      </div>
      <div v-if="step===1">
        <carousel
          :autoplay="true"
          :nav="false"
          :items="5"
          :dots="false"
          :margin="10"
          :autoplayHoverPause="true"
          :responsive="{0: {items: 1, nav: false}, 600:{items:2, nav:false}, 1000:{items:3, nav:false}, 1200: {items: 3, nav: false}, 1920: {items: 3, nav: false}}"
        >
          <div
            class="card"
            v-for="(cardDetail, index) in cardDetails"
            :key="index"
          >
            <img :src="require(`../../static/assets/images/${cardDetail.cardImage}`)" alt="tranos">
            <div class="absolute z-20 top-0 flex flex-col justify-center h-full p-5 card-text text-14">
              <h2 class="text-white uppercase mb-5">{{ cardDetail.cardTitle }}</h2>
              <p class="text-white mb-5">{{ cardDetail.cardSubtitle }}</p>
              <button class="bg-primary text-white py-2 px-4 w-min whitespace-nowrap">Read more</button>
            </div>
          </div>
        </carousel>
      </div>
      <div v-if="step===2">
        <carousel
          :autoplay="true"
          :nav="false"
          :items="5"
          :dots="false"
          :margin="10"
          :autoplayHoverPause="true"
          :responsive="{0: {items: 1, nav: false}, 600:{items:2, nav:false}, 1000:{items:3, nav:false}, 1200: {items: 3, nav: false}, 1920: {items: 3, nav: false}}"
        >
          <div
            class="card"
            v-for="(cardDetail, index) in cardDetails"
            :key="index"
          >
            <img :src="require(`../../static/assets/images/${cardDetail.cardImage}`)" alt="tranos">
            <div class="absolute z-20 top-0 flex flex-col justify-center h-full p-5 card-text text-14">
              <h2 class="text-white uppercase mb-5">Step - 2 - {{ cardDetail.cardTitle }}</h2>
              <p class="text-white mb-5">{{ cardDetail.cardSubtitle }}</p>
              <button class="bg-primary text-white py-2 px-4 w-min whitespace-nowrap">Read more</button>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: "projects",
  components: {
    carousel
  },
  data() {
    return {
      step: 1,
      cardDetails: [
        {
          cardImage: 'power.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
        {
          cardImage: 'power.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
        {
          cardImage: 'machine.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
        {
          cardImage: 'machine.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
      ]
    }
  },
  methods: {
    getOne() {
      this.step = 1
    },
    getTwo() {
      this.step = 2
    },
    getThree() {
      this.step = 3
    },
    getFour() {
      this.step = 4
    },
    getFive() {
      this.step = 5
    },
    getSix() {
      this.step = 6
    }
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.card {
  width: 350px;
  height: 350px;
  position: relative;
  cursor: pointer;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card:before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  transition: width .3s ease;
}
.card:hover:before {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}
.card-text {
  display: none;
}
.card:hover .card-text {
  display: flex;
}

@media screen and (max-width: 1200px) {
  .card {
    height: 300px;
    width: 300px;
  }
}

@media screen and (max-width: 850px) {
  .card {
    height: 200px;
    width: 200px;
  }
}

@media screen and (max-width: 600px) {
  .card {
    height: 100%;
    width: 100%;
  }
}
</style>
