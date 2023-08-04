<template>
  <div class="careers top-50px md:top-70px mb-5 md:mb-20">

    <div class="relative w-screen h-100 md:h-200">
      <div class="overlay absolute top-0 w-full h-full bg-primary z-10 opacity-60"></div>
      <img src="../static/assets/images/CAREER.jpg" alt="tranos" class="w-full h-full object-cover">
      <div class="w-95% lg:w-900 mx-auto">
        <div class="absolute top-0 z-20 h-full flex items-center">
          <span
            class="text-20 md:text-22 text-white font-medium uppercase"
            @click="$router.push('/products/power-generation/')"
            style="line-height: 1"
          >
            Careers
          </span>
        </div>
      </div>
    </div>

    <div class="w-95% lg:w-900 mx-auto pt-7 md:pt-20">
      <img src="../static/assets/images/career2.jpg" alt="tranos" class="w-full h-full object-contain">
    </div>

    <div class="w-full pt-4 md:pt-10">
      <div class="w-95% lg:w-900 mx-auto">
        <p class="w-full lg:w-10/12 text-16 md:text-22 mb-4" style="font-weight: 200; line-height: 30px">
          We welcome passionate people looking for challenging and fulfilling career opportunities in Engineering and Manufacturing.
        </p>

        <p class="text-14 md:text-16 font-light mb-4" style="line-height: 30px">
          At Tranos, we provide an environment filled with opportunities for you to express yourself through smart work, creativity and innovation, explore and challenge yourself to achieve even higher competence and a personal sense of dignity and satisfaction over your achievement.
          Join our brilliant team!
        </p>

      </div>
    </div>

    <div class="w-full py-4 md:py-10">
      <div class="w-95% lg:w-900 mx-auto">
        <h1 class="text-18 md:text-28 text-primary font-medium mb-6">Get in touch with us</h1>

        <form
          method="POST" action="https://formsubmit.co/careers@tranos.ng" enctype="multipart/form-data"
          class="w-full"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-9/12 items-end">
            <div class="grid grid-cols-1 gap-1">
              <label class="text-12 md:text-14">Name</label>
              <input type="text" name="your name" class="p-2 border border-gray-300" required>
            </div>

            <div class="grid grid-cols-1 gap-1">
              <label class="text-12 md:text-14">Age</label>
              <input type="text" name="your age" class="p-2 border border-gray-300" required>
            </div>

            <div class="grid grid-cols-1 gap-1">
              <label class="text-12 md:text-14">Phone Number</label>
              <div class="p-2 border border-gray-300">
                <select name="your country code" class="outline-none">
                  <option value="+234">+234</option>
                  <option v-for="(code, index) in codes" :key="index" :value="code.dial_code">{{ code.dial_code }}</option>
                </select>
                <input type="text" name="your phone number" class="outline-none" required>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-1">
              <label class="text-12 md:text-14">Email</label>
              <input type="email" name="your email" class="p-2 border border-gray-300" required>
            </div>

            <div class="grid grid-cols-1 gap-1">
              <label class="text-12 md:text-14">Years of Experience</label>
              <input type="number" name="your years of experience" class="p-2 border border-gray-300" required>
            </div>

<!--            <div class="grid grid-cols-1 gap-1">-->
<!--              <label class="text-12 md:text-14">Category</label>-->
<!--              <select name="category" class="p-2 border border-gray-300" required>-->
<!--                <option value="">Choose Category</option>-->
<!--                <option value="Graduate">Graduate Trainee</option>-->
<!--                <option value="Permanent">Permanent</option>-->
<!--              </select>-->
<!--            </div>-->

            <div class="grid grid-cols-1 gap-1">
              <label class="text-12 md:text-14">Designation</label>
              <input type="text" name="your designation" class="p-2 border border-gray-300" required>
<!--              <select name="designation" class="p-2 border border-gray-300" required>-->
<!--                <option value="">Choose Designation</option>-->
<!--                <option v-for="(designation, index) in designations" :key="designation" :value="designation">-->
<!--                  {{ designation }}-->
<!--                </option>-->
<!--              </select>-->
            </div>

            <div class="grid grid-cols-1 gap-1">
              <label>Document formats: jpeg, png, pdf, doc, docx</label>
              <input
                type="file"
                name="your attachment"
                accept="image/*,.pdf,.doc,.docx"
                class="p-2 border border-gray-300"
                required
              >
            </div>

            <button type="submit" class="p-2 border border-gray-300 bg-primary text-white block">Send</button>

            <input type="hidden" name="_next" value="https://tranos.ng">
          </div>

<!--          <div class="w-full md:w-9/12 mt-4">-->
<!--            <button type="submit" class="p-2 border border-gray-300 bg-primary text-white w-full md:w-200 mx-auto block">Send</button>-->
<!--          </div>-->

        </form>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  head: {
    title: 'Careers'
  },
  data() {
    return {
      designations: [
        'Machine Operators: (Punching & Roll forming line for Cable Tray & Ladder)',
        'Assemblers: (Punching & Roll forming line for Cable Tray & Ladder)',
        'Team Lead/Supervisor: Cable Tray & Ladder',
        'Gasket Machine Operator: Soft cut Gasket, Clicker Press',
        'Gasket Machine Operator: CNC, Spiral Wound Gasket',
        'Team Lead/Supervisor: Gasket',
        'Store Officer',
        'Forklift Operator',
        'Cleaners',
        'Assistant Production Manager',
        'HSE Officer',
        'Quality Officer',
        'Sales Manager',
        'Mechanical Design Engineer',
        'PA to the MD',
        'Team Lead, Powder Coating',
        'Procurement Officer',
        'Sales Engineer (Gaskets, Industrial Ventilation & Filtration System)',
        'Sales Engineer (Cable Management System & LV Panels/Switchgear)',
        'Sales Engineer (Enclosures/Shelters & Storage Racks)',
        'Marketing & Business Development'
      ],
      codes: null
    }
  },
  async created() {
    const codes = await axios.get('https://countriesnow.space/api/v0.1/countries/codes')
    this.codes = codes.data.data
  }
}
</script>

<style scoped>
.careers {
  position: relative;
  top: 70px;
}
.container {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .careers {
    top: 50px;
  }
}
</style>
