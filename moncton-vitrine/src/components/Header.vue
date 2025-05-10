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

    <!-- Navigation Links (Desktop Only) -->
    <nav ref="desktopNav" class="hidden md:flex space-x-8 font-urbanist">
      <a href="#home" class="nav-link text-[#2E7D32] transition-colors duration-300">{{ $t('nav.home') }}</a>
      <a href="#comercio" class="nav-link text-[#2E7D32] transition-colors duration-300">{{ $t('nav.comercio') }}</a>
      <a href="#eventos" class="nav-link text-[#2E7D32] transition-colors duration-300">{{ $t('nav.eventos') }}</a>
      <button @click="$emit('open-contact-modal')" class="nav-link text-[#2E7D32] transition-colors duration-300">{{ $t('nav.contato') }}</button>
      <div class="flex items-center space-x-2 pl-4 border-l border-gray-300 ml-4">
        <img
          src="https://flagcdn.com/w40/br.png"
          alt="Português"
          aria-label="Trocar para português"
          class="w-6 h-6 rounded-full object-cover cursor-pointer hover:scale-110 transition-transform"
          @click="$i18n.locale = 'pt'"
        />
        <img
          src="https://flagcdn.com/w40/ca.png"
          alt="English"
          aria-label="Switch to English"
          class="w-6 h-6 rounded-full object-cover cursor-pointer hover:scale-110 transition-transform"
          @click="$i18n.locale = 'en'"
        />
      </div>
    </nav>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center">
      <button ref="menuButton" @click="toggleMenu" class="focus:outline-none">
        <svg v-if="!menuOpen" class="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Dropdown Mobile Menu -->
    <transition name="fade">
      <div v-if="menuOpen" ref="mobileNav" class="absolute top-full right-8 bg-white shadow-lg rounded-md mt-2 py-2 w-40 flex flex-col space-y-2 font-urbanist">
        <a href="#home" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">{{ $t('nav.home') }}</a>
        <a href="#comercio" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">{{ $t('nav.comercio') }}</a>
        <a href="#eventos" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">{{ $t('nav.eventos') }}</a>
        <a @click="$emit('open-contact-modal')" class="mobile-link block px-4 py-2 text-[#2E7D32] transition-colors duration-300">{{ $t('nav.contato') }}</a>
      </div>
    </transition>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';

export default {
  name: "Header",
  emits: ['open-contact-modal'],
  setup() {
    const menuOpen = ref(false);
    const desktopNav = ref(null);
    const mobileNav = ref(null);
    const menuButton = ref(null);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        menuOpen.value = false;
      }
    };

    const handleClickOutside = (event) => {
      const nav = mobileNav.value;
      const button = menuButton.value;

      const clickedOutsideMenu =
        nav && !nav.contains(event.target) &&
        button && !button.contains(event.target);

      if (clickedOutsideMenu) {
        setTimeout(() => {
          menuOpen.value = false;
        }, 50);
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
      document.addEventListener('mousedown', handleClickOutside);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
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
      menuButton,
    };
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
