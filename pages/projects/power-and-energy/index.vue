<template>
  <div class="pt-7 md:pt-10">
    <div class="container mx-auto grid__grid border-b border-gray-400 pb-14">

      <a href="/case-studies/power-and-energy/one" class="grid__card">
        <div class="w-full h-200 mb-2 rounded-lg relative group zoom-card">
          <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
          <img src="../../../static/assets/images/STAG.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
        </div>
        <div>
          <p class="text-center text-14">Containerized Generator Enclosure</p>
          <p class="font-bold text-center text-9">Power & Energy</p>
        </div>
      </a>

      <a href="/case-studies/power-and-energy/cummins-west-africa-limited" class="grid__card">
        <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
          <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
          <img src="../../../static/assets/images/2-Megawatts-Generator-Enclosure.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
        </div>
        <div>
          <p class="text-center text-14">2 Megawatts Generator Enclosure</p>
          <p class="font-bold text-center text-9">Power & Energy</p>
        </div>
      </a>

      <a href="/case-studies/power-and-energy/pilot-science" class="grid__card">
        <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
          <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
          <img src="../../../static/assets/images/packaged-sub-station.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
        </div>
        <div>
          <p class="text-center text-14">Packaged Sub-station</p>
          <p class="font-bold text-center text-9">Power & Energy</p>
        </div>
      </a>

      <a href="/case-studies/power-and-energy/ledco" class="grid__card">
        <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
          <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
          <img src="../../../static/assets/images/ledco-case-studies.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
        </div>
        <div>
          <p class="text-center text-14">Energy Bunker</p>
          <p class="font-bold text-center text-9">Power & Energy</p>
        </div>
      </a>

      <a href="/case-studies/power-and-energy/coleman" class="grid__card">
        <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
          <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
          <img src="../../../static/assets/images/colemans.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
        </div>
        <div>
          <p class="text-center text-14">Distribution & Control Panels</p>
          <p class="font-bold text-center text-9">Power & Energy</p>
        </div>
      </a>


      <a :href="'/case-studies/power-and-energy/'+caseStudy._id" class="grid__card" v-for="caseStudy in caseStudies" :key="caseStudy._id">
        <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
          <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
          <img :src="caseStudy.imageUrl" alt="tranos" class="w-full h-full rounded-lg object-cover">
        </div>
        <div>
          <p class="text-center text-14 capitalize">{{ caseStudy.title }}</p>
          <p class="font-bold text-center text-9 capitalize">{{ caseStudy.category }}</p>
        </div>
      </a>

    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      caseStudies: null
    }
  },
  methods: {
    async getCaseStudies() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/case-studies');
        const allCaseStudies = response.data.caseStudies;

        this.caseStudies = allCaseStudies.filter(caseStudy => caseStudy.category === "power & energy");

        console.log(this.caseStudies)
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getCaseStudies();
  },
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 20px;
}
.grid__card {
  width: 100%;
}
.zoom-card {
  overflow: hidden;
}
.zoom-card img {
  transition: transform .5s ease-in-out;
}
.zoom-card:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 1000px) {
  .grid__grid {
    column-gap: 20px;
  }
}

@media screen and (max-width: 800px) {
  .grid__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
}

@media screen and (max-width: 500px) {
  .grid__grid {
    grid-template-columns: 1fr;
    column-gap: 20px;
  }
}
</style>
