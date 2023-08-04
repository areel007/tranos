<template>
  <div class="card">
    <div class="card-inner">
      <div class="front-face">
        <img :src="require(`/static/assets/images/${frontCard}`)" class="w-full" alt="tranos">
      </div>
      <div class="back-face relative">
        <img :src="require(`/static/assets/images/${cardBackImg}`)" class="w-full" alt="tranos">
        <button @click="$emit('card-action', path)" class="bg-primary hover:bg-white hover:text-primary text-12 md:text-14 text-white py-2 px-4">Read more</button>
      </div>
    </div>
  </div>
<!--  <div class="card" :style="cssProps">-->
<!--    <div class="card__inner">-->
<!--      <div class="card-back relative">-->
<!--        <img :src="require(`/static/assets/images/${cardBackImg}`)" class="w-full" alt="tranos">-->
<!--        <button @click="$emit('card-action', path)" class="bg-primary hover:bg-white hover:text-primary text-12 md:text-14 text-white py-2 px-4">Read more</button>-->
<!--      </div>-->
<!--      <div class="card-front">-->
<!--        <img :src="require(`/static/assets/images/${frontCard}`)" class="w-full" alt="tranos">-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "cable-management-card",
  props: ['frontCard', 'cardBackImg', 'path', 'cardLogo'],
  // computed: {
  //   cssProps () {
  //     return {
  //       '--card-bg': this.cardBg,
  //     }
  //   }
  // },
}
</script>

<style scoped>
.card {
  height: 260px;
  width: 100%;
  cursor: pointer;
}
.card-inner {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform .8s;
}
.front-face {
  backface-visibility: hidden;
}
.front-face img {
  width: 100%;
  height: 100%;
}
.back-face {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
}
.back-face button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card:hover .card-inner {
  transform: rotateY(-180deg);
}
/*.card {*/
/*  height: 260px;*/
/*  width: 100%;*/
/*}*/
/*.card__inner {*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  transition: transform 0.8s;*/
/*  transform-style: preserve-3d;*/
/*  -webkit-transform-style: preserve-3d;*/
/*}*/
/*.card:hover .card__inner {*/
/*  transform: rotateY(180deg);*/
/*  -webkit-transform: rotateY(180deg);*/
/*}*/
/*.card-front, .card-back {*/
/*  position: absolute;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  -webkit-backface-visibility: hidden;*/
/*  -moz-backface-visibility: hidden;*/
/*  backface-visibility: hidden;*/
/*}*/
/*.card-back {*/
/*  transform: rotateY(180deg);*/
/*  -moz-transform: rotateY(180deg);*/
/*}*/
/*.card-front__bio p {*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  font-size: 16px;*/
/*  line-height: 20px;*/
/*  color: #fff;*/
/*}*/
/*.card-logo {*/
/*  margin: 0 auto 20px auto;*/
/*}*/
/*.ellis-style {*/
/*  width: 100px;*/
/*}*/
/*.dkc-style {*/
/*  width: 150px;*/
/*}*/
/*.card-back button {*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform: translate(-50%, -50%);*/
/*}*/

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    /*height: 240px;*/
  }
  /*.card-back img {*/
  /*  height: 240px;*/
  /*  object-fit: cover;*/
  /*}*/
}

@media screen and (max-width: 550px) {
  .card {
    height: 200px;
  }
}

@media screen and (max-width: 420px) {
  .card {
    height: 180px;
  }
}
@media screen and (max-width: 370px) {
  .card {
    height: 150px;
  }
}
@media screen and (max-width: 310px) {
  .card {
    height: 260px;
  }
}
</style>
