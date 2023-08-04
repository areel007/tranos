<template>
  <div class="pt-7 md:pt-14">

    <div class="container mx-auto border-b border-gray-400 pb-14">

      <div class="grid__grid mb-10">

        <a href="/case-studies/oil-and-gas/igpes" class="grid__card">
          <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
            <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
            <img src="../../static/assets/images/tray.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
          </div>
          <div>
            <p class="text-center text-14">Supply of Cable Trays, Ladders & Accessories.</p>
            <p class="font-bold text-center text-9">Oil & Gas</p>
          </div>
        </a>

        <a href="/case-studies/oil-and-gas/nlng" class="grid__card">
          <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
            <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
            <img src="../../static/assets/images/Marine-Civil-Facilities.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
          </div>
          <div>
            <p class="text-center text-14">Revamp of Marine Civil Facilities</p>
            <p class="font-bold text-center text-9">Oil & Gas</p>
          </div>
        </a>

        <a href="/case-studies/oil-and-gas/addax" class="grid__card">
          <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
            <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
            <img src="../../static/assets/images/addax-renew.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
          </div>
          <div>
            <p class="text-center text-14">Fabrication of 400A MCC & Distribution Panel</p>
            <p class="font-bold text-center text-9">Oil & Gas</p>
          </div>
        </a>

        <a href="/case-studies/aviation/one" class="grid__card">
          <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
            <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
            <img src="../../static/assets/images/aerospace.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
          </div>
          <div>
            <p class="text-center text-14">Power Room Fabrication</p>
            <p class="font-bold text-center text-9">Aviation</p>
          </div>
        </a>

        <a href="/case-studies/telecomms/one" class="grid__card">
          <div class="w-full h-200 bg-primary mb-2 rounded-lg relative group zoom-card">
            <div class="absolute w-full h-full bg-primary z-10 opacity-50 group-hover:opacity-0 rounded-lg"></div>
            <img src="../../static/assets/images/telecoms-renew.jpg" alt="tranos" class="w-full h-full rounded-lg object-cover">
          </div>
          <div>
            <p class="text-center text-14">Gas Generator for Different Load Demands</p>
            <p class="font-bold text-center text-9">Telecommunications</p>
          </div>
        </a>

      </div>

      <div class="flex justify-center gap-2 items-center">
        <a href="/projects/all-categories" class="text-primary">1</a>
        <
        <a href="#" class="w-30 h-30 bg-primary flex justify-center items-center text-white">2</a>
      </div>

    </div>

  </div>
</template>

<style scoped>
.container {
  width: 1100px;
  max-width: 95%;
}
.grid__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 20px;
}
.grid__card {
  width: 100%;
  border-radius: 10px;
}
.zoom-card {
  overflow: hidden;
}
.zoom-card img {
  transition: transform .5s ease-in-out;
}
.zoom-card:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 1000px) {
  .grid__grid {
    column-gap: 20px;
  }
}

@media screen and (max-width: 800px) {
  .grid__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
}

@media screen and (max-width: 500px) {
  .grid__grid {
    grid-template-columns: 1fr;
    column-gap: 20px;
  }
}
</style>
