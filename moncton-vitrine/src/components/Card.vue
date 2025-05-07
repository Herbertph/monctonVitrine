<template>
    <div
    class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >

      <!-- Imagem -->
      <img :src="image" :alt="title" class="h-48 w-full object-cover">
  
      <!-- Conteúdo -->
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-1">{{ title }}</h2>
          <p class="text-sm text-gray-600 mb-4">{{ description }}</p>
        </div>
  
        <div class="flex justify-between items-center text-sm text-gray-500">
            <div class="flex items-center space-x-2">
      <!-- Ícone de Localização Clássico -->
                <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
                <span>{{ location }}</span>
            </div>
  
          <!-- Botão "Ver mais" -->
          <button
            class="text-[#2E7D32] font-semibold hover:underline text-sm"
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      }
    },
  };
  </script>
  
  <style scoped>
  </style>
  