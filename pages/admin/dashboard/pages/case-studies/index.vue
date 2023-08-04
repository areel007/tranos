<template>
<div class="p-10">
  <div v-if="!showNewCaseStudiesForm">
    <h3 class="text-24 font-semibold mb-4">All Case Studies</h3>
    <div class="grid grid-cols-3 gap-10 w-1000px mb-10">

      <div class="grid__card" v-for="caseStudy in caseStudies" :key="caseStudy._id">
        <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
          <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
          <img :src="caseStudy.imageUrl" alt="tranos" class="w-full h-full rounded-lg object-cover">
        </div>
        <div class="flex justify-between">
          <div>
            <p class="text-14 capitalize">{{ caseStudy.title }}</p>
            <p class="font-bold text-9 capitalize">{{ caseStudy.category }}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
               class="w-6 h-6 cursor-pointer" @click="handleDeleteCaseStudy(caseStudy._id)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </div>
      </div>

    </div>

    <button class="py-2 px-4 bg-primary text-white" @click="handleShowCaseStudiesForm">New Case Study</button>
  </div>

  <div v-else class="relative w-400">
    <div
      class="bg-primary text-white w-30 h-30 rounded-full flex justify-center items-center cursor-pointer absolute right-0"
      @click="handleHideCaseStudyForm"
    >X</div>
    <h3 class="text-24 font-semibold mb-4">Add new Case Studies</h3>
    <div class="w-400 grid grid-cols-1 gap-4 relative">
      <input type="text" placeholder="case study title" class="border border-gray-400 p-2" v-model="caseStudyTitle">
      <select class="border border-gray-400 p-2" v-model="caseStudyCategory">
        <option value="">Choose a category</option>
        <option value="power & energy">Power & Energy</option>
        <option value="oil & gas">Oil & Gas</option>
        <option value="aviation">Aviation</option>
        <option value="industrial & manufacturing">Industrial & Manufacturing</option>
        <option value="telecommunications">Telecommunications</option>
      </select>
      <input type="text" placeholder="project" class="border border-gray-400 p-2" v-model="caseStudyProject">
      <textarea placeholder="solutions provided" class="border border-gray-400 p-2" v-model="caseStudySolutionsProvided"></textarea>
      <div>
        <p class="text-14 leading-5">Image dimensions: 700x400 pixels (The image size should not exceed 100KB).</p>
        <input type="file" class="border border-gray-400 p-2" @change="onFileSelected">
      </div>
      <button class="p-2 bg-primary text-white" @click="handleSubmit">Submit</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  data() {
    return {
      caseStudies: null,
      showNewCaseStudiesForm: false,
      caseStudyTitle: '',
      caseStudyCategory: '',
      caseStudyProject: '',
      caseStudySolutionsProvided: '',
      selectedFile: null
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0];
    },
    async getCaseStudies() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/case-studies');

        this.caseStudies = response.data.caseStudies;

      } catch (error) {
        console.error(error);
      }
    },
    handleShowCaseStudiesForm() {
      this.showNewCaseStudiesForm = true
    },
    handleHideCaseStudyForm() {
      this.showNewCaseStudiesForm = false
    },
    async handleSubmit () {
      const fd = new FormData();

      fd.append("title", this.caseStudyTitle);
      fd.append("category", this.caseStudyCategory);
      fd.append("project", this.caseStudyProject);
      fd.append("solutionsProvided", this.caseStudySolutionsProvided);
      fd.append("imageUrl", this.selectedFile);

      await axios.post("https://tranos-api.onrender.com/api/v1/case-studies", fd);

      this.caseStudyTitle = ''
      this.caseStudyCategory = ''
      this.caseStudyProject = ''
      this.caseStudySolutionsProvided = ''

      await this.getCaseStudies()
    },
    async handleDeleteCaseStudy(id) {
      await axios.delete(`https://tranos-api.onrender.com/api/v1/case-studies/${id}`)

      await this.getCaseStudies()
    }
  },
  mounted() {
    this.getCaseStudies();
  },
}
</script>

<style scoped>
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
</style>
