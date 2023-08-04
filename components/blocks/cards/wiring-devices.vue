<template>
  <div class="wiring-devices-card__grid__inner__grid">
    <img :src="cardImage" alt="" style="width: 70%">
    <div class="wiring-devices-card__grid__inner__grid__text">
      <div class="product__name" :class="{marginBottomZero: isDetailsOpen}">
        <div class="icon">
          <svg @click="openDetails" v-if="!isDetailsOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <svg v-else @click="closeDetails" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
          </svg>
        </div>
        <div class="name__name">{{ cardProductName }}</div>
      </div>
      <ul class="product__details" v-if="isDetailsOpen">
        <li
          v-for="(_cardList, index) in productList"
          :key="index"
        >
          {{ _cardList }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "wiring-devices",
  props: ['cardImage', 'cardProductName', 'productList'],
  data () {
    return {
      isDetailsOpen: false
    }
  },
  methods: {
    openDetails () {
      this.isDetailsOpen = true
    },
    closeDetails () {
      this.isDetailsOpen = false
    }
  }
}
</script>

<style scoped>
.wiring-devices-card__grid__inner__grid {
  height: 300px;
  background: white;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wiring-devices-card__grid__inner__grid:hover {
  box-shadow: 0 0 8px grey;
}
.wiring-devices-card__grid__inner__grid__text {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
}
.product__name {
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  width: 90%;
  height: 50px;
  background: #172673;
}
.icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px solid #172673;
}
.name__name {
  padding: 10px;
  line-height: 1;
  font-weight: 600;
  font-size: 14px;
  color: white;
}
ul.product__details {
  background: #172673;
  width: 100%;
  padding: 20px 40px;
}
ul.product__details li {
  list-style: disc;
  font-size: 14px;
  line-height: 1.4;
  color: white;
  font-weight: lighter;
}
.marginBottomZero {
  margin-bottom: 1px;
}
</style>
