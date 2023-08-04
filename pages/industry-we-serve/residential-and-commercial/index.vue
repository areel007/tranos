<template>
  <div class="relative top-50px md:top-70px our-services" style="">

    <div class="relative w-screen h-200 py-10 md:py-0 bg-primary">
      <div class="container mx-auto h-full flex flex-col justify-center">
        <span class="text-20 md:text-22 text-white font-medium uppercase">Industries We Serve</span>
      </div>
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="cursor-pointer"
          @click="$router.push('/industry-we-serve/')"
        >
          Oil & Gas
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="cursor-pointer"
          @click="$router.push('/industry-we-serve/power-and-energy/')"
        >
          Power & Energy
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="cursor-pointer"
          @click="$router.push('/industry-we-serve/industrial-and-manufacturing')"
        >
          Industrial & Manufacturing
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="font-bold cursor-pointer text-primary"

        >
          Residential & Commercial
        </span>
        <span style="color: #00BBFF">|</span>
        <span
          class="cursor-pointer"
          @click="$router.push('/industry-we-serve/telecommunications/')"
        >
          Telecommunications
        </span>
      </div>
    </div>

    <div class="container mx-auto py-10 md:py-60px">

      <h1 class="mb-1 md:mb-3 text-18 md:text-24 font-bold">Residential & Commercial</h1>

      <div class="text-black text-12 md:text-14 font-light mb-5 md:mb-10">
        <div class="">
        <span
        >
          Real Estate Companies
        </span>
          <span style="color: #00BBFF">|</span>
          <span
          >
          Mall
        </span>
          <span style="color: #00BBFF">|</span>
          <span
          >
          Healthcare Facilities
        </span>
        </div>
      </div>

      <div class="w-full h-auto mb-5 md:mb-10 zoom-card">
        <img src="/assets/images/residential-banner.jpg" alt="tranos">
      </div>

      <div class="w-full md:w-11/12 text-16 md:text-18 mb-5 md:mb-10" style="line-height: 1.5">

        <p  class="mb-3 md:mb-5 text-16 md:text-22" style="line-height: 30px; font-weight: 200;">
          Residential and commercial sector covers a wide range of services This includes Real Estate
          developments, Mall, Regional and District Markets, Hospitals and Recreational facilities
          (Stadia and Theme parks).
        </p>

        <p class="text-14 md:text-16 font-light">
          These facilities require safe and reliable system to keep them running optimally At Tranos, we
          have designed and developed products to ensure that facilities owners focus on their core
          business without having to worry about their infrastructure.
        </p>


      </div>

<!--      -->

      <div class="grid__grid font-light text-14 md:text-16">

        <div class="w-full">
          <div class="w-full border-b border-gray-400 mb-3 md:mb-5 py-1">
            <h2 @click="$router.push('/products/power-protection')" class="text-14 md:text-18 font-bold cursor-pointer text-primary">Power Protection & Distribution</h2>
          </div>

          <div class="mb-3 md:mb-5" style="line-height: 30px">
            <span class="text-16 md:text-18 font-bold">LV Power Distribution Panels & Switchgears</span>
            <ul class="list-disc" style="margin-left: 20px;">
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/power-protection/tranos-elite-range')">Tranos Elites</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/power-protection/siemens-sivacon')">Siemens SIVACON S8</li>
            </ul>
          </div>

          <div class="mb-3 md:mb-5" style="line-height: 30px">
            <span class="text-16 md:text-18 font-bold">MV Power Control Panels</span>
            <ul class="list-disc" style="margin-left: 20px;">
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/power-protection/siemens-simoprime')">Siemens SIMOPRIME</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/power-protection/siemens-simosec')">Siemens SIMOSEC</li>
            </ul>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full border-b border-gray-400 mb-3 md:mb-5 py-1">
            <h2 @click="$router.push('/products/enclosures')" class="text-16 md:text-18 font-bold cursor-pointer text-primary">Enclosures</h2>
          </div>

          <div class="mb-3 md:mb-5" style="line-height: 30px">
            <ul class="list-disc" style="margin-left: 20px;">
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/enclosures/electrical')">Electrical Enclosures</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/enclosures/mechanical')">Mechanical Enclosures</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/enclosures/battery-cabinets-and-racks')">Battery Cabinets and Racks</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/enclosures/heavy-duty')">Heavy Duty Enclosures</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/enclosures/customised')">Customised/Special Enclosures</li>
              <!--              <li class="cursor-pointer hover:underline" @click="$router.push('/products/enclosures/')">Junction Boxes</li>-->
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/enclosures/meter-boxes')">Meter Boxes</li>
            </ul>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full border-b border-gray-400 mb-3 md:mb-5 py-1">
            <h2 @click="$router.push('/products/cable-management/')" class="text-16 md:text-18 font-bold cursor-pointer text-primary">Cable Management & Support Systems</h2>
          </div>

          <div class="mb-3 md:mb-5" style="line-height: 30px">
            <ul class="list-disc" style="margin-left: 20px;">
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/cable-management/trac')">Tranos TRAC - Cable trays, ladders, supports, fasteners & accessories.</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/cable-management/eris')">Tranos ERIS - Equipment Rack & Instrumentation Support.</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/cable-management/ellis')">Ellis Cable Clamps and Cleats.</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/cable-management/cable-glands')">Cable Glands.</li>
            </ul>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full border-b border-gray-400 mb-3 md:mb-5 py-1">
            <h2 @click="$router.push('/products/power-generation/')" class="text-16 md:text-18 font-bold cursor-pointer text-primary">Power Generation & Backup</h2>
          </div>

          <div class="mb-3 md:mb-5" style="line-height: 30px">
            <ul class="list-disc" style="margin-left: 20px;">
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/power-generation/gas-powered-generators')">Tranos THUNDERBOLT generators</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/power-generation/gas-powered-generators')">Customised generators for special applications</li>
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/power-generation')">UPS & Power Back-up Systems</li>
            </ul>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full border-b border-gray-400 mb-3 md:mb-5 py-1">
            <h2 @click="$router.push('/products/lighting-and-wiring-devices/')" class="text-16 md:text-18 font-bold cursor-pointer text-primary">Lighting & Wiring Devices</h2>
          </div>

          <div class="mb-3 md:mb-5" style="line-height: 30px">
            <ul class="list-disc" style="margin-left: 20px;">
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets')">Simon Lighting & Wiring Devices</li>
            </ul>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full border-b border-gray-400 mb-3 md:mb-5 py-1">
            <h2 @click="$router.push('/products/warehouse-storage')" class="text-16 md:text-18 font-bold cursor-pointer text-primary">Warehouse Storage Systems</h2>
          </div>

          <div class="mb-3 md:mb-5" style="line-height: 30px">
            <ul class="list-disc" style="margin-left: 20px;">
              <li class="cursor-pointer hover:underline" @click="$router.push('/products/warehouse-storage')">Tranos RACK - Our system of warehouse racks, and accessories.</li>
            </ul>
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
    title: 'Industry We Serve'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
h1 {
  position: relative;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.grid__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 100px;
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

@media screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
  .grid__grid {
    gap: 20px;
  }
}
@media screen and (max-width: 500px) {
  .grid__grid {
    grid-template-columns: 1fr;
  }
}
</style>
