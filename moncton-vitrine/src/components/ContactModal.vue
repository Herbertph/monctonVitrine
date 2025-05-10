<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button @click="close" class="absolute top-2 right-2 text-gray-600 hover:text-red-600">
          &times;
        </button>
  
        <h2 class="text-2xl font-bold text-green-700 mb-4 text-center">
          {{ $t('nav.contato') }}
        </h2>
  
        <!-- Formulário com redirecionamento automático -->
        <form
          action="https://formsubmit.co/b6c023cad614035a096fd90a8538d5a3"
          method="POST"
          class="flex flex-col gap-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Novo contato via BR-Moncton!" />
          <input type="hidden" name="_next" value="https://brmoncton.com/obrigado.html" />
  
          <input
            type="text"
            name="name"
            :placeholder="$t('contact.name')"
            required
            class="border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            :placeholder="$t('contact.email')"
            required
            class="border rounded px-3 py-2"
          />
          <textarea
            name="message"
            :placeholder="$t('contact.message')"
            rows="4"
            required
            class="border rounded px-3 py-2"
          ></textarea>
  
          <button
            type="submit"
            class="bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            {{ $t('contact.send') }}
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['visible'],
    emits: ['close'],
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  