<template>
  <div
    class="power-generator-card image-div"
    @click="$emit('card-action', path)"
  >
    <img
      :src="productImage ? require(`/static/assets/images/${productImage}`): null"
      alt="tranos power generator"
      class="w-full h-full"
    >
    <div
      class="overlay"
      :class="product==='Power Generators'?'overlay-gas-generator': 'overlay-ups'"
    ></div>
    <div class="overlay-text">
      <div class="text-box relative"></div>
      <p class="text-14 md:text-16 text-white font-medium text-box__p">{{ product }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "power-generator-card",
  props: [
    'product',
    'productImage',
    'path'
  ]
}
</script>

<style scoped>
.power-generator-card {
  width: 100%;
  height: 400px;
  position: relative;
  cursor: pointer;
}
.overlay-gas-generator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: #000;*/
  /*opacity: .7;*/
  z-index: 20;
}
.overlay-ups {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .7;
  z-index: 20;
}
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-box {
  width: 100%;
  height: 100%;
  color: white;
  background: black;
  z-index: 30;
  opacity: .3;
}
.text-box__p {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
}
.image-div {
  overflow: hidden;
}
.image-div img {
  transition: transform .5s ease-in-out;
}
.image-div:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 768px){
  .power-generator-card {
    height: auto;
  }
  .text-box {
    width: min-content;
    white-space: nowrap;
    padding: 40px 10px;
    height: auto;
  }
}
</style>
