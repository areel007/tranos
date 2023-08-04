<template>
  <main  class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/gaskets')"
            style="line-height: 1"
          >
            Gaskets
          </span>
        </div>
      </div>
      <img
        src="/assets/images/gasket-banner-rev.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto font-normal">
        <span
          class="cursor-pointer"
          @click="$router.push('/products/gaskets/spiral-wound-gaskets')"
        >
          Spiral Wound Gaskets
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/gaskets/soft-cut-gaskets')"
        >
          Soft-Cut Gaskets
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/gaskets/kammprofile-gaskets')"
        >
          Kammprofile Gaskets
        </span>
      </div>
    </div>

    <div class="mt-10">
      <div class="gaskets-title container mx-auto mb-10">
        <h1 class="text-18 md:text-24 font-bold">Soft-Cut Gaskets</h1>
      </div>

      <div class="gaskets-banner">
        <div class="h-full zoom-image-card">
          <img src="/assets/images/softcut_bg.jpg" class="w-full h-full" alt="tranos">
        </div>
      </div>

      <div class="w-95% md:w-900 mx-auto">
        <p class="text-14 md:text-22 mb-2 md:mb-5 font-light" style="line-height: 30px; font-weight: 200">
          Our Soft sealing nonmetallic gaskets are manufactured by either cutting using CNC (computer
          numerically controlled) machines or die cutting from sheets of special sealing materials. These
          gaskets are used with both raised face and flat faced flanges. faced flanges. Our flange gaskets
          comply with ASME B16.21 standard. Various shapes and sizes are possible with this type of
          gaskets.
        </p>
        <p class="text-14 md:text-16 mb-2 font-light" style="line-height: 30px">
          Applications include low and medium pressure applications depending on the type of material
          used. Specific materials can be selected based on the application and customer preference.
        </p>

      </div>
    </div>

    <div class="my-5">

      <section class="w-95% md:w-900 mx-auto pb-10 border-b-2 border-black">
        <span class="font-bold block mb-4 text-20">Stainless Steel Tanged Graphite Gasket</span>
        <div class="grid__grid">
          <div class="text-14 md:text-16 font-light" style="line-height: 30px">
            <p class="mb-6">
              Our stainless-steel tanged gasket comprises two outer
              layers of graphite foil with a central tanged stainless-steel
              core 0.1mm thick mechanically bonded therefore no
              need for adhesive.
            </p>

            <span class="font-bold block mb-6 text-base">Applications</span>
            <p class="mb-6">This gasket is used in steam system applications, the
              petrochemical and chemical industries, piping and
              machinery. It’s excellent sealing abilities are also used
              where corrosive media is present and can be used at
              cryogenic temperatures.
            </p>
            <p>
              This gasket is used in steam system applications, the
              petrochemical and chemical industries, piping and
              machinery. It’s excellent sealing abilities are also used
              where corrosive media is present and can be used at
              cryogenic temperatures.
            </p>
          </div>
          <div>
            <div class="w-full bg-gray-200 mb-4 zoom-image-card">
              <img src="/assets/images/SCG1.jpg" class="w-full h-full object-contain" alt="">
            </div>
            <div class="border-t-2 border-b-2 border-black text-12">
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Graphite Purity</p>
                <p>99% minimum</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Stainless steel foil tanged</p>
                <p>0.1mm thick 1.4401 316SS foil tanged</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Maximum service temperature</p>
                <p>550°C in oxidising conditions. Consult Gee for further information</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Maximum service temperature</p>
                <p>750°C in inert and reducing conditions</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Maximum service pressure</p>
                <p>140 Bar</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Compressibility</p>
                <p>30 to 40%</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Recovery</p>
                <p>15 to 20%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-95% md:w-900 mx-auto pb-10 border-b-2 border-black">
        <span class="font-bold block mb-4 text-20 mt-5">Stainless Steel Reinforced Graphite Gasket</span>
        <div class="grid__grid">
          <div>
            <div class="w-full bg-gray-200 mb-4 zoom-image-card">
              <img src="/assets/images/SCG2.jpg" class="w-full h-full object-contain" alt="">
            </div>
            <div class="border-t-2 border-b-2 border-black text-12">
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Graphite Purity</p>
                <p>99% minimum</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Stainless steel foil tanged</p>
                <p>0.05mm thick 1.4401 316</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Maximum service temperature</p>
                <p>550°C in oxidising conditions.</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Maximum service temperature</p>
                <p>750°C in inert and reducing conditions</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Maximum service pressure</p>
                <p>140 Bar</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Compressibility</p>
                <p>40 to 50%</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Recovery</p>
                <p>10 to 15%</p>
              </div>
            </div>
          </div>
          <div class="text-14 md:text-16 font-light" style="line-height: 30px">
            <p class="mb-6">
              Our stainless-steel reinforced graphite gasket comprises
              of two outer layers of graphite with a stainless-steel core
              0.05mm thick.
            </p>

            <span class="font-bold block mb-6 text-base">Applications</span>
            <p class="mb-6">This gasket is used in steam system applications, the
              petrochemical and chemical industries, piping and
              machinery. It’s excellent sealing abilities are also used
              where corrosive media is present and can be used at
              cryogenic temperatures.
            </p>
            <p>
              Stainless steel reinforced graphite gaskets are used in
              applications such as pumps, fitting and valves with low
              gasket stresses. It’s excellent sealing abilities are also
              used where corrosive media is present and can be used at cryogenic temperatures.
            </p>
          </div>
        </div>
      </section>

      <section class="w-95% md:w-900 mx-auto pb-10 border-b-2 border-black">

        <span class="font-bold block mb-4 text-20 mt-5">Non-asbestos Gasket</span>

        <div class="grid__grid">
          <div class="text-14 md:text-16 font-light" style="line-height: 30px">
            <p class="mb-6">
              Our non-asbestos gasket jointing material contains a
              mixture of aramid and glass fibres with a nitrile rubber
              binder. It’s an economical, general-purpose material for
              use in light to medium gasket stress applications. It
              exhibits good sealing and torque retention properties.
              Filling the spaces between two or more mating surfaces,
              generally to prevent leakage from or into the joining
              objects while under compression.
            </p>

            <span class="font-bold block mb-6 text-base">Applications</span>
            <p class="mb-6">
              Specifically designed to satisfy the growing demand for
              numerous aggressive chemicals used by industry today
              including oil, fuels, gases, freons, paper & pulp. It’s
              Excellent sealing properties can be used in many
              applications including pipelines, radiators, boilers and
              many other instances of flanged joints.
            </p>
          </div>
          <div>
            <div class="w-full bg-gray-200 mb-4 zoom-image-card">
              <img src="/assets/images/SCG3.jpg" class="w-full h-full object-contain" alt="">
            </div>
            <div class="border-t-2 border-b-2 border-black text-12">
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Gross Density</p>
                <p>1.7gcm<sup>3</sup> - 2.0gcm<sup>3</sup></p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Compressibility</p>
                <p>5%-15%</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Standard Thickness</p>
                <p>0.25 - 6.0mm Non-metallic range<br>
                  0.80 - 6.0mm Metallic range
                </p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Colour</p>
                <p>Green & white (unless specified)</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Operating Temperature</p>
                <p>Max Peak Temp. 440°C<br>
                  Max Continuous Temp. 350°C<br>
                  Max Continuous Temp. with steam 250°C<br>
                  Max Operating Pressure 150 Kg/ cm2
                </p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Conformity</p>
                <p>Conforms to BS-7531-Grade X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-95% md:w-900 mx-auto pb-10 border-b-2 border-black">
        <span class="font-bold block mb-4 text-20 mt-5">Stainless Steel Reinforced Graphite Gasket</span>
        <div class="grid__grid">
          <div>
            <div class="w-full bg-gray-200 mb-4 zoom-image-card">
              <img src="/assets/images/SCG4.jpg" class="w-full h-full object-contain" alt="">
            </div>
            <div class="border-t-2 border-b-2 border-black text-12">
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Graphite Purity</p>
                <p>99% minimum</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Stainless steel foil tanged</p>
                <p>0.05mm thick 1.4401 316</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Maximum service temperature</p>
                <p>550°C in oxidising conditions.</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Maximum service temperature</p>
                <p>750°C in inert and reducing conditions</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Maximum service pressure</p>
                <p>140 Bar</p>
              </div>
              <div class="table__grid bg-white p-2">
                <p class="font-bold">Compressibility</p>
                <p>40 to 50%</p>
              </div>
              <div class="table__grid bg-table-w-smoke p-2">
                <p class="font-bold">Recovery</p>
                <p>10 to 15%</p>
              </div>
            </div>
          </div>
          <div class="text-14 md:text-16 font-light" style="line-height: 30px">
            <p class="mb-6">
              Our PTFE gaskets work efficiently at both low and high
              temperatures.
            </p>

            <span class="font-bold block mb-6 text-base">Applications</span>
            <p class="mb-6">
              This gasket offers useful properties in various
              applications such as chemical resistance, thermal
              stability, cryogenic properties, low co-efficient of friction,
              low surface energy, low dielectric constant, high volume
              and surface resistivity and flame resistance.
            </p>
            <p>
              These properties allow the use of the gasket in several
              fields such as:
            </p>
            <ul class="list-disc ml-4">
              <li>Chemical</li>
              <li>Electrical and Electronic</li>
              <li>Petrochemical</li>
              <li>Automotive</li>
              <li>Mechanical</li>
              <li>Medical</li>
              <li>Aeronautics</li>
              <li>Semiconductor and Food Industry</li>
            </ul>
          </div>
        </div>
      </section>

      <div>
        <div class="my-10 w-95% md:w-900 mx-auto">
          <p class="text-14 leading-5">For further enquiries:<br>Call +234 1 271 7120 or send us an email <span class="bg-primary text-white p-1 rounded">info@tranos.ng</span></p>
        </div>
      </div>

    </div>

  </main>
</template>

<script>
export default {
  name: "soft-cut-gaskets",
  head: {
    title: 'Gaskets'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
}
.gaskets-title h1 {
  position: relative;
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.gaskets-banner {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto 40px auto;
}
.grid__grid {
  display: grid;
  grid-template-columns: 50% 1fr;
  gap: 40px;
}
.table__grid {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 20px;
  line-height: 1.3;
}
.zoom-image-card {
  overflow: hidden;
}
.zoom-image-card img {
  transition: transform .5s ease-in-out;
}
.zoom-image-card:hover img {
  transform: scale(1.1);
}
@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
  }
  .gaskets-banner {
    margin: 0 auto 10px auto;
  }
}
</style>
