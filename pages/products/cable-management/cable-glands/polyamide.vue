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

    <div class="container mx-auto h-auto md:h-100 py-5 md:py-0 flex items-center text-18 md:text-28 font-semibold">
      Polyamide Cable glands (Also available with complete Locknut)
    </div>
    <div class="container mx-auto grid__grid">
      <div class="w-full">
        <img src="/assets/images/AISI-303-Cable-glands.png" alt="tranos">
      </div>
      <div>
        <p class="text-14 md:text-16 font-light mb-10">
          IP68 polyamide glands consist of a body fitted with elastic fins that, when a nut is tightened, tighten
          concentrically and uniformly around an NBR washer seal, and guarantee an IP68 water tightness and efficient
          cable retention. The particular trapezoidal shape of the thread ensures an efficient way of preventing
          accidental unscrewing through vibrations. The seals are resistant to ageing, corrosion and oils and remain
          inert to the material that sheathes the cables. PG thread in accordance with DIN 40430.
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
        { product: 'Polyamide gland PG07 3÷6,5', code: '6018-P07'},
        { product: 'Polyamide gland PG09 3, 5÷8', code: '6018-P09'},
        { product: 'Polyamide gland PG11 4, 5÷10', code: '6018-P11'},
        { product: 'Polyamide gland M12 3,5÷7', code: '6018-P12'},
        { product: 'Polyamide gland M13 6÷12', code: '6018-P13'},
      ],
      secondBatch: [
        { product: 'Polyamide gland M16 7÷14', code: '6018-P15'},
        { product: 'Polyamide gland M16 4,5÷10', code: '6018-P16'},
        { product: 'Polyamide gland M20 6÷13', code: '6018-P20'},
        { product: 'Polyamide gland M21 12÷18', code: '6018-P21'},
        { product: 'Polyamide gland M25 9÷17', code: '6018-P25'},
        { product: 'Polyamide gland PG29 17÷25', code: '6018-P29'},
        { product: 'Polyamide gland M32 15÷21', code: '6018-P32'},
        { product: 'Polyamide gland PG36 20÷32', code: '6018-P36'},
        { product: 'Polyamide gland M40 16÷28', code: '6018-P40'},
        { product: 'Polyamide gland PG42 26÷38', code: '6018-P42'},
        { product: 'Polyamide gland PG42 26÷38', code: '6018-P42'},
        { product: 'Polyamide gland M50 30÷44', code: '6018-P48'},
        { product: 'Polyamide gland PG48 27÷35', code: '6018-P50'},
        { product: 'Polyamide gland M63 34÷48', code: '6018-P63'},

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
