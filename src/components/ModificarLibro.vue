<template>
    <div class="formulario-libro">
        <h2>Modificar Libro</h2>
        <form @submit.prevent="guardarLibro">
            <div>
                <label for="titulo">Título del libro:</label>
                <input type="text" id="titulo" v-model="titulo" required />
            </div>
            <div>
                <label for="autor">Autor:</label>
                <input type="text" id="autor" v-model="autor" required />
            </div>
            <div>
                <label for="editorial">Editorial:</label>
                <input type="text" id="editorial" v-model="editorial" required />
            </div>
            <div>
                <label for="genero">Género:</label>
                <input type="text" id="genero" v-model="genero" required />
            </div>
            <div>
                <label for="ubicacion">Ubicación en la biblioteca:</label>
                <input type="text" id="ubicacion" v-model="ubicacion" required />
            </div>
            <div>
                <label for="copias">Cantidad de copias disponibles:</label>
                <input type="number" id="copias" v-model="copias" required min="1" />
            </div>
            <button type="submit">Modificar Libro</button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const titulo = ref('');
const autor = ref('');
const editorial = ref('');
const genero = ref('');
const ubicacion = ref('');
const copias = ref(1);

const cargarLibro = () => {
    const libros = JSON.parse(localStorage.getItem('libros')) || [];
    const index = route.params.index;
    const libro = libros[index];

    if (libro) {
        titulo.value = libro.titulo;
        autor.value = libro.autor;
        editorial.value = libro.editorial;
        genero.value = libro.genero;
        ubicacion.value = libro.ubicacion;
        copias.value = libro.copias;
    }
};

const guardarLibro = () => {
    const libros = JSON.parse(localStorage.getItem('libros')) || [];
    const index = route.params.index;
    const libroModificado = {
        titulo: titulo.value,
        autor: autor.value,
        editorial: editorial.value,
        genero: genero.value,
        ubicacion: ubicacion.value,
        copias: copias.value,
    };

    libros[index] = libroModificado;
    localStorage.setItem('libros', JSON.stringify(libros));

    alert('Libro modificado exitosamente');
    router.push({ name: 'home' });
};

onMounted(() => {
    cargarLibro();
});
</script>

<style scoped>
.formulario-libro {
    max-width: 600px;
    margin: auto;
}

h2 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>