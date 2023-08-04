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
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/cable-management/ellis')"
        >
          Cable Clamp & Cleats
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/cable-management/cable-glands')"
        >
          Cable Glands
        </span>
      </div>
    </div>

    <div class="container mx-auto my-5 md:my-10">
      <img
        src="/assets/images/ellis-logo.png"
        alt="tranos eris"
        class="w-100px md:w-200"
      >
    </div>

    <div class="container mx-auto">
      <span class="font-bold text-18 md:text-24 mb-3 md:mb-5 block">Cable Clamps and Cleats</span>
    </div>

    <div class="container mx-auto mb-10 md:mb-20 grid__grid">
      <div class="text-14 md:text-16 font-light" style="line-height: 30px;">
        <p class="text-16 md:text-22 mb-4" style="line-height: 30px; font-weight: 200">
          We offer cable cleats and clamps to securely fasten
          cable to the tray/ladder and prevent damage that
          might occur in situations of short circuiting in electrical
          systems.
        </p>
        <p class="mb-3 md:mb-5">
          Our Cable Guide clamp has been designed,
          developed, tested, and manufactured following IEC
          61914 (cable cleats for electrical installations). The
          Cable Guide Clamp is a unique combination of cable
          guide and cable clamp. Designed to be installed along
          the cable route in place of rollers, the cable is pushed
          and pulled through the guide to its final location.
        </p>
        <p>
          The Cable Guide Clamp's fully gimballed mounting
          and slippery nylon construction ensure that friction is
          minimized.
        </p>
      </div>
      <div class="w-full h-full image-div">
        <img src="/assets/images/ellis_main.jpg" class="w-full" alt="tranos">
      </div>
    </div>

    <div class="container mx-auto mb-20 grid__grid-4">
      <div class="">
        <div class="inner-image__box image-div">
          <img src="/assets/images/alpha.jpg" class="w-full h-full" alt="tranos">
        </div>
<!--        <p class="text-14 md:text-16 mb-3 font-light" style="line-height: 1.5">-->
<!--          For technical information and-->
<!--          specifications on the product line-->
<!--          click below.-->
<!--        </p>-->
<!--        <button class="py-1 px-4 bg-primary text-white text-12 rounded">Learn More ></button>-->
      </div>
      <div class="">
        <div class="inner-image__box image-div">
          <img src="/assets/images/vulcan.jpg" class="w-full h-full" alt="tranos">
        </div>
<!--        <p class="text-14 md:text-16 mb-3 font-light" style="line-height: 1.5">-->
<!--          For technical information and-->
<!--          specifications on the product line-->
<!--          click below.-->
<!--        </p>-->
<!--        <button class="py-1 px-4 bg-primary text-white text-12 rounded">Learn More ></button>-->
      </div>
      <div class="">
        <div class="inner-image__box image-div">
          <img src="/assets/images/two-holes-plastic.jpg" class="w-full h-full object-center" alt="tranos">
        </div>
<!--        <p class="text-14 md:text-16 mb-3 font-light" style="line-height: 1.5">-->
<!--          For technical information and-->
<!--          specifications on the product line-->
<!--          click below.-->
<!--        </p>-->
<!--        <button class="py-1 px-4 bg-primary text-white text-12 rounded">Learn More ></button>-->
      </div>
      <div class="">
        <div class="inner-image__box image-div">
          <img src="/assets/images/trident.jpg" class="w-full h-full object-center" alt="tranos">
        </div>
<!--        <p class="text-14 md:text-16 mb-3 font-light" style="line-height: 1.5">-->
<!--          For technical information and-->
<!--          specifications on the product line-->
<!--          click below.-->
<!--        </p>-->
<!--        <button class="py-1 px-4 bg-primary text-white text-12 rounded">Learn More ></button>-->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ellis",
  head: {
    title: 'Cable Management & Support System'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.grid__grid {
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: auto;
  gap: 20px;
}
.grid__grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 260px);
  justify-content: space-between;
  gap: 10px;
}
.inner-image__box {
  height: 260px;
  width: auto;
  background: black;
  margin-bottom: 20px;
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

@media screen and (max-width: 1100px) {
  .grid__grid-4 {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
}
@media screen and (max-width: 1000px) {
  .grid__grid-4 {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
  }
  .grid__grid-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .inner-image__box {
    height: auto;
  }
}
@media screen and (max-width: 550px) {
  .grid__grid-4 {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
