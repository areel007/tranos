<template>
  <div class="p-10 grid grid-cols-1 gap-10">
    <div>
      <h3 class="text-28 font-semibold mb-10">Banner</h3>
      <div class="mb-10 w-400 rounded flex gap-2 items-center">
        <input type="file" class="w-full outline-none" @change="onFileSelected">
        <button @click="handleUpdateBanner" class="bg-primary text-white py-2 px-8">Add</button>
      </div>
      <div>
        <p class="mb-2 text-red-500">Image dimensions: 1100x500 pixels (The image size should not exceed 100KB)*</p>
        <img :src="banner" alt="tranos">
      </div>
    </div>

    <div>
      <h3 class="text-28 font-semibold mb-10">Values</h3>
      <div class="grid grid-cols-2 gap-4">

        <div>
          <p>Our values</p>
          <div class="p-4 border border-gray-400 flex items-end">
            <textarea class="outline-none w-full resize-none h-150" v-model="ourValues"></textarea>
            <svg @click="handleUpdateValues" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>

        <div>
          <p>Can do attitude</p>
          <div class="p-4 border border-gray-400 flex items-end">
            <textarea class="outline-none w-full resize-none h-150" v-model="canDo"></textarea>
            <svg @click="handleUpdateValues" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>

        <div>
          <p>Proactive problem solving</p>
          <div class="p-4 border border-gray-400 flex items-end">
            <textarea class="outline-none w-full resize-none h-150" v-model="proactive"></textarea>
            <svg @click="handleUpdateValues" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>

        <div>
          <p>Surpassing expectations</p>
          <div class="p-4 border border-gray-400 flex items-end">
            <textarea class="outline-none w-full resize-none h-150" v-model="surpassing"></textarea>
            <svg @click="handleUpdateValues" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>

        <div>
          <p>Continuous learning</p>
          <div class="p-4 border border-gray-400 flex items-end">
            <textarea class="outline-none w-full resize-none h-150" v-model="continuous"></textarea>
            <svg @click="handleUpdateValues" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>

        <div>
          <p>Responsibility & accountability</p>
          <div class="p-4 border border-gray-400 flex items-end">
            <textarea class="outline-none w-full resize-none h-150" v-model="responsibility"></textarea>
            <svg @click="handleUpdateValues" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-28 font-semibold mb-10">Vision & Mission</h3>

      <div class="mb-4">
        <p>Vision</p>
        <div class="p-4 border border-gray-400 flex items-end">
          <textarea class="outline-none w-full resize-none h-150" v-model="vision"></textarea>
          <svg @click="handleUpdateVisionMission" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </div>
      </div>

      <div>
        <p>Mission</p>
        <div class="p-4 border border-gray-400 flex items-end">
          <textarea class="outline-none w-full resize-none h-150" v-model="mission"></textarea>
          <svg @click="handleUpdateVisionMission" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </div>
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
      banner: 'https://res.cloudinary.com/dkqhcmwne/image/upload/v1690379367/tranos/about/xo8qyxjnzcttj3vilrzi.jpg',
      canDo: '',
      proactive: '',
      surpassing: '',
      continuous: '',
      responsibility: '',
      vision: '',
      mission: '',
      ourValues: '',
    }
  },
  methods: {
    async getBanner(){
      const response = await axios.get('https://tranos-api.onrender.com/api/v1/about/banner/64c1246633224ad08162998e')
      this.banner = response.data.banner.banner
    },

    onFileSelected (event) {
      this.selectedFile = event.target.files[0];
    },

    async handleUpdateBanner() {
      try {
        const fd = new FormData()
        fd.append('banner', this.selectedFile)

        await axios.patch('https://tranos-api.onrender.com/api/v1/about/banner/64c1246633224ad08162998e', fd)

        await this.getBanner()

        this.selectedFile = ""

      } catch (e) {
        console.error(e)
      }
    },

    async getValues() {
      const response = await axios.get('https://tranos-api.onrender.com/api/v1/about/values/64c1a6b21b55b299439d7676')
      this.canDo = response.data.values.canDo
      this.proactive = response.data.values.proactive
      this.surpassing = response.data.values.surpassing
      this.continuous = response.data.values.continuous
      this.responsibility = response.data.values.responsibility
      this.ourValues = response.data.values.ourValues
    },

    async handleUpdateValues() {
      try {
        await axios.patch('https://tranos-api.onrender.com/api/v1/about/values/64c1a6b21b55b299439d7676', {
          canDo: this.canDo,
          proactive: this.proactive,
          surpassing: this.surpassing,
          continuous: this.continuous,
          responsibility: this.responsibility,
          ourValues: this.ourValues

        })
      } catch (e) {
        console.error(e)
      }
    },

    async getVisionMission() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/about/vision-mission/64c1c22dd64a3de1824018de')

        this.vision = response.data.visionMission.vision
        this.mission = response.data.visionMission.mission
      } catch (e) {
        console.error(e)
      }
    },

    async handleUpdateVisionMission () {
      try {
        await axios.patch('https://tranos-api.onrender.com/api/v1/about/vision-mission/64c1c22dd64a3de1824018de', {
          vision: this.vision,
          mission: this.mission,
        })
      } catch (e) {
        console.error(e)
      }
    }
  },

  mounted() {
    this.getBanner()
    this.getValues()
    this.getVisionMission()
  }
}
</script>

<style scoped>

</style>
