<template>
  <footer>
    <div class="footer-top py-10 md:py-60px">
      <div class="container">
        <div class="footer-top__inner">
          <header>
            <img src="../../static/assets/images/TRANOS-LOGO-WHITE.svg" alt="tranos">
            <p class="font-light">Contacts</p>
            <p class="font-light">Helpful links</p>
          </header>
          <div class="footer-top-body">
            <div class="about-tranos">
              <p>TRANOS is the engineering and
                manufacturing leader adding value to
                lives through innovative solutions.
              </p>
<!--              <p>In over a decade of existence, Tranos-->
<!--                has grown into a reputable and-->
<!--                internationally recognised brand.-->
<!--              </p>-->
            </div>
            <div class="contacts">
              <p class="emergency">Contacts</p>
              <div class="address">
                <div class="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="#172673">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                  <div class="mb-2">
                    <span class="text-white font-light">Head Office</span>
                    <p>22A Guinness Road, <br>Off ACME Road, <br>Ogba, Ikeja, <br> Lagos - Nigeria</p>
                  </div>
                  <div>
                    <span class="text-white font-light">Factory 2</span>
                    <p>Plot 8A, Block C, <br>Ogba Industrial Estate, <br>ACME Road, <br> Lagos</p>
                  </div>
                </div>
              </div>
              <div class="phone">
                <div class="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="#172673">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p>+234 1 271 7120</p>
              </div>
              <div class="email">
                <div class="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="#172673" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <p>sales@tranos.ng</p>
              </div>
            </div>
            <div class="links">
              <router-link to="/about">About</router-link>
              <router-link to="/products/enclosures">Products</router-link>
              <router-link to="/industry-we-serve">Industries we serve</router-link>
              <router-link to="/our-services">Services</router-link>
              <router-link to="/projects/">Case Studies</router-link>
              <router-link to="/news-and-insights">News & Insights</router-link>
            </div>
            <div class="socials">
              <a href="https://www.facebook.com/tranosng" class="social-circle" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a href="https://www.twitter.com/tranosng" class="social-circle" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/tranosng" class="social-circle" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/tranosng" class="social-circle" target="_blank">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.687006 29.6507V8.69809H6.49808V29.6507H0.687006ZM3.60618 5.99717C2.74225 5.99717 2.00109 5.71071 1.3827 5.13778C0.773399 4.55577 0.46875 3.86007 0.46875 3.05071C0.46875 2.25043 0.773399 1.56384 1.3827 0.990916C2.00109 0.408898 2.74225 0.117889 3.60618 0.117889C4.47011 0.117889 5.20673 0.408898 5.81603 0.990916C6.43442 1.56384 6.74362 2.25043 6.74362 3.05071C6.74362 3.86007 6.43442 4.55577 5.81603 5.13778C5.20673 5.71071 4.47011 5.99717 3.60618 5.99717Z" fill="white"/>
                  <path d="M16.9641 17.5375V29.6507H11.1531V8.69809H16.6913V12.3948H16.9369C17.4007 11.1762 18.1782 10.2122 19.2695 9.50291C20.3608 8.78448 21.6839 8.42527 23.239 8.42527C24.6941 8.42527 25.9627 8.74356 27.0449 9.38014C28.127 10.0167 28.9682 10.9261 29.5684 12.1083C30.1686 13.2815 30.4687 14.6819 30.4687 16.3098V29.6507H24.6577V17.3465C24.6668 16.0642 24.3394 15.0639 23.6755 14.3455C23.0117 13.6179 22.0977 13.2542 20.9337 13.2542C20.1516 13.2542 19.4605 13.4224 18.8602 13.7589C18.2691 14.0954 17.8053 14.5865 17.4689 15.2321C17.1415 15.8687 16.9732 16.6372 16.9641 17.5375Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          <p class="text-center text-white text-12 font-light">&copy; {{Date().split(' ')[3]}} Tranos. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer"
}
</script>

<style scoped>
footer {
  width: 100%;
  position: relative;
  top: 70px !important;
}
.container {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto;
}
.footer-top {
  width: 100%;
  /*padding: 100px 0;*/
  background: #172673;
}
.footer-top__inner header {
  width: min(1100px, 100%);
  margin: 0 auto 30px auto;
  display: grid;
  grid-template-columns: 25% 40% repeat(2, 1fr);
  align-items: flex-end;
  border-bottom: 1px solid white;
  padding-bottom: 20px;
  grid-column-gap: 30px;
}
.footer-top-body {
  width: min(1100px, 100%);
  margin: 0 auto 80px auto;
  display: grid;
  grid-template-columns: 25% 40% repeat(2, 1fr);
  grid-column-gap: 30px;
}
.footer-top__inner header img {
  width: 150px;
}
.footer-top__inner header p {
  color: white;
}
.about-tranos {
  width: 80%;
}
.about-tranos p {
  margin-bottom: 10px;
  font-size: 14px;
  color: white;
  font-weight: 200;
}
.footer-top-body .contacts .address,
.footer-top-body .contacts .phone,
.footer-top-body .contacts .email {
  display: flex;
  margin-bottom: 10px;
}
.footer-top-body .contacts .email {
  margin-bottom: 0;
}
.footer-top-body .contacts .address p,
.footer-top-body .contacts .phone p,
.footer-top-body .contacts .email p {
  font-size: 14px;
  font-weight: 200;
  color: white;
  line-height: 150%;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  flex-shrink: 0;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links a {
  list-style: none;
  color: white;
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
  display: block;
  text-decoration: none;
}
.links a:last-child {
  margin-bottom: 0;
}
.socials {
  display: flex;
  justify-content: space-between;
}
.social-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  text-decoration: none !important;
}
.fab {
  margin: auto;
  color: white;
  font-size: 12px;
}
.circle .fas {
  font-size: 10px;
  color: white;
  margin: auto;
}
.emergency {
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
  text-decoration: underline;
  font-weight: 400 !important;
  display: none;
}
.socials a svg {
  width: 15px;
  height: 15px;
  fill: white;
}
.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1000px) {
  .footer-top__inner header,
  .footer-top-body {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
  }
  .about-tranos {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  footer {
    top: 50px;
  }
  .footer-top-body {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  .socials {
    justify-content: flex-start;
  }
  .social-circle {
    margin-right: 10px;
  }
  .footer-top__inner header img {
    width: 100px;
  }
  .footer-top__inner header p {
    display: none;
  }
  .emergency {
    display: block;
  }
}
</style>
