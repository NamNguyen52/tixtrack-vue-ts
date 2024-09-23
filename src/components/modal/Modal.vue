<template>
    <div class="modal" v-if="modalName === activeModal" @click="onClickModalBackground">
        <div @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ModalNames } from './state/modal.models';
import useModalStore from './state/modal.store';

const { activeModal, setActiveModal } = useModalStore();

interface Props {
    modalName: ModalNames;
}

defineProps<Props>();

const onClickModalBackground = () => {
    setActiveModal(null)
}
</script>

<style scoped>
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(139, 137, 137, 0.7);
}
</style>