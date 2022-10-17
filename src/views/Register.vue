<template>
    <div>
            <h1>REGISTER</h1>
            <!-- <button @click="userStore.registerUser('Biel')">Ingresar</button> -->
            <form @submit.prevent="handleSubmit">
                <input type="email" placeholder="Ingrese email" v-model.trim="email"><!--trim sirve para eliminar primer y ultimo caracter por si hay espacios vacios-->
                <input type="password" placeholder="Ingrese Contraseña" v-model.trim="password">
                <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
            </form>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useUserStore} from '../stores/user';
import {useRouter} from 'vue-router';
// import {useUserStore} from '../stores/user';

const userStore = useUserStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const handleSubmit = async() => {
    if (!email.value || password.value.length < 6){
        return alert('llena los campos')
    }
   await userStore.registerUser(email.value, password.value)
   router.push('/')
}


</script>

