<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase cursor-pointer"
            @click="$router.push('/products/lighting-and-wiring-devices')"
            style="line-height: 1"
          >
            Lights & Wiring Devices
          </span>
        </div>
      </div>
      <img
        src="/assets/images/LIGHTS-AND-SWITCHES.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="cursor-pointer"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting')"
        >
          Lighting
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets')"
        >
          Switches & Sockets
        </span>
      </div>
    </div>

    <div class="text-30 md:text-30 xl:text-50 font-light mt-5 md:mt-10 mb-3 md:mb-5">
      <div class="container mx-auto">Simon | <span class="font-bold">E3</span></div>
    </div>

    <div class="container mx-auto mb-2 md:mb-5">
      <img src="/assets/images/simon-e3.jpg" alt="simon e3" class="w-full">
    </div>

    <div class="container mx-auto mb-2 md:mb-5">
      <img src="/assets/images/simon-e3-simplicity.jpg" alt="simon e3" class="w-full">
    </div>

    <div class="container mx-auto">
      <p class="text-14 md:text-16 text-center pt-10 pb-5" style="line-height: 1">E3 series offer multiple choice to satisfy your needs.</p>
    </div>

    <div class="container mx-auto mb-2 md:mb-5">
      <img src="/assets/images/simon-e3-interior.png" alt="simon e3" class="w-full">
    </div>

    <div>
      <h1 class="text-14 md:text-16 text-center pt-5 md:pt-10 pb-2" style="line-height: 1">DETAILS MATTER</h1>
      <p class="text-center text-14 md:text-16 pb-0 md:pb-2 line">Precise structure and select materials.</p>
    </div>

    <div class="container mx-auto mb-2 md:mb-5">
      <img src="/assets/images/simon-e3-detail.png" alt="simon e3" class="w-full">
    </div>

    <div>
      <h1 class="text-14 md:text-16 text-center pt-5 md:pt-10 pb-2 line" style="line-height: 1">EASY TO INSTALL</h1>
    </div>

    <div class="container mx-auto mb-2 md:mb-5">
      <img src="/assets/images/easy-to-install.png" alt="simon e3" class="w-full">
    </div>

    <div class="text-gray-700 mb-5 md:mb-10">
      <h1 class="text-center text-16 md:text-24 mb-2 md:mb-5">WANT TO KNOW MORE?</h1>
      <div class="additional-info">
        <div class="flex flex-col items-center cursor-pointer">
          <span class="text-14">Kindly download our brochures:</span>
          <div class="flex gap-2 text-14">
            <a href="https://drive.google.com/file/d/1bZkDrX4DwzZopcadkY7vKr_MYZJqCiJ7/view?usp=sharing" target="_blank" class="uppercase hover:text-primary hover:underline">V8</a>
            <a href="https://drive.google.com/file/d/1BYX5H5z3yVSTWKeE9eHKF0VCzEmsJYA3/view?usp=sharing" target="_blank" class="uppercase hover:text-primary hover:underline">E3</a>
            <a href="https://drive.google.com/file/d/1K4IEcooe57i0v1jhzS2PhF_q48_b4q1K/view?usp=sharing" target="_blank" class="uppercase hover:text-primary hover:underline">E6</a>
            <a href="https://drive.google.com/file/d/13MUM4pCfKkXXLhMDUY7gg39EQeo2tBso/view?usp=sharing" target="_blank" class="uppercase hover:text-primary hover:underline">Commercial Lighting</a>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer" @click="$router.push('/contacts')">
          <span class="text-center text-14">If you still require information, please get in touch with us.</span>
          <span class="uppercase text-14">Contact></span>
        </div>
      </div>
    </div>

    <div class="text-gray-700 mb-5 md:mb-10">
      <h1 class="text-center text-16 md:text-24 mb-2 md:mb-5">MAYBE YOU'RE INTERESTED IN...</h1>
      <div class="container mx-auto grid__options">
        <div class="cursor-pointer" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets/simon-v8')">
          <img src="/assets/images/SV8.jpg" alt="simon" class="mb-2" style="width: 100%">
          <span class="block text-center">SIMON V8</span>
        </div>

        <div class="cursor-pointer" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets/simon-e6')">
          <img src="/assets/images/E6-renew.jpg" alt="simon" class="mb-2" style="width: 100%">
          <span class="block text-center">SIMON E6</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "simon-e3",
  head: {
    title: 'Lights & Wiring Devices'
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.line {
  position: relative;
}
.line:after {
  content: '';
  height: 1px;
  width: 100px;
  background: black;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.additional-info {
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.grid__options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media screen and (max-width: 1000px) {
  .additional-info {
    width: 95%;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
