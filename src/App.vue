<script setup>
import router from './router';
</script>
<template>
  <h1>Garagem da Vih</h1>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/categorias">Categorias</router-link> |
    <router-link to="/Acessorios">Acessorios</router-link> |
    <router-link to="/Cores">Cores</router-link> |
    <router-link to="/Marcas">Marcas</router-link> |
  </header>
  <main>
    <RouterView />
  </main>
</template>