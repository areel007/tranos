<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase cursor-pointer"
            @click="$router.push('/products/power-protection')"
            style="line-height: 1"
          >
            LOW-VOLTAGE POWER PROTECTION & DISTRIBUTION
          </span>
        </div>
      </div>
      <img
        src="../../../static/assets/images/LV-Panel-Banner.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto">
        <span
          class="cursor-pointer"
          @click="$router.push('/products/power-protection/tranos-elite-range')"
        >
          Tranos Elite
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/power-protection/siemens-sivacon')"
        >
          Siemens SIVACON S8
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/power-protection/atex-power-panel')"
        >
          ATEX Power Panels
        </span>
      </div>
    </div>

    <h1
      class="container mx-auto mt-10 mb-10 md:mb-20 title text-18 md:text-24 font-semibold"
    >
      Explosion-Proof Power Panels
    </h1>

    <div class="mb-10 container mx-auto">
      <IndustrialWDProductList
        v-for="(_product, index) in cardDetails"
        :key="index"
        :product="_product"
      />

    </div>

  </div>
</template>

<script>
import IndustrialWDProductList from "@/components/blocks/industrial-wd-product-list";

export default {
  name: "atex-power-panel",
  head: {
    title: 'ATEX Power Panel'
  },
  components: {
    IndustrialWDProductList
  },
  data() {
    return {
      cardDetails: [
        {
          cardImage: '/assets/images/Explosion-proof-Control-Stations.jpg',
          cardProductName: 'Explosion-proof Control Stations',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in\n' +
            '\n' +
            'Zone 1,2,21,22\n' +
            '\n' +
            'Class I\n' +
            '\n' +
            'Division 1\n' +
            '\n' +
            'Groups  B, C, D\n',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.',
            'Six types of enclosures'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Lighting-Distribution-Boxes-(Ex-d-e-IIB).jpg',
          cardProductName: 'Explosion-proof Lighting Distribution Boxes (Ex d e IIB)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in\n' +
            '\n' +
            'Zone 1,2,21,22\n' +
            '\n' +
            'Class I\n' +
            '\n' +
            'Division 2\n' +
            '\n' +
            'Groups C, D\n',
            'Main switch and branch switch are operated with external rotary actuator.',
            'Internal wiring to the terminal is finished.',
            'International brand of explosion-proof terminal blocks.',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Illumination(Power)-Distribution-Boxes.jpg',
          cardProductName: 'Explosion-proof Illumination(Power) Distribution Boxes',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in\n' +
            '\n' +
            'Zone 1,2,21,22\n' +
            '\n' +
            'Class I\n' +
            'Division 1, Groups C, D\n',
            'Flameproof enclosure (Ex d IIB)',
            'Main switch and branch switch are operated with external rotary actuator',
            'Internal wiring to the terminal is finished.',
            'International brand of terminal blocks and components.',
            'Copper-free Aluminium Alloy (carbon steel), powder coated surface, or stainless steel.',
            'Special requirements on request.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Distribution-Panels.jpg',
          cardProductName: 'Explosion-proof Distribution Panels',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in\n' +
            '\n' +
            'Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1, Groups B, C, D\n',
            'Flameproof enclosure (Ex d IIB+H2), which can be used as feed distribution equipment in control and distribution system(such as distribution box, switch box of main circuit ,control box, terminal box or motor starting box etc.)',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.',
            'Equipped with specialized hinge structure, which can prevent the flameproof joints from damage when opening and closing the box, and greatly prolong the service life of box.',
            'The boxes can be combined and installed freely to save space and meet the requirements of various distribution systems.',
            'Special requirements on request.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Distribution-Panels2.jpg',
          cardProductName: 'Explosion-proof Distribution Panels',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in\n' +
            '\n' +
            'Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1, Groups B, C, D\n',
            'Flameproof enclosure (Ex d IIB+H2), which can be used as feed distribution equipment in control and distribution system(such as distribution box, switch box of main circuit ,control box, terminal box or motor starting box etc.)',
            'Enclosure: 316 stainless steel',
            'Equipped with specialized hinge structure, which can prevent the flameproof joints from damage when opening and closing the box, and greatly prolong the service life of box.',
            'The boxes can be combined and installed freely to save space and meet the requirements of various distribution systems.',
          ]
        },

      ]
    }
  },
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
h1.title {
  position: relative;
  /*font-size: 30px;*/
  /*font-weight: 700;*/
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}

/*@media screen and (max-width: 768px) {*/
/*  h1.title {*/
/*    font-size: 24px;*/
/*  }*/
/*}*/
</style>
