<template>
    <div class="container">
        <div class="header">
            <h2>
                <slot name="header"></slot>
            </h2>
            <button type="button" @click="$emit('cancel')">
                X
            </button>
        </div>
        <form class="form" @submit.prevent="onSubmit">
            <div class="form-fields">
                <div class="form-field">
                    <label for="firstName">First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firsName" 
                        v-model="firstName" required/>
                </div>

                <div class="form-field">
                    <label for="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        v-model="lastName" 
                        required/>
                </div>
            </div>

            <div class="form-footer">
                <button type="button" @click="$emit('cancel')">X Cancel</button>
                <button type="submit" :disabled="!isFormValid">&check; Submit</button>
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
.container {
    background-color: var(--container-background);
    border-radius: var(--border-radius);
    width: 30.8rem;
}

.header {
    display: flex;
    justify-content: space-between;
    padding: 1.0rem 3.2rem;
    border-bottom: 1px solid black;
}

.form {
    display: flex;
    flex-direction: column;
}

.form-fields {
    display: flex;
    flex-direction: column;
    gap: 1.0rem;
    padding: 3.2rem;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 0.2rem
}

.form-footer {
    display: flex;
    justify-content: center;
    padding: 1.0rem 3.2rem;
    gap: 0.5rem;
    border-top: 1px solid black;
}
</style>