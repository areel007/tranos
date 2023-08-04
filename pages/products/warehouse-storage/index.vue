<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative top-0 w-screen h-200 md:h-50vh py-10 md:py-0 mb-5 md:mb-10">
      <img
        src="../../../static/assets/images/warehouse-rack.jpg"
        alt="tranos"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
      <div class="container mx-auto z-100 relative h-full flex items-center">
<!--        <h1 class="ml-0 md:ml-10 text-white text-3xl md:text-7xl font-bold" style="line-height: 1">-->
<!--          Complete Storage-->
<!--          <br>-->
<!--          Racking Solutions-->
<!--        </h1>-->
      </div>
    </div>

    <div class="container mx-auto">
      <img src="../../../static/assets/images/TRANOS-RACK.svg" alt="tranos" class="mb-4 w-150 md:w-200">
      <h1 class="page__heading text-18 md:text-24 font-bold">Complete Storage Racking Solutions</h1>
    </div>

    <div class="mb-5 md:mb-10">
      <div class="container mx-auto">

        <p class="mb-3 md:mb-5 text-16 md:text-22 w-full lg:w-80% text-black" style="line-height: 30px; font-weight: 200">
          We design and manufacture racks and storage systems for various needs and applications such as
          warehouses, factories, stockrooms, offices, schools, and more.
        </p>
        <p class="mb-3 md:mb-5 text-14 md:text-16 w-full lg:w-80% font-light" style="line-height: 30px">
          Our racks are made from mild steel and powder coated for durability. Also, we offer a wide range of
          accessories for our various rack shelving systems, all designed to enhance your chosen solution.
        </p>
        <p class="text-14 md:text-16 w-full lg:w-80% font-light" style="line-height: 30px">
          Our racking solutions help you maximize facility space while simplifying inventory tracking. These
          include:
        </p>
      </div>
    </div>

    <div class="bg-gray-100 py-5 md:py-10 w-full">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          <h3 class="font-bold text-16 md:text-18 mb-2 md:mb-4">Standard Pallet Racks</h3>
          <p class="text-14 md:text-16 font-light">
            Pallet racks are material handling storage systems that keep
            products on pallets organized within warehouses. When
            used correctly, they increase warehouse storage density by
            enabling you to put as many pallets into a single place as
            possible, while maintaining ease-of-access to the items
            stored on them. At Tranos, we create custom pallet racking
            solutions that meets your every storage needs.
          </p>
        </div>
        <div class="w-full zoom-card">
          <img src="../../../static/assets/images/pallet-rack.jpg" alt="tranos" class="w-full h-full object-cover">
        </div>
      </div>
    </div>

    <div class="bg-white py-5 md:py-10 w-full">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div class="w-full zoom-card">
          <img src="../../../static/assets/images/industrial-shelving.jpg" alt="tranos" class="w-full h-full object-cover">
        </div>
        <div class="reverse">
          <h3 class="font-bold text-16 md:text-18 mb-2 md:mb-4">Industrial Warehouse Shelving</h3>
          <p class="text-14 md:text-16 font-light mb-2">
            Industrial warehouse shelving is ideal for storing hand-picked
            inventory for order fulfillment of slower-moving
            SKU's, kitting operations, or small parts assembly.
          </p>
          <p class="text-14 md:text-16 font-light">
            Industrial shelving is available in a variety of strengths, from
            medium to heavy-duty and extra-heavy-duty capacities. The
            commercial shelving units also come in several widths,
            depths, heights, and configurations.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-5 md:py-10 w-full">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          <h3 class="font-bold text-16 md:text-18 mb-2 md:mb-4">Industrial Mezzanines</h3>
          <p class="text-14 md:text-16 font-light">
            These are one of the most economical ways to maximize the
            use of your industrial warehouse or storage facility. By
            building up, you can safely move to otherwise unused space
            and streamline your operations in the process. At Tranos, we
            create mezzanine spaces of all varieties, from the most
            simple access platforms to multilevel complex pick modules.
            We provides seamless execution from expert design of the
            spaces through to professional installation.
          </p>
        </div>
        <div class="w-full zoom-card">
          <img src="../../../static/assets/images/mezzanine.jpg" alt="tranos" class="w-full h-full object-cover">
        </div>
      </div>
    </div>

    <div class="bg-white py-5 md:py-10 w-full">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div class="w-ful zoom-card">
          <img src="../../../static/assets/images/pallet-accessories.jpg" alt="tranos" class="w-full h-full object-cover">
        </div>
        <div class="reverse">
          <h3 class="font-bold text-16 md:text-18 mb-2 md:mb-4">Pallet Rack Safety Accessories</h3>
          <p class="text-14 md:text-16 font-light mb-2">
            Tranos pallet rack safety accessories and design features
            help prevent damage, ensure usability, and improve overall
            warehouse safety. Keeping your workers, inventory, and
            equipment safe promotes productivity and reduces the
            costs of downtime. Contact our team for a custom
            warehouse safety solution that meets your facility and
            equipment needs.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import RackCard from '../../../components/sections/card/rack-card'

export default {
  name: "warehouse-storage",
  components: { RackCard },
  head: {
    title: 'Warehouse'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
h1.page__heading {
  position: relative;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
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
  .reverse {
    grid-row: 1/2;
  }
}

</style>
