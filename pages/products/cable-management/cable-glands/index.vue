<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/cable-management')"
            style="line-height: 1"
          >
            Cable Management & Support System
          </span>
        </div>
      </div>

      <img
        src="/assets/images/cable-inner-banner.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="cursor-pointer"
          @click="$router.push('/products/cable-management/trac')"
        >
          Trans TRAC
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/cable-management/eris/')"
        >
          Tranos ERIS
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/cable-management/ellis')"
        >
          Cable Clamp & Cleats
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/cable-management/cable-glands')"
        >
          Cable Glands
        </span>
      </div>
    </div>

    <div class="container mx-auto h-100 flex items-center">
      <span class="text-20 md:text-28 font-semibold">Cable Glands</span>
    </div>

    <div class="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
      <div v-for="(cable, index) in cables" :key="index" class="cursor-pointer cable" @click="$router.push(cable.cableUrl)">
        <img :src="require(`/static/assets/images/${cable.cableImage}`)" class="" alt="tranos">
        <span class="text-center text-14 md:text-18 block leading-5 font-light">{{ cable.cableName }}</span>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "cable-glands",
  head: {
    title: 'Cable Management & Support System'
  },
  data() {
    return {
      cables: [
        {
          cableImage: 'IP54-Nickel-plated-brass-glands.png',
          cableName: 'Nickel plated brass Cable glands IP54',
          cableUrl: '/products/cable-management/cable-glands/ip54'
        },
        {
          cableImage: 'IP68-Nickel-plated-brass-glands.png',
          cableName: 'Nickel plated brass Cable glands IP68',
          cableUrl: '/products/cable-management/cable-glands/ip68'
        },
        {
          cableImage: 'AISI-303-Cable-glands.png',
          cableName: 'Stainless Steel Cable glands AISI 303',
          cableUrl: '/products/cable-management/cable-glands/aisi-303'
        },
        {
          cableImage: 'AISI-316L-Cable-glands.png',
          cableName: 'Stainless Steel Cable glands AISI 316L',
          cableUrl: '/products/cable-management/cable-glands/aisi-316L'

        },
        {
          cableImage: 'Polyamide-Cable-glands.png',
          cableName: 'Polyamide Cable glands (Also available with complete Locknut)',
          cableUrl: '/products/cable-management/cable-glands/polyamide'
        },
        {
          cableImage: 'Explosion-proof-Cable-Glands.png',
          cableName: 'ATEX (Explosion Proof) Cable Glands' ,
          cableUrl: '/products/cable-management/cable-glands'
        },
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.cable {
  overflow: hidden;
}
.cable img {
  transition: transform .5s ease-in-out;
}
.cable:hover img {
  transform: scale(1.1);
}
</style>
