<script lang="ts">

import FormLogin from "../components/FormLogin.vue";
import FormSignup from "../components/FormSignup.vue";
import FormVerifyCode from "../components/FormVerifyCode.vue";
import FormForgotPassword from "../components/FormForgotPassword.vue";
import { computed, ref, Ref } from "vue";

const currentFormName: Ref<string> = ref('login');

export default {
    data() {
        return {

            currentForm: computed(() => {
                return 'form-' + currentFormName.value;
            }),
            setCurrentFrom: (name: string): void => {
                currentFormName.value = name;
            }
        }
    },
    components: {
        FormLogin,
        FormSignup,
        FormVerifyCode,
        FormForgotPassword
    }
}

</script>

<template>
    <main class="h-screen bg-gray-200 grid place-items-center">
        <component :is="currentForm" @login="setCurrentFrom('login')" @signup="setCurrentFrom('signup')"
            @verify-code="setCurrentFrom('verify-code')" @forgot-password="setCurrentFrom('forgot-password')" />
    </main>
</template>
