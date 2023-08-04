<template>
  <div class="relative top-50px md:top-70px mb-5 md:mb-20">

    <div class="relative w-screen h-200 md:h-50vh py-10 md:py-0 mb-8px">
      <img
        src="../../../static/assets/images/enclosures-main-banner-2.jpg"
        alt="tranos enclosures"
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="w-95% md:w-800px mx-auto py-10 enclosures-text">
      <h1 class="text-18 md:text-24 font-bold">Enclosures</h1>
      <p class="text-16 md:text-22 mb-4 text-black" style="line-height: 30px; font-weight: 200">
        Tranos designs and manufactures a broad range of enclosures for electrical, mechanical
        and information technology or data applications. Branded ‘Encase’, our enclosures are
        designed and manufactured according to various standards. This depends also on their
        applications. Some of these standards include IEC 60529 , IEC 60529, IEC 62208, IEC 62271-
        202, NEMA 250.
      </p>
    </div>
    <div class="enclosures-grid">
      <EnclosuresCard
        v-for="(card, index) in enclosureCard"
        :key="index"
        :card-title="card.cardTitle"
        :card-image="card.cardImage"
        @card-action="cardAction(card.path)"
      />

    </div>
  </div>
</template>

<script>
import EnclosuresCard from '../../../components/sections/card/enclosures-card'
import Clients from '../../../components/sections/clients'

export default {
  name: "enclosures",
  head: {
    title: 'Enclosures'
  },
  components: { EnclosuresCard, Clients },
  data() {
    return {
      enclosureCard: [
        {
          cardTitle: 'Electrical Enclosures',
          cardImage: 'electrical-card.jpg',
          path: '/products/enclosures/electrical'
        },
        {
          cardTitle: 'Mechanical Enclosures',
          cardImage: 'mechanical.jpg',
          path: '/products/enclosures/mechanical'
        },
        {
          cardTitle: 'Servers and Datacenter Racks',
          cardImage: 'datacentre.jpg',
          path: '/products/enclosures/servers-and-datacenter-racks'
        },
        {
          cardTitle: 'Battery Cabinets and Racks',
          cardImage: 'battery-cabinet.jpg',
          path: '/products/enclosures/battery-cabinets-and-racks'
        },
        {
          cardTitle: 'Heavy Duty Enclosures',
          cardImage: 'heavyduty.jpg',
          path: '/products/enclosures/heavy-duty'
        },
        {
          cardTitle: 'Customised Enclosures',
          cardImage: 'customised.jpg',
          path: '/products/enclosures/customised'
        },
        {
          cardTitle: 'ATEX Junction Boxes',
          cardImage: 'junction-boxes.jpg',
          path: '/products/enclosures/atex-junction-boxes/'
        },
        {
          cardTitle: 'Meter Boxes',
          cardImage: 'meterbox.jpg',
          path: '/products/enclosures/meter-boxes'
        }
      ],
      counter: 1,
    }
  },
  methods: {
    cardAction (e) {
      this.$router.push(e)
    },
    updateCount () {
      setInterval(() => {
        if (this.counter === 2) {
          this.counter = 1
        } else {
          this.counter = this.counter + 1
        }
      }, 10000)
    }
  },
  mounted() {
    this.updateCount()
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.enclosures-text h1 {
  position: relative;
  /*font-size: 30px;*/
  /*font-weight: 700;*/
  color: #000;
  border-left: 3px solid #00BBFF;
  padding-left: 10px;
  margin-bottom: 20px;
  line-height: 1;
}
.enclosures-grid {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  padding: 10px 0;
  gap: 8px;
}

@media screen and (max-width: 1330px) {
  .enclosures-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 1024px) {
  .enclosures-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 900px) {
  .enclosures-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .enclosures-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .enclosures-text h1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 500px) {
  .enclosures-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>


<!--      <img-->
<!--        src="../../../static/assets/images/enclosures-banner.jpg"-->
<!--        alt="tranos enclosures"-->
<!--        class="w-full h-full object-cover absolute top-0 left-0 z-0"-->
<!--        v-if="counter === 1"-->
<!--      >-->
<!--      <img-->
<!--        src="../../../static/assets/images/enclosures-main-banner-2.jpg"-->
<!--        alt="tranos enclosures"-->
<!--        class="w-full h-full object-cover absolute top-0 left-0 z-0"-->
<!--        v-if="counter === 2"-->
<!--      >-->
