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
      <div class="container py-3 mx-auto font-light">
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting')"
        >
          Lighting
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets')"
        >
          Switches & Sockets
        </span>
      </div>
    </div>

    <div class="my-5 md:my-10">
      <div class="text-center">
        <h1 class="text-35 md:text-50 font-light text-primary">VALOR</h1>
        <span class="text-18 md:text-28 font-light text-gray-700">The best solution for a cost-effective installation.</span>
      </div>
    </div>

    <div class="container mx-auto">
      <ul class="border-b border-gray-400 pb-5 md:pb-7 text-gray-500 whitespace-nowrap text-14 md:text-16">
        <li class=""><a href="#ceiling-light">Ceiling light</a></li>
        <li><a href="#spotlight">Spotlight</a></li>
        <li><a href="#batten">Batten</a></li>
        <li><a href="#tube">Tube</a></li>
        <li><a href="#bulb">Bulb</a></li>
        <li><a href="#downlight">Downlight</a></li>
      </ul>
    </div>

    <!--    Ceiling light-->
    <div id="ceiling-light">

      <!--      Ceiling light-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">Ceiling Light</span>
        <p class="product-text">
          Ceiling Light is ideal for places that require ambient lighting to decorate and to
          light in specific areas with surface  installation. It has timeless and neutral design
          to cover lighting needs in transit areas (staircases, corridors and  halls, emergency
          exits, etc.), it is suitable for hotels, shopping centers and commercial places of
          all kinds. It can  also be used at homes.
        </p>
        <img src="/assets/images/ceiling-light.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

      <!--      Sensing ceiling light-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">Sensing CL</span>
        <p class="product-text">
          Sensing CL is ideal for places that require ambient lighting for specific areas with surface
          installation. Also, it includes a presence detector to improve the functionality and increase
          the energy saving. Sensing CL has timeless and neutral design to cover lighting needs in transit
          areas (staircases, corridors and halls, emergency exits, etc.), in open-plan areas or places
          that need extra lighting.
        </p>
        <img src="/assets/images/sensing-ceiling-light.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

    <!--    Spotlight-->
    <div id="spotlight">

      <!--      SP1-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">SP1</span>
        <p class="product-text">
          SP1 is ideal home lighting with 36° beam angle and different color temperature to choose.
          Two different lumen packages for better adaptability to your installation. This spotlight
          finishing is white, which integrates seamlessly into any space, without clash in no way
          with the decoration chosen for the place.
        </p>
        <img src="/assets/images/sp1.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

      </div>

<!--    Batten-->

    <div id="batten">
      <!--      T5-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">T5</span>
        <p class="product-text">
          Offers decorative or ambient lighting. Intended for use in areas such as cavities,
          reception areas, shelves or anywhere else to complement general lighting. Available
          in two different lengths that could be inter-connected.
        </p>
        <img src="/assets/images/t5.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

<!--    Tube-->

    <div id="tube">
      <!--      T8 Double End-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">T8 Double End</span>
        <p class="product-text">
          Great choice if you are looking for replace your old fluorescent T8. With LED T8 can achieve
          no noise, no flickering and long-life installation. Valor LED we use a double electrical
          entrance with a more competitive price. Thanks to all its technical features, it can reach
          good energy efficiency in the lighting installations at the different spaces from the first day.
        </p>
        <img src="/assets/images/t8-double-end.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

    <!--    Bulb-->

    <div id="bulb">
      <!--      LED Bulb-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">LED Bulbs</span>
        <p class="product-text">
          A great choice if you are looking for replace your old Bulb. With Valor LED bulb can achieve
          no flickering, opal diffuser and long-life installation. Different sizes and luminous packages
          to fit your needs. Thanks to all the technical features, it can reach good energy efficiency
          in the lighting installations at the different spaces from the first day.
        </p>
        <img src="/assets/images/led-bulb.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

    <!--    Bulb-->

    <div id="downlight">

      <!--      Downlight-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">Downlight</span>
        <p class="product-text">
          The Downlight flush-mounted in white finishing with general optic improves the conditions
          of indoor lighting. For its construction we use PMMA optic which provide uniform illumination.
          For the lighting emission, we use direct light to maximize the efficiency. And thanks to
          the different sizes and shapes, round and square, it can replace any existing product
          in your installation.
        </p>
        <img src="/assets/images/downlight.png" alt="simon ft40" class="mb-10">
      </div>

    </div>

    <div class="text-gray-700 mb-5 md:mb-10">
      <h1 class="text-center text-16 md:text-24 font-light mb-2 md:mb-5">WANT TO KNOW MORE?</h1>
      <div class="additional-info">
        <div class="flex flex-col items-center cursor-pointer">
          <span>For more information, go to Downloads.</span>
          <span class="uppercase">Downloads></span>
        </div>

        <div class="flex flex-col items-center cursor-pointer" @click="$router.push('/contacts')">
          <span class="text-center">If you still require information, please get in touch with us.</span>
          <span class="uppercase">Contact></span>
        </div>
      </div>
    </div>

    <div class="text-gray-700 mb-5 md:mb-10">
      <h1 class="text-center text-16 md:text-24 font-light mb-2 md:mb-5">MAYBE YOU'RE INTERESTED IN...</h1>
      <div class="container mx-auto cursor-pointer" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting/duro')">
        <img src="/assets/images/duro-image.jpg" alt="simon valor" class="mb-2">
        <span class="block text-center">DURO</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "valor"
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
ul {
  width: 70%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(8, min-content);
  gap: 20px;
  justify-content: center;
  margin: 0 auto 40px auto;
}
ul li {
  justify-self: center;
}
.product-text {
  width: 770px;
  margin: 0 auto 20px auto;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
}
.line {
  width: 770px;
  margin: 0 auto 40px auto;
}
.additional-info {
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1000px) {
  ul {
    width: 100%;
    gap: 5px;
  }
  .product-text {
    width: 100%;
  }
  .line {
    width: 100%;
  }
  .additional-info {
    width: 95%;
    flex-direction: column;
    gap: 10px;
  }
}

@media screen and (max-width: 768px) {
  ul {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto 20px auto;
  }
}
</style>
