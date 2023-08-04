<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/power-protection')"
            style="line-height: 1"
          >
            Medium-voltage Switchgear
          </span>
        </div>
      </div>
      <img
        src="../../../static/assets/images/LV-Panel-Banner.jpg"
        alt="tranos power distribution"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span class="cursor-pointer font-bold text-primary" @click="$router.push('/products/power-protection/siemens-simoprime')">Siemens SIMOPRIME</span> | <span class="cursor-pointer" @click="$router.push('/products/power-protection/siemens-simosec')">Siemens SIMOSEC</span>
      </div>
    </div>

    <div class="pt-7 md:pt-20">

      <div class="container mx-auto w-full">
        <img src="../../../static/assets/images/simoprime1.jpg" alt="SIVACON S8">
      </div>

      <div class="w-95% lg:w-900 mx-auto mt-10 md:mt-20 mb-10 md:mb-20">
        <h1 class="font-normal text-20 md:text-28 mb-3 md:mb-5">Siemens <span class="font-bold">SIMOPRIME</span></h1>
        <div class="siemens-simoprime-grid">
          <p class="text-16 md:text-22 font-light text-black" style="line-height: 1.3; font-weight: 200;">
            Modular switchboard SIMOPRIME with circuit breaker
            switchgear is a factory-built, which passed the test
            model and is designed for indoor installation in areas
            of distribution substations in accordance with
            standards IEC 62 271 -200, VDE 0670, Part 6 and GOST
            14693-90. SIMOPRIME is based on an air insulated
            medium-voltage switchgear technology featuring a
            modular design.
          </p>
          <div class="w-full image-div">
            <img src="../../../static/assets/images/simoprime2.jpg" alt="simoprime">
          </div>
        </div>
      </div>

      <div class="w-95% lg:w-900 mx-auto mb-10 md:mb-20">
        <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view?usp=sharing" target="_blank">
          <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
        </a>
        <p class="text-12 md:text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
      </div>

    </div>

    </div>
</template>

<script>
export default {
  name: "siemens-simoprime",
  head: {
    title: 'Siemens SIMOPRIME'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.siemens-simoprime-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
}
.image-div {
  overflow: hidden;
}
.image-div img {
  transition: transform .5s ease-in-out;
}
.image-div:hover img {
  transform: scale(1.05);
}

@media screen and (max-width: 768px) {
  .siemens-simoprime-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
