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
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/cable-management/cable-glands')"
        >
          Cable Glands
        </span>
      </div>
    </div>

    <div class="container mx-auto h-auto md:h-100 py-5 md:py-0 flex items-center text-18 md:text-28 font-semibold">Stainless Steel Cable glands AISI 303</div>
    <div class="container mx-auto grid__grid">
      <div class="w-full">
        <img src="/assets/images/AISI-303-Cable-glands.png" alt="tranos">
      </div>
      <div>
        <p class="text-14 md:text-16 font-light mb-10">
          Glands - IP68. Made in AISI 303 (X8CrNi1809 1.4305 UNI EN10088-1) stainless steel, the Perbunan seal forms
          a barrier effect against radioactive radiation of up to 2.5x105 Grays. Starting with PG09, it has been
          produced in two pieces to guarantee improved tightening and to reduce the gap between the cable and the
          metal parts of the gland. They offer excellent resistance to cable traction and have an IP68 rating.
          Suggested threads are: ISO metric in accordance with CEI EN 60423.
        </p>

        <div class="table mb-10">
          <div class="table-header">
            <span>PRODUCT</span>
            <span>CODE</span>
          </div>
          <div
            v-for="(row, index) in rows"
            :key="index"
            class="table-row"
          >
            <div class="text-14 md:text-16 leading-6 font-semibold">{{ row.product }}</div>
            <div class="flex items-center justify-between">
              <span class="text-16">{{ row.code }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="table-row cursor-pointer text-primary" @click="showSecondBatch = true" v-if="!showSecondBatch">
            <div class="flex items-center">
              <span>More</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div
            v-for="(_secondBatch, index) in secondBatch"
            :key="index"
            class="table-row"
            v-if="showSecondBatch"
          >
            <div class="text-14 md:text-16 leading-6 font-semibold">{{ _secondBatch.product }}</div>
            <div class="flex items-center justify-between">
              <span class="text-16">{{ _secondBatch.code }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="table-row cursor-pointer text-primary" @click="showSecondBatch = false" v-if="showSecondBatch">
            <div class="flex items-center">
              <span>Less</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Cable Management & Support System'
  },
  data () {
    return {
      rows: [
        { product: 'Stainless steel gland AISI 303 M8x1,25 2,5÷3,5', code: '6018X-M08'},
        { product: 'Stainless steel gland AISI 303 M8x1,25 2,5÷5', code: '6018X-M081'},
        { product: 'Stainless steel gland AISI 303 M10x1,5 3÷4', code: '6018X-M10'},
        { product: 'Stainless steel gland AISI 303 M10x1,5 4÷6', code: '6018X-M101'},
        { product: 'Stainless steel gland AISI 303 M12 3,5÷5', code: '6018X-M12'},
      ],
      secondBatch: [
        { product: 'Stainless steel gland AISI 303 M12 5÷6,5', code: '6018X-M121'},
        { product: 'Stainless steel gland AISI 303 M12 6,5÷8', code: '6018X-M123'},
        { product: 'Stainless steel gland AISI 303 M16 8÷10,5', code: '6018X-M16'},
        { product: 'Stainless steel gland AISI 303 M20 11÷15', code: '6018X-M20'},
        { product: 'Stainless steel gland AISI 303 M25 16÷20,5', code: '6018X-M25'},
        { product: 'Stainless steel gland AISI 303 M32 21÷25,5', code: '6018X-M32'},
        { product: 'Stainless steel gland AISI 303 M40 28,5÷33', code: '6018X-M40'},
        { product: 'Stainless steel gland AISI 303 M50 37÷42', code: '6018X-M50'},
        { product: 'Stainless steel gland AISI 303 M63 46÷52', code: '6018X-M63'},

      ],
      showSecondBatch: false
    }
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
  grid-template-columns: 400px 1fr;
  gap: 40px;
}
.table {
  width: 430px;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
}
.table-header {
  padding: 10px 20px;
  background: #f5f5f5;
  border-radius: 5px 5px 0 0;
  display: grid;
  grid-template-columns: 70% 1fr;
  gap: 20px;
  color: grey;
  font-weight: 600;
  font-size: 14px;
}
.table-row {
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 70% 1fr;
  gap: 20px;
  border-bottom: 1px solid #d0d0d0;
}
.table-row:last-child {
  border-bottom: none;
}

@media screen and (max-width: 1000px) {
  .grid__grid {
    grid-template-columns: 1fr 2fr;
  }
}
@media screen and (max-width: 500px) {
  .grid__grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .table {
    width: 100%;
  }
}
</style>
