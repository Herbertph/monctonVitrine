<template>
  <section
    id="home"
    class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
  >
    <!-- Fallback SEMPRE visível no mobile ou como backup -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
      :style="{ backgroundImage: `url('/fallback.jpg')` }"
    ></div>

    <!-- Vídeo SOMENTE em telas maiores (desktop) -->
    <video
      v-if="isDesktop"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoplay
      muted
      playsinline
      loop
      preload="auto"
    >
      <source src="/brvid.mp4" type="video/mp4" />
    </video>

    <!-- Overlay escuro -->
    <div class="absolute inset-0 bg-black bg-opacity-40 z-10 pointer-events-none"></div>

    <!-- Texto -->
    <div class="z-20 text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-[#2E7D32] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-2">
        <span class="bg-yellow-400 px-2 rounded-md">{{ $t('hero.title') }}</span>
        <span class="text-red-600 px-2">{{ $t('hero.title2') }}</span>
        <span class="bg-yellow-400 px-2 rounded-md">{{ $t('hero.title3') }}</span>
      </h1>
      <h2 class="mt-4 font-bold text-lg text-yellow-200 max-w-md mx-auto">
        {{ $t('hero.subtitle') }}
      </h2>
    </div>

    <!-- Onda -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
      <svg viewBox="0 0 1440 320" class="w-full h-32" preserveAspectRatio="none">
        <path
          fill="#FCD34D"
          d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,149.3C672,128,768,128,864,122.7C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z"
        />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDesktop: true,
    };
  },
  mounted() {
    this.isDesktop = window.innerWidth >= 768;
  },
};
</script>
