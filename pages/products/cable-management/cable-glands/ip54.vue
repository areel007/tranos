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

    <div class="container mx-auto h-auto md:h-100 py-5 md:py-0 flex items-center text-18 md:text-28 font-semibold">Nickel plated brass Cable glands IP54</div>
    <div class="container mx-auto grid__grid">
      <div class="w-full">
        <img src="/assets/images/IP54-Nickel-plated-brass-glands.png" alt="tranos">
      </div>
      <div class="text-14 md:text-16 font-light">
        <p class="mb-10" style="line-height: 30px">Ip54 nickel plated brass glands. Made of brass which is then nickel
          plated in order to improve resistance to hard environmental conditions
          in which they are used. Consisting of a body within which is located a
          neoprene washer that deforms as a result of the nut being tightened,
          and guarantees IP54 water tightness and good levels of cable
          retention. The seals are resistant to ageing, corrosion and oils and
          remain inert to the material that sheathes the cables.
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
        { product: 'Nickel plated brass gland G1" 19÷22', code: '6018-01'},
        { product: 'Nickel plated brass gland G2" 37÷45', code: '6018-02'},
        { product: 'Nickel plated brass gland PG07" 5÷7', code: '6018-07'},
        { product: 'Nickel plated brass gland PG09" 6÷8', code: '6018-09'},
        { product: 'Nickel plated brass gland PG11" 8÷10', code: '6018-11'},
      ],
      secondBatch: [
        { product: 'Nickel plated brass gland G1"1/2 33÷35', code: '6018-112'},
        { product: 'Nickel plated brass gland G1"1/4 26÷30', code: '6018-114'},
        { product: 'Nickel plated brass gland G1/2" 10÷12', code: '6018-12'},
        { product: 'Nickel plated brass gland M12x1.5 4÷6', code: '6018-12A'},
        { product: 'Nickel plated brass gland PG13 10÷12', code: '6018-13'},
        { product: 'Nickel plated brass gland G1/4" 4÷6', code: '6018-14'},
        { product: 'Nickel plated brass gland Pg16" 12÷14', code: '6018-15'},
        { product: 'Nickel plated brass gland M16x1.5 8÷10', code: '6018-16'},
        { product: 'Nickel plated brass gland M20x1.5 10÷12', code: '6018-20'},
        { product: 'Nickel plated brass gland PG21" 15÷17', code: '6018-21'},
        { product: 'Nickel plated brass gland PG21" 15÷17', code: '6018-21'},
        { product: 'Nickel plated brass gland M24x1.5 17÷19', code: '6018-25'},
        { product: 'Nickel plated brass gland PG29" 24÷26', code: '6018-29'},
        { product: 'Nickel plated brass gland M32x1.5 19÷22', code: '6018-32'},
        { product: 'Nickel plated brass gland G3/4" 17÷19', code: '6018-34'},
        { product: 'Nickel plated brass gland PG36 31÷35', code: '6018-36'},
        { product: 'Nickel plated brass gland G3/8" 8÷10', code: '6018-38'},
        { product: 'Nickel plated brass gland M40x1.5 26÷30', code: '6018-40'},
        { product: 'Nickel plated brass gland PG42 39÷41', code: '6018-42'},
        { product: 'Nickel plated brass gland PG48 44÷46', code: '6018-48'},
        { product: 'Nickel plated brass gland M50x1.5 39÷41', code: '6018-50'},
        { product: 'Nickel plated brass gland M63x1.5 37÷45', code: '6018-63'},
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
