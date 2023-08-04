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
          class="font-bold cursor-pointer text-primary"
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
        <h1 class="text-18 md:text-24 font-bold" style="line-height: 30px">Servers & Datacenter Racks</h1>
      </div>

      <div class="electrical-enclosures-banner container mx-auto mb-5 md:mb-10">
        <div class="w-full h-full">
          <img src="/assets/images/datacentre-banner.jpg" alt="tranos">
        </div>
      </div>

      <div class="electrical-enclosures-text__wrapper">
        <p class="text-16 md:text-22 mb-4 text-black" style="line-height: 30px; font-weight: 200">
          These enclosures are designed to house data and telecommunication equipment indoors and
          outdoors. They provide protection from rain, sunlight, physical damage and theft/vandalization.
        </p>

        <p class="text-14 md:text-16 mb-4 font-light" style="line-height: 30px">
          Data Centers centralize an organization’s shared IT operations and equipment for the purposes of storing,
          processing, disseminating data and applications. As they house an organization’s most critical and proprietary
          assets, data centers are vital to the continuity of daily operations. The valuable information stored within requires
          the most durable enclosures that allow for proper airflow and cable organisation.
        </p>

        <p class="text-14 md:text-16 mb-4 font-light" style="line-height: 30px">
          We offer standard and customized data enclosures for IT equipment such as servers, switches, routers, UPS
          systems, A/V equipment and more.
        </p>

      </div>

      <div style="background: whitesmoke; padding: 60px 0">
        <div class="grid__grid items-start">
          <div class="grid__grid-text pr-0 md:pr-10">

            <div class="mb-10">
              <p class="text-18 md:text-20 font-bold mb-4 title__title relative">CUSTOMISED I.T ENCLOSURES</p>
              <p class="text-14 md:text-16 pr-0 md:pr-5 font-light">
                We design and build customized enclosures for data
                centers in line with the client’s specifications. Our data
                cabinets are designed for maximum performance,
                convenience, flexibility and safety in high density IT room
                environments. They are easy to install and to maintain.
              </p>
            </div>

            <div>
              <p class="text-18 md:text-20 font-bold mb-4 title__title relative">STANDARD I.T ENCLOSURES</p>
              <p class="text-14 md:text-16 pr-0 md:pr-5 font-light">
                We manufacture standard data enclosures for IT
                equipment such as servers, switches, routers, UPS
                systems, A/V equipment and more. Our data enclosures
                allow for proper airflow and cable organisation.
              </p>
            </div>
          </div>

          <div class="grid__grid-image w-full h-full image-div">
            <img src="/assets/images/custom-IT.jpg" class="w-full" alt="tranos">
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  head: {
    title: 'Servers and Datacenter Racks'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.electrical-enclosures-text__wrapper {
  width: 900px;
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: flex-start;
  gap: 0;
  width: 900px;
  max-width: 95%;
  margin: 0 auto;
}
.title__title:after {
  position: absolute;
  content: '';
  width: 70px;
  height: 2px;
  background: #afafaf;
  left: 0;
  top: 101%;
}
.grid__grid-image {
  height: 500px;
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
