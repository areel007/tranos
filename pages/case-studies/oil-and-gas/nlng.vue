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
          class="font-bold cursor-pointer text-primary"
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
          class="cursor-pointer"
          @click="$router.push('/projects/telecomms')"
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
          <img src="../../../static/assets/images/NLNG-Hydrodive.jpg" alt="tranos" class="w-full">
        </div>

        <h1 class="mb-4 md:mb-8 text-18 md:text-28" style="font-weight: 600">
          Revamp of Marine Civil Facilities in Port Harcourt and Bonny Island, Rivers State.
        </h1>

        <div>
          <div class="mb-4">
            <p class="font-bold">Service Problem:</p>
            <ul class="list-decimal ml-5 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>Shoreline protection failure</li>
              <li>Marine Fenders deterioration</li>
              <li>Pile Wraps deterioration</li>
              <li>Cable trays and covers corrosion</li>
              <li>Pipe support deterioration</li>
              <li>Mooring piles fenders deterioration</li>
              <li>Cracks on Jetties</li>
              <li>Debris and objects in the waters</li>
              <li>Marine growth on Pontoons</li>
              <li>Corrosion on Pontoons and gangways</li>
              <li>Cracks on Pile cap</li>
              <li>Cracks on concrete beams</li>
              <li>Replacement of Anodes</li>
              <li>Replacement of Handrails</li>
              <li>Decommissioning of Ladders</li>
              <li>Replacement of corroded ladders</li>
              <li>Corrosion control on passenger's jetty (blasting and painting)</li>
            </ul>
          </div>

          <div>
            <p class="font-bold">Solutions Provided:</p>
            <ul class="list-decimal ml-5">
              <li>
                Shoreline protection reinstated ( Site clearing, failed protection demolition using a jack-hammer, Ruble
                carting away, earth compacting, earth filing, rebar placement, and concrete casting up to 150mm thickness.
                Placement of sand Crete in jumbo bags for shoreline protection.
              </li>
              <li>Removing of damaged AN300 Trelleborg Marine Fenders and installation
                of AN500 Trelleborg Marine Fenders.
              </li>
              <li>
                Removal of deteriorated pile Wraps and placement of replacement Wraps( Rope access personnel
                and divers were used to achieve this) etc.
              </li>
            </ul>
          </div>
        </div>


        <div class="mt-5 md:mt-10 text-14">
          <button class="py-1 px-4 bg-black text-white rounded-md" @click="$router.go(-1)"><< Previous Project</button>
          <button class="py-1 px-4 bg-black text-white rounded-md" @click="$router.push('/case-studies/oil-and-gas/addax')">Next Project >></button>
          <span>Addax Petroleum Development Nigeria Limited</span>
        </div>

      </div>

    </div>

  </main>
</template>

<script>
export default {
  name: "pilot-science",
  head: {
    title: 'Case Studies'
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
