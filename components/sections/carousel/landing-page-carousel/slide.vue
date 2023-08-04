<template>
  <div class="absolute top-0 left-0 w-full h-full">
    <transition name="slide">
      <div
        v-show="currentSlide === index + 1"
        class="w-full h-full slide"
      >
        <div class="overlay absolute top-0 left-0 z-10 bg-primary w-full h-full opacity-70"></div>
        <img
          :src="slide"
          class="w-full h-full object-cover absolute top-0 left-0"
          alt="tranos"
        >
        <div class="z-20 relative container mx-auto w-full h-full flex flex-col justify-center">
          <h1 class="text-white mb-2 md:mb-5">
            <span class="text-24 md:text-40 xl:text-60 2xl:text-80 font-light" style="line-height: 1;">
              {{ lightTextOne || 'We are building' }}
              <br>
              {{ lightTextTwo || 'a better world...' }}
              <br>
              <span class="text-30 md:text-40 xl:text-60 2xl:text-80" style="line-height: 1; font-weight: 600">{{ boldText || 'Thinking. Further.' }}</span>
            </span>
          </h1>
<!--          <p class="text-white text-14 md:text-18 w-full md:w-50% mb-2 md:mb-20" style="line-height: 1.2; font-weight: 200">-->
<!--            TRANOS is the engineering and manufacturing leader adding value to lives through innovative solutions...<span class="cursor-pointer" @click="$router.push('/about')">Read more</span>-->
<!--          </p>-->
          <p class="text-white text-14 md:text-18 w-full md:w-50% mb-2 md:mb-20" style="line-height: 1.2; font-weight: 200">
            {{ smallText || 'TRANOS is the engineering and manufacturing leader adding value to lives through innovative solutions' }}...
            <span class="cursor-pointer text-14 font-semibold" @click="$router.push('/about')">Read more</span>
          </p>
          <button
            class="w-min whitespace-nowrap py-2 px-5 bg-primary text-white cursor-pointer hover:text-primary hover:bg-white font-light"
            @click="$router.push('/contacts')"
          >
            Request for Quote
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "slide",
  props: ['currentSlide', 'getSlideCount', 'slide', 'index', 'lightTextOne', 'lightTextTwo', 'boldText', 'smallText'],
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity .7s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
