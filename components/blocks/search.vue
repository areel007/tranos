<template>
  <div
    class="fixed w-full bg-white z-100 h-auto search"
    :class="{'show-search': isSearch}"
  >
    <div class="shadow">
      <div class="container mx-auto h-50px md:h-70px flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          ref="inputTag"
          class="w-full py-2 outline-none"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @keyup="$emit('search-action', value)"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="$emit('close-search')"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <div class="">
      <div class="container mx-auto" :class="value.length?'py-5':null">
        <p class="text-gray-600 text-12 font-light" v-if="value.length">
          <span v-if="searchResult.length>0">Results</span>
          <span v-else>No results</span> for
          <span class="text-primary font-medium">'{{ value }}'</span>
        </p>
      </div>
      <div class="container mx-auto pb-5"  v-if="searchResult.length">
        <div
          v-for="(_result, index) in searchResult"
          :key="index"
        >
          <a :href="_result.path" class="text-primary">{{ _result.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  props: ['isSearch', 'value', 'searchResult'],
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
}
.search {
  transform: translateY(-100%);
  transition: transform .3s ease;
}
.show-search {
  transform: translateY(0);
}
</style>
