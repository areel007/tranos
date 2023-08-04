<template>
  <div class="py-10 md:py-60px bg-wSmoke">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="text-16 md:text-18">
        <h1 class="text-18 md:text-24 capitalize text-primary font-medium mb-5">Why choose us</h1>
        <p class="text-14 md:text-base font-light leading-6 md:leading-8">
          {{
            why || `Customer satisfaction is very central to our quality management system.From the deployment of high
            precision CNC machines and the engagement of competent personnel to the institution of standard
            errorproof processes, we guarantee the quality of our products and services.Our Quality Management System is certified to meet the requirements of the ISO 9001:2015 standard.`
          }}
        </p>
      </div>
      <div class="w-full">
        <video
          v-if="videoUrl===''"
          class="w-full"
          src="../../static/assets/videos/tranos-video.mp4"
          muted
          loop
          autoplay
          controls
        >
        </video>
<!--Test video-->
        <video
          v-else
          class="w-full"
          :src="videoUrl"
          muted
          loop
          autoplay
          controls
        >
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "why",
  data() {
    return {
      why: '',
      videoUrl: ''
    }
  },
  methods: {
    async getWhy() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/home/why/64c23d875c6b6656118c2f79')
        this.why = response.data.why.why
      } catch (e) {
        console.error(e)
      }
    },

    async getVideo() {
      const response = await axios.get('http://localhost:5000/api/v1/home-video/64c9a65865af74e9f9308241')
      this.videoUrl = response.data.video.video
    }
  },

  mounted() {
    this.getWhy()
    this.getVideo()
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
h1 {
  position: relative;
  /*font-size: 30px;*/
  font-weight: 700;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}

@media screen and (max-width: 768px) {
  h1 {
    /*font-size: 24px;*/
  }
}
</style>
