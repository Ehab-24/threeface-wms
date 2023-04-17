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
    <div class="flex justify-between">
        <v-h1>Profile Page</v-h1>
        <elevated-button @click="onSignout">Sign out</elevated-button>
    </div>

    <suspense>
        <UserProfileSection />
    </suspense>

    <div class="w-full flex justify-center">
        <user-profile-form />
    </div>
</template>