<template>
  <div class="card" @click="$emit('card-action')">
    <div class="overlay"></div>
    <h1 class="text-white relative z-20 text-12 md:text-16">{{ cardTitle }}</h1>
    <img :src="require(`../../../static/assets/images/${cardImage}`)" alt="tranos" class="absolute top-0 left-0 w-full h-full object-cover">
  </div>
</template>

<script>
export default {
  name: "enclosures-card",
  props: ['cardImage', 'cardTitle']
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 270px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding: 20px 0 0 20px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #172673;
  z-index: 10;
  opacity: .6;
}
.card h1 {
  width: 40%;
  line-height: 100%;
  font-weight: 300;
  /*position: absolute;*/
  /*top: 20px;*/
  /*left: 20px;*/
}
.card img {
  transition: transform .5s ease-in-out;
}
.card:hover img {
  transform: scale(1.1);
}
/*.card-dropdown {*/
/*  position: absolute;*/
/*  right: 10px;*/
/*  top: 30%;*/
/*  padding: 20px;*/
/*  background: #172673;*/
/*  display: none;*/
/*}*/
/*.card:hover .card-dropdown {*/
/*  display: block;*/
/*}*/

@media screen and (max-width: 1000px) {
  .card {
    height: 230px;
  }
}
@media screen and (max-width: 900px) {
  .card {
    height: 274px;
  }
}
/*@media screen and (max-width: 900px) {*/
/*  .card {*/
/*    height: 360px;*/
/*  }*/
/*}*/
@media screen and (max-width: 800px) {
  .card {
    height: 255px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    height: 230px;
  }
}
@media screen and (max-width: 700px) {
  .card {
    height: 216px;
  }
}
@media screen and (max-width: 650px) {
  .card {
    height: 200px;
  }
}
@media screen and (max-width: 600px) {
  .card {
    height: 184px;
  }
}
@media screen and (max-width: 550px) {
  .card {
    height: 168px;
  }
}
@media screen and (max-width: 500px) {
  .card {
    height: 233px;
  }
}
@media screen and (max-width: 450px) {
  .card {
    height: 209px;
  }
}
@media screen and (max-width: 400px) {
  .card {
    height: 186px;
  }
}
</style>
