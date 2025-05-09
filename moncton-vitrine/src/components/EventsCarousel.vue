<template>
  <section id="eventos" class="px-8 py-12 bg-[#4CAF50]">
    <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 font-roboto text-center text-[#FCD34D]">Proximos Eventos</h2>
  
        <Splide
          :options="splideOptions"
          class="w-full"
        >
          <SplideSlide v-for="(event, index) in events" :key="index">
            <div class="rounded-lg overflow-hidden shadow-md bg-white">
              <img :src="event.image" :alt="event.title" class="h-96 w-full object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800">{{ event.title }}</h3>
                <p class="text-sm text-gray-600">{{ event.description }}</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  </template>
  
  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import baile from '../assets/baile.png';
  
  export default {
    name: 'EventsCarousel',
    components: {
      Splide,
      SplideSlide,
    },
    data() {
      return {
        splideOptions: {
  type: 'slide',
  perPage: 1,
  perMove: 1,
  arrows: true,
  pagination: false,
  speed: 600,
  rewind: true,
  focus: 'center',
  gap: '1rem',
  drag: true,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
},

        events: [
          {
            image: baile,
            title: 'Baile Funk',
            description: 'Experimente ou mate a saudade do baile funk.',
          },
          {
            image: baile,
            title: 'Baile Funk',
            description: 'Experimente ou mate a saudade do baile funk.',
          },
          {
            image: baile,
            title: 'Baile Funk',
            description: 'Experimente ou mate a saudade do baile funk.',
          },
        ],
      };
    }
  };
  </script>
  
  
  <style scoped>
  /* Melhor posicionamento das setas */
  .splide__arrow {
  background: white;
  border: 2px solid #2E7D32;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 3rem;
  height: 3rem;
  color: #2E7D32;
  transition: background-color 0.3s, color 0.3s;
}

.splide__arrow:hover {
  background-color: #2E7D32;
  color: white;
}

.splide__arrow--prev {
  left: -2.5rem;
}

.splide__arrow--next {
  right: -2.5rem;
}
  </style>
  