<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase cursor-pointer"
            @click="$router.push('/products/lighting-and-wiring-devices')"
            style="line-height: 1"
          >
            Lights & Wiring Devices
          </span>
        </div>
      </div>
      <img
        src="/assets/images/LIGHTS-AND-SWITCHES.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting')"
        >
          Lighting
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets')"
        >
          Switches & Sockets
        </span>
      </div>
    </div>


    <div class="mt-5 mb-10">
      <div
        class="container mx-auto lighting-product-card"
        @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting/duro')"
      >
        <img
          src="/assets/images/duro-image.jpg"
          alt="duro"
          class="w-full h-full"
        >
      </div>
      <div
        class="container mx-auto lighting-product-card"
        @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting/valor')"
      >
        <img
          src="/assets/images/valor-image.jpg"
          alt="duro"
          class="w-full h-full"
        >
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
</style>
