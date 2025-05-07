<template>
  <section class="px-8 py-12 bg-[#4CAF50]">
    <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 font-urbanist text-center text-[#2E7D32]">City Events</h2>
  
        <Splide
          :options="splideOptions"
          class="w-full"
        >
          <SplideSlide v-for="(event, index) in events" :key="index">
            <div class="rounded-lg overflow-hidden shadow-md bg-white">
              <img :src="event.image" :alt="event.title" class="h-64 w-full object-cover" />
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
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            title: 'Food Market Weekend',
            description: 'Taste local flavors at our monthly food market.',
          },
          {
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            title: 'Lantern Festival',
            description: 'Celebrate culture with stunning lights and activities.',
          },
          {
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            title: 'Outdoor Concert',
            description: 'Live music and entertainment under the stars.',
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
  