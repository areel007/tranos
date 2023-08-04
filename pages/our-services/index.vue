<template>
  <div class="relative top-50px md:top-70px our-services text-16 md:text-18" style="line-height: 1.3">

    <div class="relative w-screen h-200 mb-10 md:mb-20">
      <div class="absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <img src="../../static/assets/images/services-banner.jpg" alt="tranos" class="w-full h-full object-cover">
      <div class="container mx-auto">
        <div class="h-full flex flex-col justify-center absolute top-0">
          <span class="text-28 md:text-40 text-white font-bold z-10">Our Services</span>
        </div>
      </div>
    </div>

    <div class="container mx-auto mb-10 border-b border-gray-400 pb-5 md:pb-10">
      <span class="text-30 md:text-40 xl:text-50 font-medium text-primary mb-4 md:mb-[20px] block" style="line-height: 1">Client-focused <br>service delivery</span>
      <p class="text-18 md:text-22 text-primary" style="line-height: 30px; font-weight: 200">
        With expertise across various industry
        sectors, Tranos not only manufacture
        equipment, we also provide high-quality
        support & after-sales services to all our
        valued clients.
      </p>
    </div>

    <div class="container mx-auto pb-5 md:pb-10 grid__grid font-light">
      <div class="pr-0 md:pr-10">
        <span class="text-18 md:text-20 font-bold mb-4 block mb-4 md:mb-6">Fabrication</span>
        <p class="mb-2 md:mb-4 text-14 md:text-16 font-light pr-0 md:pr-5">
          {{
            fabrication || `We design and fabricate various structural and process modules, skids, equipment, and parts to a very
            high level of quality and precision.We have an in -house team of engineers with in-depth knowledge
            and experience with various design software.`
          }}
        </p>
      </div>
      <div class="w-full">
        <img :src="fabricationImage" alt="tranos" class="w-full">
      </div>
    </div>

    <div class="bg-whitesmoke">
      <div class="container mx-auto py-5 md:py-10 grid__grid gap-5 md:gap-24 font-light">
        <div class="w-full">
          <img :src="installationImage" alt="tranos" class="w-full">

        </div>
        <div class="reverse pl-0 md:pl-10">
          <span class="text-18 md:text-20 font-bold mb-4 block mb-4 md:mb-6">Installation & Commissioning</span>
          <p class="text-14 md:text-16 font-light pr-0 md:pr-5">
            {{
              installation || `We dont just manufacture; we follow through to the last stage with installation and commissioning to
              ensure that all equipment manufactured or supplied are installed to give our customers peace of mind.`
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-5 md:py-10 grid__grid gap-5 md:gap-24 mb-10 font-light">
      <div class="pr-0 md:pr-10">
        <span class="text-18 md:text-20 font-bold mb-4 block mb-4 md:mb-6">Maintenance</span>
        <p class="mb-2 md:mb-4 text-14 md:text-16 font-light pr-0 md:pr-5">
          {{
            maintenance || `We understand that maintaining sound operational conditions for Oil & Gas facilities is crucial
            in optimizing operations without compromising operational safety.It is with this understanding that we
            provide corrective and preventive maintenance services with a focus on minimizing any impact
            on customers' operations.`
          }}
        </p>
      </div>
      <div class="w-full">
<!--        Redeploy-->
        <img :src="maintenanceImage" alt="tranos" class="w-full">
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  head: {
    title: 'Our Services'
  },
  data(){
    return {
      fabrication: '',
      installation: '',
      maintenance: '',
      fabricationImage: null,
      installationImage: null,
      maintenanceImage: null,
    }
  },
  methods: {
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

    async getFabricationImage() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/services/fabrication/64cadc0d62c7e0ecdd459765')
        this.fabricationImage = response.data.fabrication.fabricationImageUrl
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

    async getMaintenanceImage() {
      try {
        const response = await axios.get('https://tranos-api.onrender.com/api/v1/services/maintenance/64cb67ac3308f9c585bfee38')
        this.maintenanceImage = response.data.maintenance.maintenanceImageUrl
      } catch (e) {
        console.error(e)
      }
    },
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
.container {
  width: 900px;
  max-width: 95%;
}
.grid__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: flex-start;
  gap: 0;
  max-width: 95%;
  margin: 0 auto;
}
.no-border {
  border-top: none !important;
}

@media screen and (max-width: 768px) {
  .grid__grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    align-items: flex-start;
  }
  .reverse {
    grid-row: 1/2;
  }

}
</style>
