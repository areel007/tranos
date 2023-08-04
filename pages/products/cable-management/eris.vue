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
          class="cursor-pointer"
          @click="$router.push('/products/cable-management/trac')"
        >
          Trans TRAC
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
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

    <div class="container mx-auto my-5 md:my-10">
      <img src="/assets/images/eris.svg" alt="tranos eris" width="200">
    </div>

    <div class="container mx-auto my-5 md:my-10 grid__grid">
      <div style="line-height: 1.5" class="text-14 md:text-16 font-light">
        <p class="text-16 md:text-22 mb-4" style="line-height: 1.3; font-weight: 200">
          The Tranos' ERIS Rack is durable, easy to
          assemble, versatile in application, and ideal for
          both indoor & outdoor electrical component
          mounting applications.
        </p>
        <p class="mb-3 md:mb-5">
          A complete unit features single or double slot
          rungs with integrated cable management
          features and can be supplied in pre-assembled
          or flat pack forms.
        </p>
        <p>
          They are reconfigurable and adaptable to any
          application and come in standard or customized
          sizes.
        </p>
      </div>

      <div class="w-full image-div">
        <img src="/assets/images/eris_main.jpg" class="w-full" alt="tranos">
      </div>
    </div>

    <div class="w-full container mx-auto mt-10 md:mt-20 mb-10 md:mb-20 image-div">
      <img src="/assets/images/eris_base.jpg" class="w-full" alt="tranos">
    </div>


  </div>
</template>

<script>
export default {
  name: "eris",
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
}
</style>
