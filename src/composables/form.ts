import { ref } from "vue";

const name = ref("");
const userEmail = ref("");
const phone = ref("");
const requestType = ref("");
const loading = ref(false);

export const useFormData = () => {
    return {
        name,
        userEmail,
        phone,
        requestType,
        loading,
    };
};
