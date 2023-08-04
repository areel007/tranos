<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <img src="../static/assets/images/case-study-banner-renew.jpg" alt="tranos" class="w-full h-full object-cover">
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/power-generation/')"
            style="line-height: 1"
          >
            Case Studies
          </span>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-20 pb-14 border-b border-gray-400">

      <h2 class="text-center text-18 md:text-28 font-medium text-primary mb-10">Delivering value-adding engineering solutions</h2>

      <div class="flex gap-4 justify-start sm:justify-center items-center text-14 relative">

        <span>Industry</span>

        <div class="relative h-auto group selected__category">

          <div class="flex gap-2 items-center py-2 px-4 shadow rounded-md cursor-pointer selected__category__category">

            <span class="text-primary">{{ selected }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          </div>

          <div class="rounded-md p-8 shadow bg-white hidden categories">
            <div class="p-2 cursor-pointer text-primary" @click="selectCategory($event)">
              <NuxtLink to="/projects/all-categories">All Categories</NuxtLink>
            </div>
            <div class="p-2 cursor-pointer hover:text-primary" @click="selectCategory($event)">
              <NuxtLink to="/projects/power-and-energy">Power & Energy</NuxtLink>
            </div>
            <div class="p-2 cursor-pointer hover:text-primary" @click="selectCategory($event)">
              <NuxtLink to="/projects/oil-and-gas">Oil & Gas</NuxtLink>
            </div>
            <div class="p-2 cursor-pointer hover:text-primary" @click="selectCategory($event)">
              <NuxtLink to="/projects/aviation">Aviation</NuxtLink>
            </div>
            <div class="p-2 cursor-pointer hover:text-primary" @click="selectCategory($event)">
              <NuxtLink to="/projects/industrial-and-manufacturing">Industrial & Manufacturing</NuxtLink>
            </div>
            <div class="p-2 cursor-pointer hover:text-primary" @click="selectCategory($event)">
              <NuxtLink to="/projects/telecomms">Telecommunications</NuxtLink>
            </div>
          </div>

        </div>
      </div>


    </div>

    <NuxtChild />

    <div class="py-10 text-center">
      <h1 class="text-22 md:text-28 text-primary font-light mb-2">Ready to start your project?</h1>
      <p class="text-14 font-light"><Span class="font-medium">Contact us</Span> to find out more about our solutions</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "about",
  head: {
    title: 'Project Case Studies'
  },
  data () {
    return {
      selected: 'All Categories'
    }
  },
  methods: {
    selectCategory(e) {
      this.selected = e.target.innerText
    }
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.selected__category:hover .categories {
  display: block;
}

.categories {
  position: absolute;
  top: 0;
  left: 0;
  width: min-content;
  white-space: nowrap;
  z-index: 20;
}
</style>
