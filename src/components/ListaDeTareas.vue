<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTarea">X</button> 


                </li>
        </ul>
    </div>

</template>


<script setup>
import {ref} from 'vue';
const tareas = ref([])
const nuevaTarea = ref('valor por defecto');
const addTarea = () => {
    tareas.value.push(nuevaTarea.value)
    nuevaTarea.value = 'valor al actualizar';


}
const borrarTarea = (index) => {
    tareas.value.splice(index,1);
}

</script>

<style></style>