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
            },
            handleVerification(email: string, password: string): void {
                this.credentials = {
                    email,
                    password
                };
                currentFormName.value = 'verify-code';
            },
            credentials: {
                email: '',
                password: ''
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
            @verify-code="(email, password) => handleVerification(email, password)" @forgot-password="setCurrentFrom('forgot-password')"
            :email="credentials.email" :password="credentials.password"
        />
    </main>
</template>
