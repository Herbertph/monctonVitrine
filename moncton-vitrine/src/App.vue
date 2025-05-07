<script>
import Header from './components/Header.vue';
import CardSection from './components/CardSection.vue';
import EventsCarousel from './components/EventsCarousel.vue';
export default {
  name: 'App',
  components: {
    Header,
    CardSection,
    EventsCarousel,
  },
};
</script>

<template>
 <div>
    <Header />
    <CardSection />
    <EventsCarousel />  
  </div>
</template>

<style scoped>

</style>
