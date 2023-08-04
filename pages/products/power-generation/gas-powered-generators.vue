<template>
  <div class="relative top-50px md:top-60px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <img src="../../../static/assets/images/generator-&-power-backup-innber-banner.jpg" alt="tranos" class="w-full h-full">
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/power-generation/')"
            style="line-height: 1"
          >
            Power Generation & Backup
          </span>
        </div>
      </div>
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="font-bold cursor-pointer text-primary"
        >
          Gas-Powered Generator
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/power-generation/')"
        >
          UPS Backup System
        </span>
      </div>
    </div>

    <div class="container mx-auto py-10 md:py-60px">

      <h1 class="mb-1 md:mb-3 text-18 md:text-24 font-bold">Gas-Powered Generators</h1>

      <div class="text-black text-14 mb-5 md:mb-10">
        <div class="">
        <span
        >
          TG: 1000
        </span>
          <span style="color: #00BBFF">|</span>
          <span
            class=""
          >
          TG: 1200
        </span>
          <span style="color: #00BBFF">|</span>
          <span class="cursor-pointer"
          >
            TG: 1800
        </span>
          <span style="color: #00BBFF">|</span>
          <span class="cursor-pointer"
          >
            TG: 2000
        </span>
        </div>
      </div>

      <div class="w-full md:w-11/12 text-16 md:text-18 mb-5 md:mb-10" style="line-height: 1.5">

        <p class="mb-3 md:mb-5 text-16 md:text-22 text-black" style="line-height: 30px; font-weight: 200">
          Tranos research, design, and manufacture power systems for critical industries and service sectors. We are also
          the only company in Nigeria with dedicated focus and facility for developing and supporting telecoms power.
        </p>

        <p class="mb-3 md:mb-5 text-14 md:text-16 font-light">
          With over 13 years of experience and proven expertise across a network of distributors, our in-depth understanding of the major
          industries terrain, their service requirements, and operational dynamics position us as a key resource and partner in solving the most
          critical power-related challenges faced by most industrial and services sectors. We have a long list of major global operators who
          already work with us to supply a broad range of high specification engineering solutions.
        </p>

        <p class="text-14 md:text-16 font-light">
          Our generators work at variable speed for high fuel efficiency and are specifically integrated and calibrated to supply uninterrupted
          power to critical infrastructures (e.g telecom towers) even in remote locations.
        </p>

      </div>

      <div class="grid__grid">

      </div>

    </div>

    <div class="container mx-auto mb-5 md:mb-10">
      <img src="/assets/images/thunder-bolt.svg" class="w-80% md:w-4/12" alt="tranos">
    </div>

    <div class="grid__wrapper py-5 md:py-10">
      <div class="container mx-auto grid__grid">
        <div class="w-full image-div">
          <img src="/assets/images/TG1000.png" class="w-full" alt="tranos">
        </div>
        <div>
          <span class="block mb-1 md:mb-2 text-primary font-bold text-20">TG:1000</span>
          <p class="text-14 md:text-16 font-light w-full md:w-9/12" style="line-height: 30px">
            The TG – 1000 is an environmentally friendly Gas generator, rated 7.5kVA, 400VAC
            with improved operating flexibility. The generator runs at a speed of 1500 rpm with
            very low sound and vibrations. It comes with an automatically controlled system that
            monitors the generator operations and safety and provides 99.87% availability and
            reliability performance.
          </p>
        </div>
      </div>
    </div>

    <div class="grid__wrapper-reverse py-5 md:py-10">
      <div class="container mx-auto grid__grid reverse">
        <div>
          <span class="block mb-1 md:mb-2 text-primary font-bold text-20">TG:1200</span>
          <p class="text-14 md:text-16 font-light mb-2 md:mb-3" style="line-height: 30px">
            The TG - 1200 is a 12kVA, 46-54VDC Gas generator. It is a more environmentally
            friendly power solution with very low emissions to the atmosphere.
          </p>
          <p class="text-14 md:text-16 font-light mb-2 md:mb-3" style="line-height: 30px">
            The TG-1200 also comes with an automatically controlled system that monitors
            the generator operations and safety with 99.87% availability and reliability.
            Its operational speed flexibility is from 1500rpm to 2200rpm according to load
            demand and efficient fuel management.
          </p>
          <p class="text-14 md:text-16 font-light" style="line-height: 30px">
            This generator also has low noise and vibration.
          </p>
        </div>
        <div class="w-full image__wrapper image-div">
          <img src="/assets/images/TG1200.png" alt="tranos">
        </div>
      </div>
    </div>

    <div class="grid__wrapper py-5 md:py-10">
      <div class="container mx-auto grid__grid">
        <div class="w-full image-div">
          <img src="/assets/images/TG1800.png" alt="tranos">
        </div>
        <div>
          <span class="block mb-1 md:mb-2 text-primary font-bold text-20">TG:1800</span>
          <p class="text-14 md:text-16 font-light w-full md:w-9/12 mb-2 md:mb-3" style="line-height: 30px">
            The TG - 1800 is an 18kVA, 46-54VDC Gas generator with high fuel efficiency and low speed
            for all load demands. It has an operational speed of 1500rpm with low noise and vibration.
            It is an environmentally friendly solution with very low carbon emissions.
          </p>
        </div>
      </div>
    </div>

    <div class="grid__wrapper-reverse py-5 md:py-10">
      <div class="container mx-auto grid__grid reverse">
        <div>
          <span class="block mb-1 md:mb-2 text-primary font-bold text-20">TG:2000</span>
          <p class="text-14 md:text-16 font-light mb-2 md:mb-3" style="line-height: 30px">
            The TG - 2000 is a 20kVA, 400VAC Gas generator. It is a more environmentally friendly
            power solution with very low emissions to the atmosphere.
          </p>
          <p class="text-14 md:text-16 font-light" style="line-height: 30px">
            It also comes with an automatically controlled system that monitors the generator operations and safety
            with 99.87% availability and reliability. It has an operational speed of 1500rpm with low noise and vibration.
          </p>
        </div>
        <div class="w-full image__wrapper image-div">
          <img src="/assets/images/TG2000.png" alt="tranos">
        </div>
      </div>
    </div>

    <div class="container mx-auto my-10">
      <a href="https://drive.google.com/file/d/1O_Jucy8CjtsvnQH51BwNY6BB2F-hiikD/view?usp=sharing" target="_blank">
        <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
      </a>
      <p class="text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
    </div>

  </div>

</template>

<script>
export default {
  name: "gas-powered-generators",
  head: {
    title: 'Power Generation & Backup'
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
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
h1 {
  position: relative;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.grid__wrapper-reverse {
  background: whitesmoke;
}
.image-div {
  overflow: hidden;
}
.image-div img {
  transition: transform .5s ease-in-out;
}
.image-div:hover img {
  transform: scale(.90);
}

@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
  }
  .image__wrapper {
    grid-row: 1/2;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
