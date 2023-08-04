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
          class="cursor-pointer"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting')"
        >
          Lighting
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets')"
        >
          Switches & Sockets
        </span>
      </div>
    </div>

    <div class="my-10 container mx-auto">
      <div class="switches-and-sockets__grid">
        <div class="simon-v8 card" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets/simon-v8')">
          <img src="/assets/images/simonV8.jpg" alt="simon v8">
        </div>
        <div class="card" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets/simon-e6')">
          <img src="/assets/images/simon-E6.png" alt="simon e6">
        </div>
        <div class="card" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets/simon-e3')">
          <img src="/assets/images/simon-E3.png" alt="simon e3">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  head: {
    title: 'Lighting & Wiring Devices'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.switches-and-sockets__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.card {
  cursor: pointer;
}
.card img {
  width: 100%;
  object-fit: cover;
}
.simon-v8 {
  grid-column: 1/ span 2;
}
</style>
