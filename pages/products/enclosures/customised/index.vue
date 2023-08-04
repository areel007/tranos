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
          class="font-bold cursor-pointer text-primary"
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
        <h1 class="text-18 md:text-24 font-bold">Customised Enclosures</h1>
      </div>

      <div class="container mx-auto mb-5 md:mb-10">
        <div class="w-full">
          <img src="/assets/images/custom-banner.jpg" class="w-full" alt="tranos">
        </div>
      </div>

      <div class="container mx-auto mb-5 md:mb-10">
        <div class="grid__grid">
          <div class="grid__grid-text">

            <div>
              <p class="text-16 md:text-22 mb-4 text-black" style="line-height: 30px; font-weight: 200">
                At Tranos, we have built hundreds of thousands
                of enclosures for various applications and
                customers. With the extensive experience of our
                engineers, we are able to listen to customers’
                requirements, ideate and come up with ideal
                solutions for unique requirements.
              </p>
              <p class="text-14 md:text-16 font-light" style="line-height: 30px">
                To speak with our application engineers about your enclosure requirements, <a href="/contacts" class="text-primary">click here.</a>
              </p>

            </div>
          </div>

          <div class="grid__grid-image w-full h-full image-div">
            <img src="/assets/images/custom-grid-image.jpg" class="w-full" alt="tranos">
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
    title: 'Customised Enclosures'
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
  transform: scale(1.05);
}

@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    align-items: flex-start;
  }
  .reverse-grid {
    grid-row: 2/3;
  }
  .enclosures-title h1 {
    font-size: 24px;
  }
}
</style>
