<template>
  <div class="relative top-50px md:top-70px contact-form">
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.195728210628!2d3.3371101147712516!3d6.62259239521101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d87a75be81%3A0xa33f864929d315a4!2s22a%20Guinness%20Rd%2C%20Ogba%20101233%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1648549974042!5m2!1sen!2sng" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '../components/blocks/contact-form'

export default {
  name: "contact",
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.contact-form {
  --contact-form-bg: white;
}
iframe {
  width: 100% !important;
  height: 50vh !important;
}
</style>
