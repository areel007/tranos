<template>
  <div class="py-5 md:py-20 bg-wSmoke">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <h1
            class="text-primary text-28 md:text-40 font-light mb-3 md:mb-5 w-full lg:w-70%"
            style="line-height: 1"
          >
            Find the best Tranos solutions for your business.
          </h1>
          <span class="text-16">Contact us to find out about our products</span>
        </div>
        <form method="POST" action="https://formsubmit.co/sales@tranos.ng" enctype="multipart/form-data">
          <div class="form-control">
            <label>Firstname</label>
            <input type="text" name="your first name" required>
          </div>
          <div class="form-control">
            <label>Lastname</label>
            <input type="text" name="your last name" required>
          </div>
          <div class="form-control">
            <label>Company</label>
            <input type="text" name="your company" required>
          </div>

<!--          -->
<!--          <div class="form-control">-->
<!--            <label>VAT Number</label>-->
<!--            <input type="text">-->
<!--          </div>-->

          <div class="form-control__special">
            <label>Phone</label>
            <div class="flex form-control__special__special">
              <select name="your country code" class="outline-none">
                <option value="+234">+234</option>
                <option v-for="(code, index) in codes" :key="index" :value="code.dial_code">{{ code.dial_code }}</option>
              </select>
              <input type="text" name="your phone number" class="outline-none" required>
            </div>
          </div>

<!--          <div class="form-control">-->
<!--            <label>Category</label>-->
<!--            <select name="category" required>-->
<!--              <option value="">Pick a Category</option>-->
<!--              <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>-->
<!--            </select>-->
<!--          </div>-->

<!--          -->
<!--          <div class="form-control">-->
<!--            <label>Role</label>-->
<!--            <select>-->
<!--              <option value="">Pick a Role</option>-->
<!--              <option v-for="(role, index) in roles" :key="index" :value="role">{{ role }}</option>-->
<!--            </select>-->
<!--          </div>-->


          <div class="form-control">
            <label>Email</label>
            <input type="email" name="your email" required>
          </div>

<!--          <div class="form-control">-->
<!--            <label>Country</label>-->
<!--            <select name="country" required>-->
<!--              <option value="">Pick a Country</option>-->
<!--              <option-->
<!--                :value="country.name"-->
<!--                v-for="(country, index) in countries"-->
<!--                :key="index"-->
<!--              >-->
<!--                {{ country.name }}-->
<!--              </option>-->
<!--            </select>-->
<!--          </div>-->

          <div class="form-control">
            <label>Product Line</label>
            <select name="product line" required>
              <option value="">Pick product line</option>
              <option v-for="(productLine, index) in productLines" :key="index" :value="productLine">{{ productLine }}</option>
            </select>
          </div>
          <div class="form-control text_area_control">
            <label>Requests</label>
            <textarea name="your requests" required></textarea>
          </div>
          <div class="form-control text_area_control">
            <label>Attachment</label>
            <input
              type="file"
              name="your attachment"
              accept="image/*,.pdf,.doc,.docx"
            >
          </div>
          <div class="form-control check__box">
<!--            <label>-->
<!--              <input type="checkbox">-->
<!--              <span>-->
<!--                I hereby consent to the processing of my personal data in accordance with EU Regulation no. 2016/679. ( Read the Privacy Policy )-->
<!--              </span>-->
<!--            </label>-->
          </div>
          <div class="form-control check__box">
            <label>
              <input type="checkbox" name="Sign me up for exclusive offers and information">
              <span>
                Sign me up to receive exclusive offers and information about the latest promotions, events and news
              </span>
            </label>
          </div>
          <input type="hidden" name="_next" value="https://tranos.ng">
          <div class="form-control">
            <button type="submit">Submit your request</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "contact-form",
  head: {
    title: 'Contacts'
  },
  data() {
    return {
      codes: null,
      categories: [
        'Sales Agency',
        'Consultancy',
        'Distributor/Wholesaler of Electricity Supply',
        'Body Association',
        'EPC',
        'Group Purchasing Organization (GPO)',
        'Installer/Electrical or Mechanical Contractor',
        'Bank',
        'OEM Original Equipment Manufacturer',
        'Goods Manufacturer',
        'Panel Builder',
        'Editorial Officer',
        'IT dealer',
        'Design Office - Specifier',
        'Transport - Infrastructure',
        'Service Provider',
        'System Integrator',
        'Other'
      ],
      roles: [
        'Agent',
        'Managing Director/CEO Chief Executive Officer',
        'Area Manager/Sales Director',
        'Buyer',
        'Category Manager',
        'Consultant',
        'Sales Management',
        'General Management/Executive Management',
        'Purchasing Manager',
        'Technical Support Management/Technical Support Manager',
        'Marketing & Communication',
        'Project Manager',
        'Editor',
        'Branch Manager',
        'Supply Chain/Logistics',
        'Owner',
        'Technical Office',
        'Other'
      ],
      productLines: [
        'Power Protection & Distribution',
        'Cable Management & Support System',
        'Enclosures',
        'Warehouse Storage System',
        'Gaskets',
        'Power Generation & Backup',
        'Lighting & Wiring Devices',
        'Fabrication',
        'Installation & Commissioning',
        'Maintenance'
      ],
      signMeUp: false,
    }
  },
  async created() {
    const codes = await axios.get('https://countriesnow.space/api/v0.1/countries/codes')
    this.codes = codes.data.data
  }
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.form-control,
.form-control__special {
  width: 100%;
}
.form-control label,
.form-control__special label {
  font-size: 14px;
  /*font-weight: 500;*/
}
.form-control input,
.form-control select {
  width: 100%;
  border: 1px solid gray;
  outline: none;
  padding: 3px 5px;
  background: white;
  font-weight: 300;
  font-size: 16px;
}
.form-control__special select {
  width: min-content;
}
.form-control__special input {
  width: 100%;
}
.form-control__special__special {
  width: 100%;
  border: 1px solid gray;
  outline: none;
  padding: 3px 5px;
  background: white;
  font-weight: 300;
  font-size: 16px;
}
.text_area_control {
  grid-column: 1/-1;
}
.form-control textarea {
  width: 100%;
  resize: none;
  border: 1px solid gray;
  outline: none;
  padding: 3px 5px;
  background: white;
  height: 100px;
}
.check__box {
  grid-column: 1/-1;
}
.check__box label {
  display: flex;
  justify-content: flex-start;
  font-weight: 300;
}
.check__box label input {
  width: min-content;
  margin-right: 10px;
}
.form-control button {
  padding: 5px 10px;
  background: #172673;
  color: white;
  outline: none;
  border: 1px solid #172673;
  cursor: pointer;
}
.bg-wSmoke {
  background: var(--contact-form-bg, #f5f5f5);
}

@media screen and (max-width: 400px) {
  form {
    grid-template-columns: 1fr;
  }
}
</style>
