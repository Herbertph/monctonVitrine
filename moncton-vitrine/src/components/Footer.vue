<template>
    <footer class="relative w-full bg-white">
      <!-- SVG Onda suave (Verde para Branco) -->
      <div class="relative -mt-1 drop-shadow-md">
        <svg viewBox="0 0 1440 120" class="w-full h-[80px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#4CAF50" d="M0,32 C360,80 1080,0 1440,48L1440,0L0,0Z"></path>
        </svg>
      </div>
  
      <!-- Conteúdo do Footer -->
      <div class="flex justify-center items-center h-24 px-4 font-urbanist text-gray-600 text-sm">
        © {{ new Date().getFullYear() }} Todos os direitos reservados.
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  </style>
  