<template>
  <div class="relative bg-white py-10 md:py-60px">
    <span class="text-center text-primary font-medium text-16 md:text-22 block client-title">Our Partners</span>
    <div class="container mx-auto">

      <!-- Add the v-if directive to conditionally render the carousel -->
      <carousel
        v-if="partners"
      :autoplay="true"
      :nav="false"
      :items="7"
      :dots="false"
      :margin="10"
      :autoplayHoverPause="true"
      :responsive="{0: {items: 3, nav: false}, 600:{items:4, nav:false}, 1000:{items:5, nav:false}, 1200: {items: 7, nav: false}, 1920: {items: 7, nav: false}}"
      >
      <div
        class="sponsor-card"
        v-for="(partner, index) in partners"
        :key="index"
      >
        <img :src="partner.partner" alt="tranos sponsors">
      </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import carousel from 'vue-owl-carousel'

export default {
  name: "clients",
  components: { carousel },
  data() {
    return {
      sponsors: [
        'dkc.jpg',
        'schneider.jpg',
        'simon.jpg',
        'ellis.jpg',
        'siemens.jpg',
        'soga.jpg',
        'warom.jpg',
        'toyota.jpg',
        'yanmar.jpg',
      ],
      partners: null
    }
  },
  methods: {
    async getPartners () {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/home/partner');
        this.partners = response.data.partners;
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    }
  },
  mounted() {
    this.getPartners();
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.sponsor-card {
  width: 100%;
  height: 100%;
  padding: .5rem;
}
img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
.client-title {
  white-space: nowrap;
  width: min-content;
  margin: 0 auto 20px auto;
}

@media screen and (max-width: 600px) {
  .sponsor-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
