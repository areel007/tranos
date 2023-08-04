<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/enclosures')"
            style="line-height: 1"
          >
            Enclosures
          </span>
        </div>
      </div>
      <img
        src="/assets/images/enclosures-banner.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/electrical')"
        >
          Electrical
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/enclosures/mechanical')"
        >
          Mechanical
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/servers-and-datacenter-racks')"
        >
          Servers & Datacenter Racks
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/battery-cabinets-and-racks')"
        >
          Battery Cabinets & Racks
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/heavy-duty')"
        >
          Heavy Duty
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/customised')"
        >
          Customised
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/atex-junction-boxes/')"
        >
          ATEX Junction Boxes
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/meter-boxes')"
        >
          Meter Boxes
        </span>
      </div>
    </div>

    <div class="mt-10">

      <div class="enclosures-title container mx-auto mb-10">
        <h1 class="text-18 md:text-24 font-bold" style="line-height: 30px">Mechanical Enclosures</h1>
      </div>

      <div class="container mx-auto mb-5 md:mb-10">
        <div class="w-full">
          <img src="/assets/images/mechanical-banner.jpg" class="w-full" alt="tranos">
        </div>
      </div>

      <div class="electrical-enclosures-text__wrapper">
        <p class="text-16 md:text-22 mb-4 font-light text-black" style="line-height: 30px; font-weight: 200">
          These enclosures designed and built for use in mechanical applications, providing
          protection from rain, sunlight and physical damages and theft or vandalization. Enclosures
          are also available with features for sound attenuation especially for rotating equipment.
        </p>

      </div>

      <div style="background: whitesmoke;" class="py-5 md:py-10">
        <div class="grid__grid">
          <div class="grid__grid-text">

            <div class="mb-10">
              <p class="text-18 md:text-20 font-bold mb-4 title__title relative">Sound-proof Enclosures</p>
              <p class="text-14 md:text-16 font-light" style="line-height: 30px">
                Our sound-proof enclosures are aesthetically
                designed to attenuate sound to a set standard
                requirement of 70-75 decibels for generators.
                They also protect the equipment/engine
                against harsh weather conditions.
              </p>
            </div>
          </div>

          <div class="grid__grid-image w-full h-full image-div">
            <img src="/assets/images/soundproof-generator.png" class="w-full" alt="tranos">
          </div>
        </div>
      </div>

      <div class="py-5 md:py-10">
        <div class="grid__grid">

          <div class="grid__grid-image w-full h-full reverse-grid image-div">
            <img src="/assets/images/protective-enclosure.jpg" class="w-full" alt="tranos">
          </div>

          <div class="grid__grid-text pr-0 md:pr-10">

            <div>
              <p class="text-18 md:text-20 font-bold mb-4 title__title relative pl-0 md:pl-10 pr-0 md:pr-10">Protective Enclosures</p>
              <p class="text-14 md:text-16 font-light pl-0 md:pl-10 pr-0 md:pr-10" style="line-height: 30px">
                Our protective mechanical enclosures are
                designed and built to provide physical protection
                for a wide range of mechanical equipment. These
                enclosures are designed and built to customer specifications.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  head: {
    title: 'Mechanical Enclosures'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.electrical-enclosures-banner {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto 40px auto;
}
.electrical-enclosures-text__wrapper {
  width: 900px;
  max-width: 95%;
  margin: 0 auto 40px auto;
}
.enclosures-title h1 {
  position: relative;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
}
.grid__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  align-items: flex-start;
  gap: 0;
  width: 900px;
  max-width: 95%;
  margin: 0 auto;
}
.image-div {
  overflow: hidden;
}
.image-div img {
  transition: transform .5s ease-in-out;
}
.image-div:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    align-items: flex-start;
  }
  .reverse-grid {
    grid-row: 2/3;
  }
}
</style>
