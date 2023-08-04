<template>
  <div class="card">
    <img :src="require(`../../../static/assets/images/${cardImage}`)" alt="Tranos rack">
    <h3>{{ cardTitle }}</h3>
  </div>
</template>

<script>
export default {
  name: "rack-card",
  props: ['cardImage', 'cardTitle']
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}
.card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease-in-out;
}
.card h3 {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 5px 0;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  font-weight: 300;
}
.card:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 1024px) {
  .card {
    height: 480px;
  }
}

@media screen and (max-width: 768px) {
  .card {
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .card {
    height: 300px;
  }
}
</style>
