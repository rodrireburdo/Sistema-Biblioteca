<template>
    <div class="nav">
        <button class="Nuevo" @click="nuevoLibro">Añadir Libro</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const nuevoLibro = () => {
    router.push({ name: 'agregar' });
};
</script>

<style scoped>
.nav {
    padding: 5px 50px;
    background-color: #F89437;
    display: flex;
    justify-content: right;
}
button {
    background-color: #28BBDF;
    padding: 7px;
    border: none;
}
button:hover {
    background-color: #307DA5;
}
</style>