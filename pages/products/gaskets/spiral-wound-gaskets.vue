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
          class="font-bold cursor-pointer text-primary"
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
          class="cursor-pointer"
          @click="$router.push('/products/gaskets/kammprofile-gaskets')"
        >
          Kammprofile Gaskets
        </span>
      </div>
    </div>

    <div class="mt-10">
      <div class="gaskets-title container mx-auto mb-10">
        <h1 class="text-18 md:text-24 font-bold">Spiral Wound Gaskets</h1>
      </div>

      <div class="gaskets-banner zoom-image-card ">
        <div class="h-full">
          <img src="/assets/images/spiral-banner.jpg" class="w-full h-full" alt="tranos">
        </div>
      </div>

      <div class="container">
        <p class="text-16 md:text-22 mb-2 md:mb-5 font-light" style="line-height: 30px; font-weight: 200">
          Our spiral wound gaskets are produced by winding metallic strips with soft non-metallic filler
          material. The metal windings provide strength and resilience, while the non-metallic filler portion
          conforms to the irregularities of the flanges aiding in the joint seal. Due to this combination of
          materials the spiral wound gasket is suitable for sealing under severely fluctuating temperature
          and pressure conditions. Depending on the application the spiral wound gasket can be specified
          with outer and/or inner rings.
        </p>
        <p class="text-14 md:text-16 mb-2 font-light" style="line-height: 30px">
          Our spiral wound gaskets have been successfully type-tested in accordance with the following
          codes:
        </p>
        <ul class="text-14 md:text-16 list-disc ml-5 font-light">
          <li>ASME B16.20</li>
          <li>MESC 85/300</li>
          <li>API 6FB Fire Tested (Flexible Graphite)</li>
        </ul>
      </div>
    </div>

    <div class="py-5 mt-10" style="background: #F3F3F0">
      <div class="container grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div class="font-light" style="line-height: 30px">
          <span class="font-bold">Metallic Strip Materials</span>
          <p>Stainless steel 304</p>
          <p>Stainless steel 316L</p>
          <p>Other materials are available on request</p>
        </div>

        <div class="font-light" style="line-height: 30px">
          <span class="font-bold">Filler Materials</span>
          <p>Flexible Graphite</p>
          <p>PTFE</p>
          <p>Mica</p>
          <p>Other materials are available on request</p>
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container font-light" style="line-height: 30px">
        <span class="font-bold">Applications</span>
        <ul class="list-disc ml-5 mb-5">
          <li>High Pressure/Temperature</li>
          <li>Flanges (ASME/ANSI)</li>
          <li>Heat Exchangers</li>
          <li>Steam System Application</li>
          <li>Other Equipment</li>
        </ul>

        <div>
          <span class="font-bold block mb-2">Spiral Wound Gasket Types</span>

          <div class="grid__grid">
            <div class="w-full">
              <div class="h-270px w-full mb-2 border border-gray-400 zoom-image-card">
                <img src="/assets/images/SWG1.jpg" class="w-full h-full object-contain" alt="">
              </div>
              <span class="leading-4 block">Gasket without Inner Ring and Outer Ring</span>
            </div>

            <div class="w-full">
              <div class="h-270px w-full mb-2 border border-gray-400 zoom-image-card">
                <img src="/assets/images/SWG2.jpg" class="w-full h-full object-contain" alt="">
              </div>
              <span class="leading-4 block">Gasket with Inner Ring only</span>
            </div>

            <div class="w-full">
              <div class="h-270px w-full mb-2 border border-gray-400 zoom-image-card">
                <img src="/assets/images/SWG3.jpg" class="w-full h-full object-contain" alt="">
              </div>
              <span class="leading-4 block">Gasket with Outer Ring only</span>
            </div>

            <div class="w-full">
              <div class="h-270px w-full mb-2 border border-gray-400 zoom-image-card">
                <img src="/assets/images/SWG4.jpg" class="w-full h-full object-contain" alt="">
              </div>
              <span class="leading-4 block">Gasket with Inner Ring and Outer Ring</span>
            </div>
          </div>
        </div>

        <div class="my-10">
          <p class="text-14 leading-5">For further enquiries:<br>Call +234 1 271 7120 or send us an email <span class="bg-primary text-white p-1 rounded">sales@tranos.ng</span></p>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "spiral-wound-gaskets",
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
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(4, 270px);
}
.zoom-image-card {
  overflow: hidden;
}
.zoom-image-card img {
  transition: transform .5s ease-in-out;
}
.zoom-image-card:hover img {
  transform: scale(1.1);
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
