<template>
<div class="p-10 flex flex-col gap-20">

  <div>
    <h3 class="text-28 font-semibold mb-10">Hero</h3>
    <div>
      <p class="mb-2 capitalize text-green-700">{{ message }}</p>

      <div class="grid grid-cols-1 gap-4 w-50% mb-4">
        <div class="flex border border-gray-400 p-4 rounded">
          <input type="text" v-model="lightTextOne" class="outline-none w-full">
          <svg @click="updateHeroText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </div>

        <div class="flex border border-gray-400 p-4 rounded max-w-">
          <input type="text" v-model="lightTextTwo" class="outline-none w-full">
          <svg @click="updateHeroText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </div>

        <div class="flex border border-gray-400 p-4 rounded max-w-">
          <input type="text" v-model="boldText" class="outline-none w-full">
          <svg @click="updateHeroText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </div>

        <div class="flex border border-gray-400 p-4 rounded max-w-">
          <input type="text" v-model="smallText" class="outline-none w-full">
          <svg @click="updateHeroText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
        </div>
      </div>

      <div class="mb-4">
        <div>
          <h3 class="text-18 font-semibold mb-2">Hero Image one</h3>
          <div>
            <p class="text-14 text-red-500">Image dimensions: 1920x600 pixels (The image size should not exceed 390KB) <sup>*</sup></p>
            <input type="file" class="block mb-4 p-2 border border-gray-400" @change="handleChangeHeroImageOne">
          </div>
          <div>
            <img :src="heroImageOne" alt="tranos">
          </div>
        </div>
      </div>

      <div class="mb-4">
        <div>
          <h3 class="text-18 font-semibold mb-2">Hero Image two</h3>
          <div>
            <p class="text-14 text-red-500">Image dimensions: 1920x600 pixels (The image size should not exceed 390KB) <sup>*</sup></p>
            <input type="file" class="block mb-4 p-2 border border-gray-400" @change="handleChangeHeroImageTwo">
          </div>
          <div>
            <img :src="heroImageTwo" alt="tranos">
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 class="text-18 font-semibold mb-2">Hero Image three</h3>
          <div>
            <p class="text-14 text-red-500">Image dimensions: 1920x600 pixels (The image size should not exceed 390KB) <sup>*</sup></p>
            <input type="file" class="block mb-4 p-2 border border-gray-400" @change="handleChangeHeroImageThree">
          </div>
          <div>
            <img :src="heroImageThree" alt="tranos">
          </div>
        </div>
      </div>

    </div>
  </div>

  <div>
    <h3 class="text-28 font-semibold mb-10">Partners</h3>
    <div class="mb-10 w-400 rounded flex gap-2 items-center">
      <input type="file" class="w-full outline-none" @change="onFileSelected">
      <button @click="handleAddPartner" class="bg-primary text-white py-2 px-8">Add</button>
    </div>

    <div class="grid grid-cols-5 gap-6">
      <div v-for="partner in partners" :key="partner._id" class="relative shadow p-4 hover:shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-24 text-red-500 cursor-pointer absolute right-4" viewBox="0 0 512 512"
          @click="deletePartner(partner._id)"

        >
          <path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="32"/><path stroke="currentColor" stroke-linecap="round"
                                         stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/>
          <path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        </svg>
        <img :src="partner.partner" alt="tranos">
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-28 font-semibold mb-10">Our services</h3>

    <div>
      <p class="text-green-600 mb-4">{{ servicesMessage }}</p>
      <div class="grid grid-cols-1 gap-5 w-80%">
        <div>
          <h4 class="mb-2">Fabrication</h4>
          <div class="flex border border-gray-400 p-4 rounded">
            <textarea v-model="fabrication" class="outline-none w-full resize-none"></textarea>
            <svg @click="updateServicesText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>

        <div>
          <h4 class="mb-2">Installation & Commissioning</h4>
          <div class="flex border border-gray-400 p-4 rounded">
            <textarea v-model="installation" class="outline-none w-full resize-none"></textarea>
            <svg @click="updateServicesText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>

        <div>
          <h4 class="mb-2">Maintenance</h4>
          <div class="flex border border-gray-400 p-4 rounded">
            <textarea v-model="maintenance" class="outline-none w-full resize-none"></textarea>
            <svg @click="updateServicesText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-28 font-semibold mb-10">Why choose us?</h3>

    <div class="flex border border-gray-400 p-4 rounded mb-10">
      <textarea v-model="why" class="outline-none w-full resize-none"></textarea>
      <svg @click="updateWhy" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      </svg>
    </div>

    <div>
      <div class="mb-8">
        <p class="text-red-500 text-14 mb-2">The video size should not exceed 10MB<sup>*</sup></p>
        <video
          muted
          loop
          controls
          :src="videoUrl"
          class="w-400"
        ></video>
      </div>

      <div class="mb-10 w-400 rounded flex gap-2 items-center">
        <input type="file" class="w-full outline-none" @change="onVideoSelect">
        <button @click="handleUpdateVideo" class="bg-primary text-white py-2 px-8">Add</button>
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
      partners: null,
      lightTextOne: '',
      lightTextTwo: '',
      boldText: '',
      smallText: '',
      message: '',
      fabrication: '',
      installation: '',
      maintenance: '',
      servicesMessage: '',
      selectedFile: null,
      why: '',
      videoUrl: '',
      selectedVideo: null,
      heroImageOne: null,
      heroImageTwo: null,
      heroImageThree: null,

    }
  },
  methods: {
    async getPartners() {
      const partners = await axios.get('https://tranos-api.onrender.com/api/v1/home/partner')
      this.partners = partners.data.partners
    },

    async getHeroText() {
      const heroText = await axios.get('https://tranos-api.onrender.com/api/v1/home/hero/64bfce9fa3ee1adc516458e5')
      this.lightTextOne = heroText.data.heroText.lightTextOne
      this.lightTextTwo = heroText.data.heroText.lightTextTwo
      this.boldText = heroText.data.heroText.boldText
      this.smallText = heroText.data.heroText.smallText
    },

    async deletePartner (id) {
      try {
        await axios.delete(`https://tranos-api.onrender.com/api/v1/home/partner/${id}`)
        await this.getPartners()
      } catch (e) {
        console.log(e)
      }
    },

    async updateHeroText() {
      try {
        const response = await axios.patch('https://tranos-api.onrender.com/api/v1/home/hero/64bfce9fa3ee1adc516458e5', {
          lightTextOne: this.lightTextOne,
          lightTextTwo: this.lightTextTwo,
          boldText: this.boldText,
          smallText: this.smallText,
        })

        this.message = response.data.msg

        setInterval(() => {
          this.message = ""
        }, 5000)

      } catch (e) {
        console.log(e)
      }
    },

    async getServicesText() {
      const response = await axios.get('https://tranos-api.onrender.com/api/v1/home/services/64bfe981c37e731f679c9042')
      try {
        this.fabrication = response.data.servicesText.fabrication
        this.installation = response.data.servicesText.installation
        this.maintenance = response.data.servicesText.maintenance
      } catch (e) {
        console.error(e)
      }
    },

    async updateServicesText() {
      try {
        const servicesText = await  axios.patch('https://tranos-api.onrender.com/api/v1/home/services/64bfe981c37e731f679c9042', {
          fabrication: this.fabrication,
          installation: this.installation,
          maintenance: this.maintenance,

        })

        this.servicesMessage = servicesText.data.msg

        setInterval(() => {
          this.servicesMessage = ""
        }, 5000)
      } catch (e) {
        console.log(e)
      }
    },

    onFileSelected (event) {
      this.selectedFile = event.target.files[0];
    },

    async handleAddPartner() {
      try {
        const fd = new FormData()
        fd.append('partner', this.selectedFile)

        await axios.post('https://tranos-api.onrender.com/api/v1/home/partner', fd)

        await this.getPartners()

        this.selectedFile = ""

      } catch (e) {
        console.error(e)
      }
    },

    async getWhy() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/home/why/64c23d875c6b6656118c2f79')
        this.why = response.data.why.why
      } catch (e) {
        console.error(e)
      }
    },

    async updateWhy() {
      try {
        await axios.patch('https://tranos-api.onrender.com/api/v1/home/why/64c23d875c6b6656118c2f79',
          {why: this.why})
      } catch (e) {
        console.error(e)
      }
    },

    async getVideo() {
      const response = await axios.get('https://tranos-api.onrender.com/api/v1/home-video/64c9a65865af74e9f9308241')
      this.videoUrl = response.data.video.video
    },

    onVideoSelect (event) {
      this.selectedVideo = event.target.files[0];
    },

    async handleUpdateVideo() {
      try {
        const fd = new FormData()
        fd.append('videoUrl', this.selectedVideo)

        await axios.patch('https://tranos-api.onrender.com/api/v1/home-video/64c9a65865af74e9f9308241', fd)

        await this.getVideo()

        this.selectedVideo = ""

      } catch (e) {
        console.error(e)
      }
    },

    async getHeroImageOne() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/hero-image-one/64cb84dc391680547e0167b8')

        this.heroImageOne = response.data.heroImageOne.heroImageUrl
      } catch (e) {
        console.error(e)
      }
    },

    async handleChangeHeroImageOne(event) {
      try {
        this.heroImageOne = event.target.files[0];
        const fd = new FormData()
        fd.append('imageUrl', this.heroImageOne)

        await axios.patch('https://tranos-api.onrender.com/api/v1/hero-image-one/64cb84dc391680547e0167b8', fd)

        await this.getHeroImageOne()
      } catch (e) {
        console.error(e)
      }
    },

    async getHeroImageTwo() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/hero-image-two/64cc002a7c41c16aaf81c0b8')

        this.heroImageTwo = response.data.heroImageTwo.heroImageTwoUrl
      } catch (e) {
        console.error(e)
      }
    },

    async handleChangeHeroImageTwo(event) {
      try {
        this.heroImageTwo = event.target.files[0];
        const fd = new FormData()
        fd.append('imageUrl', this.heroImageTwo)

        await axios.patch('https://tranos-api.onrender.com/api/v1/hero-image-two/64cc002a7c41c16aaf81c0b8', fd)

        await this.getHeroImageTwo()
      } catch (e) {
        console.error(e)
      }
    },

    async getHeroImageThree() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/hero-image-three/64cc003a7c41c16aaf81c0ba')

        this.heroImageThree = response.data.heroImageThree.heroImageThreeUrl
      } catch (e) {
        console.error(e)
      }
    },

    async handleChangeHeroImageThree(event) {
      try {
        this.heroImageThree = event.target.files[0];
        const fd = new FormData()
        fd.append('imageUrl', this.heroImageThree)

        await axios.patch('https://tranos-api.onrender.com/api/v1/hero-image-three/64cc003a7c41c16aaf81c0ba', fd)

        await this.getHeroImageThree()
      } catch (e) {
        console.error(e)
      }
    },
  },

  mounted() {
    this.getPartners()
    this.getHeroText()
    this.getServicesText()
    this.getWhy()
    this.getVideo()
    this.getHeroImageOne()
    this.getHeroImageTwo()
    this.getHeroImageThree()
  }


}
</script>

<style scoped>

</style>
