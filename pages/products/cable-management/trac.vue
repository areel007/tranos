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
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/cable-management')"
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
          class="cursor-pointer"
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

    <div class="container mx-auto mt-5 md:mt-10 mb-2 md:mb-5">
      <img src="/assets/images/trac.svg" alt="tranos trac" width="200">
    </div>

    <div class="container mx-auto">
      <nav class="uppercase mb-5 md:mb-10 text-12 md:text-14 py-1 w-full flex flex-wrap justify-start">
        <a href="#cable-trays" class="w-auto whitespace-nowrap border-r-0 md:border-r border-black pr-0 md:pr-3 mr-3 md:mr-0">Cable trays</a>
        <a href="#ladders" class="w-auto border-r-0 md:border-r border-black text-center px-0 md:px-3 mr-3 md:mr-0">Ladders</a>
        <a href="#supports" class="w-auto border-r-0 md:border-r border-black text-center px-0 md:px-3 mr-3 md:mr-0">Supports</a>
        <a href="#fasteners" class="w-auto border-r-0 md:border-r border-black text-center px-0 md:px-3 mr-3 md:mr-0">Fasteners</a>
        <a href="#accessories" class="w-auto text-center pl-0 md:pl-3">Accessories</a>
      </nav>
    </div>

    <div id="cable-tray" class="container mx-auto grid__grid pb-5 md:pb-10 border-b-none md:border-b border-black mb-0 md:mb-10">
      <div class="text-14 md:text-16 font-light" style="line-height: 1.5">
        <span class="text-16 md:text-20 font-bold mb-2 md:mb-5 block">Cable trays</span>
        <p class="mb-3 md:mb-5">
          Our Cable Trays are specially designed for use in a wide
          range of settings. They are fabricated from quality mild
          steel and stainless-steel materials to meet your cable
          routing needs.
        </p>
        <p class="mb-3 md:mb-5">
          These products are available in various size options,
          ranging from 70 to 600 millimeters in width and load
          depth of 50 to 100 millimeters.
        </p>
        <p>
          Tranos' Trays are easy to install and requires low
          maintenance.
        </p>
      </div>

      <div class="w-full image-div">
        <img src="/assets/images/trays.jpg" class="w-full" alt="tranos">
      </div>
    </div>

    <div id="ladders" class="container mx-auto reverse-grid__grid pb-5 md:pb-10 border-b-none md:border-b border-black mb-0 md:mb-10">

      <div class="w-full image-div">
        <img src="/assets/images/ladder.jpg" class="w-full" alt="tranos">
      </div>

      <div class="reverse-grid__grid-text text-14 md:text-16 font-light" style="line-height: 1.5">
        <span class="text-16 md:text-20 font-bold mb-2 md:mb-5 block">Cable ladders</span>
        <p class="mb-3 md:mb-5">
          Our Cable Ladders are specially designed for medium
          and heavy-duty cable loads, fabricated from high-
          grade mild steel and Stainless Steel. They are available
          in different size options ranging from 200 to 900
          millimeters in width and load depth of 100 to 150
          millimeters.
        </p>
        <p class="mb-3 md:mb-5 font-bold">
          Tranos' Ladders:
        </p>
        <ul  class="mb-3 md:mb-5" style="list-style: decimal; margin-left: 20px">
          <li>Come with easy and ready to install accessories.</li>
          <li>Require low maintenance.</li>
          <li>Customizable size options.</li>
        </ul>

      </div>
    </div>

    <div id="fasteners" class="container mx-auto grid__grid pb-5 md:pb-10 border-b-none md:border-b border-black mb-0 md:mb-10">
      <div  class="text-14 md:text-16 font-light" style="line-height: 1.5">
        <span class="text-16 md:text-20 font-bold mb-2 md:mb-5 block">Cable fittings</span>
        <p class="mb-3 md:mb-5">
          Our Cable Tray fittings are available in different
          configurations adapted to suit your routing needs, such
          as plane, vertical and adjustable fittings which are
          available in various angles, widths, and cable loading
          depths.
        </p>
      </div>

      <div class="w-full image-div">
        <img src="/assets/images/fittings.jpg" class="w-full" alt="tranos">
      </div>
    </div>

    <div id="accessories" class="container mx-auto reverse-grid__grid pb-5 md:pb-10 mb-0 md:mb-10">

      <div class="w-full image-div">
        <img src="/assets/images/accessories.jpg" class="w-full" alt="tranos">
      </div>

      <div class="reverse-grid__grid-text text-14 md:text-16 font-light" style="line-height: 1.5">
        <span class="text-16 md:text-20 font-bold mb-2 md:mb-5 block">Accessories and fasteners</span>
        <p class="mb-3 md:mb-5">
          We have designed accessories to be used for other supplementary functions while routing cables,
          these functions include flexible angle change, cable separation, mounting and supporting during
          installation etc.
        </p>
        <p class="mb-3 md:mb-5">
          These accessories are suitable for use in a wide range of environmental conditions
          and suitable for various applications
        </p>
        <p class="mb-1">
          Our range of accessories include but are not limited to:
        </p>
        <ul class="ml-5 list-disc">
          <li>Adjustable Couplers</li>
          <li>Hold Down Clamps</li>
          <li>End Blind Plates</li>
          <li>Cantilever Supports</li>
          <li>Rubber Isolation Pads</li>
          <li>Cover Holding Clips</li>
          <li>Reducer Couplers etc.</li>
        </ul>

      </div>

    </div>

<!--    Download Brochure-->
    <div class="w-95% lg:w-1000px mx-auto mb-10">
      <a href="https://drive.google.com/file/d/1hMzijfocVxMEfasK7ttNKd20dMdKQyZP/view?usp=sharing" target="_blank">
        <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
      </a>
      <p class="text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
    </div>


  </div>
</template>

<script>
export default {
  name: "trac",
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
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.reverse-grid__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
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
    gap: 20px;
  }
  .reverse-grid__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .reverse-grid__grid-text {
    grid-row: 1/2;
  }
}
</style>
