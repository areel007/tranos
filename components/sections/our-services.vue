<template>
  <div class="relative">
    <div class="our-services py-10 md:py-60px ">
      <div class="container mx-auto">
        <span class="text-primary text-18 md:text-24 block mb-10 text-center font-medium">Our Services</span>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
          <div class="text-16 md:text-18">
            <h1 class="text-14 md:text-16 font-medium text-primary uppercase text-left border-b border-primary mb-5">Fabrication</h1>
            <p class="text-14 md:text-16 font-light">
              {{ fabrication || 'We design and fabricate various structural and process modules, skids, equipment and parts to a very high level of equality and precision. We have an in-house team of engineers with in-depth knowledge and experience with various design software.' }}
            </p>
          </div>
          <div class="text-16 md:text-18">
            <h1 class="text-14 md:text-16 font-medium text-primary uppercase text-left border-b border-primary mb-5 whitespace-nowrap">Installation & Commissioning</h1>
            <p class="text-14 md:text-16 font-light">
              {{ installation || "We don't just manufacture, we follow through to the last stage with installation and commissioning to ensure that all equipment manufactured or supplied are installed to give our customers peace of mind."}}
            </p>
          </div>
          <div class="text-16 md:text-18">
            <h1 class="text-14 md:text-16 font-medium text-primary uppercase text-left border-b border-primary mb-5">Maintenance</h1>
            <p class="text-14 md:text-16 font-light">
              {{ maintenance || "We understand that maintaining sound operational conditions for Oil & Gas facilities is crucial in optimizing operations without compromising operational safety. It is with this understanding that we provide corrective and preventive maintenance services with a focus on minimizing any impact on customers operations"}}
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="container mx-auto py-10 md:py-60px ">
      <span class="text-primary text-18 md:text-24 block mb-10 text-center font-medium">Industries We Serve</span>
      <IndustryWeServeCarousel />
    </div>
  </div>
</template>

<script>
import IndustryWeServeCarousel from '../../components/sections/carousel/industry-we-serve-carousel'
import axios from "axios";

export default {
  name: "our-services",
  components: {
    IndustryWeServeCarousel
  },
  data() {
    return {
      fabrication: '',
      installation: '',
      maintenance: '',
    }
  },
  methods: {
    async getServicesText() {
      const response = await axios.get('https://tranos-api.onrender.com/api/v1/home/services/64bfe981c37e731f679c9042')
      this.fabrication = response.data.servicesText.fabrication
      this.installation = response.data.servicesText.installation
      this.maintenance = response.data.servicesText.maintenance
    }
  },
  mounted() {
    this.getServicesText()
  }
}
</script>

<style scoped>
.our-services {
  background: #F2F2F2;
}
.container {
  width: 1100px;
  max-width: 95%;
}
.service-header {
  width: min-content;
  white-space: nowrap;
  margin: 0 auto 40px auto;
}
.service-header:after {
  content: '';
  height: 2px;
  width: 50%;
  background-color: #5EC4D0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 110%;
}
</style>
