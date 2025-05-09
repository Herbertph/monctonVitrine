<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue';
import CardSection from './components/CardSection.vue';
import EventsCarousel from './components/EventsCarousel.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';

export default {
  name: 'App',
  components: {
    Header,
    CardSection,
    EventsCarousel,
    Footer,
    Hero,
  },
  data() {
    return {
      showScrollTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.showScrollTop = window.scrollY > window.innerHeight * 0.8;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<template>
  <div>
    <Header />
    <Hero />
    <CardSection />
    <EventsCarousel />  
    <Footer />

    <!-- Botão flutuante -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-white text-green-700 hover:bg-green-200 shadow-lg rounded-full p-3 z-[999] transition-opacity duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
</style>
