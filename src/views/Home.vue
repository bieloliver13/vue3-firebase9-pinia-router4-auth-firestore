<template>
    <div>
            <h1>HOME</h1>
            <p> {{userStore.userData.email}}</p>
    </div>
</template>

<script setup>
  

    import { onAuthStateChanged } from 'firebase/auth';
    import {auth} from '../firebaseConfig';
    import {useUserStore} from '../stores/user';

    onAuthStateChanged(auth, (user) =>{
        console.log(user);
    });

    const userStore = useUserStore();

</script>

