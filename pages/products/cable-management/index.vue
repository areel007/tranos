<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-full h-200 md:h-50vh mb-10 md:mb-20">
      <img src="/assets/images/cable-mgt-main-banner.jpg" class="w-full h-full object-cover" alt="tranos">
    </div>

    <div class="container mx-auto grid__grid mb-10 md:mb-20">
      <CableManagementCard
        v-for="(_card, index) in cardDetails"
        :key="index"
        :front-card="_card.frontCard"
        :card-back-img="_card.cardBackImg"
        :path="_card.path"
        @card-action="cardAction($event)"
      />
    </div>

  </div>
</template>

<script>
import CableManagementCard from '../../../components/blocks/cards/cable-management-card'

export default {
  name: "index",
  head: {
    title: 'Cable Management & Support System'
  },
  components: {
    CableManagementCard
  },
  data () {
    return {
      cardDetails: [
        {
          frontCard: 'cable-magt-card-trac.svg',
          cardBackImg: 'trac-card.jpg',
          path: '/products/cable-management/trac',
        },
        {
          frontCard: 'cable-magt-card-eris.svg',
          cardBackImg: 'eris-card.jpg',
          path: '/products/cable-management/eris',
        },
        {
          frontCard: 'cable-magt-card-ellis.svg',
          cardBackImg: 'ellis-alpha.jpg',
          path: '/products/cable-management/ellis',
        },
        {
          frontCard: 'cable-magt-card-glands.svg',
          cardBackImg: 'AISI-303-Cable-glands.jpg',
          path: '/products/cable-management/cable-glands',
        }
      ]
    }
  },
  methods: {
    cardAction(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.grid__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media screen and (max-width: 1000px) {
  .grid__grid {
    grid-template-columns: repeat(3, 260px);
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  .grid__grid {
    grid-template-columns: repeat(2, 260px);
  }
}

@media screen and (max-width: 768px) {
  .grid__grid {
    gap: 10px;
  }
}

@media screen and (max-width: 550px) {
  .grid__grid {
    grid-template-columns: repeat(2, 200px);
  }
}
@media screen and (max-width: 420px) {
  .grid__grid {
    grid-template-columns: repeat(2, 180px);
    gap: 5px;
  }
}
@media screen and (max-width: 370px) {
  .grid__grid {
    grid-template-columns: repeat(2, 150px);
    gap: 5px;
  }
}
@media screen and (max-width: 310px) {
  .grid__grid {
    grid-template-columns: 260px;
    gap: 5px;
  }
}
</style>
