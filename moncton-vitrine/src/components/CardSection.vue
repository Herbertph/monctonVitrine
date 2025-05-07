<template>
    <section class="px-8 py-12 bg-yellow-400 bg-opacity-70 backdrop-blur-lg backdrop-brightness-110">


      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 font-urbanist text-center text-[#2E7D32]">Nossos Estabelecimentos</h2>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            v-for="(store, index) in stores"
            :key="index"
            :image="store.image"
            :title="store.title"
            :description="store.description"
            :location="store.location"
            :status="store.status"
          />
        </div>
      </div>
    </section>
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
  