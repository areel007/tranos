<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 py-10 md:py-0">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <div class="container mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase cursor-pointer"
            @click="$router.push('/products/enclosures')"
            style="line-height: 1"
          >
            Enclosures
          </span>
        </div>
      </div>
      <img
        src="/assets/images/enclosures-banner.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="text-black text-14" style="background: #F3F3F0">
      <div class="container py-3 mx-auto font-light">
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/electrical')"
        >
          Electrical
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/mechanical')"
        >
          Mechanical
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/servers-and-datacenter-racks')"
        >
          Servers & Datacenter Racks
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/battery-cabinets-and-racks')"
        >
          Battery Cabinets & Racks
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/heavy-duty')"
        >
          Heavy Duty
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/customised')"
        >
          Customised
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/enclosures/atex-junction-boxes')"
        >
          ATEX Junction Boxes
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/enclosures/meter-boxes')"
        >
          Meter Boxes
        </span>
      </div>
    </div>

    <h1
      class="container mx-auto mt-10 mb-10 md:mb-20 title text-18 md:text-24 font-bold"
    >
      ATEX Junction Boxes
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
import IndustrialWDProductList from '@/components/blocks/industrial-wd-product-list'

export default {
  name: "index",
  head: {
    title: 'Enclosures'
  },
  components: {
    IndustrialWDProductList
  },
  data() {
    return {
      cardDetails: [
        {
          cardImage: '/assets/images/Explosion-proof-Junction-Boxes.jpg',
          cardProductName: 'Explosion proof-Junction Boxes',
          cardList: [
            'Explosion protection following IEC, NEC, EN, UL, CSA standards.',
            'Can be used in Zone 1,2,21,22; Class I, Division 1; Groups A, B, C, D',
            'Four types: A,B,C,D',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Junction-Boxes2.jpg',
          cardProductName: 'Explosion-proof Junction Boxes',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2,21,22 Class I, Division 1, Groups A, B, C, D',
            'Six types: A,B,C,D,E,F.',
            'Type A, B, C, D, E in Copper-free Aluminium Alloy only; Type F in Copper-free Aluminium Alloy or cast iron.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Terminal-Boxes.jpg',
          cardProductName: 'Explosion-proof Terminal Boxes - Type 1 Stainless Steel',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 0,1,2,21,22, Class I, Division 2, Groups A, B, C, D, Stainless steel enclosure.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Terminal-Boxes-(glass-fibre-reinforced-polyester).jpg',
          cardProductName: 'Explosion-proof Terminal Boxes (glass fibre-reinforced polyester)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 0,1,2,21,22, Class I, Division 2, Groups A, B, C, D.',
            'GRP (glass fibre-reinforced polyester resin) enclosure',
          ]
        },
        {
          cardImage: '/assets/images/Terminal-Boxes.jpg',
          cardProductName: 'Terminal Boxes',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.',
            'Explosion-proof types(Ex e)',
            'Enclosure: Copper-free Aluminium Alloy(carbon steel or stainless steel is optional),powder coated surface.',
            'Size and direction of cable entries can be customized on request.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Terminal-Boxes-(Copper-free-Aluminium-Alloy).jpg',
          cardProductName: 'Explosion-proof Terminal Boxes (Copper-free Aluminium Alloy)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.',
            'Explosion-proof types(Ex d IIC)',
            'Enclosure: Copper-free Aluminium Alloy(carbon steel or stainless steel is optional),powder coated surface.',
            'Size and direction of cable entries can be customized on request.',
          ]
        },
        {
          cardImage: '/assets/images/EP-Terminal-Boxes-Aluminium.jpg',
          cardProductName: 'EP Terminal Boxes Aluminium',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.',
            'Explosion-proof types(Ex d IIB)',
            'Enclosure: Copper-free Aluminium Alloy(carbon steel or stainless steel is optional)',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Enclosures.jpg',
          cardProductName: 'Explosion-proof Enclosures',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.',
            'Flameproof enclosure (Ex d IIB) in aluminium alloy, formed of low pressure casting. 13 versions (external flange)',
            'Cable entries can be drilled, and components can be installed by user on request.',
            'Safety shall be considered when installing',
          ]
        },
        {
          cardImage: '/assets/images/Increased-Safety-Enclosure-(copper-free-aluminum-alloy).jpg',
          cardProductName: 'Increased Safety Enclosure (copper-free aluminum alloy)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D.',
            'Copper-free Aluminium Alloy enclosure (Ex e), 8 versions.',
            'Cable entries can be drilled and components can be installed by user on request.',
            'Safety shall be considered when installing components according to related electrical standards.',
            'Special requirements on request.',
          ]
        },
        {
          cardImage: '/assets/images/Increased-Safety-Enclosures-(Ex-e).jpg',
          cardProductName: 'Increased Safety Enclosures (Ex e)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2, Class I, Division 2, Groups A, B, C, D.',
            'Increased-safety enclosure (Ex e) in stainless steel, 8 versions.',
            'Cable entries can be drilled and components can be installed by user on request.',
            'Safety shall be considered when installing components according to related electrical standards.',
            'Special requirements on request.',
          ]
        },
        {
          cardImage: '/assets/images/Series-Explosion-proof-Enclosures-(Ex-e).jpg',
          cardProductName: 'Series Explosion-proof Enclosures (Ex e)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in Zone 1,2, Class I, Division 2, Groups A, B, C, D.',
            'Increased-safety enclosure (Ex e) in GRP; 12 versions.',
            'Cable entries can be drilled and components can be installed by user on request.',
            'Safety shall be considered when installing components according to related electrical standards.',
            'Special requirements on request.',
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
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}

@media screen and (max-width: 768px) {
  h1.title {
    font-size: 24px;
  }
}
</style>
