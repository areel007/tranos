<template>
  <div class="relative top-50px md:top-70px">

    <div class="relative w-screen h-200 md:h-50vh py-10">
      <img
        src="../../../static/assets/images/LIGHTS-AND-SWITCHES.jpg"
        alt=""
        class="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
    </div>

    <div class="lighting-and-wiring-devices-categories">

      <div class="mt-5 md:mt-10 residential-and-commercial">
        <h1 class="text-center mb-3 text-primary md:py-1 cursor-pointer residential-nav">RESIDENTIAL & COMMERCIAL</h1>
        <div class="text-20 category__grid residential-wrapper">
          <div
            class="text-white cursor-pointer category-card switches-and-sockets"
            @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/switches-and-sockets')"
          >
            <div class="card__inner-switches-and-sockets">
              <div class="switches-and-sockets-card-back">
                <img src="/assets/images/switches-and-sockets-svg-image.svg" alt="tranos">
              </div>
              <div class="switches-and-sockets-card-front">
                <img src="/assets/images/simon-E6.png" class="w-full h-full object-cover" alt="tranos">
              </div>
            </div>
          </div>
          <div
            class="text-white cursor-pointer category-card"
            @click="$router.push('/products/lighting-and-wiring-devices/residential-and-commercial/lighting/')"
          >
            <div class="card__inner-switches-and-sockets">
              <div class="residential-lighting-card-back">
                <img src="/assets/images/residential-lighting-svg.svg" alt="tranos">
              </div>
              <div class="residential-lighting-card-front">
                <img src="/assets/images/duro-image-1.jpg" class="w-full h-full object-cover" alt="tranos">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 md:mt-10 industrial">
        <h1 class="text-center mb-3 text-primary py-1 cursor-pointer industrial-nav">INDUSTRIAL</h1>
        <div class="text-20 category__grid industrial-wrapper">
          <div
            class="text-white cursor-pointer category-card wiring-devices"
            @click="$router.push('/products/lighting-and-wiring-devices/industrial/wiring-devices')"
          >
            <div class="card__inner-wiring-devices">
              <div class="wiring-devices-card-back">
                <img src="/assets/images/wiring-devices-svg.svg" alt="tranos">
              </div>
              <div class="wiring-devices-card-front">
                <img src="/assets/images/Explosion-proof-Plug-and-Sockets-(GRP).jpg" class="w-full" alt="tranos">
              </div>
            </div>
          </div>
          <div
            class="text-white cursor-pointer category-card industrial-lighting"
            @click="$router.push('/products/lighting-and-wiring-devices/industrial/lighting/')"
          >
            <div class="card__inner-industrial-lighting">
              <div class="industrial-lighting-card-back">
                <img src="/assets/images/industrial-lighting-svg.svg" alt="tranos">
              </div>
              <div class="industrial-lighting-card-front">
                <img src="/assets/images/Explosion-proof-Light-Fittings-for-Fluorescent-Lamp.jpg" class="w-full" alt="tranos">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

export default {
  name: "lighting-and-wiring-devices",
  head: {
    title: 'Lighting and Wiring Devices'
  },
}
</script>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.lighting-and-wiring-devices-categories {
  width: 1100px;
  max-width: 95%;
  margin: 0 auto 4.5em auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.category__grid {
  display: grid;
  grid-template-columns: 268px 268px;
  gap: 10px;
}
.category-card {
  height: 268px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.residential-nav,
.industrial-nav {
  background: #f5f5f5;
}
.residential-and-commercial:hover .residential-nav,
.industrial:hover .industrial-nav {
  background: #b7b7b7;
  color: white;
}


/* Flip*/
.card__inner-switches-and-sockets,
.card__inner-wiring-devices,
.card__inner-industrial-lighting {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.residential-and-commercial:hover .card__inner-switches-and-sockets,
.industrial:hover .card__inner-wiring-devices,
.industrial:hover .card__inner-industrial-lighting {
  transform: rotateY(180deg);
}
.switches-and-sockets-card-back,
.switches-and-sockets-card-front,
.residential-lighting-card-back,
.residential-lighting-card-front,
.wiring-devices-card-front,
.wiring-devices-card-back,
.industrial-lighting-card-front,
.industrial-lighting-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.switches-and-sockets-card-back,
.residential-lighting-card-back,
.wiring-devices-card-back,
.industrial-lighting-card-back {
  transform: rotateY(180deg);
}

/*@media screen and (max-width: 768px) {*/
/*  .category-card {*/
/*    width: 100%;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 550px) {*/
/*  .category-card {*/
/*    height: 200px;*/
/*  }*/
/*}*/
/*@media screen and (max-width: 420px) {*/
/*  .category-card {*/
/*    height: 180px;*/
/*  }*/
/*}*/
/*@media screen and (max-width: 370px) {*/
/*  .category-card {*/
/*    height: 150px;*/
/*  }*/
/*}*/
/*@media screen and (max-width: 310px) {*/
/*  .category-card {*/
/*    height: 260px;*/
/*  }*/
/*}*/

@media screen and (max-width: 1200px) {
  .category__grid {
    grid-template-columns: 1fr 1fr;
  }
  .category-card {
    height: 217px;
  }
}

/*@media screen and (max-width: 800px) {*/
/*  .category-card {*/
/*    height: 182px;*/
/*  }*/
/*}*/

@media screen and (max-width: 768px) {
  .lighting-and-wiring-devices-categories {
    grid-template-columns: 1fr;
  }
  .category__grid {
    grid-template-rows: 359px;
  }
  .category-card {
    height: 359px;
  }
}

@media screen and (max-width: 600px) {
  .category__grid {
    grid-template-rows: 280px;
    gap: 5px;
  }
  .category-card {
    height: 280px;
  }
}

@media screen and (max-width: 550px) {
  .category__grid {
    grid-template-rows: 258px;
  }
  .category-card {
    height: 258px;
  }
}

@media screen and (max-width: 500px) {
  .category__grid {
    grid-template-rows: 235px;
  }
  .category-card {
    height: 235px;
  }
}

@media screen and (max-width: 450px) {
  .category__grid {
    grid-template-rows: 211px;
  }
  .category-card {
    height: 211px;
  }
}

@media screen and (max-width: 400px) {
  .category__grid {
    grid-template-rows: 187px;
  }
  .category-card {
    height: 187px;
  }
}

@media screen and (max-width: 375px) {
  .category__grid {
    grid-template-rows: 163px;
  }
  .category-card {
    height: 163px;
  }
}

</style>
