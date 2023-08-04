<template>
  <div
    class="product-list__grid"
  >
    <div class="w-full overflow-hidden image-wrapper">
      <img :src="product.cardImage ? product.cardImage : null" alt="tranos">
    </div>
    <div class="product-list__text">
      <p class="product-name font-semibold text-16 md:text-20 mb-5 capitalize text-center md:text-left w-10/12 md:w-full mx-auto">{{ product.cardProductName }}</p>
      <ul class="product__details ml-0 md:ml-6">
        <li
          v-for="(_m, index) in product.cardList"
          :key="index"
          class="mb-0 text-14 md:text-16 list-disc font-light"
          style="line-height: 30px"
        >
          {{ _m }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "industrial-wd-product-list",
  props: ['isProductDetailsVisible', 'product']
}
</script>

<style scoped>
.product-list__grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  border-bottom: 1px solid grey;
  padding: 30px 0 30px 0;
  /*align-items: center;*/
  cursor: pointer;
}
.product-list__grid:last-child {
  border-bottom: none;
}
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-wrapper img {
  width: 90%;
  transition: transform .5s ease;
}
.product-list__grid:hover .image-wrapper img {
  transform: scale(1.15);
}
.product-name {
  line-height: 1.2;
}
.product-list__text button {
  display: flex;
  align-items: center;
}
.product-list__text button span {
  color: #172673;
  font-weight: 400;
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  .product-list__grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
