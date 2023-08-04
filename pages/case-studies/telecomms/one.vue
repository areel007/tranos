<template>
  <main class="relative top-50px md:top-70px our-services">

    <div class="relative h-200">
      <img src="../../../static/assets/images/case-study-banner.jpg" alt="tranos" class="w-full h-full object-cover">
      <div class="w-full h-full absolute top-0 left-0 bg-primary opacity-50"></div>
      <div class="absolute w-full h-full z-10 top-0 left-0">
        <div class="container mx-auto h-full w-full flex items-center">
          <span class="text-20 md:text-22 text-white font-medium uppercase">Case Studies</span>
        </div>
      </div>
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="cursor-pointer"
          @click="$router.push('/projects/power-and-energy')"
        >
          Power & Energy
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="cursor-pointer"
          @click="$router.push('/projects/industrial-and-manufacturing')"
        >
          Industrial & Manufacturing
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="cursor-pointer"
          @click="$router.push('/projects/oil-and-gas')"
        >
          Oil & Gas
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="cursor-pointer"
          @click="$router.push('/projects/aviation')"
        >
          Aviation
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/projects/telecomms/')"
        >
          Telecommunications
        </span>
        <!--        <span style="color: #00BBFF">|</span>-->
        <!--        <span-->
        <!--          class="cursor-pointer"-->
        <!--          @click="$router.push('/projects/')"-->
        <!--        >-->
        <!--          Residential & Commercial-->
        <!--        </span>-->
      </div>
    </div>

    <div class="container mx-auto py-5 md:py-20 font-light" style="line-height: 30px">

      <div class="w-95% lg:w-800 mx-auto">

        <div class="mb-5 md:mb-10 zoom-card">
          <img v-if="counter===0" src="../../../static/assets/images/biswal-1.jpg" alt="tranos" class="w-full">
          <img v-if="counter===1" src="../../../static/assets/images/biswal-2.jpg" alt="tranos" class="w-full">
        </div>

        <h1 class="mb-4 md:mb-8 text-18 md:text-28" style="font-weight: 600">
          Gas Generator for Different Load Demands.
        </h1>

        <div>
          <div class="mb-4">
            <p class="font-bold">Project</p>
            <p>
              Generating sets for telecom sites with the following features.
            </p>
            <ul class="ml-5 list-disc">
              <li>Varying load.</li>
              <li>Fixed load.</li>
            </ul>
          </div>

          <div>
            <p class="font-bold">Solutions Provided:</p>
            <p>We provided the following generating sets, to meet clients' unique technical
              requirements while reducing operational costs.
            </p>
            <ul class="ml-5 list-disc">
              <li>TG1800 – 18kw DC Gas Generator, Fixed Speed.</li>
              <li>TG2000 – 20kw AC Gas Generator, Fixed Speed.</li>
              <li>TG1200 – 12kw DC gas Generator, Variable Speed.</li>
              <li>TG1000 – 10kw AC gas Generator, Variable Speed.</li>
            </ul>
          </div>
        </div>

      </div>

    </div>

  </main>
</template>

<script>
export default {
  name: "index",
  head: {
    title: 'Case Studies'
  },
  data() {
    return {
      counter: 1
    }
  },
  mounted() {
    setInterval(() => {
      if (this.counter < 1) {
        this.counter++
      } else {
        this.counter = 0
      }
    }, 10000)
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}

.zoom-card {
  overflow: hidden;
}
.zoom-card img {
  transition: transform .5s ease-in-out;
}
.zoom-card:hover img {
  transform: scale(1.1);
}
</style>
