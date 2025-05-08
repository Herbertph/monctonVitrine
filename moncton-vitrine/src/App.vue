<script>
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
};
</script>

<template>
 <div>
    <Header />
    <Hero />
    <CardSection />
    <EventsCarousel />  
    <Footer />
  </div>
</template>

<style scoped>
</style>
