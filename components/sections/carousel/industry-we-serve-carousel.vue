<template>
  <carousel
    :autoplay="true"
    :nav="false"
    :items="5"
    :dots="false"
    :margin="10"
    :autoplayHoverPause="true"
    :responsive="{0:{items:2, nav:false}, 600:{items:3, nav:false}, 1000:{items:4, nav:false}, 1200: {items: 5, nav: false}, 1920: {items: 5, nav: false}}"
  >
    <a
      :href="cardDetail.path"
      class="card" v-for="(cardDetail, index) in cardDetails"
      :key="index"
    >
      <img :src="require(`../../../static/assets/images/${cardDetail.image}`)" alt="oil">
      <div class="card-text">
        <h1 class="text-12 md:text-16 text-white capitalize" style="font-weight: 200">{{ cardDetail.cardTextBefore }} <br> {{ cardDetail.cardTextAfter }} </h1>
        <button>
          <span>Learn more</span>
          <svg
            height="16px"
            viewBox="0 0 24 24"
            width="16px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
          </svg>
        </button>
      </div>
    </a>

  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: "industry-we-serve-carousel",
  components: { carousel },
  data() {
    return {
      cardDetails: [
        { image: 'power&-energy.jpg', cardTextBefore: 'Power &', cardTextAfter: ' Energy', path: '/industry-we-serve/power-and-energy/' },
        { image: 'oil&gas.jpg', cardTextBefore: 'Oil &', cardTextAfter: ' gas', path: '/industry-we-serve/' },
        { image: 'residential.jpg', cardTextBefore: 'Residential &', cardTextAfter: 'commercial', path: '/industry-we-serve/residential-and-commercial/' },
        { image: 'manufacturing.jpg', cardTextBefore: 'Industrial &', cardTextAfter: 'manufacturing', path: '/industry-we-serve/industrial-and-manufacturing/' },
        { image: 'telecoms.jpg', cardTextBefore: 'Telecommunications', cardTextAfter: '', path: '/industry-we-serve/telecommunications/' },
      ],
    }
  }
}
</script>

<style scoped>
.card {
  width: 212px;
  height: 336px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 3px;
  display: block;
}
.card-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
}
.card-text h1 {
  /*color: white;*/
  /*font-size: 18px;*/
  /*text-transform: capitalize;*/
  /*font-weight: 400;*/
  /*margin-bottom: auto;*/
  line-height: 1.2;
}
.card-text button {
  position: absolute;
  height: 30px;
  width: 30px;
  background: white;
  border: none;
  outline: none;
  padding: 5px;
  bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: width .2s ease;
  border-radius: 5px;
}
.card-text button:after {

  /*width: 150px;*/
}
.card-text button span {
  display: none;
  font-size: 12px;
  margin-right: 4px;
  color: var(--primary);
  white-space: nowrap;
}
.card-text button svg {
  fill: var(--primary);
}
.card:hover .card-text button {
  width: 100px;
}
.card:hover .card-text button span {
  display: block;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s ease;
}
.card:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  background: black;
  transition: opacity .3s ease;
}
.card:hover:before {
  opacity: .3;
}

@media screen and (max-width: 1920px){
  .card {
    height: 336px;
  }
}

@media screen and (max-width: 1920px){
  .card {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .card {
    height: auto;
    width: auto;
  }
  .card-text {
    padding: 10px;
  }
}
</style>
