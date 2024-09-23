import { ref } from "vue";
import { ModalNames } from "./modal.models";

let activeModal = ref<ModalNames>(null);

export default function useModalStore() {

    const setActiveModal = (modalName: ModalNames) => {
        activeModal.value = modalName;
    }

    return {
        activeModal,
        setActiveModal
    }
}