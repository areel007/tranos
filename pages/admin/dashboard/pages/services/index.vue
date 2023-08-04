<template>
  <div class="p-10 grid grid-cols-1 gap-10">

    <div>
      <h3 class="text-28 font-semibold mb-10">Services</h3>

      <div>
        <div class="grid grid-cols-1 gap-10 w-80%">

          <div>
            <h4 class="mb-2">Fabrication</h4>

            <div class="flex border border-gray-400 p-4 rounded mb-4">
              <textarea v-model="fabricationText" class="outline-none w-full resize-none"></textarea>
              <svg @click="updateServicesText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              </svg>
            </div>

            <div>
              <p class="text-red-500 text-14">Image dimensions: 450x280 pixels (The image size should not exceed 65KB)<sup>*</sup></p>
              <input type="file" @change="handleChangeFabricationImage" class="border border-gray-400 p-2">
              <div class="mt-5">
                <img :src="fabricationImage" alt="tranos">
              </div>
            </div>

          </div>

          <div>
            <h4 class="mb-2">Installation & Commissioning</h4>

            <div class="flex border border-gray-400 p-4 rounded mb-4">
              <textarea v-model="installationText" class="outline-none w-full resize-none"></textarea>
              <svg @click="updateServicesText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              </svg>
            </div>

            <div>
              <p class="text-red-500 text-14">Image dimensions: 450x280 pixels (The image size should not exceed 65KB)<sup>*</sup></p>
              <input type="file" @change="handleChangeInstallationImage" class="border border-gray-400 p-2">
              <div class="mt-5">
                <img :src="installationImage" alt="tranos">
              </div>
            </div>

          </div>

          <div>
            <h4 class="mb-2">Maintenance</h4>

            <div class="flex border border-gray-400 p-4 rounded mb-4">
              <textarea v-model="maintenanceText" class="outline-none w-full resize-none"></textarea>
              <svg @click="updateServicesText" xmlns="http://www.w3.org/2000/svg" class="w-24 text-green-600 cursor-pointer" viewBox="0 0 512 512"><path d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                <path d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              </svg>
            </div>

            <div>
              <p class="text-red-500 text-14">Image dimensions: 450x280 pixels (The image size should not exceed 65KB)<sup>*</sup></p>
              <input type="file" @change="handleChangeMaintenanceImage" class="border border-gray-400 p-2">
              <div class="mt-5">
                <img :src="maintenanceImage" alt="tranos">
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  data(){
    return {
      fabricationText: '',
      installationText: '',
      maintenanceText: '',
      fabricationImage: null,
      installationImage: null,
      maintenanceImage: null,
    }
  },
  methods: {
    async getServicesText() {
      const response = await axios.get('https://tranos-api.onrender.com/api/v1/home/services/64bfe981c37e731f679c9042')
      try {
        this.fabricationText = response.data.servicesText.fabrication
        this.installationText = response.data.servicesText.installation
        this.maintenanceText = response.data.servicesText.maintenance
      } catch (e) {
        console.error(e)
      }
    },

    async updateServicesText() {
      try {
        await axios.patch('https://tranos-api.onrender.com/api/v1/home/services/64bfe981c37e731f679c9042', {
          fabrication: this.fabricationText,
          installation: this.installationText,
          maintenance: this.maintenanceText,
        })

      } catch (e) {
        console.log(e)
      }
    },

    async getFabricationImage() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/services/fabrication/64cadc0d62c7e0ecdd459765')
        this.fabricationImage = response.data.fabrication.fabricationImageUrl
      } catch (e) {
        console.error(e)
      }
    },

    async handleChangeFabricationImage(event) {
      try {
        const fd = new FormData()
        this.fabricationImage = event.target.files[0]
        fd.append('imageUrl', this.fabricationImage)
        await axios.patch('https://tranos-api.onrender.com/api/v1/services/fabrication/64cadc0d62c7e0ecdd459765', fd)

        await this.getFabricationImage()
      } catch (e) {
        console.error(e)
      }
    },

    async getInstallationImage() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/services/installation/64cb52dbae26fd2a407cad37')
        this.installationImage = response.data.installation.installationImageUrl
      } catch (e) {
        console.error(e)
      }
    },

    async handleChangeInstallationImage(event) {
      try {
        const fd = new FormData()
        this.installationImage = event.target.files[0]
        fd.append('imageUrl', this.installationImage)
        await axios.patch('https://tranos-api.onrender.com/api/v1/services/installation/64cb52dbae26fd2a407cad37', fd)
        await this.getInstallationImage()
      } catch (e) {
        console.error(e)
      }
    },

    async getMaintenanceImage() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/services/maintenance/64cb67ac3308f9c585bfee38')
        this.maintenanceImage = response.data.maintenance.maintenanceImageUrl
      } catch (e) {
        console.error(e)
      }
    },

    async handleChangeMaintenanceImage(event) {
      try {
        const fd = new FormData()
        this.maintenanceImage = event.target.files[0]
        fd.append('imageUrl', this.maintenanceImage)
        await axios.patch('https://tranos-api.onrender.com/api/v1/services/maintenance/64cb67ac3308f9c585bfee38', fd)
        await this.getMaintenanceImage()
      } catch (e) {
        console.error(e)
      }
    }
  },
  mounted() {
    this.getServicesText()
    this.getFabricationImage()
    this.getInstallationImage()
    this.getMaintenanceImage()
  }
}
</script>

<style scoped>

</style>
