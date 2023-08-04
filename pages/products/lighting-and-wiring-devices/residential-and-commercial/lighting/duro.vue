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
        <h1 class="text-35 md:text-50 font-light text-primary">DURO</h1>
        <span class="text-18 md:text-28 font-light text-gray-700">Flexibility and durability solutions.</span>
      </div>
    </div>

    <div class="container mx-auto">
      <ul class="border-b border-gray-400 pb-5 md:pb-7 text-gray-500 whitespace-nowrap text-14 md:text-16">
        <li class=""><a href="#downlight">Downlight</a></li>
        <li><a href="#spotlight">Spotlight</a></li>
        <li><a href="#panel-light">Panel light</a></li>
        <li><a href="#bulb">Bulb</a></li>
        <li><a href="#linear-light">Linear light</a></li>
        <li><a href="#tube">Tube</a></li>
        <li><a href="#strip">Strip light</a></li>
        <li><a href="#mirror-light">Mirror light</a></li>
      </ul>
    </div>


<!--    Downlight-->
    <div id="downlight">

<!--      FT40-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">FT40</span>
        <p class="product-text font-light ">
          The downlight has surface and recessed installation options, bring more versatility to the different
          spaces. With a slim profile, it can fit any ceilings. It is commonly used in office projects or in
          commercial spaces. Thus, as in areas of passage or lobbies that require homogeneous general  lighting.
        </p>
        <img src="/assets/images/ft40.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

<!--      Grace-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">Grace</span>
        <p class="product-text">
          The Downlight flush-mounted in ivory finishing with general optic improves the conditions of
          indoor lighting. For its construction we use PMMA optic with a small cut off to improve the glare
          control. For the lighting emission, we use direct light to maximize the efficiency. And thanks to
          the different sizes, it can replace any existing product in your installation.
        </p>
        <img src="/assets/images/grace.png" alt="simon grace" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

<!--      Wave-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">Wave</span>
        <p class="product-text">
          The Downlight flush-mounted in ivory finishing with general optic improves the
          conditions of indoor lighting.  For its construction we use PMMA optic. For the lighting
          emission, we use direct light to maximize the  efficiency. And thanks to the different sizes,
          it can replace any existing product in your installation.
        </p>
        <img src="/assets/images/wave.png" alt="simon grace" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

<!--    Spotlight-->

    <div id="spotlight">

      <!--      KC1-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">KC1</span>
        <p class="product-text">
          The scope of application is very broad; it is ideal for lighting in hotels, restaurants and
          residential spaces. Also, it is ideal to be used as complementary lighting in any other type of
          work such as education, leisure spaces, public equipment buildings or commercial spaces.
        </p>
        <img src="/assets/images/kc1.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

<!--    Panel light-->

    <div id="panel-light">

      <!--      PL-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">PL</span>
        <p class="product-text">
          Modular Luminaire can be seamlessly integrated into different suspended metal
          ceiling  solutions. Its optical system provides uniform lighting for very large areas.
          And thanks to  its different size and luminaire output, it adapts to the lighting needs of the space.
        </p>
        <img src="/assets/images/pl.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

<!--    Bulb-->

    <div id="bulb">

      <!--      GU10-->
      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">GU10</span>
        <p class="product-text">
          A great choice if you are looking for replace your old Bulb. With GU10 can achieve no
          flickering, opal diffuser and long-life installation. Thanks to all the technical features,
          it can reach good energy efficiency in the lighting installations at the different spaces
          from the first day. Also, with the versatility of dimming options.
        </p>
        <img src="/assets/images/gu10.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

<!--    Linear light-->

    <div id="linear-light">

      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">LL20</span>
        <p class="product-text">
          A suspended or surface luminaire installed on the ceiling, providing adequate lighting
          for even lighting requirement. With the different finishing, it can blend in different environment.
        </p>
        <img src="/assets/images/ll20.png" alt="simon ft40" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

<!--    Tube-->

    <div id="tube">

      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">T8 Single End</span>
        <p class="product-text">
          Great choice if you are looking for replace your old fluorescent T8. With LED T8 can achieve
          no noise, no flickering and long-life installation. Duro LED is ready with a single electrical
          entrance, high power factor (0,9) and efficiency higher than 100 lm/w. Thanks to all its technical
          features, it can reach good energy efficiency in the lighting installations at the different spaces
          from the first day.
        </p>
        <img src="/assets/images/t8-single-end.png" alt="simon t8 single end" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

<!--    Strip-->

    <div id="strip">

      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">JL Gen3 HV Strip</span>
        <p class="product-text">
          JL Gen3 HV strip, provides ideal ambient lighting. Also allows highlighting of the shapes around it,
          and to apply different color effects that are attractive and ideal for many types of situations.
          It is perfect for corridors, open-plan areas, cabinets or display cases, shelving, etc.
          For better flexibility, it offers different lumen packages and color temperatures. For installation,
          it can connect to grid directly, no need power driver.
        </p>
        <img src="/assets/images/jl.png" alt="JL Gen3 HV Strip" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">SS20</span>
        <p class="product-text">
          SS20 range provides decorative or ambient lighting for areas such as hallways, reception areas,
          shelves or any other space to complement the general lighting. Several versions are available with
          different power, CCT, IP level…
        </p>
        <img src="/assets/images/ss20.png" alt="ss20" class="mb-10">
        <div class="border-b border-gray-400 mb-10 line"></div>
      </div>

    </div>

    <!--    Mirror light-->

    <div id="mirror-light">

      <div class="container mx-auto">
        <span class="text-center font-bold text-20 md:text-30 mb-2 md:mb-5 block">Mirror Light</span>
        <p class="product-text">
          Mirror Light is designed to be placed above the mirror for LED lighting projects in washbasins,
          bathrooms and toilets. Duro Mirror Light has been made of aluminum and its elongated design allows
          a greater distribution of light. The LEDs are distributed around 360°, without dark areas on both
          sides, bringing uniform and clear light effect.
        </p>
        <img src="/assets/images/mirror-light.png" alt="Mirror light" class="mb-10">
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
      <div class="container mx-auto cursor-pointer" @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting/valor')">
        <img src="/assets/images/valor-image.jpg" alt="simon valor" class="mb-2">
        <span class="block text-center">VALOR</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "duro"
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
  .product-text {
    font-size: 14px;
  }
}
</style>
