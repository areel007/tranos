<template>
  <div class="products py-10 md:py-60px">
    <div class="product-cards">
      <div class="first-card">
        <h3 class="text-14 md:text-18">Our products</h3>
      </div>
      <ProductCard
        v-for="(cardDetail, index) in cardDetails"
        :key="index"
        :card-title-before="cardDetail.cardTitleBefore"
        :card-title-after="cardDetail.cardTitleAfter"
        :card-image="cardDetail.cardImage"
        :card-path="cardDetail.path"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../blocks/cards/product-card'
import axios from "axios";

export default {
  name: "products",
  components: {
    ProductCard,
  },
  data() {
    return {
      // cardDetails: null,
      cardDetails: [
        { cardTitleBefore: 'Power protection', cardTitleAfter: '& Distribution', path: '/products/power-protection', cardImage: 'power_protection.jpg' },
        { cardTitleBefore: 'Cable management', cardTitleAfter: '& support system', path: '/products/cable-management', cardImage: 'cable_management.jpg' },
        { cardTitleBefore: 'Enclosures', cardTitleAfter: '', path: '/products/enclosures', cardImage: 'enclosure-home-page.jpg' },
        { cardTitleBefore: 'Warehouse storage system', cardTitleAfter: '', path: '/products/warehouse-storage', cardImage: 'storage-systems.jpg' },
        { cardTitleBefore: 'Gaskets', cardTitleAfter: '', path: '/products/gaskets', cardImage: 'gaskets.jpg' },
        { cardTitleBefore: 'Power generation', cardTitleAfter: '& back-up', path: '/products/power-generation', cardImage: 'power_generation.jpg' },
        { cardTitleBefore: 'Lights &', cardTitleAfter: 'wiring devices', path: '/products/lighting-and-wiring-devices', cardImage: 'lighting_wiring-device.jpg' },
      ]
    }
  },
  async created() {
    // try {
    //   const response = await axios.get('http://localhost:8000/api/v1/home/products')
    //   this.cardDetails = response.data.data
    // } catch (e) {
    //   console.log(e)
    // }
  }
}
</script>

<style scoped>
.products {
  width: 100%;
  margin: 0 auto;
  /*padding: 100px 0;*/
  /*background: #F2F2F2;*/
  position: relative;
}
.product-cards {
  width: min(1100px, 95%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: 270px 270px;
  grid-gap: 1px;
  justify-content: center;
}
.first-card {
  width: 270px;
  height: 270px;
  background: #172673;
}
.first-card h3 {
  /*font-size: 20px;*/
  text-transform: capitalize;
  color: white;
  padding: 10% 5%;
  font-weight: 200;
}

@media screen and (max-width: 1920px) {
  .product-cards {
    grid-template-columns: repeat(4, 270px);
    grid-template-rows: 270px 270px;
  }
}

@media screen and (max-width: 1200px) {
  .product-cards {
    grid-template-columns: repeat(4, 220px);
    grid-template-rows: 220px 220px;
  }
  .first-card {
    width: 220px;
    height: 220px;
  }
}

@media screen and (max-width: 1100px) {
  .product-cards {
    grid-template-columns: repeat(3, 1fr);
  }
  .first-card {
    width: 100%;
    height: 220px;
  }
}

@media screen and (max-width: 800px) {
  .products {
    padding: 40px 0;
  }
  .product-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .product-cards {
    grid-template-columns: 1fr;
  }
}
</style>
