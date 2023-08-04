<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 md:h-50vh py-10 md:py-0 mb-5 md:mb-10">
      <img
        src="../../../static/assets/images/gasket-banner-rev.jpg"
        alt="tranos"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="container mx-auto mb-5 md:mb-10">
      <img src="/assets/images/WESEAL-GASKET-HEADER.svg" class="w-full md:w-4/12" alt="tranos">
    </div>

    <div class="container mx-auto mb-5 md:mb-10">
      <p class="w-full lg:w-80% text-18 md:text-22 mb-2 md:mb-5 text-black" style="line-height: 30px; font-weight: 200">
        Tranos is a Nigerian company producing spiral wound gaskets (SWG) as well as soft-cut gaskets
        through subsidiary – WeSeal.
      </p>
      <p class="w-full lg:w-80% text-14 md:text-16 font-light" style="line-height: 30px">
        All our gaskets are manufactured to the highest quality standards in compliance with ASME B16.20 and
        ASME B16.21 using quality materials and following the approved manufacturing processes according
        to ISO 9001:2015 standard to ensure overall quality and consistency.
      </p>
    </div>

    <div class="container mx-auto mb-5 md:mb-10 grid__grid">

      <div>
        <figure class="mb-2">
          <div class="image-div">
            <img src="/assets/images/SPIRAL-WOUND-GASKET.jpg" class="w-full" alt="tranos">
          </div>
          <figcaption class="font-bold">Spiral Wound Gaskets</figcaption>
        </figure>
        <div class="text__btn">
          <p class="text-14 md:text-16 font-light" style="line-height: 30px">
            These are the common metallic gasket used
            in industrial applications involving a range of
            pressure and temperatures. They are popular
            in the oil and gas, chemical, petrochemical,
            power, and food industries and prevents leak
            through flange joints.
          </p>
          <button class="text-primary text-12 uppercase" @click="$router.push('/products/gaskets/spiral-wound-gaskets')">Learn More ></button>
        </div>
      </div>

      <div>
        <figure class="mb-2">
          <div class="image-div">
            <img src="/assets/images/SOFT-CUT.jpg" class="w-full" alt="tranos">
          </div>
          <figcaption class="font-bold">Soft-Cut Gaskets</figcaption>
        </figure>
        <div class="text__btn">
          <p class="text-14 md:text-16 font-light" style="line-height: 30px">
            These are gaskets that are easily
            compressed under a low bolt load. Soft
            gaskets are used as heat exchanger gaskets,
            compressor and bonnet valve gaskets and in
            pipe flange applications etc.
          </p>
          <button class="text-primary text-12 uppercase" @click="$router.push('/products/gaskets/soft-cut-gaskets')">Learn More ></button>
        </div>
      </div>

      <div>
        <figure class="mb-2">
          <div class="image-div">
            <img src="/assets/images/KAMMPROFILE.jpg" class="w-full" alt="tranos">
          </div>
          <figcaption class="font-bold">Kammprofile Gaskets</figcaption>
        </figure>
        <div class="text__btn">
          <p class="text-14 md:text-16 font-light" style="line-height: 30px">
            Kammprofile gasket or Camprofile gasket or
            Grooved gasket) are gaskets that come with
            a metal core bonded with a soft filler material
            on both sides. After installation of the
            Kammprofile gasket, the soft non-metallic
            filler gets pushed into the metal core serrated
            grooves.
          </p>
          <button class="text-primary text-12 uppercase" @click="$router.push('/products/gaskets/kammprofile-gaskets')">Learn More ></button>
        </div>
      </div>

    </div>

<!--    Download Brochure-->
    <div class="container mx-auto mb-10">
      <a href="https://drive.google.com/file/d/1zW1nrQZ9n7fgM1EJJ8veAdmBQ_bKsw1B/view?usp=sharing" target="_blank">
        <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
      </a>
      <p class="text-14" style="line-height: 130%">Download our catalogues and brochures to find all the information you need</p>
    </div>



  </div>

</template>

<script>

export default {
  name: "gaskets",
  head: {
    title: 'Gaskets'
  },
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.text__btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 200px;
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

@media screen and (max-width: 1024px) {
  .grid__grid {
    grid-template-columns: 1fr 1fr;
  }
  .text__btn {
    min-height: auto;
  }
}
@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
  }
}
</style>
