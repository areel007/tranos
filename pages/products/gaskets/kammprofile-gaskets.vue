<template>
  <main  class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/gaskets')"
            style="line-height: 1"
          >
            Gaskets
          </span>
        </div>
      </div>
      <img
        src="/assets/images/gasket-banner-rev.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto font-normal">
        <span
          class="cursor-pointer"
          @click="$router.push('/products/gaskets/spiral-wound-gaskets')"
        >
          Spiral Wound Gaskets
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/gaskets/soft-cut-gaskets')"
        >
          Soft-Cut Gaskets
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/gaskets/kammprofile-gaskets')"
        >
          Kammprofile Gaskets
        </span>
      </div>
    </div>

    <div class="mt-10">
      <div class="gaskets-title container mx-auto mb-10">
        <h1 class="text-18 md:text-24 font-bold">Kammprofile Gaskets</h1>
      </div>

      <div class="gaskets-banner">
        <div class="mb-5 md:mb-10 h-full bg-primary">
          <img src="/assets/images/kammprofile-big.jpg" class="w-full h-full" alt="tranos">
        </div>
      </div>

      <div class="container">
        <p class="text-16 md:text-22 mb-2 md:mb-5" style="line-height: 30px; font-weight: 200">
          Our Kammprofile gaskets consist of a solid metal ring with grooved faces and a soft facing
          material on the grooved faces to improve sealability. When the gasket is compressed, the
          serrated faces create concentric rings of high stress, enhancing the sealing capabilities of the
          gasket.
        </p>
      </div>
    </div>

    <div class="py-5 mt-10 font-light text-14 md:text-16" style="background: #F3F3F0; line-height: 30px">
      <div class="container grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <span class="font-bold">Solid Metal Ring</span>
          <p>Stainless steel 304</p>
          <p>Stainless steel 316L</p>
          <p>Other materials are available on request</p>
        </div>

        <div>
          <span class="font-bold">Filler Materials</span>
          <p>Flexible Graphite</p>
          <p>PTFE</p>
          <p>Mica</p>
          <p>Other materials are available on request</p>
        </div>
      </div>
    </div>

    <div class="py-5 font-light" style="line-height: 30px">
      <div class="container grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="text-14 md:text-16">
          <span class="font-bold">Applications</span>
          <p>Our Kammprofile gaskets are suitable for the following applications:</p>
          <ul class="list-disc ml-5 mb-5">
            <li>High Pressure/Temperature Applications</li>
            <li>Pipeline Systems and Heat Exchangers</li>
            <li>Steam System Application</li>
            <li>Petrochemical and Chemical Applications</li>
            <li>Power Plants</li>
            <li>Other Equipment</li>
          </ul>
        </div>

        <div>
          <span class="font-bold block mb-2">Key Advantages</span>
          <ul class="list-disc ml-5 mb-5">
            <li>Suitable for a high temperature and pressure applications</li>
            <li>Soft facing material prevents damage to the flange</li>
            <li>Undamaged metal core can be reused. Soft facing material only can be replaced to reduce maintenance costs</li>
            <li>They offer a flexible seal due to their complete stability</li>
            <li>They are resistant to hazardous chemicals</li>
          </ul>
        </div>

      </div>

      <div class="mb-10">
        <div class="container">
          <span class="font-bold block mb-2">Gasket Types</span>

          <div class="grid__grid">
            <div class="w-full">
              <div class="w-full mb-2 border border-gray-400">
                <img src="/assets/images/KPG1.jpg" class="h-full w-full object-contain" alt="">
              </div>
              <span class="leading-4 block">Gasket with Core and Facing material Only</span>
            </div>

            <div class="w-full">
              <div class="w-full mb-2 border border-gray-400">
                <img src="/assets/images/KPG2.jpg" class="h-full w-full object-contain" alt="">
              </div>
              <span class="leading-4 block">Gasket with Core, Facing material and Loose outer Ring</span>
            </div>

            <div class="w-full">
              <div class="w-full mb-2 border border-gray-400">
                <img src="/assets/images/KPG3.jpg" class="h-full w-full object-contain" alt="">
              </div>
              <span class="leading-4 block">Gasket with Core, Facing material and Integral Outer Ring</span>
            </div>

          </div>
        </div>
      </div>


      <div>
        <div class="my-10 container">
          <p class="text-14 leading-5">For further enquiries:<br>Call +234 1 271 7120 or send us an email <span class="bg-primary text-white p-1 rounded">info@tranos.ng</span></p>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "kammprofile-gaskets",
  head: {
    title: 'Gaskets'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
}
.gaskets-title h1 {
  position: relative;
  font-size: 30px;
  font-weight: 700;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.gaskets-banner {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto 40px auto;
}

.grid__grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width: 1200px) {
  .grid__grid {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 16px;
  }
}
@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gaskets-banner {
    margin: 0 auto 10px auto;
  }
}
@media screen and (max-width: 400px) {
  .grid__grid {
    grid-template-columns: 1fr;
  }
}
</style>
