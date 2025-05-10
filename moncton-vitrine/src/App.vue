<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue';
import CardSection from './components/CardSection.vue';
import EventsCarousel from './components/EventsCarousel.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import ContactModal from './components/ContactModal.vue';
export default {
  name: 'App',
  components: {
    Header,
    CardSection,
    EventsCarousel,
    Footer,
    Hero,
    ContactModal,
  },
  setup() {
    const showScrollTop = ref(false);
    const showModal = ref(false);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
      showScrollTop.value = window.scrollY > window.innerHeight * 0.8;
    };

    const openContactModal = () => {
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showScrollTop,
      showModal,
      openContactModal,
      closeModal,
      scrollToTop,
    };
  },
};
</script>


<template>
  <div>
    <Header @open-contact-modal="openContactModal" />
    <Hero />
    <CardSection />
    <EventsCarousel />  
    <Footer />
    <ContactModal :visible="showModal" @close="closeModal" />

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
