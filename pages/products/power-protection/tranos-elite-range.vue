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
            Low-voltage Power Protection & Distribution
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
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/power-protection/tranos-elite-range')"
        >
          Tranos Elite
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/power-protection/siemens-sivacon')"
        >
          Siemens SIVACON S8
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/power-protection/atex-power-panel')"
        >
          ATEX Power Panels
        </span>
      </div>
    </div>

    <div class="pt-7 md:pt-20">

      <div class="mb-3 md:mb-8 container mx-auto">
        <img src="../../../static/assets/images/tranos-elite-svg.svg" class="w-280" alt="tranos">
        <span class="text-14 md:text-16">LOW-VOLTAGE ELECTRIC PANELS AND SWITCHGEAR</span>
      </div>

      <div class="container mx-auto w-full h-auto landscape">
        <img src="../../../static/assets/images/tranos-elite1.jpg" alt="SIVACON S8">
      </div>

      <div class="w-95% lg:w-1000px mx-auto my-10">
        <h1 class="text-20 md:text-28 text-gray-700 mb-2 md:mb-6 font-normal">Optimum Control & Protection</h1>
        <p class="text-16 md:text-22 mb-4 font-light text-black" style="line-height: 1.3; font-weight: 200">
          The TranosElite panels/switchboards are designed according to IEC 61439 and manufactured using the highest
          quality components from switchgear component manufacturers like Siemens, Schneider Electric and ABB. All
          manufacturing processes are according to ISO 9001:2015 quality system. All panels are produced using the
          latest design software and manufacturing equipment and processes.
        </p>
      </div>

      <div class="w-95% lg:w-1000px mx-auto my-10 tranos-elite-grid font-light text-14 md:text-16">
        <div>
          <p class="mb-1">
            Some features of the TranosElite panels include:
          </p>
          <ul class="tranos-elite-list mb-3 md:mb-5">
            <li>Panel enclosure degree of protection IP 45-65</li>
            <li>Forms 1, 2, 3A, 3B, 4A and 4B available</li>
            <li>Steel enclosure is powder-coated for corrosion prevention and aesthetic appeal.</li>
            <li>Busbar design in accordance with DIN-43670.</li>
          </ul>
          <div class="mb-0 md:mb-5">
            <h3 class="mb-1 font-bold">Panel Types:</h3>
            <ul class="mb-3 md:mb-5 list-disc ml-5" style="line-height: 1.5">
              <li>Power Control Centres (PCC)</li>
              <li>Motor Control Centres</li>
              <li>Main Distribution Boards</li>
              <li>Sub-main Distribution Boards</li>
              <li>PLC Control Panels</li>
              <li>Automatic Mains Failure (AMF) Panels</li>
              <li>Synchronization Panels</li>
            </ul>
          </div>

        </div>

        <div class="tranos-elite-image-grid">
          <div class="landscape w-full h-auto">
            <img src="../../../static/assets/images/tranos-elite-grid1.jpg" alt="tranos elite" class="w-full h-auto">
          </div>
        </div>

      </div>

      <div class="w-95% lg:w-1000px mx-auto mb-10">
        <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view?usp=sharing" target="_blank">
          <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
        </a>
        <p class="w-full md:w-300 text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "tranos-elite-range",
  head: {
    title: 'Tranos Elite Range'
  },
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.tranos-elite-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 40px;
}
.tranos-elite-list {
  list-style: disc;
  margin-left: 20px;
}
.tranos-elite-image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto auto;
  gap: 20px;
}
.landscape {
  grid-column: span 2;
  overflow: hidden;
}
.landscape img {
  transition: transform .5s ease-in-out;
}
.landscape:hover img {
  transform: scale(1.1);
}
@media screen and (max-width: 1024px) {
  .tranos-elite-grid {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .tranos-elite-image-grid {
    grid-template-columns: 1fr;
  }
  .landscape {
    grid-column: span 1;
  }
}
</style>
