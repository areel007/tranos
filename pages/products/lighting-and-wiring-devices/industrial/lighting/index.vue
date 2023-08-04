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
          @click="$router.push('/products/lighting-and-wiring-devices/industrial/wiring-devices')"
        >
          Wiring Devices
        </span>
        |
        <span
          class="font-bold cursor-pointer text-primary"
          @click="$router.push('/products/lighting-and-wiring-devices/industrial/lighting')"
        >
          Lighting
        </span>
      </div>
    </div>

    <h1
      class="container mx-auto mt-10 mb-10 md:mb-20 title text-18 md:text-24 font-bold"
    >
      Lighting
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
    title: 'Lighting & Wiring Devices'
  },
  components: {
    IndustrialWDProductList
  },
  data() {
    return {
      isProductDetailsVisible: false,
      cardDetails: [
        {
          cardImage: '/assets/images/Explosion-proof-Light-Fittings-for-Fluorescent-Lamp.jpg',
          cardProductName: 'Explosion-proof Light Fittings for Fluorescent Lamp',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D',
            'Ex e enclosure with explosion-proof components inside.',
            'Safety interlock between enclosure and diffuser, switches off on opening.',
            'Bult-in electronic ballast, power factor≥0.95.',
            'Emergency unit with protections against overcharge and discharge.',
            'End of lamp life (EOL) rectification effect protection.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Light-Fittings-for-Fluorescent-Lamp-(LED).jpg',
          cardProductName: 'Explosion-proof Light Fittings for Fluorescent Lamp (LED)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D',
            'Two enclosure types: Type I and Type II\n' +
            '    Available lamp and power\n' +
            '    Type I:20W,40WType II:60W',
            'The glass tube stands 4J impact.',
            'Enclosure in Copper-free Aluminium Alloy, powder-coated surface, yellow (RAL1021)',
            'Built-in LED driver, wide voltage input, CC-CV',
            'Built-in LED driver,wide voltage input,CC-CV (constant current-constant voltage) output,power factor ≥0.95',
            'End of lamp life (EOL) rectification effect protection.',
            'Emergency functions are available on request.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-LED-Lightings.jpg',
          cardProductName: 'Explosion-proof LED Lightings',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D',
            'Two enclosure types: Type I and Type II\n' +
            '    Available lamp and power\n' +
            '    Type I:20W,40WType II:60W',
            'Two enclosure types:50, 100, LED : 30W, 50W, 70W, 100W',
            'Isolated LED lamp compartment, CC-CV (constant current-constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure',
            'Low-maintenance due to long service life is up to 100,000 operating hours.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-LED-Lightings-1.jpg',
          cardProductName: 'Explosion-proof LED Lightings',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D',
            'Two enclosure types: Type I and Type II\n' +
            '    Available lamp and power\n' +
            '    Type I:20W,40WType II:60W',
            'Three enclosure types: 90, 160, 240',
            'Applicable lamp and power (max.240W)\n' +
            'LED: 60W, 90W, 120W, 160W, 200W, 240W\n',
            'Isolated LED lamp compartment, CC-CV (constant current - constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure.',
            'International brand white light LED, reasonable arrangement of multi LED, high lighting efficiency and long service life.',
            'Two types of light distribution: spotlight and floodlight, which can be selected on request.',
            'Low-maintenance due to long service life is up to 100,000 operating hours.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-LED-Lightings2.jpg',
          cardProductName: 'Explosion-proof LED Lightings',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D',
            'Three enclosure type: 30, 60, 120',
            'Applicable lamp and power (max.120W), LED : 30W, 60W, 120W',
            'Isolated LED lamp compartment, CC-CV (constant current -constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure',
            'Low-maintenance due to long service life is up to 100,000 operating hours.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-LED-Lightings3.jpg',
          cardProductName: 'Explosion-proof LED Lightings',
          cardList: [
            'Explosion protection to\n' +
            'IEC,NEC\n',
            'Can be used in\n' +
            'Zone 1,2,21,22\n' +
            'Class I,Zone 1,2,22\n' +
            'Division 1, Groups A, B, C, D\n',
            'Applicable lamp and power(max.20W)\n' +
            'LED : 10W, 20W\n',
            'Isolated LED lamp compartment, CC-CV (constant current-constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure',
            'Low-maintenance due to long service life is up to 100,000 operating hours.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-LED-Floodlights.jpg',
          cardProductName: 'Explosion-proof LED Floodlights',
          cardList: [
            'Explosion protection to\n' +
            'IEC,IEC\n',
            'Can be used in\n' +
            'Zone 1,2,21,22\n' +
            'Class I,Zone 1,2,22\n' +
            'Division 1, Groups A, B, C, D\n',
            'Three enclosure types:90, 160, 240',
            'Applicable lamps and power (max.240W)LED: 60W, 90W, 120W, 160W, 200W, 240W',
            'Isolated LED lamp compartment, CC-CV (constant current-constant voltage) power controller compartment and terminal compartment; Wind-convection heat dissipation structure',
            'Standard product is of floodlight effect, the lens of 60°and 90° can be provided on request to realize spotlight effect',
            'Low-maintenance due to long service life is up to 100,000 operating hours.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-LED-Floodlights2.jpg',
          cardProductName: 'Explosion-proof LED Floodlights',
          cardList: [
            'Explosion protection to\n' +
            'IEC,IEC\n',
            'Can be used in\n' +
            'Zone 1,2,21,22\n' +
            'Class I,Zone 1,2,22\n' +
            'Division 1, Groups A, B, C, D\n',
            'Three enclosure types:90, 160, 240',
            'Applicable lamp and power (max.240W)',
            'LED: 80W, 160W,240W',
            'Isolated LED lamp compartment and terminal compartment; Wind-convection heat dissipation structure.',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-LED-Floodlights3.jpg',
          cardProductName: 'Explosion-proof LED Floodlights',
          cardList: [
            'Explosion protection to\n' +
            'IEC,IEC\n',
            'Explosion Protection to \n' +
            'EN, IEC\n',
            'Can be used in\n' +
            'Zone 2,22\n' +
            'Class I, Zone 2\n' +
            'Division 2,Groups A, B, C, D\n',
            'Applicable lamp and power (max.300W).\n' +
            'LED: 80W, 120W, 240W, 300W\n',
            'International brand white light LED, reasonable arrangement of multi LED, high lighting efficiency and long service life.',
            'Two types of light distribution: spotlight and floodlight, which can be selected on request.',
            'Standard luminaries equip without lens, 30° lens and 60° lens which are optional, please indicate when placing an order.',
            'Low-maintenance due to long service life is up to 100,000 operating hours.'
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Light-Fittings.jpg',
          cardProductName: 'Explosion-proof Light Fittings',
          cardList: [
            'Explosion protection to\n' +
            'IEC,IEC\n',
            'Zone 2,21,22\n' +
            '\n' +
            'Class I\n' +
            'Division 2\n' +
            'Groups A, B, C, D\n',
            'Available lamp(max.400W):\n' +
            '-Metal halide lamp (HIE)\n' +
            '-High pressure sodium lamp(HSE)\n' +
            '-High pressure mercury lamp(HME)\n',
            'Three enclosure types:150,250,400.',
            'Integral control gear, easy installation and maintenance',
            'Both American standard and European standard are available',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Light-Fittings2.jpg',
          cardProductName: 'Explosion-proof Light Fittings',
          cardList: [
            'Can be used in\n' +
            '\n' +
            'Zone 1,2,21,22\n' +
            '\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups A, B, C, D\n',
            'Applicable lamp(max.400W):\n' +
            '\n' +
            '  -Metal halide lamp (HIE)\n' +
            '\n' +
            '  -High pressure sodium lamp(HSE)\n' +
            '\n' +
            '  -High pressure mercury lamp(HME)\n',
            'Three enclosure types:150,250,400.',
            'Integral control gear, easy installation and maintenance',
          ]
        },
        {
          cardImage: '/assets/images/Explosion-proof-Light-Fittings3.jpg',
          cardProductName: 'Explosion-proof Lightings',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in\n' +
            '\n' +
            'Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups A, B, C, D\n',
            'Available lamp and power:\n' +
            'Incandescent lamp: 25W, 40W, 60W, 100W\n' +
            'Energy-saving lamp: 9W, 11W\n' +
            'LED lamp: 3W, 5W, 8W\n',
            'Enclosure in Copper-free Aluminium Alloy, powder coated surface, yellow (RAL1021).',
            'The light fittings are supplied without lamp. PHILIPS lamps are recommended',
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
</style>
