<template>
  <div class="newsletter py-10 md:py-60px">
    <div class="container mx-auto">
      <div class="newsletter__inner">
        <div class="book">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/></g><g><path d="M22.47,5.2C22,4.96,21.51,4.76,21,4.59v12.03C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48 C10.38,4.55,8.51,4,6.5,4C4.71,4,3.02,4.44,1.53,5.2C1.2,5.36,1,5.71,1,6.08v12.08c0,0.58,0.47,0.99,1,0.99 c0.16,0,0.32-0.04,0.48-0.12C3.69,18.4,5.05,18,6.5,18c2.07,0,3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2c1.45,0,2.81,0.4,4.02,1.04 c0.16,0.08,0.32,0.12,0.48,0.12c0.52,0,1-0.41,1-0.99V6.08C23,5.71,22.8,5.36,22.47,5.2z M10,16.62C8.86,16.21,7.69,16,6.5,16 c-1.19,0-2.36,0.21-3.5,0.62V6.71C4.11,6.24,5.28,6,6.5,6C7.7,6,8.89,6.25,10,6.72V16.62z M19,0.5l-5,5V15l5-4.5V0.5z"/></g></svg>
          <p class="text-12 md:text-14">Newsletter - get updates with latest topics</p>
        </div>
        <form class="newsletter-form" method="POST" action="https://formsubmit.co/sales@tranos.ng">
          <input type="email" name="Subscription for newsletter" placeholder="Your e-mail address" required>
          <input type="hidden" name="_next" value="https://tranos.ng">
          <button type="submit">subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsletter"
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.newsletter {
  width: 100%;
  /*padding: 50px 0;*/
  background: #111;
}
.newsletter__inner {
  width: min(1100px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.book {
  display: flex;
  align-items: center;
}
.book svg {
  fill: #172673;
  width: 50px;
  height: 50px;
  margin-right: 30px;
}
.book p {
  color: white;
  font-weight: 200;
}
.newsletter-form {
  display: flex;
  align-items: center;
  width: 60%;
}
.newsletter-form input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: 1px solid grey;
  margin-right: 5px;
  color: white;
  font-size: 14px;
  font-weight: 200;
}
.newsletter-form button {
  padding: 10px;
  width: auto;
  background: #172673;
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  font-weight: 200;
}

@media screen and (max-width: 1000px) {
  .newsletter__inner {
    flex-direction: column;
  }
  .book {
    margin-bottom: 20px;
  }
  .newsletter-form {
    width: 100%;
  }
}

@media screen and (max-width: 610px) {
  .newsletter-form input {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .newsletter-form button {
    font-weight: 400;
    font-size: 12px;
  }
}
</style>
