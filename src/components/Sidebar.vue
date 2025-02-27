<template>
<div class="sidebar">
<h2>Barra lateral</h2>
<ul>
    <li> <router-link to="/contador">Contador</router-link></li>
<li><router-link to="/ListaDeTareas">Tareas</router-link></li>
</ul>
</div>

</template>

<scrypt setup>

</scrypt>

<style>
.sidebar{
    width: 200px;
    background-color: aquamarine;
    padding: 20px;
}

</style>