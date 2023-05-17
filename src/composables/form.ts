import { ref } from "vue";

const name = ref("");
const userEmail = ref("");
const phone = ref("");
const requestType = ref("");

export const useFormData = () => {
    return {
        name,
        userEmail,
        phone,
        requestType,
    };
};
