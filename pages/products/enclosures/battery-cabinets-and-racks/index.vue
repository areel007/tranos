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
          class="font-bold cursor-pointer text-primary"
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

    <div class="my-10">

      <div class="enclosures-title container mx-auto mb-10">
        <h1 class="text-18 md:text-24 font-bold" style="line-height: 30px;">Battery Cabinets & Racks</h1>
      </div>

      <div class="container mx-auto mb-5 md:mb-10">
        <div class="w-full">
          <img src="/assets/images/battery-banner.jpg" class="w-full" alt="tranos">
        </div>
      </div>

      <div class="mb-10">
        <div class="grid__grid">
          <div class="grid__text" style="line-height: 30px">
            <p class="text-16 md:text-22 mb-4 text-black" style="line-height: 30px; font-weight: 200">
              With more than a decade-long experience in the
              design and manufacturing of electrical enclosures,
              our standard battery cabinets are specially built to
              suit your applications.
            </p>
            <p class="mb-5 text-14 md:text-16 font-light">
              They are built with high-strength steel materials, designed for
              indoor and outdoor applications, manufactured with high precision,
              and furnished with textured finished powder. We have off-the-shelf
              standard products, and we can also customize the cabinets to suit
              your unique requirements.
            </p>
            <p class="text-14 md:text-16 font-light">
              All Tranos' encase products are built following the NEMA and IEC
              standards, dedicated to protecting your electrical systems.
            </p>

          </div>
          <div class="grid__image w-full h-full image-div">
            <img src="/assets/images/battery-cabinet-2.jpg" class="w-full" alt="tranos">
          </div>
        </div>
      </div>

      <div class="last__last image-div">
        <img src="/assets/images/battery-cabinet-3.jpg" class="last-img" alt="tranos">
      </div>

<!--      Download Brochure-->
      <div class="last__last__last mx-auto my-10">
        <a href="https://drive.google.com/file/d/1P6jXQjnm_b6JOzDl5ceCP4EsrTBrmDTd/view?usp=sharing" target="_blank">
          <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
        </a>
        <p class="text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  head: {
    title: 'Battery Cabinets & Racks'
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
.enclosures-title h1 {
  position: relative;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.grid__grid {
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: auto;
  /*align-items: center;*/
  gap: 60px;
  width: 1000px;
  max-width: 95%;
  margin: 0 auto;
}
.last__last {
  width: 1000px;
  max-width: 95%;
  margin: 0 auto;
}
.last__last__last {
  width: 1000px;
  max-width: 95%;
  margin: 40px auto;
}
.last__img > div {
  width: 100%;
  height: 100%;
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
  .last-img {
    width: 100%;
  }
}
</style>
