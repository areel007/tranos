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
          @click="$router.push('/products/lighting-and-wiring-devices/industrial/wiring-devices')"
        >
          Wiring Devices
        </span>
        |
        <span
          class="cursor-pointer"
          @click="$router.push('/products/lighting-and-wiring-devices/industrial/lighting')"
        >

          Lighting
        </span>
      </div>
    </div>

    <h1
      class="container mx-auto mt-10 mb-10 md:mb-20 title text-18 md:text-24 font-bold"
    >
      Wiring Devices
    </h1>

    <div class="mb-10 container mx-auto">
      <IndustrialWDProductList
        @show-product-details="showProductDetails"
        v-for="(_product, index) in cardDetails"
        :key="index"
        :product="_product"
      />

    </div>

  </div>
</template>

<script>
import IndustrialWDProductList from '../../../../../components/blocks/industrial-wd-product-list'

export default {
  name: "index",
  components: { IndustrialWDProductList },
  data() {
    return {
      isProductDetailsVisible: false,
      cardDetails: [
        {
          cardImage: '/assets/images/Explosion-proof-Plug-and-Sockets-(GRP).jpg',
          cardProductName: 'Explosion-proof Plug & Sockets (GRP)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22, Class I, Division 2, Groups A, B, C, D, 2P,3P,4P and 5P.',
            'Only the switch in the socket cut off can plug be pulled out, power after inserting the plug.'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Plug-and-Sockets-(Aluminium).jpg',
          cardProductName: 'Explosion-proof Plug & Sockets (Aluminium)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups A, B, C, D\n',
            'Four enclosure types; Four current ratings(16A,32A,63A,125A);3P, 4P or 5P.',
            'Only the switch in the socket cut off can plug be pulled out, power after inserting the plug.',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Plug-Connectors.jpg',
          cardProductName: 'Explosion-proof Plug Connectors',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 3,21,22\n' +
            '   Class I\n' +
            '   Division 2\n' +
            '   Groups A, B, C, D\n',
            ' 4 enclosure types; 8 current ratings ( 10A,16A,25A,32A,63A,80A,100A,125A); 2P,3P,4P and 5P.',
            'Copper-free aluminium enclosure, anodic-oxidation treatment for surface'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Movable-Distribution-Boards.jpg',
          cardProductName: 'Explosion-proof Movable Distribution Boards',
          cardList: [
            ' Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Groups A, B, C, D\n',
            'Type A(portable type) and type B(push type)for option.',
            'The enclosure of type A(portable type):Stainless steel or GRP(glass fibre-reinforced polyester resin), the Max.transformer capacity of stainless-steel product: 1600V A; the Max. transformer capacity of GRP product: 300V A',
            'Several kinds of voltage for option.',
            'Portable type is equipped with 5m cable; push type is equipped with 20m cable; also, can be customized on request.',
            'Type A with transformer function.'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Control-Stations.jpg',
          cardProductName: 'Explosion-proof Control Stations',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups  B, C, D\n',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.',
            'Six types of enclosure.'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-control-system.jpg',
          cardProductName: 'Explosion-proof Control Unit Systems',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 2\n' +
            'Groups A, B, C, D\n',
            'GRP (glass fibre-reinforced polyester resin) enclosure',
            'Three types of enclosure.',
            'Individual unit can be combined into larger units.'
          ]
        },

        {
          cardImage: '/assets/images/Motor-Starters.jpg',
          cardProductName: 'Motor Starters',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups C, D\n',
            'Classified as IIB according to gas atmosphere.',
            'Different motor starters.',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Motor-Starters-(Ex-d-e-IIC).jpg',
          cardProductName: 'Explosion-proof Motor Starters (Ex d e IIC)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2\n' +
            'Class I, \n' +
            'Division 2, Groups A , B, C, D\n',
            'Classified as IIC according to gas atmosphere.',
            'Different motor starters.',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Switches.jpg',
          cardProductName: 'Explosion-proof Switches',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups A, B, C, D\n',
            'Copper-free Aluminium Alloy enclosure, powder coated surface.',
            'Two options: -On-off switch, -Changeover switch'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Motor-Switches.jpg',
          cardProductName: 'Explosion-proof Motor Switches',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups C, D\n',
            'Classified as IIB according to gas atmosphere.',
            'Copper-free Aluminium Alloy enclosure, powder-coated surface.',
            'Built-in MCB (miniature circuit breaker), MCCB (Molded Case Circuit Breaker)'
          ]
        },

        {
          cardImage: '/assets/images/Explosion-proof-Motor-Switches(Ex-d-IIC).jpg',
          cardProductName: 'Explosion-proof Motor Switches (Ex d IIC)',
          cardList: [
            'Explosion protection following EN, IEC standards.',
            'Can be used in: Zone 1,2,21,22\n' +
            'Class I\n' +
            'Division 1\n' +
            'Groups A, B, C, D\n',
            'Classified as IIC according to gas atmosphere.',
            'Copper-free Aluminium Alloy enclosure, powder-coated surface.',
            'Built-in MCB (miniature circuit breaker), MCCB (moulded case circuit breaker).'
          ]
        },

      ]
    }
  },
  head: {
    title: 'Lighting & Wiring Devices'
  },
  methods: {
    showProductDetails () {
      this.isProductDetailsVisible = !this.isProductDetailsVisible
    }
  }

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
