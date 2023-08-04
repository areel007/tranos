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
        <span class="cursor-pointer" @click="$router.push('/products/power-protection/siemens-simoprime')">Siemens SIMOPRIME</span>
        |
        <span class="cursor-pointer font-bold text-primary" @click="$router.push('/products/power-protection/siemens-simosec')">Siemens SIMOSEC</span>
      </div>
    </div>

    <div class="pt-7 md:pt-20">

      <div class="container mx-auto w-full mb-5 md:mb-20">
        <img src="../../../static/assets/images/SIMOSEC1.jpg" alt="Siemens simosec">
      </div>

      <div class="w-95% lg:w-900 mx-auto siemens-simoprime-grid mb-5 md:mb-20">
        <div class="w-full image-col">
          <img src="../../../static/assets/images/simosec2.jpg" alt="siemens simosec">
        </div>
        <div class="text-col">
          <h1 class="font-normal text-20 md:text-28 mb-5 md:mb-10">Siemens <span class="font-bold">SIMOSEC</span></h1>
          <h2 class="text-20 md:text-22 text-black mb-3 md:mb-5" style="line-height: 1.3; font-weight: 200;">
            Air-insulated medium-voltage
            switchgear for secondary
            distribution.
          </h2>
          <p class="text-14 md:text-16 font-normal" style="line-height: 1.5">
            The SIMOSEC switchgear is a factory-assembled,
            type-tested, three-phase, metal-enclosed, indoor
            switchgear according to IEC 6271-200 and GB
            3906 for single busbars.
          </p>
          <div class="hide-btn mt-20">
            <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view?usp=sharing" target="_blank">
              <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
            </a>
            <p class="text-12 md:text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
          </div>
        </div>

        <div class="show-btn mt-10">
          <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view?usp=sharing" target="_blank">
            <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
          </a>
          <p class="text-16 md:text-18" style="line-height: 1.5">Download our catalogues and brochures to find all the information you need</p>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "siemens-simosec"
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.siemens-simoprime-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
}
.show-btn {
  display: none;
}
.image-col {
  overflow: hidden;
}
.image-col img {
  transition: transform .5s ease-in-out;
}
.image-col:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .siemens-simoprime-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .show-btn {
    display: block;
  }
  .hide-btn {
    display: none;
  }
  .image-col {
    grid-row: 2/3;
    grid-column: 1/-1;
  }
  .text-col {
    grid-row: 1/2;
    grid-column: 1/-1;
  }
}
</style>
