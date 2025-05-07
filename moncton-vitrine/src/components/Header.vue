<template>
    <header class="flex items-center justify-between px-8 py-4 shadow-md relative sticky top-0 z-[999] bg-white">
      <!-- Logo -->
      <div class="flex-1 flex justify-center md:justify-start items-center space-x-2">
        <span class="text-xl font-bold font-urbanist">
          <span class="text-yellow-400">B</span>
          <span class="text-green-600">R</span> -
          <span class="text-red-600">Moncton</span>
        </span>
      </div>
  
      <!--(Desktop Only) -->
      <nav ref="desktopNav" class="hidden md:flex space-x-8 font-urbanist">
        <a href="#" class="nav-link text-[#2E7D32] transition-colors duration-300">Home</a>
        <a href="#" class="nav-link text-[#2E7D32] transition-colors duration-300">Comercio</a>
        <a href="#" class="nav-link text-[#2E7D32] transition-colors duration-300">Eventos</a>
        <a href="#" class="nav-link text-[#2E7D32] transition-colors duration-300">Contato</a>
      </nav>
  
      <!--(Mobile Only) -->
      <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg v-if="!menuOpen" class="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      </div>
  
      <!-- Menu Dropdown Mobile -->
      <transition name="fade">
        <div v-if="menuOpen" ref="mobileNav" class="absolute top-full right-8 bg-white shadow-lg rounded-md mt-2 py-2 w-40 flex flex-col space-y-2 font-urbanist">
          <a href="#" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">Home</a>
          <a href="#" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">Sobre</a>
          <a href="#" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">Serviços</a>
          <a href="#" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">Contato</a>
        </div>
      </transition>
    </header>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted, watch } from 'vue';
  
  export default {
    name: "Header",
    setup() {
      const menuOpen = ref(false);
      const desktopNav = ref(null);
      const mobileNav = ref(null);
  
      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
      };
  
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          menuOpen.value = false;
        }
      };
  
      const setupHoverEffect = (containerSelector, linkClass) => {
        const container = containerSelector.value;
        if (!container) return;
  
        const links = container.querySelectorAll(`.${linkClass}`);
        links.forEach(link => {
          link.addEventListener('mouseenter', () => {
            links.forEach(l => {
              if (l === link) {
                l.classList.add('font-bold');
                l.classList.remove('text-[#A5D6A7]');
              } else {
                l.classList.remove('font-bold');
                l.classList.add('text-[#A5D6A7]');
              }
            });
          });
  
          link.addEventListener('mouseleave', () => {
            links.forEach(l => {
              l.classList.remove('font-bold', 'text-[#A5D6A7]');
            });
          });
        });
      };
  
      onMounted(() => {
        setupHoverEffect(desktopNav, 'nav-link');
  
        window.addEventListener('resize', handleResize);
      });
  
      onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
      });
  
      
      watch(menuOpen, (newVal) => {
        if (newVal) {
          setTimeout(() => {
            setupHoverEffect(mobileNav, 'mobile-link');
          }, 100);
        }
      });
  
      return {
        menuOpen,
        toggleMenu,
        desktopNav,
        mobileNav,
      };
    }
  };
  </script>
  
  <style scoped>
  /* Transition para abrir o dropdown mobile */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  