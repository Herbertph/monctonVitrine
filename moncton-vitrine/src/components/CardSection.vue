<template>
<section class="px-8 py-12 bg-[#FCD34D]">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 font-roboto text-center text-[#2E7D32]">Nossos Estabelecimentos</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="(store, index) in stores"
          :key="index"
          :image="store.image"
          :title="store.title"
          :description="store.description"
          :location="store.location"
        />
      </div>
    </div>

  </section>

  <!-- SVG DIVIDINDO AS SEÇÕES -->
  <div class="relative -mt-1">
  <svg viewBox="0 0 1440 320" class="w-full h-32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <!-- Fundo Amarelo -->
    <rect width="100%" height="100%" fill="#FCD34D" />
    
    <!-- Onda Verde -->
    <path fill="#4CAF50" d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,106.7C560,107,640,149,720,170.7C800,192,880,192,960,170.7C1040,149,1120,107,1200,85.3C1280,64,1360,74,1400,80L1440,86L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
  </svg>
</div>

</template>
  
  <script>
  import Card from './Card.vue';
  
  export default {
    name: 'CardsSection',
    components: {
      Card
    },
    data() {
      return {
        stores: [
          {
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            title: 'Café Aurora',
            description: 'Cafeteria acolhedora com bebidas artesanais.',
            location: 'Downtown Moncton',
          },
          {
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
            title: 'Page & Story',
            description: 'Livraria local com eventos culturais.',
            location: 'Main Street',
          },
          {
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            title: 'Fresh Market',
            description: 'Mercado de produtos orgânicos.',
            location: 'West End',
          },
          
          // Add more stores here
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  