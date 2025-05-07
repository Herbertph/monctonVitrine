<script>
import Header from './components/Header.vue';
import CardSection from './components/CardSection.vue';
import EventsCarousel from './components/EventsCarousel.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    CardSection,
    EventsCarousel,
    Footer,
  },
};
</script>

<template>
 <div>
    <Header />
    <CardSection />
    <EventsCarousel />  
    <Footer />
  </div>
</template>

<style scoped>

</style>
