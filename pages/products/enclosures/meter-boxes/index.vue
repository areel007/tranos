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
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/enclosures/meter-boxes')"
        >
          Meter Boxes
        </span>
      </div>
    </div>

    <div class="my-10">

      <div class="enclosures-title container mx-auto mb-10">
        <h1 class="text-18 md:text-24 font-bold">Meter Boxes</h1>
      </div>

      <div class="mb-10">

        <div class="container mx-auto grid__grid mb-10">
          <div class="grid__text">
            <p class="text-20 md:text-22 mb-4 font-semibold text-black" style="line-height: 1.3">
              Quality range of meter mounting
              equipment to meet your needs.
            </p>
<!--            <p class="mb-5 text-20 md:text-28 font-bold" style="line-height: 1.2">-->
<!--              Quality range of meter mounting-->
<!--              equipment to meet your needs.-->
<!--            </p>-->
            <p class="mb-5 text-16 md:text-22" style="line-height: 30px; font-weight: 200">
              Developed in strict tandem with the set industry standards, the
              Tranos Single and Three Phase Meter Boxes are widely used at
              homes and offices for their unmatched quality and flawless finish.
            </p>
            <p class="text-14 md:text-16 mb-5" style="line-height: 30px">
              Produced from durable thermoplastic materials to provide robust
              protection for electricity meters with high UV stability and flame
              retardation. These enclosures provide ingress protection of IP54
              and impact protection of IK09 making them suitable for both
              indoor and outdoor applications.
            </p>

            <div>
              <p class="text-12 md:text-sm w-full md:w-1/2 mb-5" style="line-height: 1.5">
                For technical information and
                specifications on the product line
                click below.
              </p>
              <a href="https://drive.google.com/file/d/1WpK95CaegWcqrV3T33zcyjQv8WZyHRZk/view?usp=sharing" target="_blank">
                <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Learn more ></button>
              </a>
            </div>

          </div>

          <div class="grid__image w-full h-full grid grid-cols-1 gap-4">
            <div class="image-div w-full">
              <img src="/assets/images/METER-2.jpg" class="w-full" alt="tranos">
            </div>
            <div class="image-div w-full">
              <img src="/assets/images/METER-1.jpg" class="w-full" alt="tranos">
            </div>
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
    title: 'Meter Boxes'
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
  font-size: 30px;
  font-weight: 700;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.grid__grid {
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: auto;
  align-items: flex-start;
  gap: 60px;
}
.last__img {
  width: 1000px;
  max-width: 95%;
  margin: 0 auto;
}
.last__img > div {
  width: 540px;
  height: 335px;
  background: #172673;
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
  .last__img > div {
    width: 100%;
  }
}
</style>
