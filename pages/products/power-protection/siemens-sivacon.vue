<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/power-protection')"
            style="line-height: 1"
        >
            Low-voltage Power Protection & Distribution
          </span>
        </div>
      </div>
      <img
        src="../../../static/assets/images/LV-Panel-Banner.jpg"
        alt="tranos power distribution"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span class="cursor-pointer" @click="$router.push('/products/power-protection/tranos-elite-range')">Tranos Elite</span> | <b class="font-bold text-primary cursor-pointer" @click="$router.push('/products/power-protection/siemens-sivacon')">Siemens SIVACON S8</b> | <span class="cursor-pointer" @click="$router.push('/products/power-protection/atex-power-panel')">ATEX Power Panels</span>
      </div>
    </div>

    <div class="pt-7 md:pt-20">

      <div class="container mx-auto flex items-center gap-0 md:gap-1">
        <img src="../../../static/assets/images/Siemens-logo.svg" class="w-100px md:w-145 ml-0 md:ml-6" alt="tranos">
        <span class="text-20 md:text-28 font-bold">SIVACON S8</span>
      </div>

      <div class="container mx-auto w-full h-auto">
        <img src="../../../static/assets/images/sivacon8_1.jpg" alt="SIVACON S8">
      </div>

      <div class="w-95% lg:w-900 mx-auto my-10">
        <h1 class="text-20 md:text-28 text-gray-700 mb-2 md:mb-6 font-normal">Intelligent Power Distribution</h1>
        <p class="text-16 md:text-22 mb-4 font-light text-black" style="line-height: 1.3; font-weight: 200">
          Tranos is the licensed technology partner for Siemens SIVACON S8 in Nigeria. We are the only Level-1 technology partner
          for the low voltage switchgear range in Nigeria. This means that we are licensed to produce the SIVACON S8
          switchboards under the Siemens brand.
        </p>
        <p class="text-14 md:text-16 mb-4 font-light text-black" style="line-height: 1.5">
          We have combined Siemens’ years of technology leadership along with our world-class sheet metal designing and
          manufacturing capability to produce switchgear that can be relied upon by our numerous customers.
        </p>
        <p class="text-14 md:text-16 font-light text-black" style="line-height: 1.5">
          With SIVACON S8, we produce type-approved low voltage panels up to 7,000A and motor control centers up to
          3,600A with the best safety features and digital connectivity.
        </p>
      </div>
      <div style="background: whitesmoke;" class="py-5 md:py-60px px-0">
        <div class="sivacon-grid">
          <div class="w-full h-auto image-div">
            <img src="../../../static/assets/images/sivacon8-update.jpg" alt="SIVACON S8" class="w-full">
          </div>
          <div class="text-14 md:text-16 font-light" style="line-height: 1.5">
            <h2 class="font-semibold text-16 md:text-22 mb-3 md:mb-5">SIVACON S8 low-voltage switchboard</h2>
            <p class="mb-3 md:mb-5">
              The SIVACON S8 low-voltage power distribution boards and SENTRON components are tried-and-true and perfectly
              compatible for safe, flexible, and efficient implementation of power distribution planning,
              design, and operation required in industrial plants, buildings, and infrastructure.
            </p>
            <p class="mb-3 md:mb-5">
              This not only helps to significantly reduce investment costs and risks: It also increases plant
              availability throughout the entire period of use.
            </p>
            <p class="mb-3 md:mb-5">
              The SIVACON S8 low-voltage power distribution board ensures a high level of personal and plant safety.
              Continuous testing to IEC 61641 and VDE 0660 Part 500-2 guarantees safety in the event of an arcing fault.
              Many well-thought-out details, including a reduced use of plastic parts and insulated main busbars,
              guarantee maximum safety and plant availability, resulting in low liability risk.
            </p>
            <p class="mb-3 md:mb-5">
              Over 404,000 switching boards have already been launched on the market by SIVACON Technology
              Partners – proof that technologically sophisticated solutions can be efficiently implemented with
              the SIVACON S8 low-voltage power distribution board. Power distribution is easy to plan, and the
              distribution board can be quickly configured using the SIMARIS software tools. The result: time
              savings and planning reliability throughout the entire process.
            </p>

            <div>
              <a href="https://drive.google.com/file/d/1RrlGka6PATxnrZYp0KSvrBX7YxiTtR9t/view?usp=sharing" target="_blank">
                <button class="bg-primary text-white block px-4 py-1 mb-2 rounded-md text-sm">Download Catalogue</button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "siemens-sivacon",
  head: {
    title: 'Siemens SIVACON S8'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.sivacon-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
  overflow: hidden;
}
.sivacon-grid:hover .image-div img {
  transform: scale(1.05);
}
.image-div img {
  transition: transform .5s ease-in-out;
}

@media screen and (max-width: 768px) {
  .sivacon-grid {
    grid-template-columns: 1fr;
  }
}
</style>
