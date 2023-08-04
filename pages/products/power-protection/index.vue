<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 md:h-50vh py-10 md:py-0 mb-5 md:mb-10">
      <img
        src="../../../static/assets/images/power-protection-banner-image-replacement.jpg"
        alt="tranos power distribution"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="title mx-auto mb-0 md:mb-3 page__heading">
      <h1 class="text-18 md:text-22" style="font-weight: 600">Power Protection & Distribution</h1>
    </div>

    <div class="container mx-auto power-text mb-10 text-16 md:text-18" style="line-height: 1.5">
      <p class="text-16 md:text-22 text-black" style="line-height: 1.3; font-weight: 200">
        Tranos is Nigeria’s foremost manufacturer of high-quality low voltage electrical power distribution and control
        systems for industrial, commercial, infrastructural, and residential applications....
        <span @click="toggleShowMore" v-if="!showMore" class="text-primary font-normal cursor-pointer text-14">Read more</span>
      </p>
      <div
        v-if="showMore"
        class="mb-10"
      >
        <p class="text-14 md:text-16 font-light">
          We are specialists in the design, manufacturing, and assembly of electrical power distribution, protection and
          control panels. Our capabilities cover a broad range of industries and applications for low voltage panels
          are from 63A to 6,300A.
        </p>
        <p class="last-yaro text-14 md:text-16 font-light">
          Our portfolio of electrical power distribution, protection and control products are produced using high-quality
          materials and some of the best available components. Our Tranos Elite range of products is designed to provide
          safety and peace of mind to our customers at very affordable prices.
        </p>
        <span @click="toggleShowLess" v-if="showMore" class="text-primary font-normal cursor-pointer text-14">Read less</span>
      </div>
    </div>

    <div class="low-voltage-power container mx-auto mb-10">
      <h1 class="border-l-2 border-interim-border px-2 font-bold text-primary mb-5" style="line-height: 1">Low Voltage Power Distribution Panels & Switchgears</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
<!--        TranosElite Range-->
        <div @click="$router.push('/products/power-protection/tranos-elite-range')" class="cursor-pointer">
          <div class="w-full mb-5 power-protection-card">
            <img src="/assets/images/tranos-elite.jpg" class="w-full" alt="tranos">
          </div>
          <span class="font-medium">TranosElite Range</span>
        </div>

<!--        Siemens SIVACON S8-->
        <div @click="$router.push('/products/power-protection/siemens-sivacon')" class="cursor-pointer">
          <div class="w-full mb-5 power-protection-card">
            <img src="/assets/images/sivacon-8.jpg" class="w-full" alt="tranos">
          </div>
          <span class="font-medium">Siemens SIVACON S8</span>
        </div>

<!--        ATEX Power Panel from Warom-->
        <div @click="$router.push('/products/power-protection/atex-power-panel')" class="cursor-pointer">
          <div class="w-full mb-5 power-protection-card">
            <img src="/assets/images/atex-power-panel.jpg" class="w-full" alt="tranos">
          </div>
          <span class="font-medium">ATEX Power Panels</span>
        </div>
      </div>
    </div>

    <div class="medium-voltage-power container mx-auto mb-10 md:mb-20">
      <h1 class="border-l-2 border-interim-border px-2 font-bold text-primary mb-5" style="line-height: 1">Medium Voltage Power Switchgears</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

<!--        Siemens SIMOPRIME-->
        <div @click="$router.push('/products/power-protection/siemens-simoprime')" class="cursor-pointer">
          <div class="w-full mb-5 power-protection-card">
            <img src="/assets/images/simoprime.jpg" class="w-full" alt="tranos">
          </div>
          <span class="font-medium">Siemens SIMOPRIME</span>
        </div>

<!--        Siemens SIMOSEC-->
        <div @click="$router.push('/products/power-protection/siemens-simosec')" class="cursor-pointer">
          <div class="w-full mb-5 power-protection-card">
            <img src="/assets/images/simosec.jpg" class="w-full" alt="tranos">
          </div>
          <span class="font-medium">Siemens SIMOSEC</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "power-protection",
  head: {
    title: 'Power Protection'
  },
  data() {
    return {
      showMore: false,
    }
  },
  methods: {
    toggleShowMore () {
      this.showMore = true
    },
    toggleShowLess () {
      this.showMore = false
    }
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.power-text,
.title {
  width: 800px;
  max-width: 95%;
}
.power-text p {
  margin-bottom: 15px;
}
.last-yaro {
  margin-bottom: 2px !important;
}
.page__heading h1 {
  position: relative;
  /*font-size: 30px;*/
  /*font-weight: 700;*/
  color: #172673;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.power-protection-card {
  overflow: hidden;
}
.power-protection-card img {
  transition: transform .5s ease-in-out;
}
.power-protection-card:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .power-text {
    column-count: 1;
  }
}
</style>
