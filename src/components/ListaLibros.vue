<template>
    <div class="lista-libros">
        <h2>Lista de Libros</h2>
        <table v-if="libros.length">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Editorial</th>
                    <th>Género</th>
                    <th>Ubicación</th>
                    <th>Copias</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(libro, index) in libros" :key="index">
                    <td>{{ libro.titulo }}</td>
                    <td>{{ libro.autor }}</td>
                    <td>{{ libro.editorial }}</td>
                    <td>{{ libro.genero }}</td>
                    <td>{{ libro.ubicacion }}</td>
                    <td>{{ libro.copias }}</td>
                    <td>
                        <button @click="modificarLibro(index)">Modificar</button>
                        <button @click="eliminarLibro(index)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>No hay libros guardados.</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const libros = ref([]);

const cargarLibros = () => {
    const librosGuardados = JSON.parse(localStorage.getItem('libros')) || [];
    libros.value = librosGuardados;
};

const eliminarLibro = (index) => {
    if (confirm("¿Estás seguro de que deseas eliminar este libro?")) {
        libros.value.splice(index, 1);
        localStorage.setItem('libros', JSON.stringify(libros.value));
    }
};

const modificarLibro = (index) => {
    router.push({ name: 'modificar', params: { index } });
};

onMounted(() => {
    cargarLibros();
});
</script>

<style scoped>
.lista-libros {
    max-width: 800px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.lista-libros h2 {
    text-align: center;
}

.lista-libros table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.lista-libros th,
.lista-libros td {
    padding: 0.5rem;
    border: 1px solid #ccc;
    text-align: left;
}

.lista-libros th {
    background-color: #007bff;
    color: white;
}

.lista-libros button {
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 4px;
}
</style>