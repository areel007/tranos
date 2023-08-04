<template>
  <div class="carousel absolute top-0 left-0 w-full h-full">
    <Slide
      v-for="(slide, index) in slides"
      :key="index"
      :slide="slide"
      :current-slide="currentSlide"
      :index="index"
      :light-text-one="lightTextOne"
      :light-text-two="lightTextTwo"
      :bold-text="boldText"
      :small-text="smallText"
    />
  </div>
</template>

<script>
import Slide from '@/components/sections/carousel/landing-page-carousel/slide'
export default {
  name: "carousel",
  props: ['slides', 'currentSlide', 'getSlideCount', 'lightTextOne', 'lightTextTwo', 'boldText', 'smallText'],
  components: {Slide},
}
</script>

<style scoped>

</style>
