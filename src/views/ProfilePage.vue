<script setup lang="ts">

import ElevatedButton from '../components/ElevatedButton.vue';
import VH1 from '../components/VH1.vue';
import UserProfileSection from '../components/UserProfileSection.vue';
import handleSignout from '../composables/auth/handleSignout';
import UserProfileForm from '../components/UserProfileForm.vue';
import { Router, useRouter } from 'vue-router';

const router: Router = useRouter();
const onSignout = (): Promise<void> => handleSignout(router);

</script>


<template>
    <v-h1>Profile Page</v-h1>
    <div class="h-4"></div>
    <elevated-button @click="onSignout">Sign out</elevated-button>

    <suspense>
        <UserProfileSection />
    </suspense>

    <user-profile-form />
</template>