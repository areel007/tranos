<template>
  <div class="relative w-screen h-300 md:h-70vh py-10">
    <Carousel
      :slides="slides"
      :current-slide="currentSlide"
      :get-slide-count="getSlideCount"
      :light-text-one="lightTextOne"
      :light-text-two="lightTextTwo"
      :bold-text="boldText"
      :small-text="smallText"
    />
  </div>
</template>

<script>
import Carousel from '@/components/sections/carousel/landing-page-carousel/carousel'
import Slide from '@/components/sections/carousel/landing-page-carousel/slide'
import axios from "axios";
export default {
  name: "hero",
  components: {Carousel, Slide},
  data() {
    return {
      slides: [
        'https://res.cloudinary.com/dkqhcmwne/image/upload/v1691103494/tranos/HOME_ilds3j.jpg',
        'https://res.cloudinary.com/dkqhcmwne/image/upload/v1691103494/tranos/HOME_ilds3j.jpg',
        'https://res.cloudinary.com/dkqhcmwne/image/upload/v1691103494/tranos/HOME_ilds3j.jpg'
      ],
      lightTextOne: null,
      lightTextTwo: null,
      boldText: null,
      smallText: null,
      currentSlide: 1,
      getSlideCount: null,
      heroImageOne: '',
      heroImageTwo: '',
      heroImageThree: '',
    }
  },
  methods: {
    nextSlide () {
      if (this.currentSlide === this.getSlideCount) {
        this.currentSlide = 1;
      } else {
        this.currentSlide += 1
      }
    },
    async getHeroText () {
      const heroText = await axios.get('https://tranos-api.onrender.com/api/v1/home/hero/64bfce9fa3ee1adc516458e5')
      this.lightTextOne = heroText.data.heroText.lightTextOne
      this.lightTextTwo = heroText.data.heroText.lightTextTwo
      this.boldText = heroText.data.heroText.boldText
      this.smallText = heroText.data.heroText.smallText
    },
    async getHeroImageOne() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/hero-image-one/64cb84dc391680547e0167b8')

        this.heroImageOne = response.data.heroImageOne.heroImageUrl
      } catch (e) {
        console.error(e)
      }
    },
    async getHeroImageTwo() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/hero-image-two/64cc002a7c41c16aaf81c0b8')

        this.heroImageTwo = response.data.heroImageTwo.heroImageTwoUrl
      } catch (e) {
        console.error(e)
      }
    },
    async getHeroImageThree() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/hero-image-three/64cc003a7c41c16aaf81c0ba')

        this.heroImageThree = response.data.heroImageThree.heroImageThreeUrl
      } catch (e) {
        console.error(e)
      }
    },
  },

  async mounted() {
    try {
      // Fetch hero text and set the properties
      await this.getHeroText();

      // Fetch hero images
      await this.getHeroImageOne();
      await this.getHeroImageTwo();
      await this.getHeroImageThree();

      // Populate the slides array with the image URLs in the correct order
      this.slides = [
        this.heroImageOne,
        this.heroImageTwo,
        this.heroImageThree,
      ];

      // Set the slide count and start the carousel interval
      this.getSlideCount = document.querySelectorAll('.slide').length;
      setInterval(this.nextSlide, 5000);
    } catch (error) {
      console.error(error);
    }
  },
  async created() {
    // const response = await axios.get('https://tranos-api.onrender.com/api/v1/home/hero')
    // const { data } = response.data
    // this.lightTextOne = data[0].lightTextOne
    // this.lightTextTwo = data[0].lightTextTwo
    // this.boldText = data[0].boldText
    // this.smallText = data[0].smallText
  },

}
</script>
