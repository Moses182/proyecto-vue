<template>
  <h1>  Contador</h1>
 <p>{{ contador }}</p> 
  <button @click="Incrementar">+</button>
  <button @click="Decrementar">-</button>
</template>

<script setup>
import {ref} from 'vue';
const contador = ref(10);
const Incrementar = () => {
  contador.value++;
}
const Decrementar = () => {
  contador.value--;
}
</script>

<style scoped>
p{
  color: rgb(157, 184, 36);
}

</style>
