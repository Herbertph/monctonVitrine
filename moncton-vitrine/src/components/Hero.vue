<template>
  <section
    id="home"
    class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
  >
    <!-- Vídeo de fundo -->
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
       @loadedmetadata="seekToStart"
      class="absolute top-0 left-0 w-full h-full object-cover z-1"
    >
      <source src="/brvid.mp4" type="video/mp4" />
      Seu navegador não suporta vídeos HTML5.
    </video>

    <!-- Fallback de imagem caso o vídeo não carregue -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
      :style="{ backgroundImage: `url('/fallback.jpg')` }"
    ></div>

    <!-- Overlay escuro -->
    <div class="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

    <!-- Texto central -->
    <div class="z-10 text-center">
      <h1
        class="text-4xl sm:text-5xl font-extrabold text-[#2E7D32] leading-tight text-center flex flex-col sm:flex-row items-center justify-center gap-2"
      >
        <span class="bg-yellow-400 px-2 rounded-md">{{ $t('hero.title') }}</span>
        <span class="text-red-600 px-2">{{ $t('hero.title2') }}</span>
        <span class="bg-yellow-400 px-2 rounded-md">{{ $t('hero.title3') }}</span>
      </h1>
      <h2 class="mt-4 font-bold text-lg text-yellow-200 max-w-md mx-auto">
        {{ $t('hero.subtitle') }}
      </h2>
    </div>

    <!-- Onda inferior -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1440 320"
        class="w-full h-32"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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
  methods: {
    seekToStart() {

      const startTime = 6; // em segundos
      const video = this.$refs.bgVideo;
      if (video && video.currentTime < startTime) {
        video.currentTime = startTime;
      }
    },
  },
};
</script>