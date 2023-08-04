<template>
  <a :href="cardPath" class="card">
    <div class="overlay"></div>
    <img :src="require(`../../../static/assets/images/${cardImage}`)" alt="tranos">
    <h3 class="card-title text-14 md:text-18" :class="{mag: cardTitleAfter === ''}">{{cardTitleBefore }} <br> {{ cardTitleAfter }}</h3>
  </a>
</template>

<script>
export default {
  name: "product-card",
  props: [
    'cardTitleBefore',
    'cardTitleAfter',
    'cardImage',
    'cardPath'
  ],
  created() {
    console.log(this.cardImage)
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .6);
  width: 100%;
  height: 100%;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity .3s ease;
  background: #172673;
  opacity: 0;
  z-index: 50;
}
.card:hover::before {
  width: 100%;
  height: 100%;
  opacity: .5;
}
.card h3.card-title {
  z-index: 100;
  position: absolute;
  top: 10px;
  /*font-size: 18px;*/
  text-transform: capitalize;
  color: white;
  padding: 5%;
  line-height: 1.2;
  font-weight: 200;
}
.card:hover h3.card-title {
  color: white;
}
svg {
  position: absolute;
  bottom: 20px;
  width: 40px;
  height: 40px;
}
.card:hover svg {
  fill: white;
}
.mag {
  width: 70%;
}

@media screen and (max-width: 1920px) {
  .card {
    height: 270px;
  }
  .card h3.card-title {
    /*font-size: 18px;*/
  }
}

@media screen and (max-width: 1200px) {
  .card {
    height: 220px;
  }
}
</style>
