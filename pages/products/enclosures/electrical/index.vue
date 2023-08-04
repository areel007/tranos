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
      <div class="container py-3 mx-auto font-normal">
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/enclosures/electrical')"
        >
          Electrical
        </span>
        |
        <span
          class="cursor-pointer"
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
        <h1 class="text-18 md:text-24">Electrical Enclosures</h1>
      </div>

      <div class="electrical-enclosures-banner">
        <div class="mb-5 md:mb-10">
          <img src="/assets/images/ELECTRICAL-ENCLOSURE__banner.jpg" class="w-full" alt="tranos">
        </div>
      </div>

      <div class="electrical-enclosures-text__wrapper text-14 md:text-16" style="line-height: 30px">
        <p class="text-18 md:text-22 mb-4 font-light text-black" style="line-height: 30px; font-weight: 200">
          These enclosures are deployed specifically for housing and protecting electrical
          components, devices, and other electrical equipment
        </p>

        <p class="text-14 md:text-16 mb-4 font-light" style="">
          Our standard electrical enclosure solutions are designed and fabricated using only the best grade steel, and as a
          quality-driven steel fabrication company, our enclosures are versatile and highly adaptable, offering a vast range of
          sizes and various accessories to cater to your specific needs, whether as electrical enclosures or as industrial
          enclosures.
        </p>

        <p class="text-14 md:text-16 mb-4 font-light" style="">
          Designed, tested, and compliant with the highest industry operating standards, our enclosures are equipped with
          control systems that maintain temperatures within the specified operating range of internally mounted equipment.
          Each enclosure offers flexible thermal management solutions based on open and/or closed-loop design to enable
          convenient matching to load and environmental factors.
        </p>

        <p class="text-14 md:text-16 mb-4 font-light" style="">
          We design and build the following types of electrical enclosures:
        </p>

        <ul class="text-14 md:text-16 font-light" style="list-style: disc; margin-left: 20px; line-height: 30px">
          <li>Wall Mounted Enclosures</li>
          <li>Free Standing Enclosures</li>
          <li>Flush-mounted Enclosures</li>
        </ul>
      </div>

      <div style="background: whitesmoke;" class="py-5 md:py-10">
        <div class="grid__grid">
          <div class="grid__grid-text pr-0 md:pr-10">
            <p class="text-18 md:text-20 font-bold mb-4">Wall-Mounted Enclosures</p>
            <p class="text-14 md:text-16 font-light pr-0 md:pr-5">
              The wall-mounted enclosures are specifically
              designed to protect your electrical and electronic
              components from harsh environmental impact. We
              provide different material options - Aluminium,
              Stainless Steel, Powder Coated, and Mild Steel. They
              come in various designs for outdoor and indoor
              applications.
            </p>

<!--            Download Brochure-->
            <div class="my-10">
              <a href="https://drive.google.com/file/d/1gxGdDi8opMiyl4KOeXpbOklA7XKAdaVj/view?usp=sharing" target="_blank">
                <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
              </a>
              <p class="text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
            </div>

          </div>

          <div class="grid__grid-image w-full h-full image-div">
            <img src="/assets/images/wall-mounted.jpg" class="w-full" alt="tranos">
          </div>
        </div>
      </div>

      <div class="py-5 md:py-10">
        <div class="grid__grid grid__grid-reverse">
          <div class="grid__grid-image w-full h-full image-div">
            <img src="/assets/images/free-standing.jpg" class="w-full" alt="tranos">
          </div>

          <div class="grid__grid-text">
            <p class="text-18 md:text-20 font-bold mb-4 pl-0 md:pl-10">Free Standing Enclosures</p>
            <p class="text-14 md:text-16 font-light pl-0 md:pl-10">
              Our free-standing enclosures are designed to meet
              International Electrotechnical Commission Standards
              (IEC). They provide protection of IP55 and internal
              segregation ranging from form 1 to form 4.
            </p>

            <p class="text-14 md:text-16 font-light pl-0 md:pl-10">
              These enclosures come in different heights, widths,
              and depths to meet your various needs. They are
              suitable for use in diverse industries including Oil and
              Gas, Manufacturing, Building, Healthcare, Energy, etc.
            </p>

<!--            Download Brochure-->
            <div class="my-10 pl-0 md:pl-10">
              <a href="https://drive.google.com/file/d/17q555X5-MUZUaReZ7QwZ6J3GlI7bAs1g/view?usp=sharing" target="_blank">
                <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
              </a>
              <p class="text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
            </div>
          </div>
        </div>
      </div>

      <div style="background: whitesmoke;" class="py-5 md:py-10">
        <div class="grid__grid">
          <div class="grid__grid-text pr-0 md:pr-10">
            <p class="text-18 md:text-20 font-bold mb-4">Flush-mounted Enclosures</p>
            <p class="text-14 md:text-16 font-light pr-0 md:pr-5">
              Our Flush-mounted enclosures are ideal for fitting
              inside the wall to house electrical controls, terminals,
              and instruments. These enclosures are durable and easy to install.
              They come in various sizes (Heights and widths) for indoor
              applications and are designed according to the IEC & NEMA
              Standards, with an Ingress Protection of IP 55 and Impact protection
              of IK 10.
            </p>
          </div>

          <div class="grid__grid-image w-full h-full image-div">
            <img src="/assets/images/flush-mounted.jpg" class="w-full" alt="tranos">
          </div>
        </div>

      </div>

<!--      Download Brochure-->


    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  head: {
    title: 'Enclosures'
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
  /*font-size: 30px;*/
  font-weight: 700;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.grid__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
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
  .grid__grid-reverse .grid__grid-text {
    grid-row: 1/2;
  }

}
</style>
