<template>
    <div>
        <h3>
            <slot name="header"></slot>
        </h3>
        <form class="form" @submit.prevent="onSubmit">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firsName" v-model="firstName" required/>

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" v-model="lastName" required/>

            <div>
                <button type="button">Cancel</button>
                <button type="submit" :disabled="!isFormValid">Submit</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

type FormPayload = {
    firstName: string;
    lastName: string;
}

interface Props {
    firstName?: string;
    lastName?: string;
}

interface Emits {
    (e: 'submit', value: FormPayload): void;
    (e: 'cancel'): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const firstName = ref(props.firstName)
const lastName = ref(props.lastName)

const isFormValid = computed(() => {
    return firstName.value && lastName.value
})

const onSubmit = () => {
    const formPayload: FormPayload = {
        firstName: firstName.value as string,
        lastName: lastName.value as string,
    };
    emit('submit', formPayload);
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

.form-buttons {
    
}
</style>