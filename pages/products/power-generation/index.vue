<template>
  <div class="relative top-50px md:top-60px">

    <div class="relative top-0 w-screen h-200 md:h-50vh py-10 md:py-0 mb-5 md:mb-10">
      <img
        src="../../../static/assets/images/GENERATOR-BANNER.jpg"
        alt="tranos"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
      <div class="container mx-auto z-100 relative h-full flex items-center">
        <h1 class="text-white text-3xl md:text-5xl xl:text-7xl font-bold" style="line-height: 1">
          Providing Critical
          <br>
          Power Solutions
        </h1>
      </div>
    </div>

    <div class="container mx-auto mb-5 md:mb-10 grid__grid">
      <PowerGeneratorCard
        v-for="(_product, index) in products"
        :key="index"
        :product="_product.productName"
        :product-image="_product.productImage"
        :path="_product.path"
        @card-action="cardAction($event)"
      />
    </div>

  </div>
</template>

<script>
import PowerGeneratorCard from '../../../components/sections/card/power-generator-card'

export default {
  name: "power-generation",
  head: {
    title: 'Power Generation'
  },
  components: { PowerGeneratorCard },
  data () {
    return {
      products: [
        {
          productName: 'Power Generators',
          productImage: 'GAS-GENERATOR.jpg',
          path: '/products/power-generation/gas-powered-generators'
        },
        {
          productName: 'UPS Power Backup',
          productImage: 'UPS.jpg',
          path: '/products/power-generation/'
        },
      ]
    }
  },
  methods: {
    cardAction (e) {
      this.$router.push(e)
    }
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
  gap: 10px;
}

@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
  }
}
</style>
